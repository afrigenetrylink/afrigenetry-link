import Link from "next/link";
import { ArrowRight, HandHeart, Users, GraduationCap, Handshake, Store, Mail } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const pathways = [
  { title: "Volunteer with AGL", description: "Contribute your time, skills, and experience to community education, heritage, health awareness, outreach, communications, research, and programme support.", href: "/volunteer-application", label: "Explore volunteering", icon: HandHeart },
  { title: "Partner with us", description: "Explore collaboration with organisations, institutions, community groups, researchers, educators, and aligned supporters working toward shared goals.", href: "/partner-with-us", label: "Explore partnerships", icon: Handshake },
  { title: "Join the next generation", description: "Help create pathways for young people to engage with ancestry, genomics, education, leadership, and opportunities for professional growth.", href: "/our-work#nextgen", label: "Explore AGL NextGen", icon: GraduationCap },
  { title: "Become a vendor", description: "Introduce your organisation or services for consideration in relevant AGL programmes and activities.", href: "/vendor-application", label: "Vendor information", icon: Store },
];

export const metadata = {
  title: "Get Involved | AfriGenetry Link",
  description: "Explore volunteering, partnerships, youth engagement, and vendor opportunities with AfriGenetry Link.",
};

export default function GetInvolvedPage() {
  return <><SiteHeader /><main>
    <section className="page-hero section-pad"><div className="page-container">
      <span className="eyebrow">BE PART OF THE LEGACY</span>
      <h1>Help connect heritage, health, and opportunity.</h1>
      <p className="hero-description">AfriGenetry Link brings people and partners together around ancestry education, genetic health awareness, identity, community, and opportunities for people of African descent. There are different ways to contribute to this work.</p>
      <div className="hero-actions"><Link className="button button-gold" href="#pathways">Explore opportunities <ArrowRight size={17} /></Link><Link className="button button-dark" href="/contact">Contact AGL <Mail size={17} /></Link></div>
    </div></section>
    <section className="section-pad" id="pathways"><div className="page-container">
      <div className="section-heading"><span className="eyebrow">WAYS TO PARTICIPATE</span><h2>Find the path that fits you.</h2><p>Whether you are an individual, student, professional, community organisation, or potential partner, start with the pathway that best matches your interests.</p></div>
      <div className="resources-category-grid">{pathways.map((item) => { const Icon = item.icon; return <article className="resources-category-card" key={item.title}><div className="resources-guide-icon"><Icon size={25} aria-hidden="true" /></div><h3>{item.title}</h3><p>{item.description}</p><Link href={item.href} className="text-link">{item.label} <ArrowRight size={16} /></Link></article>; })}</div>
    </div></section>
    <section className="section-pad campaign-section"><div className="page-container contact-details-layout"><div><span className="eyebrow">WORKING TOGETHER</span><h2>Shared purpose. Lasting impact.</h2><p>AGL’s work spans heritage and identity, health and genomics, education and workforce development, and diaspora reconnection and global partnerships. We welcome thoughtful contributions that support these areas.</p></div><div className="resources-guide-card"><Users size={28} aria-hidden="true"/><h3>Not sure where to begin?</h3><p>Tell us about your interests and we can direct your enquiry to the appropriate team.</p><Link href="/contact" className="button button-gold">Contact AGL <ArrowRight size={17}/></Link></div></div></section>
  </main><SiteFooter /></>;
}
