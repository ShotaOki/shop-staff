import { ChooseOrderInput } from "../type/choose-order";
import { PromptBase } from "./base";
import { AsyncMessageContainer } from "../../logic/response-streamer";

export class CommonMessagePrompt extends PromptBase<ChooseOrderInput> {
  constructor(message: string) {
    super(
      // 会話フェーズの開始メッセージ、応答待ちキーを定義する
      new AsyncMessageContainer(message, [])
    );
  }

  completed(
    _text: string,
    _container: AsyncMessageContainer,
    state: any,
    updateState: (value: any) => void
  ): void {
    state.welcome = true;
    updateState(state);
  }

  static fuctory() {
    //@ts-ignore
    const message = this as string;
    return new CommonMessagePrompt(message);
  }
}

export function createCommonMessage(message: string) {
  return CommonMessagePrompt.fuctory.bind(message);
}
