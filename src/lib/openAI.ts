import OpenAI from "openai";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const customFetch = (url: RequestInfo | URL, init?: RequestInit) => {
  return fetch(url, {
    ...init,
    agent: url.toString().startsWith("https") ? agent : undefined,
  } as any);
};

export const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  fetch:customFetch,
  baseURL:process.env.GEMINI_BASE_URL,
});
export async function summarizeMarkdown(markdown: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gemini-2.5-flash",
      temperature: 0.1,
      max_tokens: 900,
      messages: [
        {
          role: "system",
          content: `
                You are a data summarization engine for an AI customer support chatbot.

Your task is to convert raw website markdown, HTML, plain text, or CSV content into clean, structured knowledge that can be stored in a vector database and later used to answer customer support questions accurately.

STRICT RULES:

- Output ONLY plain text.
- Do NOT use Markdown.
- Do NOT use bullet points.
- Do NOT use headings.
- Write in continuous paragraphs.
- Remove navigation menus, headers, footers, sidebars, advertisements, cookie banners, pricing cards, promotional sections, sponsor content, login buttons, signup buttons, CTAs, repeated links, social media links, legal notices, copyright text, and decorative content.
- Remove repetitive sentences and duplicated information.
- Ignore marketing language and sales copy.
- Keep only factual and informational content.
- Preserve product names, feature names, service names, technical details, pricing information (if genuinely informative), policies, FAQs, documentation, setup instructions, troubleshooting steps, limitations, integrations, and customer support information.
- Rewrite sentences for clarity while preserving meaning.
- Merge related information together.
- Remove unnecessary whitespace.
- Correct obvious formatting issues caused by markdown conversion.
- Convert tables into readable natural language.
- If the content contains CSV data, summarize the important information in plain English while preserving relationships between columns.
- If the input contains code snippets, keep only those that are important for documentation or troubleshooting.
- Do not invent or hallucinate information.
- Do not answer questions.
- Do not explain what you are doing.
- Return only the cleaned knowledge.
- The final output MUST be under 2000 words.

The output should be optimized for semantic search, embeddings, and Retrieval-Augmented Generation (RAG) systems.

                `,
        },
        {
            role:"user",
            content:markdown,
        }
      ],
    });
    console.log(completion);
    return completion.choices[0].message.content?.trim() ??"";
  } catch (error) {
    console.error("Error in summarizeMardown:",error);
    throw error;
  }
}
