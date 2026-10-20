type Block = { type: "heading" | "paragraph" | "bullet"; text: string };
type Article = { title: string; description: string; sourceUrl: string; blocks: Block[] };

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <main className="article-page">
      <section className="page-hero">
        <div className="page-container">
          <p className="eyebrow">STORIES &amp; INSIGHTS</p>
          <h1>{article.title}</h1>
          <p className="hero-description">{article.description}</p>
        </div>
      </section>
      <article className="page-container article-content" aria-label={article.title}>
        <p className="article-source-note">Migrated from AfriGenetry Link’s original article archive. The article text below follows the extracted source, with Wix navigation and related post widgets removed.</p>
        {article.blocks.map((block, index) => {
          if (block.type === "heading") return <h2 key={index}>{block.text}</h2>;
          if (block.type === "bullet") return <ul key={index}><li>{block.text}</li></ul>;
          return <p key={index}>{block.text}</p>;
        })}
        <p className="article-disclaimer">Educational information only. This content is not a medical diagnosis or a substitute for advice from a qualified healthcare professional.</p>
      </article>
    </main>
  );
}
