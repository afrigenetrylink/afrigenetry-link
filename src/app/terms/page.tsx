import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Use | AfriGenetry Link",
  description: "Guidance for using the AfriGenetry Link website.",
  alternates: { canonical: "/terms" },
};

const sections = [
          { title: "Website information", body: "Content is provided for general educational and informational purposes. AGL should review content for accuracy and update it when needed." },
          { title: "No medical advice", body: "Information about genetics, ancestry, and family health history is not a diagnosis or a substitute for advice from a qualified healthcare professional. Do not make medical decisions based only on website content." },
          { title: "Responsible use", body: "Users should not misuse the website, attempt to disrupt its operation, submit unlawful content, or provide another person’s personal information without appropriate permission." },
          { title: "External services and links", body: "Some links may lead to services operated by other organisations. Their availability, terms, and privacy practices are controlled by those providers." },
          { title: "Intellectual property and permissions", body: "Unless otherwise stated, website content should not be copied or reused in a way that infringes applicable rights. AGL must confirm ownership, permissions, and any third party material before publication." },
          { title: "Updates and contact", body: "AGL may update website content and these terms. Before publication, AGL should confirm effective dates, governing law, liability provisions, dispute handling, and an official contact route." },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-container">
            <span className="eyebrow">AFRIGENETRY LINK</span>
            <h1>Terms of Use</h1>
            <p className="hero-description">Guidance for using the AfriGenetry Link website.</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="page-container" style={{ maxWidth: "900px" }}>
            <p>This page is a working draft for organisational and legal review. It should not be treated as final terms until AGL confirms the organisation’s legal details, services, and governing requirements.</p>
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
