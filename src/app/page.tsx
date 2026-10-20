

import Link from "next/link";

import {

  ArrowDown,

  ArrowRight,

  ArrowUpRight,

  Dna,

  HeartPulse,

  Globe2,

  GraduationCap,

  UsersRound,

  BookOpen,

  MoveUpRight,



  CalendarDays,

} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";



const pillars = [
  {
    number: "01",
    title: "Heritage, Identity and Ancestry",
    description:
      "Reconnect with your roots through DNA, discover ancestral origins, rebuild family histories, and strengthen identity and belonging.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Health & Genomics",
    description:
      "Promote awareness of hereditary health risks and family health history, supporting informed conversations about prevention and health decisions.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Education and Workforce Development",
    description:
      "Build understanding of DNA, ancestry, and health while creating pathways for education, training, mentorship, and professional development.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Diaspora Reconnection and Global Partnerships",
    description:
      "Bridge Africa and people of African descent worldwide through DNA, cultural connection, shared identity, and global collaboration.",
    icon: UsersRound,
  },
];



const programs = [
  {
    id: "genafrica",
    category: "COMMUNITY & DISCOVERY",
    title: "GenAfrica Initiative",
    description:
      "Bringing DNA education, ancestry discovery, genealogy, and family health history awareness into communities.",
    link: "Explore GenAfrica",
    href: "/genafrica-initiative",
    className: "program-image-genafrica",
    number: "01",
  },
  {
    id: "nextgen",
    category: "YOUTH & BELONGING",
    title: "AGL NextGen",
    description:
      "Know your roots. Own your story. Shape what's next through culture, identity, wellness, and opportunity.",
    link: "Discover NextGen",
    href: "/voices-that-matter",
    className: "program-image-nextgen",
    number: "02",
  },
  {
    id: "fellowship",
    category: "EDUCATION & WORKFORCE",
    title: "AGL Fellowship",
    description:
      "Developing pathways for education, mentorship, and professional growth across genomics and related fields.",
    link: "Explore the Fellowship",
    href: "/afrigenetry-fellowship",
    className: "program-image-fellowship",
    number: "03",
  },
  {
    id: "campus-tour",
    category: "CAMPUS & IDENTITY",
    title: "Campus Identity & Reconnection Tour",
    description:
      "A culturally grounded campus experience exploring identity, ancestry, family history, health awareness, storytelling, and belonging.",
    link: "Explore the Campus Tour",
    href: "/campus-identity-reconnection-tour",
    className: "program-image-campus",
    number: "04",
  },
  {
    id: "community-dna",
    category: "COMMUNITY & DNA EDUCATION",
    title: "Community DNA Pop Up",
    description:
      "A community experience centred on DNA education, ancestry discovery, and family health awareness.",
    link: "Explore the Community Pop Up",
    href: "/events/dallas-community-dna-pop-up",
    className: "program-image-community",
    number: "05",
  },
  {
    id: "dna-on-wheels",
    category: "COMMUNITY OUTREACH",
    title: "DNA On Wheels",
    description:
      "A mobile outreach initiative designed to bring DNA awareness and education into community settings.",
    link: "Explore DNA On Wheels",
    href: "/dna-on-wheels",
    className: "program-image-wheels",
    number: "06",
  },
];



export default function Home() {

  return (

    <>

      <SiteHeader />



      <main>

        <section className="hero" id="about">

          <div className="hero-image home-hero-image" aria-hidden="true">

  <img

    src="/images/hero-image.png"

    alt=""

    className="home-hero-mobile-image"

  />

</div>

          <div className="hero-overlay" aria-hidden="true" />



          <div className="hero-content page-container">

            <div className="hero-copy">

              <span className="eyebrow eyebrow-light">

                A STORY THAT CONNECTS US ALL

              </span>



              <h1>

                Your roots tell a story.

                <br />

                <span>Let&apos;s discover it.</span>

              </h1>



              <p className="hero-description">

                Your DNA carries more than information. It carries identity,

                history, health, and generations of stories. AGL connects

                Africans and the global diaspora to the knowledge and

                opportunities that move our stories forward.

              </p>



              <div className="hero-actions">

                <Link href="#work" className="button button-gold">

                  Explore our work <ArrowUpRight size={17} />

                </Link>

                <Link href="#mission" className="button button-outline-light">

                  Discover our mission <ArrowRight size={17} />

                </Link>

              </div>



              <div className="hero-note">

                <span className="hero-note-line" />

                <span>Rooted in heritage. Connected by possibility.</span>

              </div>

            </div>



            <div className="hero-side-note" aria-hidden="true">

              <span>HERITAGE</span>

              <span className="hero-side-divider" />

              <span>HEALTH</span>

              <span className="hero-side-divider" />

              <span>HEALING</span>

            </div>

          </div>



          <a href="#mission" className="hero-scroll" aria-label="Scroll to our mission">

            <ArrowDown size={17} />

            <span>SCROLL TO DISCOVER</span>

          </a>



        </section>



        <section className="mission-section section-pad" id="mission">

          <div className="page-container mission-layout">

            <div className="mission-heading">

              <span className="eyebrow">WHY AFRIGENETRY LINK EXISTS</span>

              <h2>

                The future of DNA

                <br />

                should include <em>all of us.</em>

              </h2>

            </div>



            <div className="mission-copy">

              <p className="lead-copy">

                Science is advancing. But too many people still face barriers

                to understanding their ancestry, their family health history,

                and their place in the future of genomics.

              </p>

              <p>

                AfriGenetry Link works to make heritage education, genomic

                awareness, community wellness, research representation, and

                professional opportunities more accessible to Africans and

                people of African descent worldwide.

              </p>

              <Link href="#centers" className="text-link">

                Understand our mission <ArrowRight size={17} />

              </Link>

            </div>

          </div>



          <div className="page-container gap-grid">

            <article className="gap-item">

              <span className="gap-index">01 / IDENTITY</span>

              <h3>Where do I come from?</h3>

              <p>Making room for ancestry, family history, and reconnection.</p>

            </article>

            <article className="gap-item">

              <span className="gap-index">02 / HEALTH</span>

              <h3>What runs in my family?</h3>

              <p>Building understanding of family health history and genomics.</p>

            </article>

            <article className="gap-item">

              <span className="gap-index">03 / OPPORTUNITY</span>

              <h3>What comes next?</h3>

              <p>Connecting people to knowledge, community, and opportunity.</p>

            </article>

          </div>

        </section>



        <section className="pillars-section section-pad" id="centers">

          <div className="page-container">

            <div className="section-heading">

              <div>

                <span className="eyebrow">OUR MISSION PILLARS</span>

                <h2>Four pillars. One connected purpose.</h2>

              </div>

              <p>

                Our work connects identity, health, and community through DNA.

                We create access, awareness, and pathways for people of African

                descent to understand who they are and protect their future.

              </p>

            </div>



            <div className="pillars-grid">

              {pillars.map((pillar) => {

                const Icon = pillar.icon;

                return (

                  <article className="pillar-card" key={pillar.number}>

                    <div className="pillar-card-top">

                      <span>{pillar.number}</span>

                      <Icon size={24} strokeWidth={1.5} />

                    </div>

                    <h3>{pillar.title}</h3>

                    <p>{pillar.description}</p>

                    <Link

                      href="#work"

                      aria-label={`Explore ${pillar.title}`}

                      className="pillar-link"

                    >

                      <ArrowUpRight size={18} />

                    </Link>

                  </article>

                );

              })}

            </div>

          </div>

        </section>



        <section className="work-section section-pad" id="work">

          <div className="page-container">

            <div className="section-heading">

              <div>

                <span className="eyebrow">FROM PURPOSE TO PARTICIPATION</span>

                <h2>Our work, in action.</h2>

              </div>

              <Link href="#get-involved" className="text-link">

                Find your place at AGL <ArrowRight size={17} />

              </Link>

            </div>



            <div className="program-grid">

              {programs.map((program) => (

                <article

                  className="program-card"

                  id={program.id}

                  key={program.id}

                >

                  <div

                    className={`program-image ${program.className}`}

                    role="img"

                    aria-label={`${program.title} illustrative photography`}

                  >

                    <span className="program-image-number">

                      {program.number}

                    </span>

                    <span className="program-image-label">

                      AFRIGENETRY LINK

                    </span>

                  </div>

                  <div className="program-content">

                    <span className="eyebrow">{program.category}</span>

                    <h3>{program.title}</h3>

                    <p>{program.description}</p>

                    <Link href="#get-involved" className="text-link">

                      {program.link} <ArrowRight size={16} />

                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>



        <section className="campaign-section" id="rooted30">

          <div className="campaign-image" aria-hidden="true" />

          <div className="campaign-overlay" aria-hidden="true" />

          <div className="page-container campaign-content">

            <span className="eyebrow eyebrow-light">A GLOBAL CAMPAIGN · TOWARD 2030</span>

            <p className="campaign-kicker">ROOTED IN OUR PAST.</p>

            <h2>

              Ready for

              <br />

              <em>what&apos;s next.</em>

            </h2>

            <p className="campaign-description">

              Rooted30 brings together ancestry discovery, family health

              awareness, genomic education, and opportunities for the next

              generation.

            </p>

            <p className="campaign-disclaimer">

              Campaign targets are subject to leadership approval and

              available resources.

            </p>

            <Link href="#get-involved" className="button button-gold">

              Discover Rooted30 <ArrowUpRight size={17} />

            </Link>

          </div>

        </section>



        <section className="stories-section section-pad" id="stories">

          <div className="page-container">

            <div className="section-heading">

              <div>

                <span className="eyebrow">KNOWLEDGE WORTH SHARING</span>

                <h2>Stories that move us forward.</h2>

              </div>

              <Link href="#resources" className="text-link">

                Explore learning resources <ArrowRight size={17} />

              </Link>

            </div>



            <div className="stories-grid">

              <article className="story-feature" id="voices">

                <div className="story-feature-image" aria-hidden="true" />

                <div className="story-feature-copy">

                  <span className="eyebrow eyebrow-light">

                    VOICES THAT MATTER

                  </span>

                  <h3>Different experiences. One conversation about our future.</h3>

                  <p>

                    Researchers, healthcare professionals, community voices,

                    and the next generation explore the questions shaping our

                    shared future.

                  </p>

                  <Link href="#resources" className="button button-outline-light">

                    Explore the conversations <ArrowRight size={16} />

                  </Link>

                </div>

              </article>



              <div className="story-side">

                <article className="story-mini" id="resources">

                  <div className="story-mini-icon">

                    <BookOpen size={23} />

                  </div>

                  <span className="eyebrow">LEARN & DISCOVER</span>

                  <h3>Knowledge for your journey.</h3>

                  <p>

                    Explore educational guides, family history resources,

                    genomics learning, and practical tools.

                  </p>

                  <Link href="#webinars" className="text-link">

                    Explore resources <ArrowRight size={16} />

                  </Link>

                </article>

                <article className="story-mini story-mini-gold" id="research">

                  <div className="story-mini-icon">

                    <Dna size={23} />

                  </div>

                  <span className="eyebrow">RESEARCH & REPRESENTATION</span>

                  <h3>A more inclusive future for science.</h3>

                  <p>

                    Discover research, publications, and perspectives that

                    contribute to better representation.

                  </p>

                  <Link href="#get-involved" className="text-link">

                    Learn more <ArrowRight size={16} />

                  </Link>

                </article>

              </div>

            </div>

          </div>

        </section>



        <section className="tripleh-section section-pad" id="tripleh">

          <div className="page-container tripleh-layout">

            <div className="tripleh-visual">

              <div className="tripleh-orbit orbit-one" />

              <div className="tripleh-orbit orbit-two" />

              <div className="tripleh-orbit orbit-three" />

              <div className="tripleh-center">

                <span>TRIPLEH</span>

                <small>HERITAGE · HEALTH · HEALING</small>

              </div>

              <span className="orbit-label orbit-label-one">HERITAGE</span>

              <span className="orbit-label orbit-label-two">HEALTH</span>

              <span className="orbit-label orbit-label-three">HEALING</span>

            </div>



            <div className="tripleh-copy">

              <span className="status-label">

                <span /> TRIPLE H · IN DEVELOPMENT

              </span>

              <span className="eyebrow">INTRODUCING TRIPLEH</span>

              <h2>

                Your story is more

                <br />

                than <em>DNA.</em>

              </h2>

              <p>

                The Triple-H App connects ancestry insights, health awareness,

                healing support, and culturally grounded wellness in one place.

                AGL envisions a digital ecosystem where heritage discovery,

                family health education, well-being, community, and trusted

                professional support can work together.

              </p>

              <p className="tripleh-note">

                DNA will be optional. Everyone should be able to explore,

                learn, and connect without uploading genetic data.

              </p>

              <Link href="#get-involved" className="button button-dark">

                Explore the vision <ArrowUpRight size={17} />

              </Link>

            </div>

          </div>

        </section>



        <section className="events-section section-pad" id="events">

          <div className="page-container events-layout">

            <div>

              <span className="eyebrow">UPCOMING GENAFRICA COMMUNITY DNA POP-UP</span>

              <h2>Come curious.<br /><em>Leave connected.</em></h2>

              <p>

                From community DNA Pop-Ups and campus experiences to

                workshops and conversations, discover ways to learn and

                connect with AGL.

              </p>

              <Link href="#get-involved" className="text-link">

                Explore all events <ArrowRight size={17} />

              </Link>

            </div>



            <article className="event-card">

              <div className="event-card-top">

                <CalendarDays size={23} />

                <span>FEATURED COMMUNITY EXPERIENCE</span>

              </div>

              <span className="eyebrow">GENAFRICA INITIATIVE</span>

              <h3>Who am I? Where do I come from? What runs in my family?</h3>

              <p>

                A community experience exploring ancestry, family history,

                DNA education, and health awareness.

              </p>

              <div className="event-meta">

                <span>November 14, 2026</span>

                <span>Dallas, Texas</span>

              </div>

              <p className="event-location">

                The DEC Network at RedBird

              </p>

              <Link href="#get-involved" className="button button-dark">

                Event details & registration <ArrowUpRight size={16} />

              </Link>

              <p className="event-disclaimer">

                Event details and registration availability must be confirmed

                before publication.

              </p>

            </article>

          </div>

        </section>



        <section className="get-involved-section" id="get-involved">

          <div className="page-container get-involved-content">

            <span className="eyebrow eyebrow-light">YOUR STORY MATTERS</span>

            <h2>

              There is a place

              <br />

              <em>for you at AGL.</em>

            </h2>

            <p>

              Discover your roots, expand your knowledge, share your

              expertise, or support a more inclusive future for genomics.

            </p>

            <div className="get-involved-actions">

              <Link href="#nextgen" className="button button-gold">

                Join NextGen <ArrowUpRight size={17} />

              </Link>

              <Link href="#partners" className="button button-outline-light">

                Partner with us <ArrowRight size={17} />

              </Link>

              <Link href="#donate" className="button button-outline-light">

                Support our mission <HeartPulse size={17} />

              </Link>

            </div>

          </div>

        </section>



        <section className="donate-section" id="donate">

          <div className="page-container donate-layout">

            <div className="donate-icon"><UsersRound size={25} /></div>

            <div>

              <span className="eyebrow">BE PART OF THE STORY</span>

              <h2>Help create a future where every story counts.</h2>

            </div>

            <Link href="#contact" className="button button-dark">

              Support AGL <MoveUpRight size={17} />

            </Link>

          </div>

          <div id="partners" className="anchor-marker" />

          <div id="webinars" className="anchor-marker" />

          <div id="initiatives" className="anchor-marker" />

        </section>

      </main>



      <SiteFooter />

    </>

  );

}
