import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Globe2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const route = "/events/seeds-of-health-heritage-fundraiser";
const title = "Seeds of Health & Heritage Fundraiser";
const description = "Help expand free DNA testing, preventive health education, and identity restoration, and train genetic counselors and genealogists across African communities.";

export const metadata: Metadata = {
  title: `${title} | AfriGenetry Link`,
  description,
  alternates: { canonical: route },
  openGraph: { title: `${title} | AfriGenetry Link`, description, url: route, type: "website" },
};

export default function SeedsOfHealthHeritageFundraiserPage() {
  return <><SiteHeader /><main>
    <section className="hero"><div className="hero-overlay" aria-hidden="true" /><div className="page-container hero-content"><div className="hero-copy">
      <span className="eyebrow eyebrow-light">VIRTUAL FUNDRAISING EVENT</span><h1>Seeds of Health <span>& Heritage Fundraiser.</span></h1><p className="hero-description">{description}</p>
      <div className="hero-actions"><Link href="/events" className="button button-outline-light"><ArrowLeft size={17} /> All events</Link><Link href="/contact" className="button button-gold">Contact AGL <ArrowRight size={17} /></Link></div>
    </div></div></section>
    <section className="section-pad"><div className="page-container events-layout"><div><span className="eyebrow">ABOUT THE EVENT</span><h2>Support health education and heritage reconnection.</h2><p>{description}</p><p>This event is listed in the original AfriGenetry Link website export as a virtual fundraising event. The source listing states that tickets are not on sale.</p><p>For verified updates or questions about participation, please contact AfriGenetry Link.</p><Link href="/contact" className="button button-gold">Contact the AGL team <ArrowRight size={17} /></Link></div>
      <aside className="event-card"><div className="event-card-top"><CalendarDays size={23} aria-hidden="true" /><span>EVENT INFORMATION</span></div><h3>Event details</h3><div className="event-meta"><span>Friday, August 14, 2026</span><span>2:30 PM to 3:30 PM (source event timezone: UTC−5)</span></div><p className="event-location"><strong><Globe2 size={16} aria-hidden="true" /> Virtual Fundraising Event</strong></p><p className="event-disclaimer">This date has passed. The original source states that tickets are not on sale. No registration or payment workflow is enabled on this page.</p></aside>
    </div></section><section className="section-pad campaign-section"><div className="page-container"><div><span className="eyebrow">STAY CONNECTED</span><h2>Have a question?</h2><p>Reach out to the AGL team for event related enquiries.</p></div><div className="get-involved-actions"><Link className="button button-dark" href="/contact">Contact AGL <ArrowRight size={17} /></Link><Link className="button button-outline-light" href="/events"><ArrowLeft size={17} /> Return to events</Link></div></div></section>
  </main><SiteFooter /></>;
}
