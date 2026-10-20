
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Dna,
  Globe2,
  HeartPulse,
  MessageCircle,
  UsersRound,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const storyThemes = [
  {
    number: "01",
    category: "ANCESTRY & IDENTITY",
    title: "Tracing Your African Roots: From Stories to DNA Insights",
    description:
      "Explore how oral histories, family traditions, historical research, and DNA insights can work together in the journey to understand African ancestry.",
    href: "https://www.afrigenetrylink.org/post/tracing-your-african-roots-from-stories-to-dna-insights",
    icon: Globe2,
  },
  {
    number: "02",
    category: "GENETIC HEALTH",
    title: "Genetic Health in Africa: The Complete Guide",
    description:
      "Learn about DNA, inherited conditions, genetic testing, family health history, and the importance of informed conversations with qualified healthcare professionals.",
    href: "https://www.afrigenetrylink.org/post/genetic-health-africa-guide",
    icon: HeartPulse,
  },
  {
    number: "03",
    category: "DNA & ANCESTRY",
    title: "How DNA Testing Identifies African Origins",
    description:
      "Understand how ancestry estimates are developed, why results vary, and what DNA testing can and cannot tell you about your roots.",
    href: "https://www.afrigenetrylink.org/post/how-dna-testing-identifies-african-origins",
    icon: Dna,
  },
  {
    number: "04",
    category: "GENETIC EQUITY",
    title: "Why Africans Are Underrepresented in DNA Databases",
    description:
      "Explore why representation in genetic research matters for ancestry discovery, health research, and a more equitable genomic future.",
    href: "https://www.afrigenetrylink.org/post/why-africans-are-underrepresented-in-dna-databases",
    icon: UsersRound,
  },
  {
    number: "05",
    category: "FAMILY HISTORY",
    title: "How Oral Traditions Preserve African Family History",
    description:
      "Discover the role of family storytelling, elders, and community memory in preserving histories across generations.",
    href: "https://www.afrigenetrylink.org/post/how-oral-traditions-preserve-african-family-history",
    icon: BookOpen,
  },
  {
    number: "06",
    category: "PREVENTIVE HEALTH",
    title: "How DNA Is Revolutionizing Preventive Health Care",
    description:
      "Explore how genetic knowledge may support informed health conversations, prevention, and personalized care when interpreted responsibly.",
    href: "https://www.afrigenetrylink.org/post/how-dna-is-revolutionizing-preventive-health-care",
    icon: HeartPulse,
  },
];

const conversationTopics = [
  {
    number: "01",
    title: "Identity across generations",
    description:
      "How can family stories, cultural traditions, and ancestry knowledge help connect generations?",
    tag: "HERITAGE",
  },
  {
    number: "02",
    title: "Making health knowledge accessible",
    description:
      "What can help families have more informed conversations about health history and genetics?",
    tag: "HEALTH",
  },
  {
    number: "03",
    title: "Building belonging through knowledge",
    description:
      "How can communities create more opportunities to learn, participate, and shape the future?",
    tag: "COMMUNITY",
  },
];

export default function StoriesPage() {
  return (
    <>
      <SiteHeader />

      <main className="stories-page">
        <section className="hero stories-page-hero">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content page-container">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light">
                STORIES · KNOWLEDGE · CONNECTION
              </span>

              <h1>
                Every story has{" "}
                <span>a place.</span>
              </h1>

              <p className="hero-description">
                Our identities, family histories, health experiences,
                and cultural connections are part of a bigger story.
                Explore the questions and conversations that bring
                people closer to their roots and to one another.
              </p>

              <div className="hero-actions">
                <Link
                  href="#explore-stories"
                  className="button button-gold"
                >
                  Explore story themes <ArrowUpRight size={17} />
                </Link>
                <Link
                  href="#conversations"
                  className="button button-outline-light"
                >
                  Start a conversation <ArrowRight size={17} />
                </Link>
              </div>

              <div className="hero-note">
                <span className="hero-note-line" />
                <span>Our stories. Our heritage. Our future.</span>
              </div>
            </div>

            <div className="hero-side-note" aria-hidden="true">
              <span>IDENTITY</span>
              <span className="hero-side-divider" />
              <span>DISCOVERY</span>
              <span className="hero-side-divider" />
              <span>BELONGING</span>
            </div>
          </div>
        </section>

        <section className="mission-section section-pad">
          <div className="page-container mission-layout">
            <div className="mission-heading">
              <span className="eyebrow">WHY STORIES MATTER</span>
              <h2>
                Knowledge becomes meaningful when it{" "}
                <em>connects us.</em>
              </h2>
            </div>

            <div className="mission-copy">
              <p className="lead-copy">
                Behind every family is a history worth understanding
                and a future worth shaping.
              </p>
              <p>
                AfriGenetry Link creates space for conversations about
                ancestry, identity, family health history, cultural
                belonging, and the future of genomics.
              </p>
              <p>
                Our published articles explore ancestry discovery, African genetic
                diversity, family health history, and responsible use of genetic
                information. Each article is an invitation to learn, ask questions,
                and approach DNA knowledge with care.
              </p>
            </div>
          </div>
        </section>

        <section
          className="pillars-section section-pad"
          id="explore-stories"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  EXPLORE OUR STORY THEMES
                </span>
                <h2>Stories and insights worth exploring.</h2>
              </div>
              <p>
                Read published AfriGenetry Link articles on African ancestry,
                family history, genetic health, and equitable research.
              </p>
            </div>

            <div className="stories-theme-grid">
              {storyThemes.map((theme) => {
                const Icon = theme.icon;

                return (
                  <article
                    className="stories-theme-card"
                    key={theme.number}
                    id={
                      theme.category === "ANCESTRY & IDENTITY"
                        ? "ancestry"
                        : theme.category === "GENETIC HEALTH"
                          ? "health"
                          : undefined
                    }
                  >
                    <div className="stories-theme-top">
                      <span>{theme.number}</span>
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <span className="eyebrow">{theme.category}</span>
                    <h3>{theme.title}</h3>
                    <p>{theme.description}</p>

                    <a
                      href={theme.href}
                      className="text-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read article
                      <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="stories-section section-pad"
          id="conversations"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  QUESTIONS WORTH EXPLORING
                </span>
                <h2>Let the conversation begin.</h2>
              </div>
              <p>
                These discussion themes offer starting points for
                community learning, reflection, and future stories.
              </p>
            </div>

            <div className="stories-conversation-list">
              {conversationTopics.map((topic) => (
                <article
                  className="stories-conversation-card"
                  key={topic.number}
                >
                  <span className="stories-conversation-number">
                    {topic.number}
                  </span>

                  <div className="stories-conversation-copy">
                    <span className="eyebrow">{topic.tag}</span>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                  </div>

                  <div
                    className="stories-conversation-icon"
                    aria-hidden="true"
                  >
                    <MessageCircle size={22} strokeWidth={1.5} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="campaign-section stories-feature-section">
          <div className="campaign-image" aria-hidden="true" />
          <div className="campaign-overlay" aria-hidden="true" />

          <div className="page-container campaign-content">
            <span className="eyebrow eyebrow-light">
              HERITAGE · HEALTH · HEALING
            </span>

            <p className="campaign-kicker">
              YOUR STORY IS PART OF THE BIGGER PICTURE.
            </p>

            <h2>
              Discover what
              <br />
              <em>connects us.</em>
            </h2>

            <p className="campaign-description">
              Learn about the connections between ancestry, family
              health history, cultural identity, and the opportunities
              available to future generations.
            </p>

            <Link
              href="/our-work"
              className="button button-gold"
            >
              Discover our work <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        <section className="tripleh-section section-pad">
          <div className="page-container stories-learning-layout">
            <div className="stories-learning-icon">
              <BookOpen size={32} strokeWidth={1.4} />
            </div>

            <div className="stories-learning-copy">
              <span className="eyebrow">
                KEEP LEARNING AND DISCOVERING
              </span>
              <h2>
                Let curiosity lead the way.
              </h2>
              <p>
                Explore educational material about ancestry, genomics,
                family health history, and responsible research.
                Build your understanding one question at a time.
              </p>

              <Link
                href="/resources"
                className="button button-dark"
              >
                Visit our resources <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="get-involved-section">
          <div className="page-container get-involved-content">
            <span className="eyebrow eyebrow-light">
              HELP SHAPE THE CONVERSATION
            </span>

            <h2>
              Your perspective
              <br />
              <em>matters here.</em>
            </h2>

            <p>
              Interested in contributing a personal story, proposing
              an interview, sharing educational expertise, or exploring
              a collaboration with AfriGenetry Link?
            </p>

            <div className="get-involved-actions">
              <Link
                href="/contact"
                className="button button-gold"
              >
                Contact our team <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/our-work"
                className="button button-outline-light"
              >
                Explore our work <UsersRound size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="donate-section">
          <div className="page-container donate-layout">
            <div className="donate-icon">
              <Globe2 size={25} />
            </div>

            <div>
              <span className="eyebrow">
                KNOWLEDGE WITH RESPONSIBILITY
              </span>
              <h2>
                Every story deserves respect, context, and care.
              </h2>
              <p>
                Personal histories and genetic information deserve
                thoughtful handling. Participation should be
                voluntary, informed, and respectful of privacy.
              </p>
            </div>

            <Link
              href="/dna-data-ethics"
              className="button button-dark"
            >
              Read our data ethics <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
