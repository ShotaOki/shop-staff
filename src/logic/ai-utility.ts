import { AI } from "../types/ai";

export namespace AiUtility {
  export async function accessToAI() {
    //@ts-ignore
    const ai: AI = window.ai;
    if (ai === undefined || ai === null) {
      return undefined;
    }
    const canCreateTextSession = await ai.canCreateTextSession();
    console.log(canCreateTextSession);
    if (canCreateTextSession === "no") {
      console.log("Gemini nano は無効です");
      return undefined;
    }
    return ai;
  }
}
