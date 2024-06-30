import { ChooseOrder, ChooseOrderInput } from "../type/choose-order";
import { PromptBase } from "./base";
import CHOOSE_ORDER from "../text/choose-order.txt?raw";
import { AsyncMessageContainer } from "../../logic/response-streamer";
import Items from "../../state/store-items.json";

namespace WaitingKey {
  export const FIRST_MESSAGE = "firstMessage";
  export const ORDER = "order";
  export const CONFIRM = "confirm";
}

export class ChooseOrderPrompt extends PromptBase<ChooseOrderInput> {
  constructor() {
    super(
      // 会話フェーズの開始メッセージ、応答待ちキーを定義する
      new AsyncMessageContainer(
        "ご注文を繰り返させていただきます。ご注文は、",
        [WaitingKey.FIRST_MESSAGE, WaitingKey.ORDER, WaitingKey.CONFIRM]
      )
    );
    // プロンプトを登録する
    this.promptBase = CHOOSE_ORDER;
    this.isWaitForUserInput = true;
  }

  begin(container: AsyncMessageContainer, shouldShowMessage: boolean) {
    if (shouldShowMessage) {
      container.doNotShowPrefixMessage();
    }
    container.appendMessage({
      message: shouldShowMessage ? "ご注文をどうぞ" : "",
      key: WaitingKey.FIRST_MESSAGE,
    });
  }

  completed(
    text: string,
    container: AsyncMessageContainer,
    state: any,
    updateState: (value: any) => void
  ) {
    const value = JSON.parse(text) as ChooseOrder;
    let needsToAsk = false;
    let price = 0;
    container.appendMessage({
      message: value.order
        .map((item) => `${item.name}を${item.counts}つ`)
        .join("、"),
      key: WaitingKey.ORDER,
    });
    for (const order of value.order) {
      if (!Items.items.map((item) => item.name).includes(order.name)) {
        needsToAsk = true;
      }
      const item = Items.items.find((item) => item.name === order.name);
      if (item !== undefined) {
        price += item.price * order.counts;
      }
    }
    if (state.order === undefined) {
      state.order = value.order;
      updateState(state);
    } else {
      state.order = [...state.order, ...value.order];
      updateState(state);
    }
    if (needsToAsk) {
      container.appendMessage({
        message: "……？",
        key: WaitingKey.CONFIRM,
      });
    } else {
      container.appendMessage({
        message: "、こちら承りました。" + `料金は${price}円でございます。`,
        key: WaitingKey.CONFIRM,
      });
    }
  }

  static fuctory() {
    return new ChooseOrderPrompt();
  }
}
