import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Notice | AfriGenetry Link",
  description: "How AfriGenetry Link approaches personal information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
          { title: "Information you may provide", body: "Depending on the activity, you may choose to provide contact details or information when contacting AGL, volunteering, partnering, registering for an event, or joining a mailing list. Do not submit genetic data or sensitive health information through a general contact form." },
          { title: "How information may be used", body: "Information may be used to respond to enquiries, coordinate requested participation, communicate about programmes or events, and administer services you have asked to receive. The final policy must identify the actual purposes and lawful bases that apply." },
          { title: "Sharing and service providers", body: "Information should only be shared when needed for an identified purpose, with appropriate safeguards, or when required by law. The final policy must name or describe any relevant service providers and explain any international transfers." },
          { title: "Retention and security", body: "AGL should define retention periods and maintain reasonable administrative and technical safeguards. No website can promise absolute security." },
          { title: "Your choices and questions", body: "You may contact AGL to ask about personal information or mailing preferences. The final published policy must provide a verified privacy contact and explain applicable rights and how to exercise them." },
          { title: "Genetic and health information", body: "Genetic and health information can be especially sensitive. This website should not collect such information unless a clearly explained, approved process and suitable safeguards are in place. Participation in learning about ancestry does not require sharing DNA data." },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-container">
            <span className="eyebrow">AFRIGENETRY LINK</span>
            <h1>Privacy Notice</h1>
            <p className="hero-description">How AfriGenetry Link approaches personal information.</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="page-container" style={{ maxWidth: "900px" }}>
            <p>This page is a working draft for review, not a final legal policy. AGL should confirm its actual data practices, applicable legal obligations, retention periods, and contact details before publication.</p>
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
