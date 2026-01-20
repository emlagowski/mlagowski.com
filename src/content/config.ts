import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        coverImage: z.string().optional(),
        coverTheme: z.enum(['light', 'dark']).default('dark'),
        images: z.array(z.string()).default([]),
        technologies: z.array(z.string()).default([]),
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        featured: z.boolean().default(false),
        date: z.coerce.date(),
    }),
});

const articles = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

export const collections = { projects, articles };
