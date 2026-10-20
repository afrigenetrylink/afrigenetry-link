import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Globe2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const route = "/events/identity-restoration-challenge";
const title = "Identity Restoration Challenge (Truth, Healing & Reconnection)";
const description = "A year-long, quarterly initiative restoring identity, reconnecting families, and healing generational trauma through DNA and heritage.";

export const metadata: Metadata = {
  title: `${title} | AfriGenetry Link`,
  description,
  alternates: { canonical: route },
  openGraph: { title: `${title} | AfriGenetry Link`, description, url: route, type: "website" },
};

export default function IdentityRestorationChallengePage() {
  return <><SiteHeader /><main>
    <section className="hero"><div className="hero-overlay" aria-hidden="true" /><div className="page-container hero-content"><div className="hero-copy">
      <span className="eyebrow eyebrow-light">YEAR-LONG INITIATIVE · QUARTERLY PHASES</span><h1>Identity Restoration <span>Challenge.</span></h1><p className="hero-description">{description}</p>
      <div className="hero-actions"><Link href="/events" className="button button-outline-light"><ArrowLeft size={17} /> All events</Link><Link href="/contact" className="button button-gold">Contact AGL <ArrowRight size={17} /></Link></div>
    </div></div></section>
    <section className="section-pad"><div className="page-container events-layout"><div><span className="eyebrow">ABOUT THE EVENT</span><h2>Truth, healing, and reconnection.</h2><p>The original event description identifies this as a year-long, quarterly initiative designed to restore truth, reconnect families, and support emotional and cultural healing for Africans and people of African descent.</p><p>The source describes themed quarterly challenges and names adoptees, trafficking survivors, people with undocumented or concealed lineage, and diaspora Africans seeking lost family connections as intended participants.</p><h3>Quarterly challenge theme listed in the available source</h3><p><strong>Truth & Healing: “Stolen Childhoods”</strong></p><p>The source describes this phase as being executed in partnership with NGOs supporting trafficking survivors. Participants traced family connections across continents, strengthening emotional and cultural healing while increasing engagement with DNA and ancestry.</p><p>The original page contains a “Show More” control, but the exported visible text does not include the full expanded description. This page therefore preserves only the details confirmed in the available export.</p><Link href="/contact" className="button button-gold">Contact the AGL team <ArrowRight size={17} /></Link></div>
      <aside className="event-card"><div className="event-card-top"><CalendarDays size={23} aria-hidden="true" /><span>EVENT INFORMATION</span></div><h3>Programme details</h3><div className="event-meta"><span>October 1 to December 30, 2026</span><span>Year-long initiative in quarterly phases</span></div><p className="event-location"><strong><Globe2 size={16} aria-hidden="true" /> Programme initiative</strong></p><p className="event-disclaimer">The source describes a multi-phase initiative. This page does not offer registration or imply that a sign-up form is active.</p></aside>
    </div></section><section className="section-pad campaign-section"><div className="page-container"><div><span className="eyebrow">STAY CONNECTED</span><h2>Have a question about the initiative?</h2><p>Reach out to the AGL team for verified programme information.</p></div><div className="get-involved-actions"><Link className="button button-dark" href="/contact">Contact AGL <ArrowRight size={17} /></Link><Link className="button button-outline-light" href="/events"><ArrowLeft size={17} /> Return to events</Link></div></div></section>
  </main><SiteFooter /></>;
}
