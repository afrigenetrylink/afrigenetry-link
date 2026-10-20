import Link from "next/link";
import { ArrowRight, FileText, MessageCircle } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ImpactReportsPage() {
  return <><SiteHeader /><main>
    <section className="page-hero"><div className="page-container"><span className="eyebrow">TRANSPARENCY AND LEARNING</span><h1>Our impact, documented with care.</h1><p className="hero-description">Impact reporting helps communities, partners, and supporters understand what an organisation is doing, what it is learning, and where it hopes to go next.</p><div className="hero-actions"><Link className="button button-gold" href="/our-work">Explore our work <ArrowRight size={18} /></Link><Link className="button button-dark" href="/contact">Contact AGL</Link></div></div></section>
    <section className="section-pad"><div className="page-container"><div className="section-heading"><span className="eyebrow">REPORTS AND UPDATES</span><h2>Find the information you need.</h2><p>We are preparing this area for approved reports and programme updates. No impact figures or report downloads are published here yet.</p></div><div className="resources-category-grid"><article className="resources-category-card"><div className="resources-guide-icon"><FileText size={25} aria-hidden="true" /></div><h3>Impact reports</h3><p>Approved reports can be listed here once the organisation confirms the documents and publication details.</p><span className="text-link">Reports coming to this page</span></article><article className="resources-category-card"><div className="resources-guide-icon"><MessageCircle size={25} aria-hidden="true" /></div><h3>Request information</h3><p>For questions about AGL initiatives or available organisational information, contact the team directly.</p><Link className="text-link" href="/contact">Contact AGL <ArrowRight size={16} aria-hidden="true" /></Link></article></div></div></section>
  </main><SiteFooter /></>;
}
