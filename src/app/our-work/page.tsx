
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  HeartPulse,
  Sparkles,
  Dna,
  GraduationCap,
  UsersRound,
  BookOpen,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const pillars = [
  {
    number: "01",
    title: "Heritage & Identity",
    description:
      "Explore ancestral roots, family histories, cultural connections, and the stories that shape who we are.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Health & Genomics",
    description:
      "Build knowledge around DNA, family health history, and informed conversations about preventive health.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Healing & Wellness",
    description:
      "Create space for belonging, emotional well-being, cultural connection, and community support.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Research & Innovation",
    description:
      "Support responsible research, stronger representation, and more inclusive scientific knowledge.",
    icon: Dna,
  },
  {
    number: "05",
    title: "Education & Opportunity",
    description:
      "Open pathways to learning, mentorship, professional development, and the future of genomics.",
    icon: GraduationCap,
  },
];

const programs = [
  {
    id: "genafrica",
    number: "01",
    category: "COMMUNITY & DISCOVERY",
    title: "GenAfrica Initiative",
    description:
      "Bringing DNA education, ancestry discovery, genealogy, and family health history awareness into communities.",
    imageClass: "program-image-genafrica",
    icon: Globe2,
  },
  {
    id: "nextgen",
    number: "02",
    category: "YOUTH & BELONGING",
    title: "AGL NextGen",
    description:
      "Know your roots. Own your story. Explore culture, identity, wellness, and opportunities for the next generation.",
    imageClass: "program-image-nextgen",
    icon: UsersRound,
  },
  {
    id: "fellowship",
    number: "03",
    category: "EDUCATION & WORKFORCE",
    title: "AGL Fellowship",
    description:
      "A pathway for education, mentorship, and professional growth across genomics and related fields.",
    imageClass: "program-image-fellowship",
    icon: GraduationCap,
  },
];

export default function OurWorkPage() {
  return (
    <>
      <SiteHeader />

      <main className="our-work-page">
        <section className="hero our-work-hero">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content page-container">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light">
                OUR WORK · OUR SHARED FUTURE
              </span>

              <h1>
                Turning our roots into{" "}
                <span>possibility.</span>
              </h1>

              <p className="hero-description">
                AfriGenetry Link connects heritage, health, healing,
                education, and responsible innovation to help Africans
                and the global diaspora understand their stories and
                participate in the future of genomics.
              </p>

              <div className="hero-actions">
                <Link href="#programs" className="button button-gold">
                  Explore our programmes <ArrowUpRight size={17} />
                </Link>
                <Link
                  href="#get-involved"
                  className="button button-outline-light"
                >
                  Get involved <ArrowRight size={17} />
                </Link>
              </div>

              <div className="hero-note">
                <span className="hero-note-line" />
                <span>Heritage. Health. Education. Reconnection.</span>
              </div>
            </div>

            <div className="hero-side-note" aria-hidden="true">
              <span>HERITAGE</span>
              <span className="hero-side-divider" />
              <span>HEALTH</span>
              <span className="hero-side-divider" />
              <span>HEALING</span>
            </div>
          </div>
        </section>

        <section className="mission-section section-pad">
          <div className="page-container mission-layout">
            <div className="mission-heading">
              <span className="eyebrow">WHY OUR WORK MATTERS</span>
              <h2>
                A future of genomics that includes{" "}
                <em>all of us.</em>
              </h2>
            </div>

            <div className="mission-copy">
              <p className="lead-copy">
                Every family has a story. Every community deserves
                access to knowledge that helps make sense of it.
              </p>
              <p>
                Our work brings people closer to their heritage,
                builds awareness of family health history, creates
                room for well-being, and encourages more inclusive
                participation in research and education.
              </p>
              <p>
                We aim to make these conversations more accessible,
                respectful, and useful to communities across Africa
                and the diaspora.
              </p>
            </div>
          </div>
        </section>

        <section className="pillars-section section-pad">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">OUR AREAS OF FOCUS</span>
                <h2>Four pillars. One connected mission.</h2>
              </div>
              <p>
                Each pillar contributes to a broader approach to
                identity, health, belonging, and opportunity.
              </p>
            </div>

            <div className="pillars-grid">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article
                    className="pillar-card"
                    key={pillar.number}
                  >
                    <div className="pillar-card-top">
                      <span>{pillar.number}</span>
                      <Icon size={25} strokeWidth={1.5} />
                    </div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                    <Link
                      href="#programs"
                      className="pillar-link"
                      aria-label={`Explore programmes related to ${pillar.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="work-section section-pad"
          id="programs"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  FROM PURPOSE TO PARTICIPATION
                </span>
                <h2>Our programmes.</h2>
              </div>
              <p>
                Discover the initiatives connecting communities
                with heritage, learning, and opportunity.
              </p>
            </div>

            <div className="program-grid">
              {programs.map((program) => {
                const Icon = program.icon;

                return (
                  <article
                    className="program-card"
                    id={program.id}
                    key={program.id}
                  >
                    <div
                      className={`program-image ${program.imageClass}`}
                      role="img"
                      aria-label={`${program.title} illustrative photography`}
                    >
                      <span className="program-image-number">
                        {program.number}
                      </span>
                      <span className="program-image-label">
                        AFRIGENETRY LINK
                      </span>
                    </div>

                    <div className="program-content">
                      <span className="eyebrow">
                        {program.category}
                      </span>
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                      <Link
                        href="#get-involved"
                        className="text-link"
                      >
                        Learn how to participate
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="campaign-section">
          <div className="campaign-image" aria-hidden="true" />
          <div className="campaign-overlay" aria-hidden="true" />

          <div className="page-container campaign-content">
            <span className="eyebrow eyebrow-light">
              A LONG TERM VISION
            </span>
            <p className="campaign-kicker">
              ROOTED IN OUR PAST.
            </p>
            <h2>
              Ready for
              <br />
              <em>what comes next.</em>
            </h2>
            <p className="campaign-description">
              Rooted30 is a proposed global campaign bringing
              together ancestry discovery, family health awareness,
              genomic education, and opportunities for the next
              generation.
            </p>
            <p className="campaign-disclaimer">
              Campaign plans and targets remain subject to
              organisational approval and available resources.
            </p>
            <Link
              href="#get-involved"
              className="button button-gold"
            >
              Explore the vision <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        <section className="tripleh-section section-pad">
          <div className="page-container tripleh-layout">
            <div
              className="tripleh-visual"
              role="img"
              aria-label="Illustration of heritage, health, and healing connected through TripleH"
            >
              <div className="tripleh-orbit orbit-one" />
              <div className="tripleh-orbit orbit-two" />
              <div className="tripleh-orbit orbit-three" />

              <div className="tripleh-center">
                <span>TRIPLEH</span>
                <small>HERITAGE · HEALTH · HEALING</small>
              </div>

              <span className="orbit-label orbit-label-one">
                HERITAGE
              </span>
              <span className="orbit-label orbit-label-two">
                HEALTH
              </span>
              <span className="orbit-label orbit-label-three">
                HEALING
              </span>
            </div>

            <div className="tripleh-copy">
              <span className="status-label">
                <span />
                DIGITAL PLATFORM · IN DEVELOPMENT
              </span>
              <span className="eyebrow">
                EXPLORING THE TRIPLEH VISION
              </span>
              <h2>
                Your story is more than <em>DNA.</em>
              </h2>
              <p>
                TripleH is an envisioned digital ecosystem connecting
                heritage discovery, family health education,
                well-being, community, and trusted professional
                support.
              </p>
              <p className="tripleh-note">
                Genetic data should never be a requirement for
                everyone who wants to learn, explore their heritage,
                or connect with a community.
              </p>
              <Link
                href="#get-involved"
                className="button button-dark"
              >
                Connect with AGL <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="get-involved-section"
          id="get-involved"
        >
          <div className="page-container get-involved-content">
            <span className="eyebrow eyebrow-light">
              YOUR STORY MATTERS
            </span>
            <h2>
              There is a place
              <br />
              <em>for you at AGL.</em>
            </h2>
            <p>
              Bring your curiosity, experience, skills, or support
              to a shared mission focused on heritage, health,
              healing, and opportunity.
            </p>

            <div className="get-involved-actions">
              <Link
                href="/contact"
                className="button button-gold"
              >
                Contact our team <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="button button-outline-light"
              >
                Explore partnerships <Handshake size={17} />
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
                RESPONSIBLE BY DESIGN
              </span>
              <h2>
                Trust, dignity, and responsible use of genetic
                information matter.
              </h2>
              <p>
                Our work should respect personal choice, privacy,
                and the communities whose stories help advance
                knowledge.
              </p>
            </div>
            <Link
              href="/dna-data-ethics"
              className="button button-dark"
            >
              Our data ethics <BookOpen size={17} />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
