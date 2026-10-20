import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, ShieldCheck, UsersRound } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact AfriGenetry Link about heritage education, genomic health awareness, partnerships, volunteering, and community programmes.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact AfriGenetry Link",
    description:
      "Connect with AfriGenetry Link about our work, community programmes, and partnerships.",
    url: "/contact",
    type: "website",
  },
};

const contactTopics = [
  {
    title: "Community and programmes",
    description:
      "Ask about GenAfrica, community DNA awareness events, heritage education, and other AGL initiatives.",
    icon: UsersRound,
  },
  {
    title: "Partnerships and collaboration",
    description:
      "Connect with us about research, education, public health, community organisations, and partnership opportunities.",
    icon: MessageCircle,
  },
  {
    title: "Privacy and responsible DNA education",
    description:
      "Ask questions about informed consent, responsible DNA education, and the careful treatment of genetic information.",
    icon: ShieldCheck,
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="resources-page contact-page">
        <section className="hero resources-page-hero">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content page-container">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light">LET’S CONNECT</span>
              <h1>Start a conversation with AfriGenetry Link.</h1>
              <p>
                Have a question about our work, want to explore a partnership,
                or looking for ways to get involved? We welcome conversations
                that help connect heritage, health, education, and community.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contact-form">
                  Send us a message <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="button button-outline-light" href="mailto:info@afrigenetrylink.org">
                  Email AGL
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-container">
            <div className="section-heading">
              <span className="eyebrow">HOW CAN WE HELP?</span>
              <h2>Choose the conversation you want to start.</h2>
              <p>
                AfriGenetry Link is a nonprofit focused on DNA education,
                genetic health awareness, heritage access, and connections
                between Africans and the global diaspora.
              </p>
            </div>

            <div className="resources-category-grid">
              {contactTopics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <article className="resources-category-card" key={topic.title}>
                    <div className="resources-guide-icon">
                      <Icon size={25} aria-hidden="true" />
                    </div>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                    <a href="#contact-form" className="text-link">
                      Contact AGL <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad campaign-section resources-feature" id="contact-form">
          <div className="page-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <span className="eyebrow">GET IN TOUCH</span>
              <h2>We’d be glad to hear from you.</h2>
              <p>
                Send your message directly through this website. Our team can
                follow up using the email address you provide.
              </p>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginTop: 28 }}>
                <Mail size={24} aria-hidden="true" style={{ color: "#a48653", flexShrink: 0, marginTop: 4 }} />
                <div>
                  <h3 style={{ margin: "0 0 8px" }}>Prefer email?</h3>
                  <a href="mailto:info@afrigenetrylink.org">info@afrigenetrylink.org</a>
                </div>
              </div>
              <p style={{ marginTop: 28, fontSize: 13, lineHeight: 1.8 }}>
                For your privacy, please do not send DNA files, genetic test
                results, medical records, or other sensitive health information
                through this general enquiry form.
              </p>
            </div>

            <div style={{ minWidth: 0, padding: "clamp(22px, 4vw, 38px)", border: "1px solid #e4dbce", background: "#fffdf8", boxShadow: "0 12px 40px rgb(56 37 31 / 5%)" }}>
              <h2 style={{ marginTop: 0, marginBottom: 10, fontSize: "clamp(25px, 3vw, 34px)" }}>Send a message</h2>
              <p style={{ marginTop: 0, marginBottom: 28, color: "#6b625b", fontSize: 14, lineHeight: 1.7 }}>
                Fields marked as required must be completed before sending.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-container contact-next-steps">
            <span className="eyebrow">KEEP EXPLORING</span>
            <h2>Learn more about our work.</h2>
            <div className="hero-actions">
              <Link className="button button-gold" href="/our-work">Explore our work <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link className="button button-dark" href="/resources">Explore resources</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
