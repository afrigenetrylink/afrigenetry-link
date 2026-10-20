import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "DNA Data Ethics | AfriGenetry Link",
  description: "Consent, privacy, and responsible use of genetic information.",
  alternates: { canonical: "/dna-data-ethics" },
};

const sections = [
          { title: "Informed and voluntary participation", body: "People should receive clear information about what a DNA activity involves, its purpose, possible limits, and available choices before deciding whether to participate." },
          { title: "Choice and data minimisation", body: "Collect only the information genuinely needed for a clearly explained purpose. People should be able to explore heritage education without being pressured to upload genetic data." },
          { title: "Privacy and security", body: "Any programme involving genetic or health information needs an approved data handling plan, access controls, retention and deletion rules, and appropriate safeguards before collection begins." },
          { title: "Limits of genetic interpretation", body: "DNA ancestry estimates are not complete records of identity, culture, nationality, or family history. Genetic health information should be interpreted with qualified professionals where appropriate." },
          { title: "Research and third party sharing", body: "Any research use or sharing with laboratories, researchers, or service providers must be clearly disclosed and supported by appropriate consent, governance, and safeguards." },
          { title: "Questions and concerns", body: "Before any DNA-related service launches, AGL should publish a verified process for privacy questions, consent withdrawal where applicable, and concerns about data handling." },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-container">
            <span className="eyebrow">AFRIGENETRY LINK</span>
            <h1>DNA Data Ethics</h1>
            <p className="hero-description">Consent, privacy, and responsible use of genetic information.</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="page-container" style={{ maxWidth: "900px" }}>
            <p>Genetic information is personal and can reveal information about relatives as well as the person tested. This page is educational guidance, not a statement that AGL currently collects, stores, or processes DNA data.</p>
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
