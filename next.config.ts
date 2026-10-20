import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Core Wix page aliases with direct, unambiguous Next.js destinations.
      { source: "/aboutus", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/aal-faqs", destination: "/faqs", permanent: true },
      { source: "/upcoming-events", destination: "/events", permanent: true },
      { source: "/donation", destination: "/donate", permanent: true },
      { source: "/agl-vendor", destination: "/vendor-application", permanent: true },
      { source: "/agl-volunteer", destination: "/volunteer-application", permanent: true },
      { source: "/agl-fellowship", destination: "/afrigenetry-fellowship", permanent: true },
      { source: "/dnaonwheels", destination: "/dna-on-wheels", permanent: true },
      { source: "/blog", destination: "/stories-insights", permanent: true },
      { source: "/tripleh-app-dna-health", destination: "/tripleh", permanent: true },
      { source: "/dallas-dna-popup", destination: "/events/dallas-community-dna-pop-up", permanent: true },
      { source: "/event-details/the-genafrica-legacy-giving-circle", destination: "/events/the-genafrica-legacy-giving-circle", permanent: true },
      { source: "/event-details/seeds-of-health-heritage-fundraiser", destination: "/events/seeds-of-health-heritage-fundraiser", permanent: true },
      { source: "/event-details/identity-restoration-challenge-truth-healing-reconnection-2026-10-01-00-00", destination: "/events/identity-restoration-challenge", permanent: true },

      // Original Wix article URLs mapped to their corresponding local articles.
      { source: "/post/howdnatestingrevealsafricanorigins", destination: "/stories-insights/how-dna-testing-reveals-african-origins", permanent: true },
      { source: "/post/tripleh-framework", destination: "/stories-insights/triple-h-framework", permanent: true },
      { source: "/post/dna-testing-african-americans", destination: "/stories-insights/dna-testing-african-americans", permanent: true },
      { source: "/post/sickle-cell-genetics", destination: "/stories-insights/sickle-cell-genetics", permanent: true },
      { source: "/post/genomic-equity", destination: "/stories-insights/genomic-equity", permanent: true },
      { source: "/post/diabetes-genetics-in-africans-understanding-inherited-risk-dna-prevention-and-precision-medicine", destination: "/stories-insights/diabetes-genetics-in-africans", permanent: true },
      { source: "/post/hereditary-hypertension-in-africans-understanding-genetics-risk-factors-and-prevention", destination: "/stories-insights/hereditary-hypertension-in-africans", permanent: true },
      { source: "/post/how-to-choose-the-right-dna-test-for-african-ancestry", destination: "/stories-insights/choosing-dna-test-african-ancestry", permanent: true },
      { source: "/post/dallas-community-dna-pop-up-explore-african-ancestry-genealogy-family-history", destination: "/events/dallas-community-dna-pop-up", permanent: true },
      { source: "/post/african-genetic-diversity-why-africa-holds-the-world-s-greatest-genetic-heritage", destination: "/stories-insights/african-genetic-diversity", permanent: true },
      { source: "/post/what-is-the-tripleh-framework-heritage-health-healing-explained", destination: "/stories-insights/what-is-the-triple-h-framework", permanent: true },
      { source: "/post/genetic-health-africa-guide", destination: "/stories-insights/genetic-health-africa-guide", permanent: true },
      { source: "/post/does-dna-carry-the-history-of-our-ancestors-how-both-men-and-women-inherit-genetic-ancestry", destination: "/stories-insights/how-dna-inherits-ancestry", permanent: true },
      { source: "/post/genetichealth", destination: "/stories-insights/genetic-health-medication-guide", permanent: true },
      { source: "/post/dna-and-ancestry", destination: "/stories-insights/dna-and-ancestry-family-origins", permanent: true },
      { source: "/post/precisionmedicineinafrica", destination: "/stories-insights/precision-medicine-africa", permanent: true },
      { source: "/post/ethical-dna-use-in-africa", destination: "/stories-insights/ethical-dna-use-in-africa", permanent: true },
      { source: "/post/why-africans-are-underrepresented-in-dna-databases", destination: "/stories-insights/why-africans-underrepresented-dna-databases", permanent: true },
      { source: "/post/how-oral-traditions-preserve-african-family-history", destination: "/stories-insights/oral-traditions-african-family-history", permanent: true },
      { source: "/post/african-ethnic-groups-dna-origins-guide", destination: "/stories-insights/african-ethnic-groups-dna-origins", permanent: true },
      { source: "/post/african-genetic-heritage-understanding-african-dna-ancestry-population-history-and-human-origins", destination: "/stories-insights/african-genetic-heritage-human-origins", permanent: true },
      { source: "/post/why-mobile-dna-clinics-are-transforming-genetic-healthcare-in-africa", destination: "/stories-insights/mobile-dna-clinics-africa", permanent: true },
      { source: "/post/populationgenomics", destination: "/stories-insights/population-genomics-african-dna-results", permanent: true },
      { source: "/post/african-dna-testing", destination: "/stories-insights/african-dna-testing-guide", permanent: true },
      { source: "/post/what-is-the-best-black-ancestry-dna-kit", destination: "/stories-insights/best-black-ancestry-dna-kit", permanent: true },
    ];
  },
};

export default nextConfig;
