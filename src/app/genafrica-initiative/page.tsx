import Link from "next/link";
import { ArrowRight, Dna, HeartPulse, UsersRound, BookOpen, ShieldCheck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const pathways = [
  { icon: Dna, title: "Heritage and ancestry", text: "Support learning about ancestry, family history, lineage, and connections between Africa and the global diaspora." },
  { icon: HeartPulse, title: "Genetic health awareness", text: "Make conversations about inherited health patterns and preventive health education more accessible." },
  { icon: BookOpen, title: "Genomic literacy", text: "Build understanding of DNA, genetics, consent, and the limits of genetic information through community education." },
  { icon: UsersRound, title: "Community connection", text: "Create welcoming spaces for families, educators, community organisations, and diaspora partners to learn together." },
];

export default function GenAfricaInitiativePage() {
  return <><SiteHeader /><main>
    <section className="page-hero"><div className="page-container"><span className="eyebrow">OUR WORK · GENAFRICA</span><h1>Heritage, health and reconnection, rooted in community.</h1><p className="hero-description">The GenAfrica Initiative brings DNA education, ancestry awareness, genetic health learning, and community engagement into conversations shaped around African communities and the global diaspora.</p><div className="hero-actions"><Link className="button button-gold" href="/events">Explore events <ArrowRight size={18} /></Link><Link className="button button-dark" href="/get-involved">Get involved</Link></div></div></section>
    <section className="section-pad"><div className="page-container"><div className="section-heading"><span className="eyebrow">THE APPROACH</span><h2>Four connected pathways</h2><p>GenAfrica connects heritage and health education with community participation. Activities and availability may vary by programme and location.</p></div><div className="resources-category-grid">{pathways.map(({icon:Icon,title,text})=><article className="resources-category-card" key={title}><div className="resources-guide-icon"><Icon size={25} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section-pad campaign-section"><div className="page-container contact-details-layout"><div><span className="eyebrow">COMMUNITY DNA POP-UPS</span><h2>Learning and connection, closer to home.</h2><p>Community DNA Pop-Ups are described by AGL as community focused experiences connecting ancestry and identity learning with genetic health education. Specific services, eligibility, and availability must be confirmed for each event.</p><Link className="text-link" href="/events">View events <ArrowRight size={16} /></Link></div><div className="resources-guide-card"><ShieldCheck size={28} aria-hidden="true"/><h3>Consent and understanding matter</h3><p>Genetic information can be sensitive. Participants should understand the purpose of an activity, what participation involves, and the applicable consent and data handling arrangements before taking part.</p><Link className="text-link" href="/faqs">Read frequently asked questions <ArrowRight size={16}/></Link></div></div></section>
    <section className="section-pad"><div className="page-container"><div className="section-heading"><h2>Help bring learning into more communities</h2><p>Community groups, institutions, volunteers, and potential partners can connect with AGL to discuss opportunities.</p><div className="hero-actions"><Link className="button button-gold" href="/partner-with-us">Partner with us</Link><Link className="button button-dark" href="/volunteer-application">Volunteer</Link></div></div></div></section>
  </main><SiteFooter /></>;
}
