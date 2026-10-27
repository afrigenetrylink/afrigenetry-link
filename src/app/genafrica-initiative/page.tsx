
import Link from "next/link";
import {
  ArrowRight,
  Dna,
  HeartPulse,
  UsersRound,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const pathways = [
  {
    icon: Dna,
    title: "Heritage and ancestry",
    text: "Support learning about ancestry, family history, lineage, and connections between Africa and the global diaspora.",
  },
  {
    icon: HeartPulse,
    title: "Genetic health awareness",
    text: "Make conversations about inherited health patterns and preventive health education more accessible.",
  },
  {
    icon: BookOpen,
    title: "Genomic literacy",
    text: "Build understanding of DNA, genetics, consent, and the limits of genetic information through community education.",
  },
  {
    icon: UsersRound,
    title: "Community connection",
    text: "Create welcoming spaces for families, educators, community organisations, and diaspora partners to learn together.",
  },
];

const communityPrograms = [
  {
    number: "01",
    category: "COMMUNITY & DNA EDUCATION",
    title: "Community DNA Pop Up",
    description:
      "Community focused experiences connecting DNA education, ancestry discovery, family history, identity, and genetic health awareness in welcoming and accessible settings.",
    href: "/events/dallas-community-dna-pop-up",
    linkText: "Explore Community DNA Pop Up",
    icon: Dna,
  },
  {
    number: "02",
    category: "MOBILE COMMUNITY OUTREACH",
    title: "DNA On Wheels",
    description:
      "A mobile outreach programme designed to bring DNA awareness, ancestry education, and family health history conversations directly to communities.",
    href: "/dna-on-wheels",
    linkText: "Explore DNA On Wheels",
    icon: UsersRound,
  },
];

export default function GenAfricaInitiativePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* GENAFRICA INTRODUCTION */}
        <section className="page-hero">
          <div className="page-container">
            <span className="eyebrow">OUR WORK · GENAFRICA</span>

            <h1>Heritage, health and reconnection, rooted in community.</h1>

            <p className="hero-description">
              The GenAfrica Initiative brings DNA education, ancestry
              awareness, genetic health learning, and community engagement
              into conversations shaped around African communities and the
              global diaspora.
            </p>

            <div className="hero-actions">
              <Link className="button button-gold" href="/events">
                Explore events <ArrowRight size={18} />
              </Link>

              <Link className="button button-dark" href="/get-involved">
                Get involved
              </Link>
            </div>
          </div>
        </section>

        {/* GENAFRICA PATHWAYS */}
        <section className="section-pad">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">THE APPROACH</span>
                <h2>Four connected pathways</h2>
              </div>

              <p>
                GenAfrica connects heritage and health education with
                community participation. Activities and availability may
                vary by programme and location.
              </p>
            </div>

            <div className="resources-category-grid">
              {pathways.map(({ icon: Icon, title, text }) => (
                <article
                  className="resources-category-card"
                  key={title}
                >
                  <div className="resources-guide-icon">
                    <Icon size={25} aria-hidden="true" />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GENAFRICA COMMUNITY PROGRAMMES */}
        <section className="section-pad" id="community-programmes">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  PART OF THE GENAFRICA INITIATIVE
                </span>

                <h2>
                  Bringing DNA education closer to our communities.
                </h2>
              </div>

              <p>
                GenAfrica brings its mission to life through community
                education and outreach. Discover the two programmes
                connecting people with ancestry, identity, and family
                health awareness.
              </p>
            </div>

            <div className="resources-category-grid">
              {communityPrograms.map(
                ({
                  number,
                  category,
                  title,
                  description,
                  href,
                  linkText,
                  icon: Icon,
                }) => (
                  <article
                    className="resources-category-card"
                    key={title}
                  >
                    <div className="resources-guide-icon">
                      <Icon size={25} aria-hidden="true" />
                    </div>

                    <span className="eyebrow">
                      {number} · {category}
                    </span>

                    <h3>{title}</h3>

                    <p>{description}</p>

                    <Link className="text-link" href={href}>
                      {linkText} <ArrowRight size={16} />
                    </Link>
                  </article>
                )
              )}
            </div>

            <div
              className="resources-guide-card"
              style={{ marginTop: "24px" }}
            >
              <ShieldCheck size={28} aria-hidden="true" />

              <div className="resources-guide-copy">
                <h3>Consent and understanding matter</h3>

                <p>
                  Genetic information can be sensitive. Participants
                  should understand the purpose of an activity, what
                  participation involves, and the applicable consent
                  and data handling arrangements before taking part.
                </p>

                <Link className="text-link" href="/faqs">
                  Read frequently asked questions{" "}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERSHIPS AND VOLUNTEERING */}
        <section className="section-pad">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">GET INVOLVED</span>

                <h2>Help bring learning into more communities.</h2>
              </div>

              <p>
                Community groups, institutions, volunteers, and
                potential partners can connect with AGL to discuss
                opportunities to support the GenAfrica Initiative
                and its community programmes.
              </p>
            </div>

            <div className="hero-actions">
              <Link className="button button-gold" href="/partner-with-us">
                Partner with us <ArrowRight size={17} />
              </Link>

              <Link
                className="button button-dark"
                href="/volunteer-application"
              >
                Volunteer <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
