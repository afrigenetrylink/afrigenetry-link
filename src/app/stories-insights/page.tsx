import Link from "next/link";
import { ArrowRight, BookOpen, Dna, HeartPulse, ShieldCheck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const articles = [
    { group: "equity", title: "Why Africans Are Underrepresented in DNA Databases: A Genetic Equity Challenge", description: "Learn how unequal representation affects genetic research and why African participation matters to a more inclusive genomic future.", href: "/stories-insights/african-dna-database-representation" },
    { group: "ancestry", title: "African DNA Testing: The Complete Guide to Tracing Your African Heritage Through DNA", description: "A guide to African ancestry DNA testing, reference populations, genetic diversity, and interpreting results.", href: "/stories-insights/african-dna-testing-guide" },
    { group: "ancestry", title: "African Ethnic Groups and DNA Origins: A Complete Guide to Africa’s Genetic and Cultural Diversity", description: "Explore how genetic ancestry, cultural identity, historical context, and family history relate without treating DNA as a complete definition of identity.", href: "/stories-insights/african-ethnic-groups-dna-origins" },
    { group: "ancestry", title: "African Genetic Diversity: Why Africa Holds the World", description: "Explore Africa\\u2019s extraordinary human genetic diversity and its importance for ancestry, research, and more inclusive healthcare.", href: "/stories-insights/african-genetic-diversity" },
    { group: "ancestry", title: "African Genetic Heritage: Discover African DNA, Ancestry and Human Origins", description: "Explore African genetic diversity, ancestry, population history, and the importance of interpreting DNA alongside cultural and family history.", href: "/stories-insights/african-genetic-heritage-human-origins" },
    { group: "ancestry", title: "What Is the Best Black Ancestry DNA Kit?", description: "Compare the questions to consider when choosing a DNA ancestry test for African heritage research.", href: "/stories-insights/best-black-ancestry-dna-kit" },
    { group: "ancestry", title: "How to Choose the Right DNA Test for African Ancestry", description: "A practical guide to comparing DNA test types, understanding limitations, and making informed choices about ancestry research.", href: "/stories-insights/choosing-dna-test-african-ancestry" },
    { group: "health", title: "Diabetes Genetics in Africans: Understanding Inherited Risk, DNA, Prevention, and Precision Medicine", description: "Learn how genetics, family health history, prevention, and precision medicine relate to diabetes education in African communities.", href: "/stories-insights/diabetes-genetics-in-africans" },
    { group: "ancestry", title: "DNA and Ancestry: Discover Family Origins", description: "Understand how DNA testing, genealogy, and historical research can work together to explore family origins.", href: "/stories-insights/dna-and-ancestry-family-origins" },
    { group: "ancestry", title: "DNA Testing for African Americans: Understanding Your Roots", description: "Explore how DNA ancestry estimates can complement genealogy, oral history, family records, and diaspora reconnection.", href: "/stories-insights/dna-testing-african-americans" },
    { group: "equity", title: "Ethical DNA Use in Africa: Building Trust, Protecting Rights, and Advancing Genetic Equity", description: "Understand informed consent, genetic privacy, community trust, data sovereignty, and responsible genomic research.", href: "/stories-insights/ethical-dna-use-in-africa" },
    { group: "health", title: "Genomic Health in Africa: The Complete Guide to DNA, Genomics, Genetic Testing, and Hereditary Diseases", description: "An educational guide to DNA, genetic testing, family health history, inherited conditions, and informed healthcare conversations.", href: "/stories-insights/genetic-health-africa-guide" },
    { group: "health", title: "Genetic Health: Genetics, DNA and Medication Insights", description: "An educational overview of genetics and health, including how pharmacogenomics may inform conversations about medication.", href: "/stories-insights/genetic-health-medication-guide" },
    { group: "equity", title: "Genomic Equity: Building an Inclusive Future for African Health and Ancestry", description: "Explore why fair representation in genomic research matters for African health, ancestry, and equitable access to scientific advances.", href: "/stories-insights/genomic-equity" },
    { group: "health", title: "Hereditary Hypertension in Africans: Understanding Genetics, Risk Factors, and Prevention", description: "Explore inherited risk, family history, and prevention conversations around hypertension, with educational context and appropriate clinical caution.", href: "/stories-insights/hereditary-hypertension-in-africans" },
    { group: "ancestry", title: "Does DNA Carry the History of Our Ancestors?", description: "Learn how inherited DNA can offer clues about ancestry, family history, and the limits of genetic inheritance.", href: "/stories-insights/how-dna-inherits-ancestry" },
    { group: "ancestry", title: "How DNA Testing Reveals African Origins", description: "Learn how DNA testing can offer clues about African origins and why results should be interpreted alongside family and historical context.", href: "/stories-insights/how-dna-testing-reveals-african-origins" },
    { group: "health", title: "Mobile DNA Clinics in Africa: Revolutionizing Genetic Healthcare", description: "Learn how mobile DNA clinics may help bring genetic education and healthcare services closer to underserved communities.", href: "/stories-insights/mobile-dna-clinics-africa" },
    { group: "ancestry", title: "How Oral Traditions Keep African Family History Alive", description: "Discover how storytelling, elders, family memories, and community knowledge help preserve histories across generations.", href: "/stories-insights/oral-traditions-african-family-history" },
    { group: "ancestry", title: "Population Genomics: How to Read African DNA Results", description: "Understand population genomics and the context needed to interpret African DNA results with care and nuance.", href: "/stories-insights/population-genomics-african-dna-results" },
    { group: "health", title: "Precision Medicine in Africa: Transforming Healthcare Through Genomics, DNA Testing, and Personalized Medicine", description: "Explore the role of genomics, DNA testing, research representation, and personalized medicine in African healthcare.", href: "/stories-insights/precision-medicine-africa" },
    { group: "health", title: "Sickle Cell Genetics: Understanding Inheritance, DNA Testing, and Prevention", description: "Learn about sickle cell inheritance, genetic testing, family health conversations, and the importance of professional guidance.", href: "/stories-insights/sickle-cell-genetics" },
    { group: "platforms", title: "Triple H (3HHH): Africa's Heritage, Health & Healing Digital Platform", description: "Explore the Triple H vision connecting African heritage, health awareness, and healing through culturally grounded education.", href: "/stories-insights/triple-h-framework" },
    { group: "platforms", title: "What Is the Triple H Framework? Heritage, Health and Healing Explained", description: "Learn about the TripleH framework and its vision for connecting heritage, health awareness, and healing through culturally grounded education.", href: "/stories-insights/what-is-the-triple-h-framework" },
    { group: "equity", title: "Why Africans Are Underrepresented in DNA Databases: A Genetic Equity Challenge", description: "Explore how gaps in genetic research representation affect ancestry insights, genomic research, and equitable health innovation.", href: "/stories-insights/why-africans-underrepresented-dna-databases" },
];

const groups = [
  {
    id: "ancestry",
    title: "Ancestry & Identity",
    description: "Explore DNA ancestry, cultural identity, family history, African genetic diversity, and the context needed to interpret results carefully.",
    icon: Dna,
  },
  {
    id: "health",
    title: "Genetic Health & Wellness",
    description: "Explore inherited conditions, family health history, genetic education, and informed conversations with qualified health professionals.",
    icon: HeartPulse,
  },
  {
    id: "equity",
    title: "Ethics & Genomic Equity",
    description: "Learn why informed consent, privacy, data sovereignty, and fair representation matter in genomic research.",
    icon: ShieldCheck,
  },
  {
    id: "platforms",
    title: "Platforms & Frameworks",
    description: "Read about the Triple H framework and its vision for connecting heritage, health, and healing.",
    icon: BookOpen,
  },
] as const;

export default function StoriesInsightsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-container">
            <span className="eyebrow">STORIES & INSIGHTS</span>
            <h1>Knowledge that connects our stories.</h1>
            <p className="hero-description">
              Explore ancestry, African genetic diversity, family health history,
              responsible genomics, and the ideas shaping AGL’s work.
            </p>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-container">
            <div className="section-heading">
              <span className="eyebrow">EXPLORE THE LIBRARY</span>
              <h2>Read, reflect, and keep learning.</h2>
              <p>
                Browse locally hosted article introductions from the AfriGenetry
                Link library. Genetic ancestry estimates have limits, and health
                information is educational rather than a diagnosis.
              </p>
            </div>
          </div>
        </section>

        {groups.map((group) => {
          const Icon = group.icon;
          const groupArticles = articles.filter((article) => article.group === group.id);

          return (
            <section className="section-pad" id={group.id} key={group.id}>
              <div className="page-container">
                <div className="section-heading">
                  <span className="eyebrow">AGL KNOWLEDGE LIBRARY</span>
                  <h2>{group.title}</h2>
                  <p>{group.description}</p>
                </div>

                <div className="resources-category-grid">
                  {groupArticles.map((article) => (
                    <article className="resources-category-card" key={article.href}>
                      <div className="resources-guide-icon">
                        <Icon size={25} aria-hidden="true" />
                      </div>
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <Link className="text-link" href={article.href}>
                        Read article <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="section-pad campaign-section">
          <div className="page-container">
            <div className="section-heading">
              <span className="eyebrow">LEARN RESPONSIBLY</span>
              <h2>Education supports informed choices.</h2>
              <p>
                Use educational resources to prepare questions for qualified
                professionals and make decisions about personal genetic data
                voluntarily.
              </p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/resources">
                  Explore learning resources <ArrowRight size={17} />
                </Link>
                <Link className="button button-dark" href="/dna-data-ethics">
                  <ShieldCheck size={17} /> DNA data ethics
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
