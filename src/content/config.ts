import { z, defineCollection } from 'astro:content';

const artigosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.enum(['tecnologia', 'nutricao']), // <-- LINHA NOVA!
  }),
});

export const collections = {
  'artigos': artigosCollection,
};