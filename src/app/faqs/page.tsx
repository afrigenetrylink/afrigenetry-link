
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Search,
  BookOpen,
  Dna,
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  Globe2,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const sections = [
  {
    id: "general",
    title: "General",
    icon: BookOpen,
    items: [
      {
        q: "What does AfriGenetry Link do?",
        a: "AfriGenetry Link is a Pan-African nonprofit focused on DNA education, genetic health awareness, prevention, and heritage access for Africans and people of African descent. It is not a commercial DNA testing company.",
      },
      {
        q: "Does AfriGenetry Link sell DNA testing kits?",
        a: "AfriGenetry Link is not a commercial DNA testing company. Programme participation, testing availability, eligibility, and partner arrangements depend on the specific initiative and its current terms.",
      },
      {
        q: "How is AfriGenetry Link different from DNA testing companies?",
        a: "AGL focuses on education, community engagement, heritage reconnection, genetic health awareness, and pathways to responsible participation. Testing and laboratory services, where applicable, are handled through relevant partners.",
      },
      {
        q: "Where does AfriGenetry Link operate?",
        a: "AGL works to connect African communities and people of African descent across Africa and the global diaspora. Availability varies by programme and location.",
      },
      {
        q: "Who can participate in AGL programmes?",
        a: "Eligibility depends on the individual programme, event, or application. Check the relevant programme page for current details or contact AGL if your situation is not covered.",
      },
    ],
  },
  {
    id: "fellowship",
    title: "AfriGenetry Link Fellowship",
    icon: GraduationCap,
    items: [
      {
        q: "What is the AfriGenetry Link Fellowship?",
        a: "The Fellowship is a workforce development initiative intended to train trusted community guides in DNA, ancestry, genealogy, and genetic health education in culturally grounded ways.",
      },
      {
        q: "Who should consider the Fellowship?",
        a: "People interested in community education, heritage, genomics literacy, public health awareness, and helping their communities navigate these topics may wish to explore the programme. Check the Fellowship page for current eligibility and application details.",
      },
      {
        q: "How can I find out about applications?",
        a: "Visit the Fellowship information on the website or use the Contact page to ask about current application windows. Application processing will be connected to the website during the integrations phase.",
      },
    ],
  },
  {
    id: "genafrica",
    title: "GenAfrica Initiatives",
    icon: Globe2,
    items: [
      {
        q: "What are the GenAfrica initiatives?",
        a: "GenAfrica initiatives focus on community access to DNA education, ancestry and heritage exploration, hereditary health awareness, and genomic literacy. Specific activities and eligibility can differ by programme.",
      },
      {
        q: "Who can participate in a GenAfrica community programme?",
        a: "Eligibility, locations, and available places depend on the specific programme or event. Please review its page for current details before applying or registering.",
      },
      {
        q: "Is ancestry DNA testing free through AfriGenetry Link?",
        a: "Free access is programme specific and should not be assumed for every visitor or location. Review the relevant GenAfrica programme announcement for confirmed eligibility, availability, and terms.",
      },
      {
        q: "Why does AGL work with DNA company partners?",
        a: "Specialist partners may provide testing or laboratory services while AGL focuses on education, community engagement, and responsible access. The details depend on the programme and its confirmed partners.",
      },
    ],
  },
  {
    id: "dna-wheels",
    title: "DNA on Wheels",
    icon: Dna,
    items: [
      {
        q: "What is DNA on Wheels?",
        a: "DNA on Wheels is an AGL initiative designed around bringing DNA education and related community engagement closer to people. The exact services available at a particular location depend on the programme arrangements.",
      },
      {
        q: "Where will DNA on Wheels operate?",
        a: "Locations and schedules may vary. Check AGL event announcements for confirmed dates and locations.",
      },
      {
        q: "Does DNA on Wheels guarantee a DNA test?",
        a: "No specific test or service should be assumed without confirmation for the relevant activity. Review the event or programme details before attending.",
      },
    ],
  },
  {
    id: "tripleh",
    title: "TripleH: Heritage, Health & Healing",
    icon: HeartPulse,
    items: [
      {
        q: "What does TripleH stand for?",
        a: "TripleH stands for Heritage, Health, and Healing. It is a framework connecting ancestry, genomic health education, cultural identity, and community wellbeing.",
      },
      {
        q: "Is TripleH only for Africans living in Africa?",
        a: "No. The framework is intended to support Africans and people of African descent across the diaspora as well as communities on the continent.",
      },
      {
        q: "Is the TripleH digital platform available now?",
        a: "The TripleH platform is in development. Do not assume that account creation, DNA uploads, health services, or other platform features are available until AGL announces their launch.",
      },
      {
        q: "Do I need to upload DNA to learn about TripleH?",
        a: "No. You can explore the framework and its educational themes without uploading genetic data. Any future data-related feature should explain its purpose, consent, and privacy terms before use.",
      },
    ],
  },
  {
    id: "ancestry",
    title: "DNA & Ancestry",
    icon: Dna,
    items: [
      {
        q: "Can DNA testing tell me exactly which African ethnic group I belong to?",
        a: "DNA ancestry results estimate genetic similarities with reference populations. They cannot, by themselves, definitively assign membership in a modern ethnic or cultural community. Family history, language, records, and oral traditions also matter.",
      },
      {
        q: "Can DNA testing help me find relatives?",
        a: "Some testing services offer relative matching when other people in their databases have also tested and enabled matching. Results are not guaranteed, and privacy settings should be reviewed carefully.",
      },
      {
        q: "Can DNA testing replace traditional genealogy?",
        a: "No. DNA evidence is best considered alongside family stories, oral histories, historical records, and other genealogical research.",
      },
      {
        q: "Why might ancestry results change over time?",
        a: "Your DNA does not change, but a provider may update its reference databases and analysis methods, which can change its ancestry estimates.",
      },
    ],
  },
  {
    id: "health",
    title: "Health & Wellness",
    icon: HeartPulse,
    items: [
      {
        q: "What can a DNA test tell me about my health?",
        a: "What a test can tell you depends on the test and the evidence behind it. Genetic information does not predict every health outcome and should be interpreted in context with family history and other factors.",
      },
      {
        q: "Do I need symptoms before learning about genetic health?",
        a: "Not all genetic health education is about symptoms. Family health history can help people prepare questions for healthcare professionals. Whether testing is appropriate is an individual decision to discuss with a qualified professional.",
      },
      {
        q: "Are DNA based health insights equally accurate for everyone?",
        a: "Accuracy depends on the test, the condition, the available evidence, and how well relevant populations are represented in research. Ask a qualified healthcare professional or genetic counsellor about a specific test.",
      },
      {
        q: "What is the difference between ancestry testing and health testing?",
        a: "Ancestry testing estimates genetic relationships to reference populations. Health related tests look for selected variants or markers associated with health conditions or traits. They have different purposes and limitations.",
      },
      {
        q: "Does AGL provide medical diagnosis or treatment?",
        a: "AGL's educational materials are not a substitute for medical advice, diagnosis, or treatment. Consult a qualified healthcare professional for personal medical decisions.",
      },
    ],
  },
  {
    id: "privacy",
    title: "DNA Privacy, Consent & Data Protection",
    icon: ShieldCheck,
    items: [
      {
        q: "Is my genetic information private?",
        a: "Privacy practices depend on the organisation conducting a test or collecting information. Before participating, review its privacy notice, consent documents, storage practices, access controls, sharing terms, and deletion options.",
      },
      {
        q: "What should I understand before consenting to DNA testing?",
        a: "Ask why the sample is being collected, how the results and data will be used, who can access them, whether research participation is optional, how long information is retained, and whether you can withdraw or request deletion.",
      },
      {
        q: "Is research participation the same as taking a DNA test?",
        a: "Not necessarily. Research participation may have separate purposes and consent requirements. Read the specific consent materials and ask questions before agreeing.",
      },
      {
        q: "Can I choose not to share genetic data?",
        a: "Your options depend on the provider and programme. Review the applicable consent terms and ask which activities are optional before you decide to participate.",
      },
    ],
  },
];

export default function FAQsPage() {
  const [activeSection, setActiveSection] = useState("all");
  const [query, setQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const visibleSections = useMemo(() => {
    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          `${item.q} ${item.a}`.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter(
        (section) =>
          (activeSection === "all" || section.id === activeSection) &&
          section.items.length > 0
      );
  }, [activeSection, query]);

  const toggle = (id: string) => {
    setOpenItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <>
      <SiteHeader />

      <main className="faqs-page">
        <section className="page-hero">
          <div className="page-container">
            <span className="eyebrow">HELP & GUIDANCE</span>
            <h1>Frequently Asked Questions</h1>
            <p className="hero-description">
              Clear starting points for learning about AfriGenetry Link, our
              initiatives, ancestry, genetic health, and responsible data use.
            </p>

            <div className="faq-search">
              <Search size={19} aria-hidden="true" />
              <input
                aria-label="Search frequently asked questions"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search questions or topics..."
              />
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-container">
            <div className="faq-categories" aria-label="Filter FAQ topics">
              <button
                type="button"
                onClick={() => setActiveSection("all")}
                className={`faq-category ${
                  activeSection === "all" ? "is-active" : ""
                }`}
                aria-pressed={activeSection === "all"}
              >
                <span className="faq-category-title">All topics</span>
                <span className="faq-category-count">
                  Browse every FAQ category
                </span>
              </button>

              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <button
                    type="button"
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`faq-category ${
                      activeSection === section.id ? "is-active" : ""
                    }`}
                    aria-pressed={activeSection === section.id}
                  >
                    <span className="faq-category-icon">
                      <Icon size={19} aria-hidden="true" />
                    </span>

                    <span className="faq-category-title">
                      {section.title}
                    </span>

                    <span className="faq-category-count">
                      {section.items.length} questions
                    </span>
                  </button>
                );
              })}
            </div>

            {visibleSections.length === 0 ? (
              <div className="faq-empty">
                <h2>No matching questions</h2>
                <p>Try a different search term or select another topic.</p>

                <button
                  className="button button-dark"
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveSection("all");
                  }}
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="faq-results">
                {visibleSections.map((section) => (
                  <section className="faq-section" key={section.id}>
                    <div className="faq-section-heading">
                      <span className="eyebrow">FAQ CATEGORY</span>
                      <h2>{section.title}</h2>
                    </div>

                    <div className="faq-list">
                      {section.items.map((item) => {
                        const id = `${section.id}-${item.q}`;
                        const isOpen = openItems.includes(id);

                        return (
                          <article className="faq-item" key={id}>
                            <button
                              type="button"
                              className="faq-question"
                              aria-expanded={isOpen}
                              onClick={() => toggle(id)}
                            >
                              <span>{item.q}</span>

                              <ChevronDown
                                size={19}
                                aria-hidden="true"
                                className={`faq-chevron ${
                                  isOpen ? "is-open" : ""
                                }`}
                              />
                            </button>

                            {isOpen && (
                              <div className="faq-answer">
                                <p>{item.a}</p>
                              </div>
                            )}
                          </article>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="section-pad campaign-section">
          <div className="page-container faq-contact-layout">
            <div>
              <span className="eyebrow">STILL HAVE QUESTIONS?</span>
              <h2>We can help you find the right information.</h2>
              <p>
                For questions about a particular event, programme, application,
                or partnership, get in touch with the AGL team.
              </p>
            </div>

            <div className="faq-contact-card">
              <h3>Contact AfriGenetry Link</h3>
              <p>
                Ask about programme details, current availability, or the best
                place to start.
              </p>

              <Link className="text-link" href="/contact">
                Go to Contact <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-container">
            <div className="hero-actions">
              <Link className="button button-gold" href="/resources">
                Explore resources <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="button button-dark" href="/get-involved">
                Get involved <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <p className="faq-disclaimer">
              These answers provide general educational guidance. Programme
              terms and availability may change. Genetic and health information
              is not medical advice; consult a qualified healthcare professional
              for personal decisions.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
