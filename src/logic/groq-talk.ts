import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_APP_GROQ_KEY,
  dangerouslyAllowBrowser: true,
});

export async function main(prompt: string) {
  if (prompt.length == 0) {
    return "";
  }
  const chatCompletion = await getGroqChatCompletion(prompt);
  // Print the completion returned by the LLM.
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(prompt: string) {
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
