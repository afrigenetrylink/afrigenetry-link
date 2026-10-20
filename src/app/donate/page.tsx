import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, UsersRound, Dna } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const priorities = [
  {
    icon: Dna,
    title: "DNA access and education",
    description:
      "Help expand community awareness, DNA literacy, and opportunities for people to learn about ancestry and family history.",
  },
  {
    icon: BookOpen,
    title: "Heritage and oral history",
    description:
      "Support efforts to preserve family stories, strengthen cultural identity, and reconnect people with their heritage.",
  },
  {
    icon: HeartHandshake,
    title: "Genetic health awareness",
    description:
      "Help communities have better informed conversations about family health history, prevention, and genomic equity.",
  },
  {
    icon: UsersRound,
    title: "Community programmes",
    description:
      "Contribute to education, outreach, and initiatives that connect African communities and the global diaspora.",
  },
];

export default function DonatePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-container">
            <p className="eyebrow">Give with purpose</p>
            <h1>Your gift can help reconnect heritage, health, and community.</h1>
            <p className="hero-description">
              Your support helps AfriGenetry Link expand DNA education, heritage reconnection, and preventive health awareness for African and diaspora communities.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#ways-to-give">Explore ways to support</a>
              <Link className="button button-dark" href="/get-involved">Get involved</Link>
            </div>
          </div>
        </section>

        <section className="section-pad" id="impact">
          <div className="page-container">
            <div className="section-heading">
              <p className="eyebrow">Where support can make a difference</p>
              <h2>Help move the mission forward</h2>
              <p>
                Every contribution can help strengthen work focused on identity, family history, education, and health awareness. The specific use of funds should be confirmed with AfriGenetry Link before a donation is processed.
              </p>
            </div>
            <div className="resources-category-grid">
              {priorities.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="resources-category-card" key={item.title}>
                    <div className="resources-guide-icon"><Icon size={25} aria-hidden="true" /></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad campaign-section" id="ways-to-give">
          <div className="page-container">
            <div className="section-heading">
              <p className="eyebrow">Ways to support</p>
              <h2>Be part of the reconnection</h2>
              <p>
                We are preparing the donation process for this independent website. Online payment, recurring gifts, receipts, and donor confirmations will be enabled after the payment and record keeping integrations are selected and tested.
              </p>
            </div>
            <div className="resources-guide-card">
              <h3>Interested in making a contribution now?</h3>
              <p>
                Contact the AfriGenetry Link team to confirm current giving arrangements and the approved channels for donations. This page does not collect payment details or submit a donation.
              </p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/contact">Contact AfriGenetry Link <ArrowRight size={17} aria-hidden="true" /></Link>
                <Link className="button button-dark" href="/partner-with-us">Explore partnership</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-container">
            <div className="section-heading">
              <h2>Support does not only mean donating</h2>
              <p>
                Share your skills, build a partnership, or volunteer your time to help this work reach more people.
              </p>
              <Link className="text-link" href="/get-involved">Discover ways to get involved <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
