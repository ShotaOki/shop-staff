import Groq from "groq-sdk";

export async function main(groqKey: string, prompt: string) {
  if (prompt.length == 0) {
    return "";
  }
  const chatCompletion = await getGroqChatCompletion(groqKey, prompt);
  // Print the completion returned by the LLM.
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(groqKey: string, prompt: string) {
  const groq = new Groq({
    apiKey: groqKey,
    dangerouslyAllowBrowser: true,
  });
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
      {
        role: "assistant",
        content: "{",
      },
    ],
    model: "llama3-8b-8192",
  });
}
