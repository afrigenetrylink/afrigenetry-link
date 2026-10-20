import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Globe2, UsersRound, Mail, CalendarClock } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "DNA Pilot Programme Team | AfriGenetry Link",
  description: "Learn about the original AfriGenetry Link DNA Pilot Programme team invitation and find current ways to express interest in volunteering.",
  alternates: { canonical: "/join-the-pilot-program-team" },
};

const applicantGroups = [
  "People passionate about African heritage and diaspora reconnection",
  "Public health professionals, researchers, and historians",
  "Tech savvy organisers and community leaders",
  "Students or professionals interested in genetics, wellness, and cultural healing",
  "Anyone ready to be a voice for Africa in the global DNA space",
];

export default function PilotProgrammeTeamPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero section-pad">
          <div className="page-container">
            <Link href="/get-involved" className="text-link"><ArrowLeft size={16} aria-hidden="true" /> Back to Get Involved</Link>
            <span className="eyebrow">GENAFRICA · COMMUNITY PARTICIPATION</span>
            <h1>Join Our DNA Pilot Programme Team</h1>
            <p className="hero-description">Help us reconnect Africa’s heritage, health, and home.</p>
            <p className="hero-description">African Ancestry Link’s original invitation described a Free DNA Testing Pilot Program in Nigeria, Ghana, and Kenya, with local volunteer committees to help lead the movement.</p>
            <div className="hero-actions">
              <Link href="/volunteer-application" className="button button-gold">Explore current volunteering <ArrowRight size={17} aria-hidden="true" /></Link>
              <Link href="/contact" className="button button-dark">Contact AGL <Mail size={17} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-container contact-details-layout">
            <div>
              <span className="eyebrow">WHO THE ORIGINAL CALL INVITED</span>
              <h2>Skills that support community led work</h2>
              <p>The original invitation called on people interested in contributing to:</p>
              <ul className="content-list">
                <li>Genealogy and community advocacy</li>
                <li>Medical and genetic health professions</li>
                <li>Outreach and communications</li>
                <li>Compliance and logistics</li>
              </ul>
              <h3>Who should consider getting involved?</h3>
              <ul className="content-list">
                {applicantGroups.map((group) => <li key={group}>{group}</li>)}
              </ul>
            </div>
            <aside className="resources-guide-card">
              <Globe2 size={28} aria-hidden="true" />
              <h2>Countries named in the original call</h2>
              <p>Nigeria · Ghana · Kenya</p>
              <p>The original page asked interested people to indicate their country team and explained that registration did not guarantee participation. Selected applicants would be notified by email.</p>
            </aside>
          </div>
        </section>

        <section className="section-pad campaign-section">
          <div className="page-container contact-details-layout">
            <div>
              <span className="eyebrow">APPLICATION STATUS</span>
              <h2>The original deadline has passed</h2>
              <p>The source page listed July 31, 2025 as its application deadline. That date is in the past, so this page does not present the old application as open or imply that the original pilot is currently accepting applications.</p>
              <p>If you would like to volunteer now, visit the current volunteer information page or contact AGL to ask about opportunities that are presently available.</p>
              <div className="hero-actions">
                <Link href="/volunteer-application" className="button button-gold">Current volunteer information <ArrowRight size={17} aria-hidden="true" /></Link>
                <Link href="/contact" className="text-link">Ask about opportunities <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
            </div>
            <aside className="resources-guide-card">
              <CalendarClock size={28} aria-hidden="true" />
              <h3>Original application deadline</h3>
              <p><strong>July 31, 2025</strong></p>
              <p>This is historical information from the original page, not a current deadline.</p>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
