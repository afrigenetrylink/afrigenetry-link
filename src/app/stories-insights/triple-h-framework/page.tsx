import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


export const metadata: Metadata = {
  title: 'The Triple H Framework: Heritage, Health and Healing',
  description: 'Explore AfriGenetry Link’s Triple H vision of Heritage, Health, and Healing through ancestry education, family health awareness, and cultural connection.',
  alternates: { canonical: '/stories-insights/triple-h-framework' },
  openGraph: {
    type: "article",
    title: 'The Triple H Framework: Heritage, Health and Healing',
    description: 'Explore AfriGenetry Link’s Triple H vision of Heritage, Health, and Healing through ancestry education, family health awareness, and cultural connection.',
    url: '/stories-insights/triple-h-framework',
    siteName: "AfriGenetry Link",
  },
  twitter: {
    card: "summary_large_image",
    title: 'The Triple H Framework: Heritage, Health and Healing',
    description: 'Explore AfriGenetry Link’s Triple H vision of Heritage, Health, and Healing through ancestry education, family health awareness, and cultural connection.',
  },
};

const articleBlocks = [
  {
    "type": "paragraph",
    "text": "Triple H (3HHH): Africa's Heritage, Health & Healing  digital platform connecting African ancestry, genomic health insights, and cultural heritage through DNA-informed education and family history"
  },
  {
    "type": "paragraph",
    "text": "Discover Your Roots. Strengthen Your Health. Shape Your Future."
  },
  {
    "type": "paragraph",
    "text": "An upcoming mobile platform by Afrigenetry Link"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Welcome to Triple H"
  },
  {
    "type": "paragraph",
    "text": "Every family has a story."
  },
  {
    "type": "paragraph",
    "text": "Some stories are passed down through grandparents. Others are found in old photographs, family records, or treasured memories. Many people also want to understand how their family's history connects to their health and where their ancestors came from."
  },
  {
    "type": "paragraph",
    "text": "For millions of Africans and people of African descent, finding trustworthy information about ancestry, genetics, and family health can be challenging. Reliable resources are often difficult to access, and much of the available information does not reflect Africa's rich diversity or the unique experiences of African communities."
  },
  {
    "type": "paragraph",
    "text": "That is why"
  },
  {
    "type": "paragraph",
    "text": "is developing"
  },
  {
    "type": "paragraph",
    "text": "Triple H (3HHH),"
  },
  {
    "type": "paragraph",
    "text": "a digital platform designed to bring"
  },
  {
    "type": "paragraph",
    "text": "Heritage, Health, and Healing"
  },
  {
    "type": "paragraph",
    "text": "together in one place."
  },
  {
    "type": "paragraph",
    "text": "Triple H is being built to help people explore their African heritage, improve their understanding of genetic health, preserve family history, and access trusted educational resources. It is not designed to replace healthcare professionals or provide medical diagnoses. Instead, it aims to make complex topics easier to understand and encourage informed conversations with qualified healthcare providers."
  },
  {
    "type": "paragraph",
    "text": "Whether you are curious about your family roots, interested in genetics, or simply want to learn more about African genomics, Triple H is being created to support your journey with clear, reliable, and community-focused information."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Genetics: Understanding Inheritance, DNA Testing, and Prevention"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Why Triple H Matters"
  },
  {
    "type": "paragraph",
    "text": "Africa is the birthplace of modern humans and is home to the greatest human genetic diversity in the world. This diversity has helped scientists better understand human evolution, health, and disease. Yet African populations remain underrepresented in many genomic studies, which can limit scientific discoveries and reduce the effectiveness of healthcare innovations for diverse populations."
  },
  {
    "type": "paragraph",
    "text": "At the same time, interest in African ancestry continues to grow worldwide. More people are exploring their family history, reconnecting with their heritage, and learning about the role genetics plays in health and well-being."
  },
  {
    "type": "paragraph",
    "text": "Triple H brings these important topics together."
  },
  {
    "type": "paragraph",
    "text": "Instead of separating ancestry, health education, and genealogy, the platform aims to provide a single trusted place where users can learn about all three in an easy-to-understand, relevant way for African communities."
  },
  {
    "type": "paragraph",
    "text": "By making educational resources more accessible, Triple H hopes to support greater genetic literacy, encourage informed participation in research, and strengthen connections between people, families, and communities."
  },
  {
    "type": "paragraph",
    "text": "Genetic Health in Africa: The Complete Guide to DNA, Genomics, Genetic Testing, and Hereditary Diseases"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Did you know?"
  },
  {
    "type": "paragraph",
    "text": "Africa contains more human genetic diversity than any other continent, making African genomics essential to understanding human biology and improving global health research.Â¹"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "What Does Triple H Mean?"
  },
  {
    "type": "paragraph",
    "text": "The name"
  },
  {
    "type": "paragraph",
    "text": "Triple H"
  },
  {
    "type": "paragraph",
    "text": "represents three connected ideas that guide the platform's purpose."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Heritage"
  },
  {
    "type": "paragraph",
    "text": "Heritage is about more than where your ancestors lived. It includes your family's traditions, languages, cultures, stories, and shared experiences."
  },
  {
    "type": "paragraph",
    "text": "Learning about your heritage can help you understand your identity, strengthen family connections, and preserve knowledge for future generations."
  },
  {
    "type": "paragraph",
    "text": "Triple H aims to provide educational resources that help users explore African ancestry, genealogy, migration history, and cultural heritage while celebrating the diversity of African communities."
  },
  {
    "type": "paragraph",
    "text": "Genomic Equity: Building an Inclusive Future for African Health and Ancestry"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Health"
  },
  {
    "type": "paragraph",
    "text": "Health begins with knowledge."
  },
  {
    "type": "paragraph",
    "text": "Understanding family health history and basic genetic concepts can help people have more informed conversations with healthcare professionals and make better decisions about their well-being."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Triple H will provide easy-to-understand educational content covering topics such as:"
  },
  {
    "type": "paragraph",
    "text": "Family health history"
  },
  {
    "type": "paragraph",
    "text": "Genetics and DNA"
  },
  {
    "type": "paragraph",
    "text": "Inherited conditions"
  },
  {
    "type": "paragraph",
    "text": "Preventive healthcare"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Precision Medicine"
  },
  {
    "type": "paragraph",
    "text": "Public health genomics"
  },
  {
    "type": "paragraph",
    "text": "The platform is designed to educate and empower, not to diagnose or replace professional medical care."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Healing"
  },
  {
    "type": "paragraph",
    "text": "Healing is about caring for the whole person."
  },
  {
    "type": "paragraph",
    "text": "It includes physical health, emotional well-being, family support, community, and cultural identity."
  },
  {
    "type": "paragraph",
    "text": "Triple H encourages lifelong learning, healthy choices, and stronger community connections because well-being is shaped by more than medicine alone."
  },
  {
    "type": "paragraph",
    "text": "By bringing together heritage, health, and healing, the platform aims to help individuals and families build a healthier future while staying connected to their roots."
  },
  {
    "type": "paragraph",
    "text": "DNA Testing for African Americans: Understanding Your Roots"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Our Vision"
  },
  {
    "type": "paragraph",
    "text": "We believe everyone deserves access to trustworthy information about genetics, ancestry, and health."
  },
  {
    "type": "paragraph",
    "text": "Our vision is to create a future in which Africans and the global African diaspora can confidently explore their heritage, deepen their understanding of genomics, and make informed decisions supported by reliable educational resources."
  },
  {
    "type": "paragraph",
    "text": "Through innovation, collaboration, and responsible technology, Triple H aims to make genomic knowledge more accessible, inclusive, and meaningful."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Our Mission"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Triple H exists to:"
  },
  {
    "type": "paragraph",
    "text": "Improve genetic literacy across Africa."
  },
  {
    "type": "paragraph",
    "text": "Promote awareness of African ancestry and heritage."
  },
  {
    "type": "paragraph",
    "text": "Encourage responsible public engagement with genomics."
  },
  {
    "type": "paragraph",
    "text": "Help families preserve their stories for future generations."
  },
  {
    "type": "paragraph",
    "text": "Support ethical and inclusive genomic education."
  },
  {
    "type": "paragraph",
    "text": "Build stronger communities through knowledge sharing and collaboration."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Everything we create is guided by one simple belief:"
  },
  {
    "type": "paragraph",
    "text": "Knowledge should be accessible, understandable, and beneficial to everyone."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Why Trust Triple H?"
  },
  {
    "type": "paragraph",
    "text": "Trust is the foundation of everything we are building."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Triple H is being developed with a commitment to:"
  },
  {
    "type": "paragraph",
    "text": "Privacy and transparency."
  },
  {
    "type": "paragraph",
    "text": "Respect for individuals and communities."
  },
  {
    "type": "paragraph",
    "text": "Ethical genomics and informed consent."
  },
  {
    "type": "paragraph",
    "text": "Accurate, evidence-based educational content."
  },
  {
    "type": "paragraph",
    "text": "Responsible use of technology."
  },
  {
    "type": "paragraph",
    "text": "We believe learning about genetics should empower people, not overwhelm them. That's why our content is written in clear, simple language and encourages users to seek advice from qualified healthcare professionals when making medical decisions."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "How Triple H Can Help You"
  },
  {
    "type": "paragraph",
    "text": "Learning about your heritage and your health should not be confusing or overwhelming. Triple H is being developed to make these topics easier to understand, giving people the knowledge they need to make informed decisions and stay connected to their roots."
  },
  {
    "type": "paragraph",
    "text": "Instead of searching across multiple websites for answers, Triple H aims to bring trusted educational resources together in one place."
  },
  {
    "type": "paragraph",
    "text": "Whether you're exploring your African ancestry, learning about genetics for the first time, or preserving your family's history, the platform is designed to support you every step of the way."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Discover Your African Heritage"
  },
  {
    "type": "paragraph",
    "text": "Every family has a unique story, and every story deserves to be remembered."
  },
  {
    "type": "paragraph",
    "text": "For many people across Africa and the African diaspora, reconnecting with their heritage is about more than finding names on a family tree. It's about understanding where their family came from, learning about cultural traditions, and appreciating the journeys that shaped their identity."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Triple H is being developed to help users explore topics such as:"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "African Ancestry"
  },
  {
    "type": "paragraph",
    "text": "Family history"
  },
  {
    "type": "paragraph",
    "text": "Genealogy"
  },
  {
    "type": "paragraph",
    "text": "Traditional cultures"
  },
  {
    "type": "paragraph",
    "text": "Historical migration"
  },
  {
    "type": "paragraph",
    "text": "African ethnic groups"
  },
  {
    "type": "paragraph",
    "text": "Cultural identity"
  },
  {
    "type": "paragraph",
    "text": "Through educational articles, guides, and interactive learning resources, users will gain a better understanding of Africa's rich history and extraordinary diversity."
  },
  {
    "type": "paragraph",
    "text": "We believe that preserving family stories is just as important as preserving family photographs. By recording memories, traditions, and historical information, families can create a legacy that future generations can continue to build on."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Did You Know?"
  },
  {
    "type": "paragraph",
    "text": "Africa is home to more than 2,000 languages and thousands of distinct cultural groups, making it the most genetically and culturally diverse continent in the world."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Learn About Your Genetic Health"
  },
  {
    "type": "paragraph",
    "text": "Many people hear terms like"
  },
  {
    "type": "paragraph",
    "text": "DNA"
  },
  {
    "type": "paragraph",
    "text": ","
  },
  {
    "type": "paragraph",
    "text": "genes"
  },
  {
    "type": "paragraph",
    "text": ", and"
  },
  {
    "type": "paragraph",
    "text": "genomics"
  },
  {
    "type": "paragraph",
    "text": ", but few have the opportunity to learn what they really mean."
  },
  {
    "type": "paragraph",
    "text": "Triple H aims to change that by providing easy-to-understand educational content written for everyoneâ€”not just scientists or healthcare professionals."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Topics will include:"
  },
  {
    "type": "paragraph",
    "text": "What DNA is and how it works"
  },
  {
    "type": "paragraph",
    "text": "How genes are passed from one generation to the next"
  },
  {
    "type": "paragraph",
    "text": "The importance of family health history"
  },
  {
    "type": "paragraph",
    "text": "Inherited conditions"
  },
  {
    "type": "paragraph",
    "text": "Genetic variation"
  },
  {
    "type": "paragraph",
    "text": "Preventive healthcare"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Precision Medicine"
  },
  {
    "type": "paragraph",
    "text": "Public health genomics"
  },
  {
    "type": "paragraph",
    "text": "Our goal is not to make users experts overnight. Instead, we want to build confidence and encourage curiosity so people feel comfortable asking questions and discussing genetics with qualified healthcare professionals."
  },
  {
    "type": "paragraph",
    "text": "Knowledge is one of the most powerful tools for improving health outcomes, and understanding genetics is becoming increasingly important in modern healthcare."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Why Family Health History Matters"
  },
  {
    "type": "paragraph",
    "text": "Your family history is one of the most valuable health resources you have."
  },
  {
    "type": "paragraph",
    "text": "Knowing whether certain health conditions have affected close relatives can help healthcare providers better understand possible risks and recommend appropriate screening or preventive care."
  },
  {
    "type": "paragraph",
    "text": "TripleH encourages families to start conversations about their health history in a respectful and informed way."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "This may include learning about:"
  },
  {
    "type": "paragraph",
    "text": "Heart disease"
  },
  {
    "type": "paragraph",
    "text": "Diabetes"
  },
  {
    "type": "paragraph",
    "text": "Some inherited cancers"
  },
  {
    "type": "paragraph",
    "text": "Sickle cell disease"
  },
  {
    "type": "paragraph",
    "text": "Other inherited conditions"
  },
  {
    "type": "paragraph",
    "text": "It is important to remember that having a family history of a condition does"
  },
  {
    "type": "paragraph",
    "text": "not"
  },
  {
    "type": "paragraph",
    "text": "mean someone will develop it. Many factors, including lifestyle, environment, and access to healthcare, also influence health."
  },
  {
    "type": "paragraph",
    "text": "That is why Triple H focuses on education rather than diagnosis."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Preserve Your Family Story"
  },
  {
    "type": "paragraph",
    "text": "Some of the most valuable knowledge in African communities has traditionally been passed from one generation to the next through storytelling."
  },
  {
    "type": "paragraph",
    "text": "Grandparents share memories."
  },
  {
    "type": "paragraph",
    "text": "Parents pass on traditions."
  },
  {
    "type": "paragraph",
    "text": "Families preserve customs that have survived for centuries."
  },
  {
    "type": "paragraph",
    "text": "Triple H aims to help protect these stories by encouraging families to record important memories before they are lost."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Future versions of the platform may support educational tools that help users organize:"
  },
  {
    "type": "paragraph",
    "text": "Family trees"
  },
  {
    "type": "paragraph",
    "text": "Important family events"
  },
  {
    "type": "paragraph",
    "text": "Historical photographs"
  },
  {
    "type": "paragraph",
    "text": "Cultural traditions"
  },
  {
    "type": "paragraph",
    "text": "Oral histories"
  },
  {
    "type": "paragraph",
    "text": "Family milestones"
  },
  {
    "type": "paragraph",
    "text": "These records can become a lasting gift for future generations."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Learn at Your Own Pace"
  },
  {
    "type": "paragraph",
    "text": "Everyone learns differently."
  },
  {
    "type": "paragraph",
    "text": "Some people enjoy reading detailed articles."
  },
  {
    "type": "paragraph",
    "text": "Others prefer short summaries, videos, or visual explanations."
  },
  {
    "type": "paragraph",
    "text": "Triple H is designed with different learning styles in mind, allowing users to explore topics at a pace that suits them."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Educational resources may include:"
  },
  {
    "type": "paragraph",
    "text": "Beginner-friendly guides"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Frequently Asked Questions"
  },
  {
    "type": "paragraph",
    "text": "Interactive learning modules"
  },
  {
    "type": "paragraph",
    "text": "Infographics"
  },
  {
    "type": "paragraph",
    "text": "Community stories"
  },
  {
    "type": "paragraph",
    "text": "Expert interviews"
  },
  {
    "type": "paragraph",
    "text": "Recommended reading"
  },
  {
    "type": "paragraph",
    "text": "By making learning flexible and accessible, Triple H hopes to remove barriers that often prevent people from engaging with genetics and ancestry."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Making Complex Science Easy to Understand"
  },
  {
    "type": "paragraph",
    "text": "Genetics can sound complicated, but it doesn't have to be."
  },
  {
    "type": "paragraph",
    "text": "Triple H is committed to explaining scientific concepts in plain language without losing accuracy."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "For example:"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Instead of saying:"
  },
  {
    "type": "paragraph",
    "text": "\"Genomic variation contributes to phenotypic diversity.\""
  },
  {
    "type": "heading",
    "level": 3,
    "text": "We explain:"
  },
  {
    "type": "paragraph",
    "text": "\"Small differences in our DNA help explain why every person is unique.\""
  },
  {
    "type": "paragraph",
    "text": "This simple approach makes learning more enjoyable and helps people build confidence as they explore new topics."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Education First"
  },
  {
    "type": "paragraph",
    "text": "One of the guiding principles behind Triple H is that education should always come before assumptions."
  },
  {
    "type": "paragraph",
    "text": "The platform does"
  },
  {
    "type": "paragraph",
    "text": "not"
  },
  {
    "type": "paragraph",
    "text": "encourage people to diagnose themselves or make healthcare decisions based only on information they read online."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Instead, Triple H encourages users to:"
  },
  {
    "type": "paragraph",
    "text": "Learn from trusted educational resources."
  },
  {
    "type": "paragraph",
    "text": "Ask questions."
  },
  {
    "type": "paragraph",
    "text": "Speak with qualified healthcare professionals when medical advice is needed."
  },
  {
    "type": "paragraph",
    "text": "Continue learning as science evolves."
  },
  {
    "type": "paragraph",
    "text": "Good health decisions are built on reliable information, thoughtful discussions, and professional guidance."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Built for Africa. Open to the World."
  },
  {
    "type": "paragraph",
    "text": "Although the needs of African communities inspire Triple H, its vision extends far beyond the continent."
  },
  {
    "type": "paragraph",
    "text": "Millions of people in the African diaspora are looking for reliable information about their heritage, family history, and genetics."
  },
  {
    "type": "paragraph",
    "text": "Triple H aims to create a welcoming space where people from around the world can learn, reconnect with their roots, and become part of a growing community that values science, culture, and lifelong learning."
  },
  {
    "type": "paragraph",
    "text": "No matter where someone lives, understanding their story can help them better understand themselves."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Learning Made Smarter with AI"
  },
  {
    "type": "paragraph",
    "text": "Artificial intelligence (AI) is changing the way people learn. It can make information easier to find, personalize learning, and help explain complex topics in simple ways."
  },
  {
    "type": "paragraph",
    "text": "At Triple H, we believe AI should support peopleâ€”not replace them."
  },
  {
    "type": "paragraph",
    "text": "That's why our vision is to use AI responsibly to help users discover trusted educational resources, learn at their own pace, and explore topics that match their interests."
  },
  {
    "type": "paragraph",
    "text": "For example, if someone wants to learn about family health history, the platform could recommend beginner-friendly articles before introducing more detailed topics such as genetics or precision medicine."
  },
  {
    "type": "paragraph",
    "text": "The goal is simple: make learning easier, not more complicated."
  },
  {
    "type": "paragraph",
    "text": "As AI continues to evolve, Triple H will remain committed to using it in ways that respect privacy, encourage critical thinking, and provide reliable information."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Privacy Comes First"
  },
  {
    "type": "paragraph",
    "text": "Learning about genetics and family history can feel personal."
  },
  {
    "type": "paragraph",
    "text": "People should always feel confident that their privacy is respected and that they understand how their information is used."
  },
  {
    "type": "paragraph",
    "text": "That is why Triple H is being developed with privacy, transparency, and ethical responsibility at its core."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "A few simple principles guide our approach:"
  },
  {
    "type": "paragraph",
    "text": "Respect every person's privacy."
  },
  {
    "type": "paragraph",
    "text": "Be open about how information is used."
  },
  {
    "type": "paragraph",
    "text": "Encourage informed decision-making."
  },
  {
    "type": "paragraph",
    "text": "Promote responsible data practices."
  },
  {
    "type": "paragraph",
    "text": "Build trust through honesty and transparency."
  },
  {
    "type": "paragraph",
    "text": "These principles help create a safe and welcoming environment where people can learn without unnecessary concern."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Understanding Informed Consent"
  },
  {
    "type": "paragraph",
    "text": "One of the most important ideas in genetics and health research is"
  },
  {
    "type": "paragraph",
    "text": "informed consent"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "In simple terms, informed consent means that people receive clear information before deciding whether they want to take part in a study, share information, or use a service."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Well-informed consent means people understand:"
  },
  {
    "type": "paragraph",
    "text": "What they are agreeing to."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Why is information being collected?"
  },
  {
    "type": "paragraph",
    "text": "How it may be used."
  },
  {
    "type": "paragraph",
    "text": "Any potential benefits or risks."
  },
  {
    "type": "paragraph",
    "text": "That they can ask questions before making a decision."
  },
  {
    "type": "paragraph",
    "text": "Triple H supports these principles because informed choices build trust and strengthen relationships between communities, researchers, and healthcare professionals."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Building a Stronger Community"
  },
  {
    "type": "paragraph",
    "text": "Knowledge becomes more powerful when it is shared."
  },
  {
    "type": "paragraph",
    "text": "Triple H is more than a learning platform. It is part of a growing effort to increase awareness of genetics and genomics across Africa while encouraging meaningful conversations between communities, educators, researchers, and healthcare professionals."
  },
  {
    "type": "paragraph",
    "text": "We believe everyone has something valuable to contribute."
  },
  {
    "type": "paragraph",
    "text": "Students bring curiosity."
  },
  {
    "type": "paragraph",
    "text": "Researchers bring scientific knowledge."
  },
  {
    "type": "paragraph",
    "text": "Healthcare professionals bring practical experience."
  },
  {
    "type": "paragraph",
    "text": "Families bring stories and lived experiences."
  },
  {
    "type": "paragraph",
    "text": "When these perspectives come together, everyone benefits."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Supporting the Future of Genomics in Africa"
  },
  {
    "type": "paragraph",
    "text": "Africa is playing an increasingly important role in global genomics."
  },
  {
    "type": "paragraph",
    "text": "Researchers across the continent are helping improve our understanding of human health, genetic diversity, and disease by expanding African participation in genomics research."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Triple H supports this broader movement by helping more people understand:"
  },
  {
    "type": "paragraph",
    "text": "What genomics is."
  },
  {
    "type": "paragraph",
    "text": "Why African representation matters."
  },
  {
    "type": "paragraph",
    "text": "How research can improve healthcare."
  },
  {
    "type": "paragraph",
    "text": "Why ethical participation is important."
  },
  {
    "type": "paragraph",
    "text": "How education supports better health outcomes."
  },
  {
    "type": "paragraph",
    "text": "By making these topics easier to understand, Triple H hopes to encourage more informed public engagement with science."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Why Triple H Is Different"
  },
  {
    "type": "paragraph",
    "text": "Many digital platforms focus on only one area."
  },
  {
    "type": "paragraph",
    "text": "Some focus on ancestry."
  },
  {
    "type": "paragraph",
    "text": "Others focus on health."
  },
  {
    "type": "paragraph",
    "text": "Some provide genealogy tools."
  },
  {
    "type": "paragraph",
    "text": "Others publish educational articles."
  },
  {
    "type": "paragraph",
    "text": "Triple H brings these ideas together in one place."
  },
  {
    "type": "paragraph",
    "text": "Instead of asking users to visit multiple websites, the platform aims to provide one trusted destination where people can:"
  },
  {
    "type": "paragraph",
    "text": "Learn about African ancestry."
  },
  {
    "type": "paragraph",
    "text": "Understand genetics in simple language."
  },
  {
    "type": "paragraph",
    "text": "Explore family history."
  },
  {
    "type": "paragraph",
    "text": "Improve genetic literacy."
  },
  {
    "type": "paragraph",
    "text": "Stay informed about genomics."
  },
  {
    "type": "paragraph",
    "text": "Access trustworthy educational resources."
  },
  {
    "type": "paragraph",
    "text": "Connect with a growing community."
  },
  {
    "type": "paragraph",
    "text": "This integrated approach reflects AfriGenetry Link's belief that heritage, health, and education belong together."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Looking Ahead"
  },
  {
    "type": "paragraph",
    "text": "Triple H is still growing, and so is our vision."
  },
  {
    "type": "paragraph",
    "text": "As the platform develops, we hope to introduce new educational resources, strengthen community partnerships, and continue improving access to trusted information for Africans and the global African diaspora."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Every improvement will be guided by the same principles that shape the platform today:"
  },
  {
    "type": "paragraph",
    "text": "Education before assumptions."
  },
  {
    "type": "paragraph",
    "text": "Science explained clearly."
  },
  {
    "type": "paragraph",
    "text": "Respect for culture and identity."
  },
  {
    "type": "paragraph",
    "text": "Ethical and responsible innovation."
  },
  {
    "type": "paragraph",
    "text": "Communities at the centre of progress."
  },
  {
    "type": "paragraph",
    "text": "Technology will continue to change, but our commitment to helping people learn and make informed decisions will remain the same."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Be Part of the Journey"
  },
  {
    "type": "paragraph",
    "text": "The future of health and ancestry is not just about technology."
  },
  {
    "type": "paragraph",
    "text": "It is about people."
  },
  {
    "type": "paragraph",
    "text": "It is about preserving family stories before they are lost."
  },
  {
    "type": "paragraph",
    "text": "It is about helping young people understand science."
  },
  {
    "type": "paragraph",
    "text": "It is about giving communities access to trustworthy information."
  },
  {
    "type": "paragraph",
    "text": "It is about building a future where everyone has the opportunity to learn, ask questions, and make informed choices."
  },
  {
    "type": "paragraph",
    "text": "That is the future Triple H hopes to support."
  },
  {
    "type": "paragraph",
    "text": "Whether you are interested in your African heritage, curious about genetics, passionate about education, or simply looking for reliable information, there is a place for you in this journey."
  },
  {
    "type": "paragraph",
    "text": "We invite you to follow our progress, join our community, and help shape a future where knowledge is shared, culture is celebrated, and better health begins with understanding."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Key Takeaways"
  },
  {
    "type": "paragraph",
    "text": "AI should make learning easier, not replace people."
  },
  {
    "type": "paragraph",
    "text": "Privacy and transparency are essential to building trust."
  },
  {
    "type": "paragraph",
    "text": "Informed consent helps people make confident decisions."
  },
  {
    "type": "paragraph",
    "text": "Community participation strengthens genomic education."
  },
  {
    "type": "paragraph",
    "text": "Africa's genetic diversity is vital to global health research."
  },
  {
    "type": "paragraph",
    "text": "Triple H combines heritage, health, healing, and education into a single platform."
  },
  {
    "type": "paragraph",
    "text": "Everyone has a role to play in building a healthier and more informed future."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Continue Your Learning"
  },
  {
    "type": "paragraph",
    "text": "Triple H is just one part of AfriGenetry Link's mission to make genetic education and information about African ancestry more accessible."
  },
  {
    "type": "paragraph",
    "text": "If you'd like to learn more, explore these resources from our Knowledge Hub."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "African Ancestry"
  },
  {
    "type": "paragraph",
    "text": "Discover how genetics, history, and migration help us better understand African ancestry and the rich diversity of African populations."
  },
  {
    "type": "paragraph",
    "text": "Learn more â†’"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "African Ancestry"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "DNA Testing Basics"
  },
  {
    "type": "paragraph",
    "text": "New to DNA testing? Start here. Learn how DNA testing works, what different tests can tell you, and the questions you should ask before choosing a testing service."
  },
  {
    "type": "paragraph",
    "text": "Learn more â†’"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "DNA Testing Basics"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "African Genealogy & Family History"
  },
  {
    "type": "paragraph",
    "text": "Family history is more than names and dates. Explore practical tips, historical resources, and ways to preserve your family's story for future generations."
  },
  {
    "type": "paragraph",
    "text": "Learn more â†’"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "African Genealogy & Family History"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Genetic Health"
  },
  {
    "type": "paragraph",
    "text": "Understand how genetics influences health, why family health history matters, and how knowledge can support informed conversations with healthcare professionals."
  },
  {
    "type": "paragraph",
    "text": "Learn more â†’"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Genetic Health"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Population Genomics"
  },
  {
    "type": "paragraph",
    "text": "Learn how scientists study genetic variation across populations and why African genomic diversity is essential for improving global health research."
  },
  {
    "type": "paragraph",
    "text": "Learn more â†’"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Population Genomics"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Precision Medicine in Africa"
  },
  {
    "type": "paragraph",
    "text": "Discover how precision medicine uses genetics, lifestyle, and environmental information to support more personalized healthcare and why African representation in research matters."
  },
  {
    "type": "paragraph",
    "text": "Learn more â†’"
  },
  {
    "type": "paragraph",
    "text": "/precision-medicine-Africa"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "DNA on Wheels"
  },
  {
    "type": "paragraph",
    "text": "Learn about AfriGenetry Link's community outreach initiative and its mission to improve access to genetics education and public awareness across Africa."
  },
  {
    "type": "paragraph",
    "text": "Learn more â†’"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "DNA on Wheels"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "About AfriGenetry Link"
  },
  {
    "type": "paragraph",
    "text": "Find out who we are, what we do, and how we're working to promote genetic literacy, African ancestry education, and equitable access to genomics."
  },
  {
    "type": "paragraph",
    "text": "Learn more â†’"
  },
  {
    "type": "paragraph",
    "text": "/about"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Get Involved"
  },
  {
    "type": "paragraph",
    "text": "Support our work by volunteering, partnering with us, or subscribing to receive updates on Triple H, educational resources, and community initiatives."
  },
  {
    "type": "paragraph",
    "text": "Learn more â†’"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Get Involved"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Frequently Asked Questions"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "1. What is Triple H (3HHH)?"
  },
  {
    "type": "paragraph",
    "text": "Triple H (Heritage, Health & Healing) is an upcoming mobile platform by AfriGenetry Link. It is being developed to help people learn about African ancestry, genetic health, family history, and genomics through trusted educational resources."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "2. What does Triple H stand for?"
  },
  {
    "type": "paragraph",
    "text": "Triple H stands for"
  },
  {
    "type": "paragraph",
    "text": "Heritage, Health & Healing"
  },
  {
    "type": "paragraph",
    "text": ". These three pillars reflect the platform's goal of connecting people with their history, improving genetic literacy, and supporting lifelong wellbeing through education."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "3. Is Triple H available now?"
  },
  {
    "type": "paragraph",
    "text": "Triple H is currently under development. Updates about new features and future releases will be shared through AfriGenetry Link's official communication channels."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "4. Is Triple H a DNA testing service?"
  },
  {
    "type": "paragraph",
    "text": "No. TripleH is an educational platform. It does not currently provide DNA testing or medical diagnosis."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "5. Can Triple H help me trace my African ancestry?"
  },
  {
    "type": "paragraph",
    "text": "Triple H provides educational information about African ancestry, genealogy, and family history. It is designed to help users better understand their heritage and the science behind ancestry."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "6. Is Triple H only for Africans?"
  },
  {
    "type": "paragraph",
    "text": "No. While Triple H is designed with African communities in mind, it is also intended for the global African diaspora and anyone interested in African genomics, genealogy, and health education."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "7. What is genetic literacy?"
  },
  {
    "type": "paragraph",
    "text": "Genetic literacy means understanding basic genetic concepts so you can make informed decisions and have meaningful conversations with healthcare professionals."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "8. Why is family health history important?"
  },
  {
    "type": "paragraph",
    "text": "Family health history can provide useful information about inherited health conditions and help guide conversations with healthcare providers about screening and prevention."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "9. Does Triple H replace medical advice?"
  },
  {
    "type": "paragraph",
    "text": "No. Triple H provides educational information only. Always seek advice from qualified healthcare professionals for diagnosis, treatment, or medical decisions."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "10. Why is Africa important in genomics?"
  },
  {
    "type": "paragraph",
    "text": "Africa has the greatest human genetic diversity in the world. Studying this diversity helps researchers improve our understanding of human health, disease, and personalized medicine."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "11. What is precision medicine?"
  },
  {
    "type": "paragraph",
    "text": "Precision medicine is an approach to healthcare that considers a person's genes, environment, and lifestyle to support more personalized prevention and treatment."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "12. What is informed consent?"
  },
  {
    "type": "paragraph",
    "text": "Informed consent means people receive clear information before deciding whether to participate in research or share personal information. It is a key principle of ethical genomics."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "13. How does TripleH protect privacy?"
  },
  {
    "type": "paragraph",
    "text": "TripleH is being developed with privacy, transparency, and responsible data practices in mind. Respect for users and communities is a core principle of the platform."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "14. Who can benefit from TripleH?"
  },
  {
    "type": "paragraph",
    "text": "Students, families, educators, researchers, healthcare professionals, community organizations, and anyone interested in African ancestry or genetic health education."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "15. How can I stay informed?"
  },
  {
    "type": "paragraph",
    "text": "You can subscribe to AfriGenetry Link's newsletter or follow its official channels to receive updates about Triple H and related educational initiatives."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "References"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Genomics and Public Health"
  },
  {
    "type": "paragraph",
    "text": "World Health Organization (WHO)."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Genomics and Public Health"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.who.int/health-topics/genomics"
  },
  {
    "type": "paragraph",
    "text": "National Human Genome Research Institute (NHGRI)."
  },
  {
    "type": "paragraph",
    "text": "About Genomics"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.genome.gov/about-genomics"
  },
  {
    "type": "paragraph",
    "text": "National Human Genome Research Institute (NHGRI)."
  },
  {
    "type": "paragraph",
    "text": "Talking Glossary of Genetic Terms"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.genome.gov/genetics-glossary"
  },
  {
    "type": "paragraph",
    "text": "National Institutes of Health (NIH)."
  },
  {
    "type": "paragraph",
    "text": "https://www.nih.gov/"
  },
  {
    "type": "paragraph",
    "text": "National Centre for Biotechnology Information (NCBI)."
  },
  {
    "type": "paragraph",
    "text": "https://www.ncbi.nlm.nih.gov/"
  },
  {
    "type": "paragraph",
    "text": "MedlinePlus Genetics."
  },
  {
    "type": "paragraph",
    "text": "https://medlineplus.gov/genetics/"
  },
  {
    "type": "paragraph",
    "text": "Centres for Disease Control and Prevention (CDC)."
  },
  {
    "type": "paragraph",
    "text": "Genomics and Precision Health"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.cdc.gov/genomics/"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "African Genomics"
  },
  {
    "type": "paragraph",
    "text": "Human Heredity and Health in Africa (H3Africa)."
  },
  {
    "type": "paragraph",
    "text": "About H3Africa"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://h3africa.org/about/"
  },
  {
    "type": "paragraph",
    "text": "Human Heredity and Health in Africa (H3Africa)."
  },
  {
    "type": "paragraph",
    "text": "Research Projects"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://h3africa.org/research-projects/"
  },
  {
    "type": "paragraph",
    "text": "Human Heredity and Health in Africa (H3Africa)."
  },
  {
    "type": "paragraph",
    "text": "Publications"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://h3africa.org/publications/"
  },
  {
    "type": "paragraph",
    "text": "African Society of Human Genetics (AfSHG)."
  },
  {
    "type": "paragraph",
    "text": "https://afshg.org/"
  },
  {
    "type": "paragraph",
    "text": "African Genome Variation Project. Wellcome Sanger Institute."
  },
  {
    "type": "paragraph",
    "text": "https://www.sanger.ac.uk/collaboration/african-genome-variation-project/"
  },
  {
    "type": "paragraph",
    "text": "Wellcome Sanger Institute."
  },
  {
    "type": "paragraph",
    "text": "https://www.sanger.ac.uk/"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Genetics and Human Evolution"
  },
  {
    "type": "paragraph",
    "text": "Nature Portfolio â€“ Genetics Collection."
  },
  {
    "type": "paragraph",
    "text": "https://www.nature.com/subjects/genetics"
  },
  {
    "type": "paragraph",
    "text": "Nature Reviews Genetics."
  },
  {
    "type": "paragraph",
    "text": "https://www.nature.com/nrg/"
  },
  {
    "type": "paragraph",
    "text": "Cell Genomics."
  },
  {
    "type": "paragraph",
    "text": "https://www.cell.com/cell-genomics"
  },
  {
    "type": "paragraph",
    "text": "Frontiers in Genetics."
  },
  {
    "type": "paragraph",
    "text": "https://www.frontiersin.org/journals/genetics"
  },
  {
    "type": "paragraph",
    "text": "Nature Human Behavior."
  },
  {
    "type": "paragraph",
    "text": "https://www.nature.com/nathumbehav/"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Medical Research"
  },
  {
    "type": "paragraph",
    "text": "The Lancet."
  },
  {
    "type": "paragraph",
    "text": "https://www.thelancet.com/"
  },
  {
    "type": "paragraph",
    "text": "The New England Journal of Medicine (NEJM)."
  },
  {
    "type": "paragraph",
    "text": "https://www.nejm.org/"
  },
  {
    "type": "paragraph",
    "text": "BMJ."
  },
  {
    "type": "paragraph",
    "text": "https://www.bmj.com/"
  },
  {
    "type": "paragraph",
    "text": "PLOS Genetics."
  },
  {
    "type": "paragraph",
    "text": "https://journals.plos.org/plosgenetics/"
  },
  {
    "type": "paragraph",
    "text": "eLife."
  },
  {
    "type": "paragraph",
    "text": "https://elifesciences.org/"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Precision Medicine"
  },
  {
    "type": "paragraph",
    "text": "National Human Genome Research Institute (NHGRI)."
  },
  {
    "type": "paragraph",
    "text": "Genomic Medicine"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.genome.gov/health/Genomics-and-Medicine"
  },
  {
    "type": "paragraph",
    "text": "Global Alliance for Genomics and Health (GA4GH)."
  },
  {
    "type": "paragraph",
    "text": "https://www.ga4gh.org/"
  },
  {
    "type": "paragraph",
    "text": "European Bioinformatics Institute (EMBL-EBI)."
  },
  {
    "type": "paragraph",
    "text": "https://www.ebi.ac.uk/"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Family History and Genealogy"
  },
  {
    "type": "paragraph",
    "text": "FamilySearch Learning Centre."
  },
  {
    "type": "paragraph",
    "text": "https://www.familysearch.org/en/wiki/"
  },
  {
    "type": "paragraph",
    "text": "Cyndi's List â€“ Genealogy Resources."
  },
  {
    "type": "paragraph",
    "text": "https://www.cyndislist.com/"
  },
  {
    "type": "paragraph",
    "text": "Library of Congress â€“ Local History & Genealogy."
  },
  {
    "type": "paragraph",
    "text": "https://www.loc.gov/rr/genealogy/"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Ethics and Informed Consent"
  },
  {
    "type": "paragraph",
    "text": "UNESCO â€“ Ethics of Science and Technology."
  },
  {
    "type": "paragraph",
    "text": "https://www.unesco.org/en/ethics-science-and-technology"
  },
  {
    "type": "paragraph",
    "text": "World Medical Association."
  },
  {
    "type": "paragraph",
    "text": "Declaration of Helsinki"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.wma.net/what-we-do/medical-ethics/declaration-of-helsinki/"
  },
  {
    "type": "paragraph",
    "text": "Council for International Organizations of Medical Sciences (CIOMS)."
  },
  {
    "type": "paragraph",
    "text": "https://cioms.ch/"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Artificial Intelligence in Healthcare"
  },
  {
    "type": "paragraph",
    "text": "World Health Organization (WHO)."
  },
  {
    "type": "paragraph",
    "text": "Ethics and governance of artificial intelligence for health"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.who.int/publications/i/item/9789240029200"
  },
  {
    "type": "paragraph",
    "text": "Organization for Economic Co-operation and Development (OECD)."
  },
  {
    "type": "paragraph",
    "text": "OECD AI Principles"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://oecd.ai/en/ai-principles"
  },
  {
    "type": "paragraph",
    "text": "UNESCO."
  },
  {
    "type": "paragraph",
    "text": "Recommendation on the Ethics of Artificial Intelligence"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Global Health"
  },
  {
    "type": "paragraph",
    "text": "World Bank â€“ Health."
  },
  {
    "type": "paragraph",
    "text": "https://www.worldbank.org/en/topic/health"
  },
  {
    "type": "paragraph",
    "text": "Africa Centres for Disease Control and Prevention (Africa CDC)."
  },
  {
    "type": "paragraph",
    "text": "https://africacdc.org/"
  },
  {
    "type": "paragraph",
    "text": "World Health Organization Regional Office for Africa."
  },
  {
    "type": "paragraph",
    "text": "https://www.afro.who.int/"
  },
  {
    "type": "paragraph",
    "text": "United Nations Sustainable Development Goals. Goal 3: Good Health and Well-being."
  },
  {
    "type": "paragraph",
    "text": "https://sdgs.un.org/goals/goal3"
  },
  {
    "type": "paragraph",
    "text": "Our World in Data â€“ Health."
  },
  {
    "type": "paragraph",
    "text": "https://ourworldindata.org/health"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Medical Disclaimer"
  },
  {
    "type": "paragraph",
    "text": "The information on this page is provided for educational purposes only."
  },
  {
    "type": "paragraph",
    "text": "Triple H and AfriGenetry Link do not provide medical diagnosis, treatment, or personalized medical advice. Always consult a qualified healthcare professional for medical concerns, genetic counseling, or decisions related to your health."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Join the Triple H Community"
  },
  {
    "type": "paragraph",
    "text": "Every journey begins with a single step."
  },
  {
    "type": "paragraph",
    "text": "Whether you are exploring your family history, learning about genetics, or looking for trusted information about African ancestry, Triple H is being developed to support your journey."
  },
  {
    "type": "paragraph",
    "text": "Stay connected with AfriGenetry Link to receive updates, discover new educational resources, and be among the first to hear about Triple H's future."
  },
  {
    "type": "paragraph",
    "text": "Together, we can build a future where knowledge is shared, culture is celebrated, and every person has the opportunity to understand their heritage and health better."
  },
  {
    "type": "paragraph",
    "text": "Last updated: July 2026"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Written by:"
  },
  {
    "type": "paragraph",
    "text": "SEO, Website & Digital Growth Lead"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Reviewed by:"
  },
  {
    "type": "paragraph",
    "text": "AfriGenetry Link Editorial Team"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Meet the Team Behind Triple H"
  },
  {
    "type": "paragraph",
    "text": "Triple H is being developed by AfriGenetry Link, a nonprofit organization committed to improving access to genetic health education, African ancestry resources, and community engagement."
  },
  {
    "type": "paragraph",
    "text": "Our work brings together educators, researchers, healthcare advocates, digital specialists, and community partners who share a common goal: making genetics and genomics easier to understand and more accessible for everyone."
  },
  {
    "type": "paragraph",
    "text": "Every article, guide, and educational resource is created with a commitment to accuracy, inclusion, and responsible communication."
  },
  {
    "type": "paragraph",
    "text": "As Triple H grows, we will continue working with experts and communities to ensure the platform remains trustworthy, relevant, and beneficial to the people it serves."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Why You Can Trust Our Content"
  },
  {
    "type": "paragraph",
    "text": "At AfriGenetry Link, we believe trustworthy information starts with responsible research."
  },
  {
    "type": "paragraph",
    "text": "Our educational content is developed with guidance from internationally recognized organizations, peer-reviewed scientific publications, and respected public health institutions."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Before publishing new content, we aim to:"
  },
  {
    "type": "paragraph",
    "text": "Review information from reliable scientific and medical sources."
  },
  {
    "type": "paragraph",
    "text": "Use clear and simple language."
  },
  {
    "type": "paragraph",
    "text": "Update content when important scientific developments occur."
  },
  {
    "type": "paragraph",
    "text": "Encourage readers to consult qualified healthcare professionals for medical advice."
  },
  {
    "type": "paragraph",
    "text": "Our goal is to make genetics easier to understand while maintaining high standards of accuracy and transparency."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "A Simple Comparison Table"
  },
  {
    "type": "paragraph",
    "text": "People often wonder how Triple H differs from DNA testing companies."
  },
  {
    "type": "paragraph",
    "text": "Feature"
  },
  {
    "type": "paragraph",
    "text": "Triple H"
  },
  {
    "type": "paragraph",
    "text": "Typical DNA Testing Service"
  },
  {
    "type": "paragraph",
    "text": "Genetics education"
  },
  {
    "type": "paragraph",
    "text": "âœ…"
  },
  {
    "type": "paragraph",
    "text": "Limited"
  },
  {
    "type": "paragraph",
    "text": "African ancestry learning"
  },
  {
    "type": "paragraph",
    "text": "âœ…"
  },
  {
    "type": "paragraph",
    "text": "Usually included"
  },
  {
    "type": "paragraph",
    "text": "Family history guidance"
  },
  {
    "type": "paragraph",
    "text": "âœ…"
  },
  {
    "type": "paragraph",
    "text": "Sometimes"
  },
  {
    "type": "paragraph",
    "text": "Health education"
  },
  {
    "type": "paragraph",
    "text": "âœ…"
  },
  {
    "type": "paragraph",
    "text": "Varies"
  },
  {
    "type": "paragraph",
    "text": "Medical diagnosis"
  },
  {
    "type": "paragraph",
    "text": "âŒ"
  },
  {
    "type": "paragraph",
    "text": "DNA kit sales"
  },
  {
    "type": "paragraph",
    "text": "âŒ"
  },
  {
    "type": "paragraph",
    "text": "âœ…"
  },
  {
    "type": "paragraph",
    "text": "Community education"
  },
  {
    "type": "paragraph",
    "text": "âœ…"
  },
  {
    "type": "paragraph",
    "text": "Rare"
  },
  {
    "type": "paragraph",
    "text": "Research awareness"
  },
  {
    "type": "paragraph",
    "text": "âœ…"
  },
  {
    "type": "paragraph",
    "text": "Limited"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Did You Know?"
  },
  {
    "type": "paragraph",
    "text": "Scientists estimate that modern humans first evolved in Africa, making the continent central to understanding human history and genetic diversity."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Did You Know?"
  },
  {
    "type": "paragraph",
    "text": "Your family health history can help healthcare professionals identify inherited health risks and recommend appropriate screening."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Did You Know?"
  },
  {
    "type": "paragraph",
    "text": "Genetic diversity helps researchers better understand diseases and develop treatments that work for more people around the world."
  },
  {
    "type": "paragraph",
    "text": "Learning about your heritage and your health is not something you do in a single day. It is a lifelong journey of discovery."
  },
  {
    "type": "paragraph",
    "text": "Whether you are exploring your family's story, learning about genetics for the first time, or looking for trusted educational resources, Triple H is being developed to support you every step of the way."
  },
  {
    "type": "paragraph",
    "text": "We invite you to explore the AfriGenetry Link Knowledge Hub, stay informed about future updates, and become part of a growing community that believes knowledge should be accessible to everyone."
  },
  {
    "type": "paragraph",
    "text": "Together, we can help build a future where African heritage is celebrated, genetic health is better understood, and education empowers individuals, families, and communities."
  }
] as const;

export default function ArticlePage() {
  return (
    <>
      <SiteHeader />
      <main className="article-page">
        <section className="page-hero">
          <div className="page-container">
            <Link className="text-link" href="/stories-insights"><ArrowLeft size={16} /> Stories &amp; Insights</Link>
            <span className="eyebrow">HERITAGE, HEALTH & HEALING</span>
            <h1>Triple H (3HHH): Africa's Heritage, Health & Healing Digital Platform</h1>
            <p className="hero-description">Discover the TripleH (3HHH): African Heritage, Health & Healing Mobile App, designed to explore African ancestry and genetic health. Learn more about TripleH (3HHH): African Heritage, Health & Healing Mobile App today!</p>
          </div>
        </section>
        <article className="section-pad article-content">
          <div className="page-container">
            <div className="article-body">
              {articleBlocks.map((block, index) => {
                if (block.type === "heading") {
                  return block.level === 2
                    ? <h2 key={index}>{block.text}</h2>
                    : <h3 key={index}>{block.text}</h3>;
                }
                return <p key={index}>{block.text}</p>;
              })}
              <p className="eyebrow">CONTENT SOURCE</p>
              <p>This article has been restored from the available AfriGenetry Link source text export. Embedded media and visual assets are not recreated by this text migration and should be reviewed separately.</p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/resources">Explore resources <ArrowRight size={17} /></Link>
                <Link className="button button-dark" href="/contact">Contact AGL</Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
