import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Governance and Accountability | AfriGenetry Link",
  description: "How responsible stewardship supports AGL’s mission.",
  alternates: { canonical: "/governance" },
};

const sections = [
          { title: "Mission and stewardship", body: "AfriGenetry Link’s work connects heritage, ancestry education, family health history awareness, community, and opportunities in genomics. Governance should support that mission with clear responsibility and careful stewardship." },
          { title: "Accountability", body: "Organisational decision making, financial controls, programme oversight, conflicts of interest, and reporting responsibilities should be documented in approved internal policies." },
          { title: "Ethical programmes", body: "Programmes involving communities, health information, genetic data, or research should have appropriate consent, privacy, safeguarding, and oversight procedures before they begin." },
          { title: "Transparency and impact", body: "Impact reports and public statements should use verified information, explain the reporting period, and distinguish completed activities from plans or future goals." },
          { title: "Contact and updates", body: "Questions about governance can be directed through AGL’s local Contact page. Any named officers, formal policies, financial disclosures, or regulatory statements should be confirmed by AGL before publication." },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-container">
            <span className="eyebrow">AFRIGENETRY LINK</span>
            <h1>Governance and Accountability</h1>
            <p className="hero-description">How responsible stewardship supports AGL’s mission.</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="page-container" style={{ maxWidth: "900px" }}>
            <p>This page is a public-facing framework, not a substitute for AGL’s approved governance documents. Publish specific board, leadership, financial, and accountability details only after they are verified and approved.</p>
            <div className="content-list">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </article>
              ))}
            </div>
            <p>For general enquiries, visit the <a href="/contact">Contact page</a>.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
