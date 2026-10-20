
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Dna,
  Globe2,
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  Compass,
  UsersRound,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const resourceCategories = [
  {
    number: "01",
    title: "Ancestry & Heritage",
    description:
      "Explore genealogy, family histories, cultural identity, and questions to help you document what your family already knows.",
    icon: Globe2,
    tag: "HERITAGE",
  },
  {
    number: "02",
    title: "DNA & Genomics",
    description:
      "Build foundational understanding of DNA, genetic variation, ancestry testing, and the limits of genetic interpretation.",
    icon: Dna,
    tag: "GENOMICS",
  },
  {
    number: "03",
    title: "Family Health History",
    description:
      "Learn how to organise family health information and prepare useful questions for conversations with qualified healthcare professionals.",
    icon: HeartPulse,
    tag: "HEALTH",
  },
  {
    number: "04",
    title: "Data Ethics & Privacy",
    description:
      "Understand consent, genetic privacy, data sharing, and questions to ask before participating in genetic testing or research.",
    icon: ShieldCheck,
    tag: "RESPONSIBILITY",
  },
  {
    number: "05",
    title: "Learning & Careers",
    description:
      "Explore learning pathways, genomics education, research opportunities, and professional development topics.",
    icon: GraduationCap,
    tag: "OPPORTUNITY",
  },
  {
    number: "06",
    title: "Community Learning",
    description:
      "Find discussion prompts and ideas for making heritage, health awareness, and genomics conversations more accessible.",
    icon: UsersRound,
    tag: "COMMUNITY",
  },
];

const learningGuides = [
  {
    number: "01",
    title: "Start documenting your family history",
    description:
      "Create a family history record using names, dates, places, oral histories, and documents shared with permission.",
    category: "ANCESTRY",
  },
  {
    number: "02",
    title: "Understand the basics of DNA",
    description:
      "Learn the difference between DNA, genes, chromosomes, genetic ancestry estimates, and family genealogy.",
    category: "GENOMICS",
  },
  {
    number: "03",
    title: "Prepare a family health history",
    description:
      "Organise relevant information and questions to discuss with a qualified healthcare professional.",
    category: "HEALTH",
  },
  {
    number: "04",
    title: "Ask questions before sharing genetic data",
    description:
      "Consider consent, storage, access, future use, deletion policies, and whether participation is optional.",
    category: "DATA ETHICS",
  },
];

const publishedResources = [
  {
    title: "Frequently Asked Questions",
    description: "Answers covering AGL, GenAfrica, the Fellowship, DNA on Wheels, Triple-H, ancestry, health and wellness, and DNA privacy, consent, and data protection.",
    label: "FAQ LIBRARY",
    href: "https://www.afrigenetrylink.org/aal-faqs",
  },
  {
    title: "Genetic Health Insight Initiative",
    description: "Learn about hereditary health awareness, family health history, key genetics terms, and educational questions to discuss with health professionals.",
    label: "HEALTH & GENOMICS",
    href: "https://www.afrigenetrylink.org/genetic-health",
  },
  {
    title: "Ethical DNA Use in Africa",
    description: "Explore informed consent, genetic privacy, data sovereignty, community trust, and equitable benefit from genomic research.",
    label: "PRIVACY & ETHICS",
    href: "https://www.afrigenetrylink.org/post/ethical-dna-use-in-africa",
  },
  {
    title: "Genetic Health in Africa: A Guide",
    description: "An introduction to DNA, inherited risk, family health history, genetic testing, and the importance of informed decisions.",
    label: "LEARNING GUIDE",
    href: "https://www.afrigenetrylink.org/post/genetic-health-africa-guide",
  },
  {
    title: "African Genetic Diversity",
    description: "Learn why African genetic diversity matters to ancestry, genomics, scientific understanding, and more inclusive healthcare.",
    label: "AFRICAN GENOMICS",
    href: "https://www.afrigenetrylink.org/post/african-genetic-diversity-why-africa-holds-the-world-s-greatest-genetic-heritage",
  },
  {
    title: "African Ancestry DNA Testing",
    description: "Understand what ancestry tests can show, their limitations, how DNA matches work, and why genetic results work best alongside family history research.",
    label: "ANCESTRY & IDENTITY",
    href: "https://www.afrigenetrylink.org/post/african-dna-testing",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />

      <main className="resources-page">
        <section className="hero resources-page-hero">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content page-container">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light">
                LEARN · EXPLORE · UNDERSTAND
              </span>

              <h1>
                Knowledge that brings our stories{" "}
                <span>closer.</span>
              </h1>

              <p className="hero-description">
                Explore learning topics around ancestry, DNA,
                family health history, responsible research, and
                community well-being. Start with a question and
                keep discovering at your own pace.
              </p>

              <div className="hero-actions">
                <Link
                  href="#resource-categories"
                  className="button button-gold"
                >
                  Explore resources <ArrowUpRight size={17} />
                </Link>

                <Link
                  href="#learning-guides"
                  className="button button-outline-light"
                >
                  Browse learning topics <ArrowRight size={17} />
                </Link>
              </div>

              <div className="hero-note">
                <span className="hero-note-line" />
                <span>Curiosity is a starting point.</span>
              </div>
            </div>

            <div className="hero-side-note" aria-hidden="true">
              <span>LEARN</span>
              <span className="hero-side-divider" />
              <span>DISCOVER</span>
              <span className="hero-side-divider" />
              <span>CONNECT</span>
            </div>
          </div>
        </section>

        <section className="mission-section section-pad">
          <div className="page-container mission-layout">
            <div className="mission-heading">
              <span className="eyebrow">LEARNING FOR EVERYONE</span>
              <h2>
                Better questions lead to{" "}
                <em>better understanding.</em>
              </h2>
            </div>

            <div className="mission-copy">
              <p className="lead-copy">
                You do not need to be a scientist to start learning
                about your roots, your family history, or genomics.
              </p>

              <p>
                AfriGenetry Link aims to make complex subjects more
                approachable through clear explanations, community
                conversations, and responsible educational resources.
              </p>

              <p>
                The topics on this page are learning starting points.
                They are not a substitute for professional medical
                advice, genetic counselling, or independent research
                verification.
              </p>
            </div>
          </div>
        </section>

        <section
          className="pillars-section section-pad"
          id="resource-categories"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  EXPLORE BY INTEREST
                </span>
                <h2>Find your starting point.</h2>
              </div>

              <p>
                Explore the subjects most relevant to your questions,
                interests, and learning journey.
              </p>
            </div>

            <div className="resources-category-grid">
              {resourceCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <article
                    className="resources-category-card"
                    key={category.number}
                  >
                    <div className="resources-category-top">
                      <span>{category.number}</span>
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <span className="eyebrow">
                      {category.tag}
                    </span>

                    <h3>{category.title}</h3>
                    <p>{category.description}</p>

                    <Link
                      href="#learning-guides"
                      className="text-link"
                    >
                      Explore learning topics
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="work-section section-pad"
          id="learning-guides"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  QUESTIONS TO EXPLORE
                </span>
                <h2>Build your knowledge step by step.</h2>
              </div>

              <p>
                Use these introductory topics to guide your learning
                and identify useful questions for further reading.
              </p>
            </div>

            <div className="resources-guide-list">
              {learningGuides.map((guide) => (
                <article
                  className="resources-guide-card"
                  key={guide.number}
                >
                  <span className="resources-guide-number">
                    {guide.number}
                  </span>

                  <div className="resources-guide-copy">
                    <span className="eyebrow">
                      {guide.category}
                    </span>
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                  </div>

                  <BookOpen
                    className="resources-guide-icon"
                    size={23}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>

            <p className="resources-note">
              These are introductory learning topics, not downloadable
              guides or published research papers. Verified educational
              materials can be added as they become available.
            </p>
          </div>
        </section>

        <section className="campaign-section resources-feature">
          <div className="campaign-image" aria-hidden="true" />
          <div className="campaign-overlay" aria-hidden="true" />

          <div className="page-container campaign-content">
            <span className="eyebrow eyebrow-light">
              LEARNING WITH PURPOSE
            </span>

            <p className="campaign-kicker">
              KNOW YOUR ROOTS. UNDERSTAND YOUR OPTIONS.
            </p>

            <h2>
              Knowledge is a journey,
              <br />
              <em>not a destination.</em>
            </h2>

            <p className="campaign-description">
              Learning about ancestry and genomics can raise
              important questions. Take your time, check reliable
              sources, and make informed decisions about your
              personal information.
            </p>

            <Link
              href="https://www.afrigenetrylink.org/aal-faqs" target="_blank" rel="noreferrer"
              className="button button-gold"
            >
              Explore data ethics <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        <section className="tripleh-section section-pad">
          <div className="page-container resources-learning-layout">
            <div className="resources-learning-visual">
              <Compass size={37} strokeWidth={1.3} />
              <span>KEEP EXPLORING</span>
            </div>

            <div className="resources-learning-copy">
              <span className="eyebrow">
                CONNECT LEARNING TO COMMUNITY
              </span>

              <h2>
                Knowledge grows when we share it responsibly.
              </h2>

              <p>
                Explore the stories, programmes, and community
                initiatives shaping AfriGenetry Link's work.
                Bring your questions and discover ways to take part.
              </p>

              <div className="resources-learning-actions">
                <Link
                  href="/stories"
                  className="button button-dark"
                >
                  Read our stories <ArrowRight size={17} />
                </Link>

                <Link
                  href="/our-work"
                  className="text-link"
                >
                  Discover our work <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="get-involved-section">
          <div className="page-container get-involved-content">
            <span className="eyebrow eyebrow-light">
              HAVE A QUESTION OR IDEA?
            </span>

            <h2>
              Let's make learning
              <br />
              <em>more accessible.</em>
            </h2>

            <p>
              Contact AfriGenetry Link to discuss educational
              collaborations, community learning opportunities,
              or potential resource contributions.
            </p>

            <div className="get-involved-actions">
              <Link
                href="/contact"
                className="button button-gold"
              >
                Contact our team <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/stories"
                className="button button-outline-light"
              >
                Explore stories <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="donate-section">
          <div className="page-container donate-layout">
            <div className="donate-icon">
              <ShieldCheck size={25} />
            </div>

            <div>
              <span className="eyebrow">
                PRIVACY & INFORMED CHOICE
              </span>

              <h2>
                Your information deserves careful consideration.
              </h2>

              <p>
                Before sharing genetic or family information,
                understand how it may be used, who may access it,
                and what choices are available to you.
              </p>
            </div>

            <Link
              href="https://www.afrigenetrylink.org/aal-faqs" target="_blank" rel="noreferrer"
              className="button button-dark"
            >
              Review data ethics <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
