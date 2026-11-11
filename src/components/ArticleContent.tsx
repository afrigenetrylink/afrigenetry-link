
import Image from "next/image";
import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/sanity/lib/image";

type Block = {
  type: "heading" | "paragraph" | "bullet";
  text: string;
};

type Article = {
  title: string;
  description: string;
  sourceUrl?: string;
  blocks?: Block[];
  body?: PortableTextBlock[];
  coverImage?: {
    asset?: {
      _ref?: string;
    };
    alt?: string;
  };
};

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote>{children}</blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "";
      const isExternal =
        href.startsWith("https://") ||
        href.startsWith("http://");

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;

      const imageUrl = urlFor(value).width(1200).url();

      return (
        <figure className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 800px"
            className="h-auto w-full rounded-xl object-cover"
          />
        </figure>
      );
    },
  },
};

export default function ArticleContent({
  article,
}: {
  article: Article;
}) {
  const hasSanityContent = Boolean(article.body?.length);

  return (
    <main className="article-page">
      <section className="page-hero">
        <div className="page-container">
          <p className="eyebrow">STORIES &amp; INSIGHTS</p>
          <h1>{article.title}</h1>
          <p className="hero-description">
            {article.description}
          </p>
        </div>
      </section>

      <article
        className="page-container article-content"
        aria-label={article.title}
      >
        {article.coverImage?.asset?._ref && (
          <Image
            src={urlFor(article.coverImage).width(1600).url()}
            alt={article.coverImage.alt || article.title}
            width={1600}
            height={900}
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="mb-8 h-auto w-full rounded-xl object-cover"
          />
        )}

        {hasSanityContent ? (
          <PortableText
            value={article.body!}
            components={portableTextComponents}
          />
        ) : (
          <>
            {article.blocks?.map((block, index) => {
              if (block.type === "heading") {
                return <h2 key={index}>{block.text}</h2>;
              }

              if (block.type === "bullet") {
                return (
                  <ul key={index}>
                    <li>{block.text}</li>
                  </ul>
                );
              }

              return <p key={index}>{block.text}</p>;
            })}
          </>
        )}

        <p className="article-disclaimer">
          Educational information only. This content is not a
          medical diagnosis or a substitute for advice from a
          qualified healthcare professional.
        </p>
      </article>
    </main>
  );
}
