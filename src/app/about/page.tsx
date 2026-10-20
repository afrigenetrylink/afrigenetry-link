import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Dna,
  Globe2,
  HeartPulse,
  GraduationCap,
  HandHeart,
  Sparkles,
  UsersRound,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover AfriGenetry Link's mission to connect Africans and people of African descent with ancestry education, genomic awareness, community wellness, and opportunity.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AfriGenetry Link",
    description:
      "Learn about our mission, guiding principles, and vision for a more inclusive future in heritage and genomics.",
    url: "/about",
    type: "website",
  },
};

const pillars = [
  {
    number: "01",
    title: "Heritage, Identity & Ancestry",
    description:
      "Support the exploration of ancestral roots, family histories, cultural connections, and the stories that connect generations.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Health & Genomics",
    description:
      "Make genomic education and family health history awareness easier to understand, supporting informed conversations with healthcare professionals.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Healing & Community Wellness",
    description:
      "Create opportunities for belonging, cultural connection, emotional well being, and community support.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Research, Data & Innovation",
    description:
      "Encourage responsible research, stronger representation, ethical collaboration, and more inclusive scientific knowledge.",
    icon: Dna,
  },
  {
    number: "05",
    title: "Education & Workforce Development",
    description:
      "Promote learning, mentorship, professional development, and opportunities in genomics and related fields.",
    icon: GraduationCap,
  },
];

const principles = [
  {
    title: "People before technology",
    description:
      "Science and digital tools should serve people, respect individual choices, and support meaningful community needs.",
    icon: UsersRound,
  },
  {
    title: "Respect for heritage",
    description:
      "Ancestry is part of a person's story. Cultural identity and lived experience deserve respect beyond genetic information.",
    icon: Compass,
  },
  {
    title: "Responsible knowledge",
    description:
      "Genomic education should encourage informed decisions, respect privacy, and distinguish education from medical advice.",
    icon: Dna,
  },
  {
    title: "Opportunity through inclusion",
    description:
      "Knowledge, mentorship, collaboration, and participation should help open doors for Africans and the global diaspora.",
    icon: HandHeart,
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="about-page">
        <section className="about-hero" id="about">
          <div className="page-container about-hero-layout">
            <div className="about-hero-copy">
              <span className="eyebrow eyebrow-light">
                GET TO KNOW AFRIGENETRY LINK
              </span>

              <h1>
                Our roots connect us.
                <br />
                <em>Our future brings us together.</em>
              </h1>

              <p>
                AfriGenetry Link connects Africans and people of African
                descent with opportunities to explore heritage, understand
                family health history, access knowledge, and participate in a
                more inclusive future for genomics.
              </p>

              <div className="about-hero-actions">
                <Link href="/#work" className="button button-gold">
                  Explore our work
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>

                <Link
                  href="/#get-involved"
                  className="button button-outline-light"
                >
                  Get involved
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="about-hero-art" aria-hidden="true">
              <div className="about-art-ring about-art-ring-one" />
              <div className="about-art-ring about-art-ring-two" />
              <div className="about-art-ring about-art-ring-three" />

              <div className="about-art-center">
                <span className="about-art-symbol">A.</span>
                <span>AFRIGENETRY LINK</span>
                <small>HERITAGE · HEALTH · HEALING</small>
              </div>

              <span className="about-art-label about-art-label-one">
                IDENTITY
              </span>
              <span className="about-art-label about-art-label-two">
                WELLNESS
              </span>
              <span className="about-art-label about-art-label-three">
                OPPORTUNITY
              </span>
            </div>
          </div>

          <div className="about-hero-bottom">
            <div className="page-container">
              <span>ROOTED IN HERITAGE</span>
              <span aria-hidden="true" />
              <span>CONNECTED BY POSSIBILITY</span>
            </div>
          </div>
        </section>

        <section className="about-intro section-pad" id="mission">
          <div className="page-container about-intro-layout">
            <div className="about-section-label">
              <span className="eyebrow">WHO WE ARE</span>
              <span className="about-section-number">01 / OUR STORY</span>
            </div>

            <div className="about-intro-copy">
              <h2>
                The future of genomics should
                <em> include all of us.</em>
              </h2>

              <p className="lead-copy">
                Our ancestry, family histories, health, and lived experiences
                are connected to the stories we carry and the future we build.
              </p>

              <p>
                AfriGenetry Link exists to help make heritage education,
                genomic awareness, community wellness, research
                representation, and professional opportunities more
                accessible to Africans and people of African descent
                worldwide.
              </p>

              <p>
                We bring these areas together through education, community
                engagement, collaboration, and a vision for responsible
                innovation. Our aim is to help people learn, connect, and
                participate in shaping what comes next.
              </p>

              <Link href="/#work" className="text-link">
                Discover our programs
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="about-purpose section-pad" id="purpose">
          <div className="page-container">
            <div className="about-purpose-heading">
              <span className="eyebrow eyebrow-light">
                WHY THIS WORK MATTERS
              </span>

              <h2>
                Knowledge creates
                <br />
                <em>room for possibility.</em>
              </h2>

              <p>
                People deserve accessible information and meaningful
                opportunities to explore their histories, understand health
                information, and take part in scientific progress.
              </p>
            </div>

            <div className="about-purpose-grid">
              <article>
                <span>01 / IDENTITY</span>
                <h3>Know your story.</h3>
                <p>
                  Encourage ancestry education, family history discovery,
                  cultural reconnection, and intergenerational storytelling.
                </p>
              </article>

              <article>
                <span>02 / HEALTH</span>
                <h3>Understand what matters.</h3>
                <p>
                  Support awareness of family health history and provide
                  accessible education for more informed health conversations.
                </p>
              </article>

              <article>
                <span>03 / INCLUSION</span>
                <h3>Help shape the future.</h3>
                <p>
                  Promote education, responsible research participation,
                  collaboration, and wider opportunities in genomics.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-pillars section-pad" id="pillars">
          <div className="page-container">
            <div className="section-heading about-pillars-heading">
              <div>
                <span className="eyebrow">OUR GUIDING FRAMEWORK</span>
                <h2>Five pillars. One connected mission.</h2>
              </div>

              <p>
                These five areas guide our programs, educational priorities,
                partnerships, and long term ambitions.
              </p>
            </div>

            <div className="about-pillars-grid">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article className="about-pillar-card" key={pillar.number}>
                    <div className="about-pillar-top">
                      <span>{pillar.number}</span>
                      <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                    </div>

                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-principles section-pad" id="principles">
          <div className="page-container">
            <div className="about-principles-heading">
              <span className="eyebrow">WHAT GUIDES US</span>
              <h2>
                Progress with
                <em> people at the centre.</em>
              </h2>
              <p>
                Our vision depends on trust, respect, responsible education,
                and meaningful participation.
              </p>
            </div>

            <div className="about-principles-grid">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <article className="about-principle-card" key={principle.title}>
                    <span className="about-principle-index">
                      0{index + 1}
                    </span>

                    <div className="about-principle-icon">
                      <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                    </div>

                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>



        <section className="section-pad" id="leadership">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">OUR LEADERSHIP</span>
                <h2>Meet our leadership.</h2>
              </div>
              <p>
                Meet the people guiding AfriGenetry Link across governance,
                programs, research, partnerships, genomic health, genealogy,
                education, and community engagement.
              </p>
            </div>

            <div className="resources-category-grid">
              {[
                { role: "Chairperson, Board of Directors", name: "Dr. Michelle Anyadioha", bio: "A strategic leader with over 15 years of cross-sector experience in innovation, strategic research, organizational leadership, and community impact." },
                { role: "Founder & Executive Director", name: "Princess Ndupu", bio: "A nonprofit founder and strategic program leader working across genealogy, genomic health, community education, and African diaspora reconnection." },
                { role: "Vice Chairperson, Board of Directors", name: "Jessica Clay", bio: "A healthcare and operations leader with experience in provider relations, value based care, business development, stakeholder engagement, and strategic partnerships." },
                { role: "Chief Program Officer", name: "Dr. Austen Okumo", bio: "A certified Project Manager with over 20 years of experience in governance reform, project management, public finance, and health systems strengthening." },
                { role: "Director of Strategic Initiatives & Operations", name: "Susan Remane", bio: "A program strategy and organizational development leader with experience in research, education, stakeholder engagement, community development, and international program delivery." },
                { role: "Chief Financial & Compliance Officer", name: "Tonny Okotchono", bio: "A Chartered Risk Analyst with experience in audit, finance, risk management, compliance, and regulatory oversight across public and international organizations." },
                { role: "Director of Partnerships & Resource Mobilization", name: "Ezra Nwemeh", bio: "A higher education and project development professional with experience in strategic partnerships, business development, program coordination, and stakeholder engagement." },
                { role: "Director, Genomic Health, Equity & Prevention Center", name: "Dr. Sarah Nabukera", bio: "A medical doctor and global public health leader with experience in health policy, epidemiology, maternal and child health, and health systems." },
                { role: "Director, Heritage, Genealogy & Identity Center", name: "Melissa Le Nicol", bio: "A forensic investigative genetic genealogist specializing in family tree reconstruction, heir location, forensic biology, and complex family history research." },
                { role: "Regional Director, North America", name: "Brooke McGilvery", bio: "An educator, entrepreneur, and community leader with experience in educational leadership, program development, and community engagement." },
                { role: "Regional Director, South America", name: "Suzana Santiago", bio: "A certified family historian, genealogist, and heritage researcher specializing in historical records, family tree reconstruction, and Afro Brazilian cultural heritage." },
                { role: "Regional Director, East Africa", name: "Joseph Kaita", bio: "A strategic development and social impact leader with experience in fundraising, donor relations, research, partnerships, and program implementation." },
                { role: "Chief Communications & Marketing Officer | Board Member", name: "Sheri D. Neely, MBA", bio: "A strategic communications and marketing executive with experience in public relations, reputation strategy, media, executive communications, and stakeholder engagement." },
              ].map((leader) => (
                <article className="resources-category-card" key={leader.name}>
                  <span className="eyebrow">{leader.role}</span>
                  <h3>{leader.name}</h3>
                  <p>{leader.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-future section-pad" id="future">
          <div className="page-container about-future-layout">
            <div>
              <span className="eyebrow">LOOKING AHEAD</span>

              <h2>
                Building connections
                <em> that move us forward.</em>
              </h2>
            </div>

            <div className="about-future-copy">
              <p>
                We envision a future where ancestry education, family health
                awareness, genomic learning, community connection, and
                professional opportunities are easier to access.
              </p>

              <p>
                This is an evolving vision. Programs, partnerships, and
                services will develop as resources, collaboration, and
                community needs allow.
              </p>

              <Link href="/#get-involved" className="text-link">
                Be part of the journey
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="page-container about-cta-content">
            <div>
              <span className="eyebrow eyebrow-light">
                YOUR STORY MATTERS
              </span>

              <h2>
                There is a place
                <br />
                <em>for you in this story.</em>
              </h2>

              <p>
                Explore our work, connect with the community, or discover
                ways to support a more inclusive future.
              </p>
            </div>

            <div className="about-cta-actions">
              <Link href="/#work" className="button button-gold">
                Explore our work
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>

              <Link
                href="/#get-involved"
                className="button button-outline-light"
              >
                Get involved
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}