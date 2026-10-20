import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Accessibility Statement | AfriGenetry Link",
  description: "Our aim is to make AGL information easier for everyone to use.",
  alternates: { canonical: "/accessibility" },
};

const sections = [
          { title: "Our commitment", body: "AfriGenetry Link aims to make its website usable by people with different abilities, devices, and assistive technologies." },
          { title: "Design practices", body: "The website should use meaningful headings, descriptive links, visible form labels, sufficient colour contrast, keyboard accessible controls, and useful alternative text for meaningful images." },
          { title: "Ongoing improvement", body: "Accessibility must be checked across mobile phones, tablets, laptops, desktops, keyboard navigation, and screen readers. Automated checks alone do not establish full accessibility." },
          { title: "Report a barrier", body: "If you encounter an accessibility barrier, contact AGL through the local Contact page and describe the page and issue. A verified accessibility contact and response process should be confirmed before launch." },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-container">
            <span className="eyebrow">AFRIGENETRY LINK</span>
            <h1>Accessibility Statement</h1>
            <p className="hero-description">Our aim is to make AGL information easier for everyone to use.</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="page-container" style={{ maxWidth: "900px" }}>
            <p>This statement describes the website’s accessibility commitment. It does not claim that a formal accessibility audit or certification has been completed.</p>
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
