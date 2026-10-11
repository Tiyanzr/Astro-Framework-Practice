import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { Link } from "lucide-react";

const howWeHelp = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/home/howwehelp" }),
  schema: z.object({
    title: z.string(),
    buttonText: z.string(),
    buttonUrl: z.string().default("#"),
    videoEmbedUrl: z.string().url(),
  }),
});

const ourService = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/home/ourservice" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    order: z.number().default(0),
    url: z.string().default("#"),
  }),
});

const whatDifferent = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/home/whatdifferent" }),
  schema: ({ image }) => z.object({
    icon: image(),
    title: z.string(),
    description: z.string(),
    linkText : z.string(),
    LinkUrl: z.string().default("#"),
  }),
});

const vision = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/vision" }),
  schema: z.object({
    videoId: z.string(),
    videoTitle: z.string(),
    vision: z.string(),
    mission: z.string(),
    coreValuesIntro: z.string(),
    coreValues: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
      }),
    ),
    closing: z.string(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/service" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).default([]),
      canonicalUrl: z.string().url().optional(),
      featuredImage: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).default([]),
      canonicalUrl: z.string().url().optional(),
      featuredImage: image().optional(),
      draft: z.boolean().default(false),
      url : z.string().default("#"),
    }),
})


export const collections = { blog, howWeHelp, ourService, whatDifferent, vision, services };