import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


export const metadata: Metadata = {
  title: 'How DNA Testing Reveals African Origins',
  description: 'Understand how DNA testing, reference populations, and genetic markers can offer clues about African ancestry, alongside family history and cultural knowledge.',
  alternates: { canonical: '/stories-insights/how-dna-testing-reveals-african-origins' },
  openGraph: {
    type: "article",
    title: 'How DNA Testing Reveals African Origins',
    description: 'Understand how DNA testing, reference populations, and genetic markers can offer clues about African ancestry, alongside family history and cultural knowledge.',
    url: '/stories-insights/how-dna-testing-reveals-african-origins',
    siteName: "AfriGenetry Link",
  },
  twitter: {
    card: "summary_large_image",
    title: 'How DNA Testing Reveals African Origins',
    description: 'Understand how DNA testing, reference populations, and genetic markers can offer clues about African ancestry, alongside family history and cultural knowledge.',
  },
};

type ArticleBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

const articleBlocks: ArticleBlock[] = [
  {
    "type": "paragraph",
    "text": "Unlike traditional genealogy, which relies on written records, DNA testing uses biological data passed down through generations. Every person carries a unique combination of genetic markers inherited from their parents, grandparents, and distant ancestors. By examining these markers, scientists can reconstruct patterns of ancestry that reflect thousands of years of human migration and population history."
  },
  {
    "type": "paragraph",
    "text": "It is important to understand that DNA testing does not “pinpoint” exact ethnic groups or tribes with absolute certainty. Instead, it provides probability-based estimates that improve as more African populations are included in genetic databases."
  },
  {
    "type": "heading",
    "text": "In this article, you will learn:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "How DNA testing works at a scientific level",
      "How African ancestry is estimated",
      "What reference populations are",
      "Why African genetic diversity matters",
      "Why results differ between companies",
      "The limitations of ancestry DNA testing"
    ]
  },
  {
    "type": "paragraph",
    "text": "This foundation will help you interpret DNA results more accurately and understand what modern genetics can—and cannot—reveal about your African heritage."
  },
  {
    "type": "heading",
    "text": "What Does It Mean to Identify African Origins Through DNA?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "When a DNA test reports African ancestry, it is not directly identifying a specific tribe or historical kingdom. Instead, it is detecting patterns in your DNA that are statistically similar to modern populations in Africa."
  },
  {
    "type": "paragraph",
    "text": "These similarities are identified through comparison with reference populations"
  },
  {
    "type": "paragraph",
    "text": ", which are groups of individuals whose families have lived in specific regions for many generations."
  },
  {
    "type": "heading",
    "text": "For example, your DNA may show similarity to populations associated with:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "West Africa",
      "Central Africa",
      "East Africa",
      "Southern Africa",
      "North Africa"
    ]
  },
  {
    "type": "paragraph",
    "text": "These regional estimates are based on shared genetic markers, not cultural identity or nationality."
  },
  {
    "type": "heading",
    "text": "How DNA Is Collected and Analyzed",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "The process of DNA testing begins with a simple saliva sample or cheek swab. Once the sample is collected, it is processed in a laboratory where DNA is extracted and analyzed."
  },
  {
    "type": "paragraph",
    "text": "Scientists focus on specific points in your DNA called single nucleotide polymorphisms (SNPs)"
  },
  {
    "type": "paragraph",
    "text": ". These are small variations in your genetic code that differ between individuals and populations."
  },
  {
    "type": "heading",
    "text": "The laboratory then:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Extracts DNA from the sample",
      "Reads hundreds of thousands of SNP markers",
      "Converts the data into a digital genetic profile",
      "Compares the profile to reference databases",
      "Uses statistical models to estimate ancestry"
    ]
  },
  {
    "type": "paragraph",
    "text": "This process allows companies to identify patterns that link your DNA to specific regions of the world, including Africa."
  },
  {
    "type": "heading",
    "text": "What Are Genetic Markers?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Genetic markers are variations in DNA that help distinguish between individuals and populations. These markers do not determine traits like personality or culture. Instead, they are used as biological signals that reflect ancestral inheritance."
  },
  {
    "type": "heading",
    "text": "Over many generations, populations accumulate unique combinations of these markers due to:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Geographic separation",
      "Migration patterns",
      "Natural selection",
      "Genetic drift",
      "Historical population mixing"
    ]
  },
  {
    "type": "paragraph",
    "text": "These patterns allow scientists to identify broad ancestral connections."
  },
  {
    "type": "heading",
    "text": "Understanding African Genetic Diversity",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Africa contains the greatest genetic diversity of any continent on Earth. This is because modern humans originated in Africa and lived there for the longest period before migrating globally."
  },
  {
    "type": "heading",
    "text": "As a result:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "African populations are highly genetically diverse",
      "Neighboring populations may still share deep ancestral links",
      "Genetic differences can exist even between nearby communities",
      "There is no single “African DNA profile”"
    ]
  },
  {
    "type": "paragraph",
    "text": "This diversity is one of the reasons African ancestry testing is both powerful and complex."
  },
  {
    "type": "heading",
    "text": "What Is the Best Black Ancestry DNA Kit?",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "Because African populations are so diverse, ancestry testing requires large and representative reference databases to produce accurate results."
  },
  {
    "type": "paragraph",
    "text": "If certain populations are underrepresented, the test may only provide broad regional estimates rather than detailed ethnic or community-level results."
  },
  {
    "type": "paragraph",
    "text": "This is why African ancestry reports often change over time as databases improve and new populations are added."
  },
  {
    "type": "heading",
    "text": "What Are Reference Populations?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "To understand how DNA testing identifies African origins, you first need to understand reference populations."
  },
  {
    "type": "paragraph",
    "text": "Reference populations are groups of people whose ancestors have lived in a specific geographic region for many generations. Scientists use their DNA as a comparison base when analyzing your genetic data."
  },
  {
    "type": "paragraph",
    "text": "When your DNA is tested, it is not directly matched to a historical ancestor. Instead, it is compared statistically to these modern reference groups."
  },
  {
    "type": "paragraph",
    "text": "For example, if parts of your DNA are most similar to a reference population from West Africa, your results may show West African ancestry."
  },
  {
    "type": "heading",
    "text": "Typical African regional groupings include:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "West African populations",
      "Central African populations",
      "East African populations",
      "Southern African populations",
      "North African populations"
    ]
  },
  {
    "type": "paragraph",
    "text": "These categories are broad because Africa contains thousands of distinct ethnic groups and deep genetic diversity."
  },
  {
    "type": "heading",
    "text": "Why Reference Populations Are So Important",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "The accuracy of any ancestry DNA test depends heavily on the quality of its reference database."
  },
  {
    "type": "heading",
    "text": "If a company has:",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "More African samples → more precise results"
  },
  {
    "type": "paragraph",
    "text": "Fewer African samples → broader or less specific results"
  },
  {
    "type": "paragraph",
    "text": "This is one of the biggest challenges in African ancestry testing today."
  },
  {
    "type": "paragraph",
    "text": "Historically, African populations were underrepresented in genetic research. This means some regions of Africa may not yet be fully captured in commercial DNA databases."
  },
  {
    "type": "heading",
    "text": "As a result:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Your DNA may match a broad region instead of a specific ethnic group",
      "Your results may change as databases improve",
      "Different companies may show different African regions"
    ]
  },
  {
    "type": "heading",
    "text": "Why African Ancestry Results Can Change Over Time",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "DNA testing companies regularly update their algorithms and reference datasets."
  },
  {
    "type": "paragraph",
    "text": "When updates happen, your ancestry percentages may shift. This does not mean your DNA has changed—it means the scientific model has improved."
  },
  {
    "type": "heading",
    "text": "Updates may include:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "New African population samples",
      "Improved statistical modeling",
      "Better regional classification systems",
      "Refined migration mapping"
    ]
  },
  {
    "type": "paragraph",
    "text": "This is especially important for African ancestry because ongoing research continues to improve representation of African genetic diversity."
  },
  {
    "type": "heading",
    "text": "Why Different DNA Companies Show Different Results",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "One of the most confusing aspects of DNA testing is that different companies often produce different ancestry breakdowns from the same sample."
  },
  {
    "type": "heading",
    "text": "This happens because each company uses:",
    "level": 3
  },
  {
    "type": "heading",
    "text": "1. Different reference databases",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "Each company collects and categorizes African populations differently."
  },
  {
    "type": "heading",
    "text": "2. Different algorithms",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "Each company uses its own statistical model to interpret DNA similarities."
  },
  {
    "type": "heading",
    "text": "3. Different regional definitions",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "One company may group regions broadly, while another divides them more precisely."
  },
  {
    "type": "heading",
    "text": "4. Different update cycles",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "Some companies update their models more frequently than others."
  },
  {
    "type": "paragraph",
    "text": "Because of this, ancestry results should be seen as estimates, not absolute truth."
  },
  {
    "type": "heading",
    "text": "How Population Genetics Explains African Origins",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Population genetics is the scientific study of how genetic variation is distributed across groups of people over time."
  },
  {
    "type": "heading",
    "text": "It helps explain:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "How humans migrated out of Africa",
      "How populations adapted to environments",
      "Why genetic differences exist between regions",
      "How ancestry patterns develop over thousands of years"
    ]
  },
  {
    "type": "paragraph",
    "text": "In African ancestry testing, population genetics provides the foundation for understanding how DNA similarities reflect historical movement and shared ancestry."
  },
  {
    "type": "heading",
    "text": "Why African DNA Testing Is Scientifically Complex",
    "level": 2
  },
  {
    "type": "heading",
    "text": "African ancestry is more complex than many other regions because:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Africa is the origin of modern humans",
      "It contains the highest genetic diversity on Earth",
      "Populations have migrated and mixed for thousands of years",
      "Many ethnic groups share overlapping genetic history",
      "Historical records are often incomplete or unavailable"
    ]
  },
  {
    "type": "paragraph",
    "text": "This means DNA testing must rely on probability models rather than exact matches."
  },
  {
    "type": "heading",
    "text": "Can DNA Testing Identify Specific African Ethnic Groups?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "This is one of the most common questions."
  },
  {
    "type": "heading",
    "text": "The answer is:",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "DNA testing can suggest regional ancestry, but it cannot definitively identify a specific ethnic group."
  },
  {
    "type": "heading",
    "text": "This is because:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Ethnic identity is cultural, not just genetic",
      "Many African populations are genetically related across regions",
      "Borders and identities have changed over time",
      "Genetic similarity does not equal cultural membership"
    ]
  },
  {
    "type": "paragraph",
    "text": "DNA is best used to understand regional origins and ancestral connections, not strict ethnic classification."
  },
  {
    "type": "heading",
    "text": "How DNA Is Converted Into Ancestry Percentages",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "When you receive your DNA results, the percentages you see (for example: 65% West African, 20% European, 10% Central African) are not direct measurements. They are statistical estimates"
  },
  {
    "type": "paragraph",
    "text": "created through a comparison process."
  },
  {
    "type": "heading",
    "text": "Here is how it works step by step:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Your DNA is broken into millions of small segments",
      "Each segment is compared to reference populations",
      "The system calculates which populations your DNA most closely resembles",
      "Each segment is assigned a probability score",
      "These probabilities are combined into percentage estimates"
    ]
  },
  {
    "type": "paragraph",
    "text": "So when you see “West African ancestry,” it means that a portion of your DNA segments are statistically most similar to populations in that region—not that your ancestors were from a specific modern ethnic group."
  },
  {
    "type": "heading",
    "text": "Why African Ancestry Percentages Are Broader",
    "level": 2
  },
  {
    "type": "heading",
    "text": "African ancestry results are often shown in broader categories like:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "West Africa",
      "East Africa",
      "Central Africa",
      "Southern Africa",
      "North Africa"
    ]
  },
  {
    "type": "heading",
    "text": "This is because:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Africa has extremely high genetic diversity",
      "Many populations are closely related",
      "Some regions are still underrepresented in DNA databases",
      "Historical migration created overlapping genetic patterns"
    ]
  },
  {
    "type": "paragraph",
    "text": "As African reference datasets improve, these categories may become more detailed over time."
  },
  {
    "type": "heading",
    "text": "What Are Haplogroups?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Haplogroups are one of the most important tools in understanding deep ancestry."
  },
  {
    "type": "paragraph",
    "text": "They represent ancient branches of the human family tree."
  },
  {
    "type": "heading",
    "text": "There are two main types:",
    "level": 3
  },
  {
    "type": "heading",
    "text": "1. Maternal Haplogroups (mtDNA)",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "DNA copies once before meiosis while chromatin stays uncondensed."
  },
  {
    "type": "paragraph",
    "text": "Mitochondrial DNA (mtDNA) is passed from mother to child. It traces your direct maternal line"
  },
  {
    "type": "heading",
    "text": ", meaning:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Your mother",
      "Your mother’s mother",
      "Her mother, and so on"
    ]
  },
  {
    "type": "paragraph",
    "text": "Maternal haplogroups help researchers trace ancient human migration patterns across Africa and beyond."
  },
  {
    "type": "heading",
    "text": "2. Paternal Haplogroups (Y-DNA)",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "Y-DNA is passed from father to son and traces the direct paternal line."
  },
  {
    "type": "heading",
    "text": "It is useful for understanding:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Ancient male migration routes",
      "Deep paternal ancestry",
      "Historical population movements"
    ]
  },
  {
    "type": "paragraph",
    "text": "Only biological males carry Y-DNA, but females can study it through male relatives."
  },
  {
    "type": "heading",
    "text": "Why Haplogroups Are Different From Ethnicity Percentages",
    "level": 2
  },
  {
    "type": "heading",
    "text": "It is important to understand the difference:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Ethnicity percentages",
      "= recent ancestry (last few hundred years)",
      "Haplogroups",
      "= ancient ancestry (thousands of years)"
    ]
  },
  {
    "type": "paragraph",
    "text": "A person can have West African ethnicity percentages but belong to a haplogroup that originated tens of thousands of years ago in Africa or elsewhere."
  },
  {
    "type": "paragraph",
    "text": "Both provide different layers of ancestry information."
  },
  {
    "type": "heading",
    "text": "Why Siblings Get Different DNA Results",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Even full siblings do not inherit identical DNA from their parents."
  },
  {
    "type": "paragraph",
    "text": "Each child receives a unique combination of genetic material."
  },
  {
    "type": "heading",
    "text": "This means:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "One sibling may show more West African ancestry",
      "Another may show more European or Central African ancestry",
      "Both results are correct"
    ]
  },
  {
    "type": "paragraph",
    "text": "This variation is completely normal and reflects the randomness of genetic inheritance."
  },
  {
    "type": "heading",
    "text": "How to Interpret African Ancestry Percentages Correctly",
    "level": 2
  },
  {
    "type": "heading",
    "text": "To avoid misunderstanding your results, remember:",
    "level": 3
  },
  {
    "type": "heading",
    "text": "1. Percentages are estimates",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "They are not exact measurements of identity."
  },
  {
    "type": "heading",
    "text": "2. They reflect shared DNA patterns",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "Not direct identification of ancestors."
  },
  {
    "type": "heading",
    "text": "3. They change over time",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "As databases improve, results may be updated."
  },
  {
    "type": "heading",
    "text": "4. They are more accurate at regional level",
    "level": 3
  },
  {
    "type": "paragraph",
    "text": "Broad regions (West Africa, East Africa) are more reliable than specific ethnic groups."
  },
  {
    "type": "heading",
    "text": "What DNA Matches Really Mean",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "DNA testing companies also show “DNA matches”—people who share segments of DNA with you."
  },
  {
    "type": "heading",
    "text": "These matches may include:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Close relatives (siblings, cousins)",
      "Distant relatives",
      "Unknown family branches"
    ]
  },
  {
    "type": "heading",
    "text": "DNA matches are extremely useful for:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Building family trees",
      "Confirming genealogical connections",
      "Finding relatives across continents",
      "Reconnecting families separated by migration or history"
    ]
  },
  {
    "type": "paragraph",
    "text": "However, matching someone does not automatically mean you share a known family name or documented lineage—it indicates shared ancestry somewhere in your family tree."
  },
  {
    "type": "heading",
    "text": "Why African DNA Interpretation Requires Context",
    "level": 2
  },
  {
    "type": "heading",
    "text": "African ancestry is scientifically complex because:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Human origins are rooted in Africa",
      "Populations have migrated for tens of thousands of years",
      "Ethnic identity is cultural, not only genetic",
      "Historical records are often incomplete"
    ]
  },
  {
    "type": "heading",
    "text": "Because of this, DNA results should always be interpreted alongside:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Oral family history",
      "Historical migration patterns",
      "Cultural identity",
      "Genealogical records"
    ]
  },
  {
    "type": "heading",
    "text": "Frequently Asked Questions (FAQs)",
    "level": 2
  },
  {
    "type": "heading",
    "text": "1. How does DNA testing identify African origins?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "DNA testing identifies African origins by comparing your genetic markers with reference populations from Africa. It uses statistical models to estimate which regions your ancestors are most likely connected to."
  },
  {
    "type": "heading",
    "text": "2. Can DNA testing tell me my exact African tribe?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "No. DNA testing cannot definitively identify a specific tribe. It can only suggest regional ancestry such as West, East, Central, or Southern Africa."
  },
  {
    "type": "heading",
    "text": "3. Why do African DNA results change over time?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Results change because companies improve their reference databases and algorithms. As more African populations are included, ancestry estimates become more refined."
  },
  {
    "type": "heading",
    "text": "4. How accurate is African ancestry DNA testing?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "It is generally accurate for broad regions, but less precise at ethnic group level due to Africa’s high genetic diversity and limited reference coverage in some areas."
  },
  {
    "type": "heading",
    "text": "5. Why do different companies show different African ancestry results?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Each company uses different reference populations, algorithms, and regional definitions. This leads to variation in results between providers."
  },
  {
    "type": "heading",
    "text": "6. What is the most reliable part of a DNA test?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Family matching (DNA relatives) and broad regional ancestry estimates are generally more reliable than fine ethnic breakdowns."
  },
  {
    "type": "heading",
    "text": "7. Can siblings get different African ancestry results?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Yes. Siblings inherit different combinations of DNA from their parents, so their ancestry percentages can vary."
  },
  {
    "type": "heading",
    "text": "8. Does African DNA testing show nationality?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "No. DNA testing shows genetic ancestry, not nationality, citizenship, or cultural identity."
  },
  {
    "type": "heading",
    "text": "9. What is a reference population?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "A reference population is a group of people used to compare and identify similarities in your DNA. These groups represent different geographic regions."
  },
  {
    "type": "heading",
    "text": "10. What is the difference between ethnicity and DNA ancestry?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Ethnicity is cultural (language, traditions, identity), while DNA ancestry is biological and based on inherited genetic markers."
  },
  {
    "type": "heading",
    "text": "11. Can DNA testing help find African relatives?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Yes. DNA matching features can connect you with genetic relatives worldwide, helping expand your family tree."
  },
  {
    "type": "heading",
    "text": "12. Why is African genetic diversity important?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Africa has the highest genetic diversity in the world because it is the origin of modern humans and has experienced long-term population movement and mixing."
  },
  {
    "type": "heading",
    "text": "13. What are haplogroups?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Haplogroups are ancient genetic lineages that trace your deep maternal (mtDNA) or paternal (Y-DNA) ancestry over thousands of years."
  },
  {
    "type": "heading",
    "text": "14. Do DNA tests work well for African ancestry?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Yes, but results are broad and depend on the quality of African reference databases used by the testing company."
  },
  {
    "type": "heading",
    "text": "15. Should DNA testing replace genealogy research?",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "No. DNA testing should be combined with oral history, family records, and historical research for best results."
  },
  {
    "type": "heading",
    "text": "Common Myths About African DNA Testing",
    "level": 2
  },
  {
    "type": "heading",
    "text": "Myth 1: DNA can identify your exact tribe",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Reality: DNA can only estimate regional ancestry, not specific ethnic groups."
  },
  {
    "type": "heading",
    "text": "Myth 2: DNA results are 100% fixed",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Reality: Results change as databases and science improve."
  },
  {
    "type": "heading",
    "text": "Myth 3: DNA tells your full identity",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Reality: DNA is one part of identity, not the complete picture."
  },
  {
    "type": "heading",
    "text": "Myth 4: All DNA companies give the same results",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Reality: Different databases and algorithms produce different outcomes."
  },
  {
    "type": "heading",
    "text": "What to Do After Receiving Your DNA Results",
    "level": 2
  },
  {
    "type": "heading",
    "text": "Once you receive your results:",
    "level": 3
  },
  {
    "type": "list",
    "items": [
      "Interview family members for oral history",
      "Build a family tree using available records",
      "Compare results with migration history",
      "Explore DNA matches for relatives",
      "Revisit your results after updates"
    ]
  },
  {
    "type": "paragraph",
    "text": "This combined approach produces the most meaningful insights into African ancestry."
  },
  {
    "type": "heading",
    "text": "Key Takeaways",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "DNA testing identifies African origins using reference populations and statistical models"
  },
  {
    "type": "paragraph",
    "text": "Results are estimates, not exact historical records"
  },
  {
    "type": "paragraph",
    "text": "African genetic diversity makes ancestry analysis both rich and complex"
  },
  {
    "type": "paragraph",
    "text": "DNA is most powerful when combined with genealogy and history"
  },
  {
    "type": "paragraph",
    "text": "Results may change as science improves"
  },
  {
    "type": "heading",
    "text": "Conclusion",
    "level": 2
  },
  {
    "type": "paragraph",
    "text": "Understanding how DNA testing identifies African origins helps you interpret your ancestry results with clarity and confidence. Rather than providing absolute answers, DNA testing offers scientifically informed clues about your genetic heritage."
  },
  {
    "type": "paragraph",
    "text": "Africa’s extraordinary genetic diversity means that ancestry testing must rely on probability, comparison, and evolving scientific research. As databases improve and more African populations are represented, results will continue to become more detailed and accurate."
  },
  {
    "type": "paragraph",
    "text": "Our mission at AfriGenetry Link is to help you understand the science behind your ancestry and connect that knowledge with history, culture, and family identity."
  },
  {
    "type": "paragraph",
    "text": "Your DNA is not just data—it is a reflection of thousands of years of human migration, resilience, and connection."
  }
];

export default function ArticlePage() {
  return (
    <>
      <SiteHeader />
      <main className="article-page">
        <section className="page-hero">
          <div className="page-container">
            <Link className="text-link" href="/stories-insights">
              <ArrowLeft size={16} /> Stories &amp; Insights
            </Link>
            <span className="eyebrow ancestry-eyebrow">ANCESTRY &amp; HERITAGE</span>
            <h1>How DNA Testing Reveals African Origins</h1>
            <p className="hero-description">Understand how DNA ancestry analysis can offer clues about African heritage, what its estimates mean, and why results should be considered alongside family history.</p>
          </div>
        </section>
        <article className="section-pad article-content">
          <div className="page-container">
            <div className="article-body">
              {articleBlocks.map((block, index) => {
                if (block.type === "heading") {
                  return block.level === 2
                    ? <h2 key={index}>{block.text}</h2>
                    : <h3 key={index}>{block.text}</h3>;
                }
                if (block.type === "list") {
                  return (
                    <ul key={index}>
                      {block.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  );
                }
                return <p key={index}>{block.text}</p>;
              })}
              <p className="eyebrow">CONTENT SOURCE</p>
              <p>This article has been restored from the available AfriGenetry Link source text export. Embedded media and visual assets were not available in the text extraction and should be reviewed separately against the original source.</p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/resources">Explore resources <ArrowRight size={17} /></Link>
                <Link className="button button-dark" href="/contact">Contact AGL</Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
