const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

interface _IterationItem {
  char: string;
  seekTime: number;
}

interface _MessageItem {
  message: string;
  key: string;
}

interface _KeyItem {
  key: string;
  isArrived: boolean;
}

export class AsyncMessageContainer {
  private seekPoint: number;
  private displayKeyList: _KeyItem[] = [];
  private messageList: _MessageItem[] = [];

  constructor(message: string, waitingKeyList: string[]) {
    this.messageList = [
      {
        message: message,
        key: "_",
      },
    ];
    this.seekPoint = 0;
    this.displayKeyList = [
      { key: "_", isArrived: true },
      ...waitingKeyList.map((key) => ({ key, isArrived: false })),
    ];
  }

  message(key: string) {
    const item = this.messageList.filter((message) => message.key === key);
    if (item.length == 0) {
      return undefined;
    }
    return {
      message: item[0].message,
      key: item[0].key,
    } as _MessageItem;
  }

  appendMessage(message: _MessageItem) {
    this.messageList.push(message);
    let startPosition = 0;
    this.displayKeyList.forEach((item) => {
      if (item.isArrived) {
        const message = this.message(item.key);
        if (message !== undefined) {
          startPosition += message.message.length;
        }
      }
      if (item.key === message.key) {
        item.isArrived = true;
        this.seekPoint = Math.min(startPosition, this.seekPoint);
      }
    });
  }

  doNotShowPrefixMessage() {
    for (const message of this.messageList) {
      if (message.key === "_") {
        message.message = "";
      }
    }
  }

  abort() {
    for (const item of this.displayKeyList) {
      item.isArrived = true;
      this.messageList.push({
        message: "",
        key: item.key,
      });
    }
  }

  async *display() {
    let rendered = "";
    for (const char of this) {
      rendered += char.char;
      yield rendered;
      await sleep(char.seekTime);
    }
  }

  generateMessage(): string {
    let message = "";
    for (const item of this.displayKeyList) {
      const next = this.message(item.key);
      if (next !== undefined && item.isArrived) {
        message += next.message;
      } else {
        return message + "".padEnd(this.seekPoint - message.length + 1, ".");
      }
    }
    return message;
  }

  /**
   * イテレータが返す次の値
   * @returns
   */
  next() {
    const displayMessage = this.generateMessage();
    const iterationItem: _IterationItem = {
      seekTime: 50, // 待機時間を定義する
      char: "", // テキストデータを設定する
    };
    // テキストデータを参照する
    if (this.seekPoint < displayMessage.length) {
      iterationItem.char = displayMessage[this.seekPoint];
    }
    // シークポジションを次に進める
    this.seekPoint++;
    // 値を返す
    return {
      done: this.seekPoint > displayMessage.length ? true : false,
      value: iterationItem,
    };
  }

  [Symbol.iterator]() {
    return this;
  }
}
