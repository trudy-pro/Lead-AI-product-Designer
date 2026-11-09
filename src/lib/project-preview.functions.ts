import { createServerFn } from "@tanstack/react-start";
import { projects, type ProjectKey } from "./projects";

const cache = new Map<ProjectKey, string>();

export const getProjectPreview = createServerFn({ method: "POST" })
  .inputValidator((input: { key: string }) => {
    if (!(input.key in projects)) throw new Error("Unknown project");
    return { key: input.key as ProjectKey };
  })
  .handler(async ({ data }): Promise<{ text: string | null; error: string | null }> => {
    const cached = cache.get(data.key);
    if (cached) return { text: cached, error: null };
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) return { text: null, error: "Preview unavailable." };

    const { createOpenAI } = await import("@ai-sdk/openai");
    const { streamText } = await import("ai");
    const { createLovableAiGatewayRunIdFetch } = await import("./ai/run-id.server");
    const runId = createLovableAiGatewayRunIdFetch();
    const openai = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey,
      headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
      fetch: runId.fetch,
    });
    const project = projects[data.key];
    try {
      const result = streamText({
        model: openai.responses("openai/gpt-6-astra"),
        maxRetries: 0,
        system:
          "You write hover previews for a designer's portfolio. Interpret the project description and reply with ONE or TWO short sentences (max 35 words) telling a recruiter what the project was, the designer's role and why it matters. Plain text, no quotes, no markdown.",
        prompt: `Project: ${project.name}\nDescription: ${project.description}`,
        providerOptions: {
          openai: {
            forceReasoning: true,
            reasoningEffort: "low",
            reasoningSummary: "auto",
            store: false,
            include: ["reasoning.encrypted_content"],
          },
        },
      });
      const text = (await result.text).trim();
      if (!text) return { text: null, error: "Preview unavailable." };
      cache.set(data.key, text);
      return { text, error: null };
    } catch (e) {
      const status = (e as { statusCode?: number }).statusCode;
      console.error("project preview failed", status, e);
      if (status === 429) return { text: null, error: "Too many requests — try again shortly." };
      if (status === 402) return { text: null, error: "AI previews are paused (credits needed)." };
      return { text: null, error: "Preview unavailable." };
    }
  });
