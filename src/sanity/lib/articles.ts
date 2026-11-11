
import { sanityFetch } from "@/sanity/lib/live";
import { articleBySlugQuery } from "@/sanity/lib/queries";

export type SanityArticle = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  category?: string;
  author?: string;
  publishedAt?: string;
  coverImage?: {
    asset?: {
      _ref?: string;
    };
    alt?: string;
  };
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
};

export async function getPublishedArticle(slug: string) {
  const { data } = await sanityFetch({
    query: articleBySlugQuery,
    params: { slug },
  });

  return data as SanityArticle | null;
}
