import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Dna,
  HeartPulse,
  HandHeart,
  ShieldCheck,
  UsersRound,
  Globe2,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "GenAfrica: Free DNA Access & Community Wellness Events",
  description:
    "Explore the GenAfrica Initiative's original description of community DNA pop-ups, ancestry and health education pathways, consent, and community benefit.",
  alternates: { canonical: "/genafrica-free-dna" },
};

const eventElements = [
  "Ancestry restoration",
  "Family tracing",
  "Hereditary disease education",
  "Genomic literacy",
  "Local referral support",
  "Ethical data governance",
  "Return of personal and community benefit",
];

const ancestryPathway = [
  "Ancestry origins",
  "Migration pathways",
  "Ethnic lineage",
  "Family matching",
  "Raw ancestry file support",
  "Heritage education",
  "Diaspora reconnection",
  "Identity restoration",
  "Free genealogical support",
  "Generational mental healing",
];

const healthPathway = [
  "Hereditary disease risk education",
  "Early disease awareness",
  "Hereditary disease prevention education",
  "Drug-response understanding",
  "Family health literacy",
  "Public health education",
  "Precision health inclusion for African communities",
  "Optional raw genomic data file",
];

const personalReturn = [
  "Pharmacogenomic markers",
  "Carrier screening insights",
  "Preventive wellness guidance and resources",
  "Family health risk patterns",
  "Local medical referral support",
  "Genetic and culturally sensitive counselling",
  "Identity restoration and diaspora reconnection",
  "Oral history validation and cultural belonging",
  "Family connection and intergenerational healing",
];

const communityReturn = [
  "Hereditary disease awareness campaigns",
  "Sickle cell, cancer, and diabetes education",
  "Public health trend reporting",
  "Community disease prevention education",
  "Anonymised insights for public health planning",
  "Workforce and volunteer training",
];

const scientificReturn = [
  "African reference variant libraries",
  "Pharmacogenomics learning systems",
  "Disease-risk enrichment datasets",
  "AI precision health tools",
  "Drug-response diversity research",
  "Diagnostic accuracy innovation",
];

const consentLayers = [
  "Ancestry consent",
  "Health genomics consent",
  "Optional research consent",
  "AI and pharmaceutical consent",
  "Recontact permission",
];

const governance = [
  "Data Access Committee",
  "Community Protection Board",
  "Local ethics review",
  "Benefit-sharing policy",
];

const targets = [
  { value: "85+", label: "Communities and campuses reached" },
  { value: "10,000+", label: "DNA kits distributed" },
  { value: "12", label: "Countries activated" },
  { value: "50+", label: "Disease awareness campaigns" },
  { value: "15+", label: "Research and lab partnerships" },
  { value: "2,000+", label: "Health referrals enabled" },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="agl-source-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function GenAfricaFreeDnaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-container">
            <span className="eyebrow">GENAFRICA INITIATIVE · COMMUNITY ACCESS</span>
            <h1>Community DNA Pop-Ups: heritage, health, and community benefit.</h1>
            <p className="hero-description">
              The original GenAfrica programme description presents community DNA pop-ups as community-first experiences with separate ancestry and health genomics pathways, supported by education, consent, and community governance.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/events">
                Explore events <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className="button button-dark" href="/contact">
                Contact AGL
              </Link>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-container">
            <div className="section-heading">
              <span className="eyebrow">THE COMMUNITY DNA POP-UP</span>
              <h2>One community experience, two distinct pathways.</h2>
              <p>
                The source describes an experience intended to connect ancestry and health learning while keeping the two DNA pathways distinct.
              </p>
            </div>
            <div className="resources-category-grid">
              {eventElements.map((item) => (
                <article className="resources-category-card" key={item}>
                  <div className="resources-guide-icon"><Dna size={24} aria-hidden="true" /></div>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
            <p className="agl-process-line">Register → Sample collection → Education → Results → Benefit return</p>
          </div>
        </section>

        <section className="section-pad campaign-section">
          <div className="page-container">
            <div className="section-heading">
              <span className="eyebrow">THE DUAL DNA PATHWAY</span>
              <h2>Separate pathways for ancestry and health learning.</h2>
            </div>
            <div className="resources-category-grid">
              <article className="resources-category-card">
                <div className="resources-guide-icon"><Globe2 size={25} aria-hidden="true" /></div>
                <h3>Lane 1: Ancestry &amp; Identity DNA</h3>
                <p>This pathway is described as supporting ancestry exploration, family history, and diaspora reconnection.</p>
                <BulletList items={ancestryPathway} />
              </article>
              <article className="resources-category-card">
                <div className="resources-guide-icon"><HeartPulse size={25} aria-hidden="true" /></div>
                <h3>Lane 2: Community Health Genomics DNA</h3>
                <p>This pathway is described as supporting genetic health education, family health literacy, and public health learning.</p>
                <BulletList items={healthPathway} />
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-container">
            <div className="section-heading">
              <span className="eyebrow">RETURN OF BENEFIT FIRST</span>
              <h2>Personal, community, and scientific benefit.</h2>
              <p>The original programme description sets out three intended areas of benefit.</p>
            </div>
            <div className="resources-category-grid">
              <article className="resources-category-card">
                <div className="resources-guide-icon"><HandHeart size={25} aria-hidden="true" /></div>
                <h3>Personal return</h3>
                <BulletList items={personalReturn} />
              </article>
              <article className="resources-category-card">
                <div className="resources-guide-icon"><UsersRound size={25} aria-hidden="true" /></div>
                <h3>Community return</h3>
                <p>The source also describes a stated target of reducing preventable genetically related deaths by 40% by 2030. This is a programme target from the source, not a verified outcome.</p>
                <BulletList items={communityReturn} />
              </article>
              <article className="resources-category-card">
                <div className="resources-guide-icon"><BookOpen size={25} aria-hidden="true" /></div>
                <h3>Scientific return</h3>
                <p>The source says research use would require separate, optional research consent and de-identification.</p>
                <BulletList items={scientificReturn} />
              </article>
            </div>
            <p className="agl-source-note">
              The original page states that DNA is not collected for extraction and that participant benefit comes first. Actual services, results, eligibility, timelines, and availability must be confirmed with AGL before anyone registers or provides a sample.
            </p>
          </div>
        </section>

        <section className="section-pad campaign-section">
          <div className="page-container contact-details-layout">
            <div>
              <span className="eyebrow">HOW DNA DATA IS PROTECTED</span>
              <h2>Layered consent and responsible governance.</h2>
              <p>
                The source describes layered consent, de-identification, ethics review, and oversight through the AGL Data Access Committee. These are programme descriptions and should be verified against current policies before launch.
              </p>
              <BulletList items={consentLayers} />
              <div className="resources-guide-icon"><ShieldCheck size={25} aria-hidden="true" /></div>
              <BulletList items={[
                "African data sovereignty",
                "IRB and ethics alignment",
                "Participant withdrawal rights",
                "Controlled-access data",
              ]} />
            </div>
            <aside className="resources-guide-card">
              <h3>Community-owned genomic governance</h3>
              <p>The source names the AGL Community Genomic Intelligence Network (CGIN) as the scientific and ethical data infrastructure behind the GenAfrica Initiative.</p>
              <BulletList items={governance} />
              <Link className="text-link" href="/dna-data-ethics">Read about DNA data ethics <ArrowRight size={16} aria-hidden="true" /></Link>
            </aside>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-container">
            <div className="section-heading">
              <span className="eyebrow">2026–2027 TARGET IMPACT</span>
              <h2>Why representation and access matter.</h2>
              <p>
                The original page lists the following 2026–2027 targets. They are reproduced as targets from the source, not as independently verified current results.
              </p>
            </div>
            <div className="resources-category-grid">
              {targets.map((target) => (
                <article className="resources-category-card" key={target.label}>
                  <h3 className="agl-target-value">{target.value}</h3>
                  <p>{target.label}</p>
                </article>
              ))}
            </div>
            <p className="agl-source-note">
              The source explains that African populations remain underrepresented in global genomic research and frames these targets as a way to support ethical local inclusion and return of benefit. Please confirm the targets and their current status with AGL before public promotion.
            </p>
          </div>
        </section>

        <section className="section-pad campaign-section">
          <div className="page-container">
            <span className="eyebrow">BE PART OF THE COMMUNITY GENOMICS FUTURE</span>
            <h2>Help build community-led learning and partnership.</h2>
            <p className="hero-description">
              Volunteers and potential research partners can contact AGL to confirm current opportunities and programme arrangements.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/get-involved">Volunteer with AGL <ArrowRight size={17} aria-hidden="true" /></Link>
              <Link className="button button-dark" href="/partner-with-us">Explore partnerships</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
