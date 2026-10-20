import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Dallas Community DNA Pop Up",
  description: "Event details for the AfriGenetry Link Dallas Community DNA Pop Up on November 14, 2026.",
  alternates: { canonical: "/events/dallas-community-dna-pop-up" },
  openGraph: {
    title: "Dallas Community DNA Pop Up | AfriGenetry Link",
    description: "Explore event details for AGL's Dallas Community DNA Pop Up.",
    url: "/events/dallas-community-dna-pop-up",
    type: "website",
  },
};

export default function DallasCommunityEventPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-overlay" aria-hidden="true" />
          <div className="page-container hero-content">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light">COMMUNITY EVENT · DALLAS, TEXAS</span>
              <h1>Dallas Community <span>DNA Pop Up.</span></h1>
              <p className="hero-description">An opportunity to explore ancestry, genealogy, family health history, heritage, wellness, culture, and community connection.</p>
              <div className="hero-actions">
                <Link href="/events" className="button button-outline-light"><ArrowLeft size={17} /> All events</Link>
                <Link href="/contact" className="button button-gold">Contact AGL about this event <ArrowRight size={17} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-container events-layout">
            <div>
              <span className="eyebrow">ABOUT THE EVENT</span>
              <h2>Your story is part of a bigger picture.</h2>
              <p>This community experience is designed to encourage learning and conversation around ancestry, genealogy, family health history, cultural heritage, and connection across generations.</p>
              <p>Genetic information is personal. Any decisions about DNA testing or sharing genetic data should be voluntary and informed. You do not need to share genetic data simply to learn about heritage or family health history.</p>
              <p>For accessibility questions, event updates, or enquiries about participation, contact AfriGenetry Link.</p>
              <Link href="/contact" className="button button-gold">Contact the AGL team <ArrowRight size={17} /></Link>
            </div>
            <aside className="event-card">
              <div className="event-card-top"><CalendarDays size={23} aria-hidden="true" /><span>EVENT INFORMATION</span></div>
              <h3>Plan your visit</h3>
              <div className="event-meta"><span>Saturday, November 14, 2026</span><span>11:00 AM to 3:00 PM Central Time</span></div>
              <p className="event-location"><strong>The DEC Network at RedBird</strong><br />3560 W. Camp Wisdom Rd.<br />Dallas, TX 75237</p>
              <p className="event-disclaimer">For registration and attendance questions, please contact AGL. Online registration functionality is recorded for the integration phase.</p>
            </aside>
          </div>
        </section>

        <section className="section-pad campaign-section">
          <div className="page-container">
            <div>
              <span className="eyebrow">STAY CONNECTED</span>
              <h2>Have a question before the event?</h2>
              <p>Reach out to the AGL team for event related enquiries.</p>
            </div>
            <div className="get-involved-actions">
              <Link className="button button-dark" href="/contact">Contact AGL <ArrowRight size={17} /></Link>
              <Link className="button button-outline-light" href="/events"><ArrowLeft size={17} /> Return to events</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
