import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function FiftyDaysChallengePage() {
  return <><SiteHeader /><main>
    <section className="page-hero"><div className="page-container"><p className="eyebrow">Special initiative</p><h1>50 Days DNA Health &amp; Wellness Challenge</h1><p className="hero-description">A proposed structured awareness initiative exploring DNA, family health history, preventive health, and wellbeing.</p><p>The challenge is intended to bring educational activities and community participation together. This page does not imply that a challenge cohort is currently open or that specific activities are scheduled.</p><div className="hero-actions"><Link className="button button-gold" href="/resource-library">Explore learning resources</Link><Link className="button button-dark" href="/events">View events</Link></div></div></section>
    <section className="section-pad"><div className="page-container"><div className="section-heading"><p className="eyebrow">Learning themes</p><h2>Build knowledge step by step</h2><p>Final daily activities, dates, participation rules, and any health related guidance should be approved before registration opens.</p></div><div className="resources-category-grid"><article className="resources-category-card"><h3>DNA and ancestry</h3><p>Learn what genetic ancestry testing can and cannot tell you about family history.</p></article><article className="resources-category-card"><h3>Family health history</h3><p>Explore ways to have informed conversations about health patterns in your family.</p></article><article className="resources-category-card"><h3>Everyday wellbeing</h3><p>Learn general preventive health concepts while recognizing that personal medical advice comes from qualified professionals.</p></article></div></div></section>
    <section className="campaign-section"><div className="page-container"><h2>Interested in participating?</h2><p>Contact AGL to ask about the initiative and its current status.</p><Link className="button button-gold" href="/contact">Contact AGL</Link></div></section>
  </main><SiteFooter /></>;
}
