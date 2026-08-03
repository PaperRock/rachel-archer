import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    hero: z
      .object({
        lead: z.string().optional(),
      })
      .optional(),
    cta: z
      .object({
        show: z.boolean().default(true),
        heading: z.string().optional(),
        sub: z.string().optional(),
      })
      .default({}),
  }),
});

export const collections = { pages };
