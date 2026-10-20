import Link from "next/link";
import { ArrowRight, Globe2, BookOpen, UsersRound, Dna } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const work = [
  { icon: Dna, title: "DNA based reconnection", text: "Support ancestry discovery and genealogical context that may help people explore links to ancestral regions and relatives." },
  { icon: BookOpen, title: "Campus identity and reconnection tours", text: "Create opportunities for students and communities to explore heritage, history, and shared identity." },
  { icon: UsersRound, title: "Elder oral history preservation", text: "Help preserve family and community stories through respectful conversations and storytelling." },
  { icon: Globe2, title: "Global partnerships", text: "Build relationships across Africa and the diaspora with universities, community groups, and other aligned organisations." },
];

export default function DiasporaReconnectionPage() {
  return <><SiteHeader /><main>
    <section className="page-hero"><div className="page-container"><span className="eyebrow">AFRICA AND THE DIASPORA</span><h1>Reconnection that brings people, history, and identity closer.</h1><p className="hero-description">AfriGenetry Link works to bridge Africa and people of African descent worldwide through heritage education, DNA awareness, oral history, and community relationships.</p><div className="hero-actions"><Link className="button button-gold" href="/get-involved">Be part of the work <ArrowRight size={18} /></Link><Link className="button button-dark" href="/donate">Support the mission</Link></div></div></section>
    <section className="section-pad"><div className="page-container"><div className="section-heading"><span className="eyebrow">THE DIVIDE WE ARE CLOSING</span><h2>Reconnection is about more than a result.</h2><p>For many people, historical displacement disrupted family lines, cultural knowledge, and a sense of belonging. DNA and genealogy can be part of the journey, alongside oral histories, cultural learning, and meaningful human connections.</p></div><div className="resources-category-grid">{work.map(({icon: Icon,title,text})=><article className="resources-category-card" key={title}><div className="resources-guide-icon"><Icon size={25} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section-pad campaign-section"><div className="page-container"><span className="eyebrow">THE GREAT RECONNECTION</span><h2>Help build a stronger bridge.</h2><p className="hero-description">AGL's Great Reconnection campaign brings together DNA awareness, storytelling, and shared identity. Project 12 Million is part of this wider effort to address gaps in representation and help more people explore their heritage.</p><div className="hero-actions"><Link className="button button-gold" href="/get-involved">Explore ways to contribute <ArrowRight size={18} /></Link><Link className="button button-dark" href="/contact">Contact AGL</Link></div></div></section>
  </main><SiteFooter /></>;
}
