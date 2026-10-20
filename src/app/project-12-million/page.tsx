import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Project12MillionPage() {
  return <><SiteHeader /><main>
    <section className="page-hero"><div className="page-container"><p className="eyebrow">Special initiative</p><h1>Project 12 Million</h1><p className="hero-description">A named AfriGenetry Link initiative within a broader commitment to heritage, health education, and genomic inclusion.</p><p>Project 12 Million is identified as an AGL special initiative. Its detailed public purpose, geographic scope, timeline, and measurable outcomes require confirmation from AGL leadership before they can be stated as fact.</p><div className="hero-actions"><Link className="button button-gold" href="/our-work">Explore our work</Link><Link className="button button-dark" href="/contact">Request information</Link></div></div></section>
    <section className="section-pad"><div className="page-container"><div className="section-heading"><p className="eyebrow">Initiative overview</p><h2>Details to be confirmed</h2><p>To protect the accuracy of AGL’s public information, this page does not invent a numerical target or promise an outcome that has not been confirmed.</p></div><div className="resources-category-grid"><article className="resources-category-card"><h3>Purpose and scope</h3><p>Leadership approved description and intended beneficiaries to be added.</p></article><article className="resources-category-card"><h3>Programme activities</h3><p>Confirmed activities, delivery partners, and implementation timeline to be added.</p></article><article className="resources-category-card"><h3>Progress and outcomes</h3><p>Verified milestones and approved reporting to be added when available.</p></article></div></div></section>
  </main><SiteFooter /></>;
}
