import { ChooseOrderInput } from "../type/choose-order";
import { PromptBase } from "./base";
import { AsyncMessageContainer } from "../../logic/response-streamer";

export class WelcomeMessagePrompt extends PromptBase<ChooseOrderInput> {
  constructor() {
    super(
      // 会話フェーズの開始メッセージ、応答待ちキーを定義する
      new AsyncMessageContainer("いらっしゃいませ、ようこそ", [])
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
    return new WelcomeMessagePrompt();
  }
}
