import Link from "next/link";
import { ArrowRight, BookOpen, UsersRound, Lightbulb, Handshake } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
const areas = [
 {icon:BookOpen,title:"Learning and literacy",text:"Build knowledge around ancestry, DNA, genetics, family history, and responsible communication of health information."},
 {icon:UsersRound,title:"Community engagement",text:"Support respectful conversations and community activities that make heritage and genomics education more accessible."},
 {icon:Lightbulb,title:"Leadership and initiative",text:"Develop practical skills through learning, collaboration, and contribution to community focused work."},
 {icon:Handshake,title:"Partnership and service",text:"Connect with peers and organisations working across education, heritage, health awareness, and diaspora reconnection."},
];
export default function FellowshipPage(){return <><SiteHeader/><main>
 <section className="page-hero"><div className="page-container"><span className="eyebrow">LEARNING · LEADERSHIP · COMMUNITY</span><h1>AfriGenetry Link Fellowship</h1><p className="hero-description">The Fellowship is presented as part of AGL’s wider commitment to education, workforce development, and community leadership in heritage and genomics awareness.</p><div className="hero-actions"><Link className="button button-gold" href="/get-involved">Register your interest <ArrowRight size={18}/></Link><Link className="button button-dark" href="/faqs">Fellowship FAQs</Link></div></div></section>
 <section className="section-pad"><div className="page-container"><div className="section-heading"><span className="eyebrow">AREAS OF DEVELOPMENT</span><h2>Learning with a community purpose</h2><p>Potential areas of contribution include the following. Current cohorts, requirements, dates, and selection processes must be confirmed by AGL.</p></div><div className="resources-category-grid">{areas.map(({icon:Icon,title,text})=><article className="resources-category-card" key={title}><div className="resources-guide-icon"><Icon size={25}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="section-pad campaign-section"><div className="page-container contact-details-layout"><div><h2>Interested in contributing?</h2><p>Use the local Get Involved page to explore ways to connect with AGL. This page does not represent an open application window or guarantee acceptance into a cohort.</p><Link className="text-link" href="/get-involved">Explore ways to get involved <ArrowRight size={16}/></Link></div><div className="resources-guide-card"><h3>Questions before applying?</h3><p>Review the local FAQ page or contact AGL to confirm whether a Fellowship cohort is currently accepting expressions of interest.</p><Link className="text-link" href="/contact">Contact AGL <ArrowRight size={16}/></Link></div></div></section>
 </main><SiteFooter/></>}
