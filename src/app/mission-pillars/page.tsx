import Link from "next/link";
import { ArrowRight, BookOpen, Dna, Globe2, HeartPulse } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const pillars = [
  { number: "01", title: "Heritage, Identity and Ancestry", icon: Globe2, description: "Support people in exploring their roots, learning about ancestry, documenting family histories, and strengthening identity and belonging." },
  { number: "02", title: "Health and Genomics", icon: HeartPulse, description: "Build awareness of inherited health risks and the value of family health history, helping people prepare informed questions for qualified health professionals." },
  { number: "03", title: "Education and Workforce Development", icon: BookOpen, description: "Expand understanding of DNA, ancestry, and health through education, training, capacity building, and opportunities to develop future leaders." },
  { number: "04", title: "Diaspora Reconnection and Global Partnerships", icon: Dna, description: "Create bridges between Africa and people of African descent worldwide through heritage, shared identity, cultural connection, and collaboration." },
];

export default function MissionPillarsPage() {
  return <><SiteHeader /><main>
    <section className="page-hero"><div className="page-container"><span className="eyebrow">OUR PURPOSE</span><h1>The pillars behind our work.</h1><p className="hero-description">AfriGenetry Link brings heritage, health awareness, education, and global reconnection together to help people explore their stories and make informed choices.</p><div className="hero-actions"><Link className="button button-gold" href="/our-work">Explore our work <ArrowRight size={18} /></Link><Link className="button button-dark" href="/get-involved">Get involved</Link></div></div></section>
    <section className="section-pad"><div className="page-container"><div className="section-heading"><span className="eyebrow">FOUR CONNECTED PILLARS</span><h2>One mission, connected areas of impact.</h2><p>Each pillar supports a broader approach to heritage, health, learning, and community.</p></div><div className="resources-category-grid">{pillars.map((pillar) => { const Icon = pillar.icon; return <article className="resources-category-card" key={pillar.number}><div className="resources-guide-icon"><Icon size={25} aria-hidden="true" /></div><span className="eyebrow">{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.description}</p></article>; })}</div></div></section>
    <section className="section-pad campaign-section"><div className="page-container"><span className="eyebrow">CONNECTED VISION</span><h2>Heritage. Health. Healing.</h2><p className="hero-description">The TripleH digital platform is a developing vision intended to connect ancestry insights, health awareness, and culturally grounded wellbeing. It should not be understood as a currently available clinical or DNA testing service.</p><div className="hero-actions"><Link className="button button-gold" href="/tripleh">Explore the TripleH vision <ArrowRight size={18} /></Link><Link className="button button-dark" href="/contact">Contact AGL</Link></div></div></section>
  </main><SiteFooter /></>;
}
