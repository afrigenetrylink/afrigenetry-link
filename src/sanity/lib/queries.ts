
import { defineQuery } from "next-sanity";

export const articleBySlugQuery = defineQuery(`
  *[
    _type == "article" &&
    slug.current == $slug &&
    !(_id in path("drafts.**"))
  ][0] {
    _id,
    title,
    slug,
    excerpt,
    category,
    author,
    publishedAt,
    coverImage {
      ...,
      alt
    },
    body,
    seoTitle,
    seoDescription
  }
`);
