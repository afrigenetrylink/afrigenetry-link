import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, HeartHandshake } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Events & Community Programmes",
  description: "Explore AfriGenetry Link community events, heritage education, DNA awareness, family health history, and diaspora connection programmes.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events & Community Programmes | AfriGenetry Link",
    description: "Find AfriGenetry Link events and community learning experiences.",
    url: "/events",
    type: "website",
  },
};

const event = {
  title: "Dallas Community DNA Pop Up",
  date: "Saturday, November 14, 2026",
  time: "11:00 AM to 3:00 PM Central Time",
  venue: "The DEC Network at RedBird",
  address: "3560 W. Camp Wisdom Rd., Dallas, TX 75237",
  description: "A community experience bringing together conversations about ancestry, genealogy, family health history, heritage, wellness, culture, and connection.",
};

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-overlay" aria-hidden="true" />
          <div className="page-container hero-content">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light">GATHER · LEARN · CONNECT</span>
              <h1>Where community meets <span>discovery.</span></h1>
              <p className="hero-description">AGL events create space for heritage learning, DNA education, family health awareness, cultural connection, and conversations across generations.</p>
              <div className="hero-actions">
                <Link href="#upcoming-events" className="button button-gold">Explore upcoming events <ArrowRight size={17} /></Link>
                <Link href="/contact" className="button button-outline-light">Ask about an event</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="upcoming-events">
          <div className="page-container">
            <div className="section-heading">
              <span className="eyebrow">UPCOMING EVENT</span>
              <h2>Make room for your story.</h2>
              <p>Join the community for a learning experience focused on ancestry, family history, and health awareness.</p>
            </div>

            <article className="event-card">
              <div className="event-card-top"><CalendarDays size={23} aria-hidden="true" /><span>FEATURED COMMUNITY EXPERIENCE</span></div>
              <div >
                <span className="eyebrow">DALLAS, TEXAS</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-meta"><span>{event.date}</span><span>{event.time}</span><span>{event.venue}</span></div>
                <p className="event-location">{event.address}</p>
                <div className="hero-actions">
                  <Link className="button button-gold" href="/events/dallas-community-dna-pop-up">View event details <ArrowRight size={17} /></Link>
                  <Link className="text-link" href="/contact">Questions about attending? <ArrowRight size={16} /></Link>
                </div>
              </div>
              <p className="event-disclaimer">Event registration and attendance details will be handled through the new AGL website as the registration workflow is completed.</p>
            </article>
          </div>
        </section>

        <section className="section-pad campaign-section">
          <div className="page-container">
            <div>
              <span className="eyebrow">COMMUNITY & PARTNERSHIPS</span>
              <h2>Would you like to host, support, or collaborate on an event?</h2>
              <p>We welcome enquiries from community groups, educators, researchers, health organisations, and potential partners.</p>
            </div>
            <div className="get-involved-actions">
              <Link className="button button-dark" href="/contact"><HeartHandshake size={18} /> Contact AGL</Link>
              <Link className="button button-outline-light" href="/our-work">Explore our work <ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
