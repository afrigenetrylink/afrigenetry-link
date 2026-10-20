
"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  {
    label: "About",
    links: [
      ["Who We Are", "/about#about"],
      ["Our Mission", "/about#mission"],
      ["Leadership & Team", "/about#leadership"],
      ["Mission Pillars", "/mission-pillars"],
      ["Governance & Accountability", "/governance"],
      ["Impact Reports", "/impact-reports"],
    ],
  },
  {
    label: "Our Work",
    links: [
      ["Our Programmes", "/our-work#programs"],
      ["GenAfrica Initiative", "/genafrica-initiative"],
      ["DNA, Identity & Ancestry", "/dna-identity-ancestry"],
      ["Genetic Health Insight Initiative", "/genetic-health-insight"],
      ["TripleH Platform", "/tripleh"],
      ["AGL Fellowship", "/afrigenetry-fellowship"],
      ["Campus Identity & Reconnection Tour", "/campus-identity-reconnection-tour"],
      ["DNA on Wheels", "/dna-on-wheels"],
      ["Diaspora Reconnection", "/diaspora-reconnection"],
      ["Reconnect Families", "/reconnect-families"],
      ["Rooted30 Campaign", "/rooted30"],
      ["50 Days DNA Health & Wellness", "/50-days-dna-health-wellness"],
      ["Project 12 Million", "/project-12-million"],
      ["Genomic Lab & Wellness Hub", "/genomic-hub"],
    ],
  },
  {
    label: "Stories & Insights",
    links: [
      ["Stories & Insights Hub", "/stories-insights"],
      ["Ancestry & Identity", "/stories-insights#ancestry"],
      ["Genetic Health", "/stories-insights#health"],
      ["Genomic Equity & Ethics", "/stories-insights#equity"],
      ["Stories & Community Reflections", "/stories"],
      ["Voices That Matter", "/voices-that-matter"],
      ["News & Press", "/news-press"],
      ["Research & Publications", "/research-publications"],
    ],
  },
  {
    label: "Resources",
    links: [
      ["Resource Library", "/resource-library"],
      ["Learning Resources", "/resources"],
      ["Frequently Asked Questions", "/faqs"],
      ["DNA & Heritage Glossary", "https://www.afrigenetrylink.org/_files/ugd/300b8c_dd0809f0ed2f44f484fa3ffcc5c2ecd8.pdf"],
      ["DNA Data Ethics", "/dna-data-ethics"],
    ],
  },
  {
    label: "Events",
    links: [
      ["Events Overview", "/events"],
      ["Upcoming Events", "/events#upcoming-events"],
      ["Dallas Community DNA Pop-Up", "/events/dallas-community-dna-pop-up"],
      ["Webinars & Workshops", "/webinars-workshops"],
    ],
  },
  {
    label: "Get Involved",
    links: [
      ["Ways to Get Involved", "/get-involved"],
      ["Volunteer", "/volunteer-application"],
      ["Partner With Us", "/partner-with-us"],
      ["Vendor Application", "/vendor-application"],
      ["Contact Us", "/contact"],
    ],
  },
] as const;

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  function closeMenu() {
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  function handleHomeClick(event: MouseEvent<HTMLAnchorElement>) {
    // Preserve native modified-click behaviour (for example, open in new tab).
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    closeMenu();

    // On another route, force a fresh document navigation so the browser
    // cannot retain the previous page's scroll position.
    if (pathname !== "/") {
      event.preventDefault();
      // This deliberate document navigation fixes the reported scroll bug.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign("/");
      return;
    }

    // Already on Home: clear any old section hash and scroll to the top.
    event.preventDefault();
    window.history.replaceState(null, "", "/");
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior;
    });
  }


  function scrollToTopImmediately() {
    // `instant` bypasses the global `scroll-behavior: smooth` rule.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  function handleNavigationClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    closeMenu();

    // Let external links and section anchors keep their normal destination.
    if (!href.startsWith("/") || href.includes("#")) return;

    const destinationPath = href.split("?")[0];
    if (destinationPath === pathname) {
      // A Link to the current pathname does not trigger a route change, so
      // the root route manager will not run. Handle this case explicitly.
      event.preventDefault();
      window.history.replaceState(null, "", href);
      scrollToTopImmediately();
    }
  }

  function toggleDropdown(label: string) {
    setOpenDropdown((current) => (current === label ? null : label));
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="AfriGenetry Link home"
          onClick={handleHomeClick}
        >
          <Image
            src="/images/agl-logo.jpeg"
            alt="AfriGenetry Link"
            width={220}
            height={80}
            priority
            className="brand-logo"
            sizes="(max-width: 480px) 135px, (max-width: 768px) 155px, 200px"
          />
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => {
            setMobileOpen((current) => !current);
            setOpenDropdown(null);
          }}
        >
          {mobileOpen ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation ${mobileOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="nav-trigger"
            onClick={handleHomeClick}
          >
            Home
          </Link>

          {navigation.map((item) => {
            const isOpen = openDropdown === item.label;
            const dropdownId = `dropdown-${item.label
              .toLowerCase()
              .replace(/\s+/g, "-")}`;

            return (
              <div className="nav-dropdown" key={item.label}>
                <button
                  type="button"
                  className="nav-trigger"
                  aria-expanded={isOpen}
                  aria-controls={dropdownId}
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    aria-hidden="true"
                    className={isOpen ? "chevron-open" : ""}
                  />
                </button>

                <div
                  id={dropdownId}
                  className={`dropdown-panel ${
                    isOpen ? "dropdown-visible" : ""
                  }`}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  {item.links.map(([label, href]) => {
                    const isExternal = href.startsWith("https://");

                    return (
                      <Link
                        href={href}
                        key={label}
                        onClick={(event) => handleNavigationClick(event, href)}
                        scroll={href.includes("#")}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                      >
                        {label}
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <Link
            href="/donate"
            className="donate-button"
            onClick={closeMenu}
          >
            Donate <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
