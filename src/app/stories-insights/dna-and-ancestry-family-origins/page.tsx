
import type { Metadata } from "next";
import type { PortableTextBlock } from "@portabletext/types";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ArticleContent from "@/components/ArticleContent";
import { getPublishedArticle } from "@/sanity/lib/articles";

export const metadata: Metadata = {
  title: "DNA and Ancestry: Discover Family Origins | AfriGenetry Link",
  description:
    "Understand how DNA testing, genealogy, and historical research can work together to explore family origins.",
  alternates: {
    canonical: "/stories-insights/dna-and-ancestry-family-origins",
  },
};

type Block = {
  type: "heading" | "paragraph" | "bullet";
  text: string;
};

const title = "DNA and Ancestry: Discover Family Origins";

const description =
  "Understand how DNA testing, genealogy, and historical research can work together to explore family origins.";

const sourceUrl =
  "https://www.afrigenetrylink.org/post/dna-and-ancestry";

const blocks: Block[] = [
  {
    type: "paragraph",
    text: "Hidden within your DNA is a biological record passed from generation to generation, carrying clues about your family's origins, migration patterns, and ancestral connections.",
  },
  {
    type: "paragraph",
    text: "When combined with genealogy research, historical records, and oral traditions, DNA becomes a powerful tool for uncovering family history and reconnecting with your heritage.",
  },
  {
    type: "paragraph",
    text: "For many people of African descent, tracing family history can be particularly challenging because of historical events such as the transatlantic slave trade, colonial record gaps, forced migration, and incomplete documentation.",
  },
  {
    type: "paragraph",
    text: "Today, advances in DNA testing and genetic genealogy are helping individuals reconnect with their African roots and build a deeper understanding of their identity.",
  },
  {
    type: "heading",
    text: "What Is DNA and Ancestry?",
  },
  {
    type: "paragraph",
    text: "DNA (Deoxyribonucleic Acid) is the genetic material inherited from your parents. It contains the biological instructions that influence inherited traits and preserves evidence of your ancestral history across thousands of years.",
  },
  {
    type: "paragraph",
    text: "Genealogists and genetic scientists compare sections of DNA between individuals to identify shared ancestors, estimate ethnic origins, and discover living relatives.",
  },
  {
    type: "paragraph",
    text: "Together, DNA analysis and family history research provide a more complete picture of your ancestral journey.",
  },
  {
    type: "heading",
    text: "How DNA Helps Trace Your Ancestry",
  },
  {
    type: "paragraph",
    text: "DNA testing can reveal information about your family history that traditional records alone may not uncover.",
  },
  {
    type: "paragraph",
    text: "It can help you:",
  },
  {
    type: "bullet",
    text: "Discover ancestral regions",
  },
  {
    type: "bullet",
    text: "Identify genetic relatives",
  },
  {
    type: "bullet",
    text: "Reconstruct family trees",
  },
  {
    type: "bullet",
    text: "Understand migration routes",
  },
  {
    type: "bullet",
    text: "Explore ancient population movements",
  },
  {
    type: "bullet",
    text: "Verify family relationships",
  },
  {
    type: "bullet",
    text: "Support genealogical research",
  },
  {
    type: "heading",
    text: "Types of DNA Used in Ancestry Testing",
  },
  {
    type: "paragraph",
    text: "Understanding the different kinds of DNA tests can help you choose the right approach for your research.",
  },
  {
    type: "heading",
    text: "Autosomal DNA",
  },
  {
    type: "paragraph",
    text: "Autosomal DNA is inherited from both parents and provides information about relatives across recent generations.",
  },
  {
    type: "paragraph",
    text: "It is commonly used to:",
  },
  {
    type: "bullet",
    text: "Find cousins",
  },
  {
    type: "bullet",
    text: "Estimate ethnicity",
  },
  {
    type: "bullet",
    text: "Build family trees",
  },
  {
    type: "bullet",
    text: "Identify shared ancestors",
  },
  {
    type: "heading",
    text: "Y-DNA",
  },
  {
    type: "paragraph",
    text: "Y-DNA follows the direct paternal line and is inherited from father to son.",
  },
  {
    type: "paragraph",
    text: "It is useful for:",
  },
  {
    type: "bullet",
    text: "Surname studies",
  },
  {
    type: "bullet",
    text: "Paternal ancestry",
  },
  {
    type: "bullet",
    text: "Ancient paternal migrations",
  },
  {
    type: "bullet",
    text: "Haplogroup analysis",
  },
  {
    type: "heading",
    text: "Mitochondrial DNA (mtDNA)",
  },
  {
    type: "paragraph",
    text: "Mitochondrial DNA is inherited from your mother.",
  },
  {
    type: "paragraph",
    text: "It helps researchers investigate:",
  },
  {
    type: "bullet",
    text: "Maternal ancestry",
  },
  {
    type: "bullet",
    text: "Ancient maternal lineages",
  },
  {
    type: "bullet",
    text: "Human migration patterns",
  },
  {
    type: "bullet",
    text: "Maternal haplogroups",
  },
  {
    type: "heading",
    text: "How DNA Testing Works",
  },
  {
    type: "paragraph",
    text: "Modern ancestry testing follows several steps.",
  },
  {
    type: "bullet",
    text: "Collect a DNA sample.",
  },
  {
    type: "bullet",
    text: "Analyze genetic markers.",
  },
  {
    type: "bullet",
    text: "Compare your DNA with reference populations.",
  },
  {
    type: "bullet",
    text: "Identify matching relatives.",
  },
  {
    type: "bullet",
    text: "Estimate ancestral origins.",
  },
  {
    type: "bullet",
    text: "Generate ancestry reports.",
  },
  {
    type: "paragraph",
    text: "These results become more meaningful when combined with historical documents and family stories.",
  },
  {
    type: "heading",
    text: "Understanding African Ancestry Through DNA",
  },
  {
    type: "paragraph",
    text: "For individuals with African heritage, DNA testing offers opportunities to reconnect with ancestral communities and gain insights into regional origins.",
  },
  {
    type: "paragraph",
    text: "Because Africa has the world's greatest genetic diversity, ancestry testing may reveal connections across multiple regions and populations.",
  },
  {
    type: "paragraph",
    text: "Results can be influenced by the reference databases used by different testing providers, so interpreting them alongside genealogical evidence is important.",
  },
  {
    type: "heading",
    text: "The Role of Genealogy",
  },
  {
    type: "paragraph",
    text: "DNA does not replace genealogy. It complements it.",
  },
  {
    type: "paragraph",
    text: "Genealogical research involves:",
  },
  {
    type: "bullet",
    text: "Census records",
  },
  {
    type: "bullet",
    text: "Birth certificates",
  },
  {
    type: "bullet",
    text: "Marriage records",
  },
  {
    type: "bullet",
    text: "Church records",
  },
  {
    type: "bullet",
    text: "Immigration documents",
  },
  {
    type: "bullet",
    text: "Oral histories",
  },
  {
    type: "bullet",
    text: "Cemetery records",
  },
  {
    type: "bullet",
    text: "Historical archives",
  },
  {
    type: "paragraph",
    text: "Combining these sources with DNA results creates a richer understanding of family history.",
  },
  {
    type: "heading",
    text: "Building Your Family Tree",
  },
  {
    type: "paragraph",
    text: "Creating a family tree helps organize generations of information.",
  },
  {
    type: "paragraph",
    text: "Begin by:",
  },
  {
    type: "bullet",
    text: "Interviewing relatives",
  },
  {
    type: "bullet",
    text: "Collecting family photographs",
  },
  {
    type: "bullet",
    text: "Recording oral traditions",
  },
  {
    type: "bullet",
    text: "Gathering official documents",
  },
  {
    type: "bullet",
    text: "Adding DNA matches",
  },
  {
    type: "bullet",
    text: "Verifying historical records",
  },
  {
    type: "heading",
    text: "Common Challenges",
  },
  {
    type: "paragraph",
    text: "Tracing ancestry is rewarding but can present obstacles.",
  },
  {
    type: "paragraph",
    text: "Challenges include:",
  },
  {
    type: "bullet",
    text: "Missing historical records",
  },
  {
    type: "bullet",
    text: "Name changes",
  },
  {
    type: "bullet",
    text: "Adoption",
  },
  {
    type: "bullet",
    text: "Unknown parentage",
  },
  {
    type: "bullet",
    text: "Migration",
  },
  {
    type: "bullet",
    text: "Colonial documentation gaps",
  },
  {
    type: "bullet",
    text: "Incomplete African archives",
  },
  {
    type: "paragraph",
    text: "Careful research and multiple evidence sources can help overcome these issues.",
  },
  {
    type: "heading",
    text: "Benefits of DNA and Ancestry Research",
  },
  {
    type: "paragraph",
    text: "Understanding your ancestry can:",
  },
  {
    type: "bullet",
    text: "Strengthen family connections",
  },
  {
    type: "bullet",
    text: "Preserve cultural heritage",
  },
  {
    type: "bullet",
    text: "Support genealogical research",
  },
  {
    type: "bullet",
    text: "Improve knowledge of family medical history",
  },
  {
    type: "bullet",
    text: "Foster identity and belonging",
  },
  {
    type: "bullet",
    text: "Encourage lifelong learning about your heritage",
  },
  {
    type: "heading",
    text: "Frequently Asked Questions",
  },
  {
    type: "heading",
    text: "Can DNA testing tell me exactly where my ancestors came from?",
  },
  {
    type: "paragraph",
    text: "DNA testing provides estimates based on reference populations and can identify likely ancestral regions.",
  },
  {
    type: "paragraph",
    text: "Combining DNA with historical records and family history generally leads to more reliable conclusions.",
  },
  {
    type: "heading",
    text: "Is DNA testing enough to build my family tree?",
  },
  {
    type: "paragraph",
    text: "DNA testing is most effective when used alongside genealogy research, historical documents, and oral histories.",
  },
  {
    type: "heading",
    text: "Why is African ancestry research challenging?",
  },
  {
    type: "paragraph",
    text: "Historical events, incomplete records, and forced migrations have created gaps in documentation.",
  },
  {
    type: "paragraph",
    text: "DNA analysis can help fill some of these gaps, but it works best in combination with traditional genealogical methods.",
  },
  {
    type: "heading",
    text: "How accurate are ancestry DNA tests?",
  },
  {
    type: "paragraph",
    text: "Accuracy depends on the quality of the laboratory analysis, the size and diversity of the provider's reference database, and how results are interpreted.",
  },
  {
    type: "paragraph",
    text: "Ethnicity estimates may change as databases grow.",
  },
  {
    type: "heading",
    text: "Conclusion",
  },
  {
    type: "paragraph",
    text: "DNA and ancestry research offer powerful ways to explore family origins, reconnect with heritage, and preserve family stories for future generations.",
  },
  {
    type: "paragraph",
    text: "While DNA provides valuable genetic evidence, the most complete picture of your ancestry comes from combining genetic testing with genealogy, historical records, and oral traditions.",
  },
  {
    type: "paragraph",
    text: "Together, these approaches can help you uncover the remarkable journey of your ancestors and better understand your place within that story.",
  },
  {
    type: "heading",
    text: "References",
  },
  {
    type: "paragraph",
    text: "National Human Genome Research Institute. Learning About DNA. https://www.genome.gov",
  },
  {
    type: "paragraph",
    text: "National Library of Medicine. MedlinePlus Genetics. https://medlineplus.gov/genetics/",
  },
  {
    type: "paragraph",
    text: "ISOGG. Genetic Genealogy Wiki. https://isogg.org",
  },
  {
    type: "paragraph",
    text: "Human Heredity and Health in Africa (H3Africa). https://h3africa.org",
  },
  {
    type: "paragraph",
    text: "UNESCO. General History of Africa. https://www.unesco.org",
  },
];

export default async function ArticlePage() {
  let sanityArticle = null;

  try {
    sanityArticle = await getPublishedArticle(
      "dna-and-ancestry-family-origins"
    );
  } catch (error) {
    console.error("Sanity article fetch failed:", error);
  }

  const article = sanityArticle?.body?.length
    ? {
        title: sanityArticle.title,
        description: sanityArticle.excerpt,
        body: sanityArticle.body as PortableTextBlock[],
        coverImage: sanityArticle.coverImage,
      }
    : {
        title,
        description,
        sourceUrl,
        blocks,
      };

  return (
    <>
      <SiteHeader />

      <main>
        <ArticleContent article={article} />
      </main>

      <SiteFooter />
    </>
  );
}
