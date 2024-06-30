import { ChooseOrderInput } from "../type/choose-order";
import { PromptBase } from "./base";
import { AsyncMessageContainer } from "../../logic/response-streamer";
import YES_OR_NO from "../text/yes-or-no.txt?raw";
import { YesOrNo } from "../type/yes-or-no";

namespace WaitingKey {
  export const FIRST_MESSAGE = "firstMessage";
  export const RESPONSE = "response";
}

interface Input {
  message: string;
  messagePrefix: string;
  applyKey: string;
  response: {
    yes: string;
    no: string;
  };
}

export class YesOrNoMessagePrompt extends PromptBase<ChooseOrderInput> {
  private firstMessage: string;
  private applyKey: string;
  private responseYes: string;
  private responseNo: string;

  constructor(message: Input) {
    super(
      // 会話フェーズの開始メッセージ、応答待ちキーを定義する
      new AsyncMessageContainer(message.messagePrefix, [
        WaitingKey.FIRST_MESSAGE,
        WaitingKey.RESPONSE,
      ])
    );
    // プロンプトを登録する
    this.promptBase = YES_OR_NO;
    this.isWaitForUserInput = true;
    this.firstMessage = message.message;
    this.applyKey = message.applyKey;
    this.responseYes = message.response.yes;
    this.responseNo = message.response.no;
  }

  begin(container: AsyncMessageContainer, shouldShowMessage: boolean) {
    if (shouldShowMessage) {
      container.doNotShowPrefixMessage();
    }
    container.appendMessage({
      message: shouldShowMessage ? this.firstMessage : "",
      key: WaitingKey.FIRST_MESSAGE,
    });
  }

  completed(
    text: string,
    container: AsyncMessageContainer,
    state: any,
    updateState: (value: any) => void
  ): void {
    const value = JSON.parse(text) as YesOrNo;
    state[this.applyKey] = value.result;
    updateState(state);
    if (value.result !== undefined) {
      container.appendMessage({
        message: value.result ? this.responseYes : this.responseNo,
        key: WaitingKey.RESPONSE,
      });
    } else {
      container.appendMessage({
        message: "どちらになさいますか？",
        key: WaitingKey.RESPONSE,
      });
    }
  }

  static fuctory() {
    //@ts-ignore
    const message = this as Input;
    return new YesOrNoMessagePrompt(message);
  }
}

export function createYesOrNoMessagePrompt(message: Input) {
  return YesOrNoMessagePrompt.fuctory.bind(message);
}
