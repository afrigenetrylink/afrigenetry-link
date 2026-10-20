
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import {
  SiInstagram,
  SiFacebook,
  SiX,
  SiYoutube,
  SiTiktok,
} from "react-icons/si";

import { FaLinkedin } from "react-icons/fa";
import NewsletterForm from "./NewsletterForm";

const columns = [
  {
    title: "Quick links",
    links: [
      ["Home", "/"],
      ["About us", "/about"],
      ["Contact us", "/contact"],
      ["Events", "/events"],
      ["Volunteer", "/volunteer-application"],
      ["Ways to Get Involved", "/get-involved"],
      ["FAQs", "/faqs"],
    ],
  },
  {
    title: "Our work",
    links: [
      ["GenAfrica Initiative", "/genafrica-initiative"],
      ["AGL NextGen", "/our-work#nextgen"],
      ["AGL Fellowship", "/afrigenetry-fellowship"],
      ["Rooted30 Campaign", "/rooted30"],
      ["50 Days DNA Challenge", "/50-days-dna-health-wellness"],
      ["Project 12 Million", "/project-12-million"],
      ["TripleH · In Development", "/tripleh"],
    ],
  },
  {
    title: "Explore & learn",
    links: [
      ["Voices That Matter", "/voices-that-matter"],
      ["Stories & Insights", "/stories-insights"],
      ["News & Press", "/news-press"],
      ["Research & Publications", "/research-publications"],
      ["Resource Library", "/resource-library"],
      ["Webinars & Workshops", "/webinars-workshops"],
      ["Mission Pillars", "/mission-pillars"],
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/afrigenetrylink/",
    Icon: SiInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/afrigenetrylink/",
    Icon: SiFacebook,
  },
  {
    label: "X",
    href: "https://x.com/afrigenetrylink/",
    Icon: SiX,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/afrigenetrylink/",
    Icon: FaLinkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@afrigenetrylink",
    Icon: SiYoutube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@afrigenetrylink/",
    Icon: SiTiktok,
  },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "DNA Data Ethics", href: "/dna-data-ethics" },
  { label: "Governance", href: "/governance" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <Link
            href="/"
            className="footer-logo-container"
            aria-label="AfriGenetry Link home"
          >
            <Image
              src="/images/agl-logo.jpeg"
              alt="AfriGenetry Link"
              width={220}
              height={80}
              className="footer-logo-image"
              sizes="(max-width: 480px) 160px, 190px"
            />
          </Link>

          <p className="footer-tagline">
            Connecting Heritage, Health, and Healing Through DNA.
          </p>

          <p className="footer-description">
            Connecting Africans and people of African descent with knowledge,
            opportunity, and community.
          </p>

          <Link
            href="/donate"
            className="footer-donate"
          >
            Donate to our mission
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h2>{column.title}</h2>

            <ul>
              {column.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-newsletter" id="newsletter">
        <div>
          <span className="eyebrow eyebrow-light">STAY CONNECTED</span>

          <h2>Stories, knowledge, and opportunities.</h2>

          <p>Join the AGL community mailing list.</p>
        </div>

        <NewsletterForm />
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} AfriGenetry Link. All rights reserved.
        </p>

        <nav aria-label="Legal links" className="legal-links">
          {legalLinks.map(({ label, href }) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <nav className="footer-socials" aria-label="Follow AfriGenetry Link">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit AfriGenetry Link on ${label}`}
              title={label}
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
