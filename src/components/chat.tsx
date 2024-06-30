import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useChatModel } from "../models/chat-models";
import { useEffect, useState } from "react";
import { main } from "../logic/groq-talk";
import { checkOrder } from "../state/order";
import "../color/chat.scss";
import Item from "../state/store-items.json";
import { ChooseOrderItem } from "../prompts/type/choose-order";

namespace GLOBAL_STATUS {
  export var SETUP = false;
}

interface ChatParameter {
  groqKey: string;
}

export default function Chat(params: ChatParameter) {
  const model = useChatModel();
  const [orderResult, setOrderResult] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);

  const callNext = (promptParameter: any) => {
    console.log(model.orderState);
    const nextIssueRecord = checkOrder(model.orderState);
    console.log(nextIssueRecord);
    if (nextIssueRecord === undefined) {
      setShowResult(true);
    } else if (nextIssueRecord !== undefined) {
      const prompt = nextIssueRecord.agent();
      const container = prompt.messageContainer;
      const loads = async () => {
        const editMessageKey = model.addAssistantMessage("");
        if (prompt.isWaitingForUserInput && promptParameter === undefined) {
          prompt.begin(container, true);
          container.abort();
          console.log("WAITING CALLED");
          for await (const message of container.display()) {
            model.updateActiveMessage(message.toString(), editMessageKey);
          }
          return false;
        } else {
          prompt.begin(container, false);
        }

        main(params.groqKey, prompt.toPrompt(promptParameter)).then((text) => {
          prompt.completed(
            text,
            container,
            model.orderState,
            model.updateOrderState
          );
        });
        for await (const message of container.display()) {
          model.updateActiveMessage(message.toString(), editMessageKey);
        }
        return true;
      };
      loads().then((isCompleted) => {
        if (isCompleted) {
          if (nextIssueRecord.removeKey !== undefined) {
            model.removeOrderStateKey(nextIssueRecord.removeKey);
          }
          callNext(undefined);
        }
      });
    }
  };

  useEffect(() => {
    if (GLOBAL_STATUS.SETUP === false) {
      GLOBAL_STATUS.SETUP = true;
      callNext(undefined);
    }
  }, []);

  const onSendMessage = (message: string) => {
    model.addUserMessage(message);
    callNext({
      message,
    });
  };

  useEffect(() => {
    if (model.orderState && model.orderState.order !== undefined) {
      let price = 0;
      console.log(model.orderState);
      const order = model.orderState.order
        .map((item: ChooseOrderItem) => `    ${item.name}(${item.counts}個)`)
        .join("<br />");
      [].reduce((prev, curr) => prev + curr, 0);
      model.orderState.order.forEach((curr: ChooseOrderItem) => {
        const purchased = Item.items.find((item) => item.name === curr.name);
        if (purchased !== undefined) {
          price = purchased.price * curr.counts + price;
        }
      });
      console.log(price);
      setOrderResult(
        `<div>カフェうさだ: お会計<br />---------------------<br />${order}<br />---------------------<br />料金合計: ${price}円</div>`
      );
    }
  }, [showResult]);

  return (
    <div style={{ position: "relative", height: "calc(100vh - 36px - 2px)" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {model.message.map((item, index) => (
              <Message
                key={index}
                model={{
                  direction: item.role === "user" ? "outgoing" : "incoming",
                  position: "normal",
                  message: item.text,
                  sentTime: "just now",
                }}
              >
                {/*<Avatar src="https://image.flaticon.com/icons/png/128/3135/3135715.png" /> */}
              </Message>
            ))}
            {showResult && (
              <Message
                key="message-html"
                model={{
                  direction: "incoming",
                  position: "normal",
                  message: "HTML",
                  sentTime: "just now",
                }}
              >
                <Message.HtmlContent html={orderResult} />
              </Message>
            )}
          </MessageList>
          <MessageInput
            placeholder={
              params.groqKey.length === 0
                ? "上の入力欄にGroqのAPIキーを入力してください"
                : "メッセージを入力します"
            }
            attachDisabled
            attachButton={false}
            sendDisabled={params.groqKey.length === 0 ? true : false}
            onSend={onSendMessage}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
