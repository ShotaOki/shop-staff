import { AsyncMessageContainer } from "../../logic/response-streamer";

export class PromptBase<S> {
  protected promptBase: string = "";
  protected isWaitForUserInput: boolean = false;
  private container: AsyncMessageContainer;
  constructor(
    container: AsyncMessageContainer = new AsyncMessageContainer("", [])
  ) {
    this.promptBase = "";
    this.container = container;
    this.isWaitForUserInput = false;
  }

  toPrompt(data: S): string {
    //@ts-ignore
    const iterableData = data as { [key: string]: string };
    let result = this.promptBase;
    for (const key in data) {
      result = result.replace("${" + key + "}", iterableData[key]);
    }
    return result;
  }

  begin(container: AsyncMessageContainer, shouldShowMessage: boolean) {
    if (shouldShowMessage) {
      container.doNotShowPrefixMessage();
    }
  }

  //@ts-ignore
  completed(
    _text: string,
    _container: AsyncMessageContainer,
    _state: any,
    _updateState: (value: any) => void
  ) {}

  get messageContainer() {
    return this.container;
  }

  get isWaitingForUserInput() {
    return this.isWaitForUserInput;
  }

  static fuctory(): PromptBase<any> {
    return new this() as PromptBase<any>;
  }
}
