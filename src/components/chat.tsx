import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useChatModel } from "../models/chat-models";
import { useEffect } from "react";
import { main } from "../logic/groq-talk";
import { checkOrder } from "../state/order";
import "../color/chat.scss";

namespace GLOBAL_STATUS {
  export var SETUP = false;
}

export default function Chat() {
  const model = useChatModel();

  const callNext = (promptParameter: any) => {
    console.log(model.orderState);
    const nextIssueRecord = checkOrder(model.orderState);
    console.log(nextIssueRecord);
    if (nextIssueRecord !== undefined) {
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

        main(prompt.toPrompt(promptParameter)).then((text) => {
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

  return (
    <div style={{ position: "relative", height: "calc(100vh - 2px)" }}>
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
          </MessageList>
          <MessageInput
            placeholder="メッセージを入力します"
            attachDisabled
            attachButton={false}
            onSend={onSendMessage}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
