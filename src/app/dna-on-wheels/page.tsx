import Link from "next/link";
import { ArrowRight, MapPinned, HeartPulse, Dna, GraduationCap } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const services = [
  { icon: Dna, title: "DNA and ancestry education", text: "Accessible learning about DNA, family origins, ancestry, and the questions genetic testing may or may not answer." },
  { icon: HeartPulse, title: "Preventive health awareness", text: "Community education about inherited health patterns and the value of discussing family health history with qualified professionals." },
  { icon: GraduationCap, title: "Community learning", text: "Outreach activities designed to build genomic literacy and encourage informed participation." },
];
export default function DnaOnWheelsPage() {
 return <><SiteHeader/><main>
  <section className="page-hero"><div className="page-container"><span className="eyebrow">OUR WORK · MOBILE OUTREACH</span><h1>DNA on Wheels</h1><p className="hero-description">A mobile outreach concept designed to bring DNA awareness, ancestry education, family health learning, and community engagement closer to communities that may face barriers to access.</p><div className="hero-actions"><Link className="button button-gold" href="/get-involved">Support the initiative <ArrowRight size={18}/></Link><Link className="button button-dark" href="/partner-with-us">Explore partnerships</Link></div></div></section>
  <section className="section-pad"><div className="page-container"><div className="section-heading"><span className="eyebrow">THE OUTREACH MODEL</span><h2>Learning that meets communities where they are</h2><p>AGL describes DNA on Wheels as part of a broader community access approach. The services and locations available will depend on programme planning and confirmed local arrangements.</p></div><div className="resources-category-grid">{services.map(({icon:Icon,title,text})=><article className="resources-category-card" key={title}><div className="resources-guide-icon"><Icon size={25}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section-pad campaign-section"><div className="page-container contact-details-layout"><div><MapPinned size={30} aria-hidden="true"/><span className="eyebrow">COMMUNITY PARTNERS</span><h2>Local relationships make outreach possible</h2><p>Schools, community groups, health organisations, and other institutions can discuss hosting or supporting education and awareness activities with AGL.</p><Link className="text-link" href="/partner-with-us">Partner with AGL <ArrowRight size={16}/></Link></div><div className="resources-guide-card"><h3>Before participating</h3><p>Confirm the location, available activities, eligibility, costs if any, and any consent or privacy arrangements directly with the programme organisers. Do not assume DNA kits or clinical services are available at every outreach activity.</p><Link className="text-link" href="/faqs">Read FAQs <ArrowRight size={16}/></Link></div></div></section>
 </main><SiteFooter/></>;
}
