import { create } from "zustand";
import { v4 as uuid } from "uuid";

interface MessageContent {
  key: string;
  text: string;
  role: string;
}

interface ChatModel {
  message: MessageContent[];
  orderState: any;
  updateOrderState: (orderState: any) => void;
  addAssistantMessage: (message: string) => string;
  addUserMessage: (message: string) => string;
  clearMessage: () => void;
  updateActiveMessage: (message: string, key: string) => void;
}

export const useChatModel = create<ChatModel>((set) => {
  const addMessage = (message: MessageContent) => {
    set((state) => ({
      message: [...state.message, message],
    }));
  };

  return {
    message: [],
    orderState: {},
    updateOrderState(orderState) {
      set((state) => ({
        orderState: orderState || state.orderState || {},
      }));
    },
    addAssistantMessage(message) {
      const key = uuid();
      addMessage({ text: message, role: "assistant", key });
      return key;
    },
    addUserMessage(message) {
      const key = uuid();
      addMessage({ text: message, role: "user", key });
      return key;
    },
    clearMessage() {
      set({ message: [] });
    },
    updateActiveMessage(message, key) {
      set((state) => {
        for (const item of state.message) {
          if (item.key === key) {
            item.text = message;
            break;
          }
        }
        return {
          message: state.message,
        };
      });
    },
  };
});
