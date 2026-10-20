import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


export const metadata: Metadata = {
  title: 'Sickle Cell Genetics: Inheritance and Screening',
  description: 'An educational introduction to sickle cell genetics, inheritance patterns, carrier screening, and questions to discuss with qualified health professionals.',
  alternates: { canonical: '/stories-insights/sickle-cell-genetics' },
  openGraph: {
    type: "article",
    title: 'Sickle Cell Genetics: Inheritance and Screening',
    description: 'An educational introduction to sickle cell genetics, inheritance patterns, carrier screening, and questions to discuss with qualified health professionals.',
    url: '/stories-insights/sickle-cell-genetics',
    siteName: "AfriGenetry Link",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Sickle Cell Genetics: Inheritance and Screening',
    description: 'An educational introduction to sickle cell genetics, inheritance patterns, carrier screening, and questions to discuss with qualified health professionals.',
  },
};

const articleBlocks = [
  {
    "type": "heading",
    "level": 2,
    "text": "Understanding Sickle Cell Genetics: Why It Matters"
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Genetics: Understanding Inheritance, DNA Testing & Prevention"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Introduction: Watch the video below to learn how sickle cell disease is inherited, how DNA testing identifies carriers, and why genetic screening and counselling play a vital role in prevention. This educational video complements the information in this article by explaining the genetics of sickle cell disease in a simple and accessible way."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Genetics: Understanding inheritance patterns, DNA testing, carrier screening, and prevention strategies."
  },
  {
    "type": "paragraph",
    "text": "Sickle cell disease is one of the world's most common inherited blood disorders and has its greatest impact in sub-Saharan Africa. Every year, hundreds of thousands of babies are born with the condition, and millions of people worldwide carry the genetic trait without realizing it. Understanding how sickle cell disease is inherited empowers individuals, couples, and families to make informed decisions about their health, family planning, and genetic testing.Â¹Â²"
  },
  {
    "type": "paragraph",
    "text": "Precision Medicine in Africa: Transforming Healthcare Through Genomics, DNA Testing, and Personalized Medicine"
  },
  {
    "type": "paragraph",
    "text": "Unlike infectious diseases, sickle cell disease is"
  },
  {
    "type": "paragraph",
    "text": "not contagious"
  },
  {
    "type": "paragraph",
    "text": ". It is passed from parents to their children through inherited genetic changes in the"
  },
  {
    "type": "paragraph",
    "text": "HBB gene"
  },
  {
    "type": "paragraph",
    "text": ", which provides instructions for making hemoglobinâ€”the protein in red blood cells responsible for carrying oxygen throughout the body. When this gene contains a specific mutation, red blood cells can become rigid and crescent-shaped (or \"sickle-shaped\"), reducing their ability to move through blood vessels and deliver oxygen efficiently.Â³"
  },
  {
    "type": "paragraph",
    "text": "Although sickle cell disease affects people from many regions of the world, it is especially common among populations whose ancestors came from parts of Africa, the Middle East, India, the Mediterranean, and certain regions of South and Central America. The condition's prevalence in Africa is linked to a long-standing evolutionary relationship with malaria, where carrying a single copy of the sickle cell gene can provide some protection against severe malaria infection.Â¹â´"
  },
  {
    "type": "paragraph",
    "text": "DNA Testing for African Americans: Understanding Your Roots"
  },
  {
    "type": "paragraph",
    "text": "For many African families, understanding sickle cell genetics is not only about managing diseaseâ€”it is about prevention, awareness, and improving access to quality healthcare. Advances in DNA testing, newborn screening, genetic counseling, and precision medicine now make it possible to identify carriers, diagnose the condition earlier, and support families with informed reproductive and healthcare decisions.Â²Â³"
  },
  {
    "type": "paragraph",
    "text": "This guide explains the science behind sickle cell disease, how it is inherited, the difference between sickle cell trait and sickle cell disease, available testing options, and the future of genetic healthcare in Africa."
  },
  {
    "type": "paragraph",
    "text": "Genomic Equity: Building an Inclusive Future for African Health and Ancestry"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "What Is Sickle Cell Disease?"
  },
  {
    "type": "paragraph",
    "text": "Sickle cell disease (SCD) is a group of inherited blood disorders that affect the structure and function of hemoglobin, the oxygen-carrying protein found inside red blood cells. Healthy red blood cells are flexible, round, and able to move easily through small blood vessels, ensuring that oxygen reaches every part of the body.Â³"
  },
  {
    "type": "paragraph",
    "text": "Hereditary Hypertension in Africans: Understanding Genetics, Risk Factors, and Prevention"
  },
  {
    "type": "paragraph",
    "text": "In people with sickle cell disease, a genetic change causes hemoglobin molecules to stick together under certain conditions, such as low oxygen levels or dehydration. As a result, red blood cells become stiff, fragile, and crescent-shaped. These abnormal cells can block blood flow, break apart more quickly than healthy cells, and reduce the amount of oxygen delivered to organs and tissues.Â³â´"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "These changes can lead to a range of health complications, including:"
  },
  {
    "type": "paragraph",
    "text": "Episodes of severe pain known as pain crises"
  },
  {
    "type": "paragraph",
    "text": "Chronic anemia caused by the rapid breakdown of red blood cells"
  },
  {
    "type": "paragraph",
    "text": "Increased susceptibility to infections"
  },
  {
    "type": "paragraph",
    "text": "Stroke and other neurological complications"
  },
  {
    "type": "paragraph",
    "text": "Damage to the heart, lungs, kidneys, spleen, and other organs"
  },
  {
    "type": "paragraph",
    "text": "Delayed growth and development in children"
  },
  {
    "type": "paragraph",
    "text": "Fatigue and reduced quality of life"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Sickle Cell Genetics: Understanding Inheritance, DNA Testing, and Prevention"
  },
  {
    "type": "paragraph",
    "text": "Symptoms and disease severity vary widely from person to person. Some individuals experience relatively mild symptoms, while others require frequent hospital care and ongoing specialist management. Advances in treatment have significantly improved life expectancy, especially when the condition is diagnosed early and managed proactively.Â²Â³âµ"
  },
  {
    "type": "paragraph",
    "text": "What Is the Triple H Framework? Heritage, Health & Healing Explained"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "The Genetics Behind Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "Sickle cell disease is caused by a mutation in the"
  },
  {
    "type": "paragraph",
    "text": "HBB (beta-globin)"
  },
  {
    "type": "paragraph",
    "text": "gene, located on chromosome 11. This gene contains the instructions for producing beta-globin, one of the protein components that make up adult hemoglobin (hemoglobin A).Â³"
  },
  {
    "type": "paragraph",
    "text": "A single change in the DNA sequence of the HBB gene results in the production of an altered form of hemoglobin known as"
  },
  {
    "type": "paragraph",
    "text": "hemoglobin S (HbS)"
  },
  {
    "type": "paragraph",
    "text": ". Although this mutation is small at the genetic level, its effects on red blood cells can be profound."
  },
  {
    "type": "paragraph",
    "text": "When oxygen levels fall, hemoglobin S molecules stick together and form long chains inside red blood cells. This causes the cells to lose their normal flexibility and adopt the characteristic sickle shape associated with the disease. Over time, repeated sickling damages the cell membrane, shortens the lifespan of red blood cells, and contributes to chronic anemia and blocked blood vessels.Â³â´"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Key Genetic Facts"
  },
  {
    "type": "paragraph",
    "text": "Feature"
  },
  {
    "type": "paragraph",
    "text": "Description"
  },
  {
    "type": "paragraph",
    "text": "Gene"
  },
  {
    "type": "paragraph",
    "text": "HBB (beta-globin)"
  },
  {
    "type": "paragraph",
    "text": "Chromosome"
  },
  {
    "type": "paragraph",
    "text": "11"
  },
  {
    "type": "paragraph",
    "text": "Protein affected"
  },
  {
    "type": "paragraph",
    "text": "Hemoglobin"
  },
  {
    "type": "paragraph",
    "text": "Mutation result"
  },
  {
    "type": "paragraph",
    "text": "Hemoglobin S (HbS)"
  },
  {
    "type": "paragraph",
    "text": "Inheritance pattern"
  },
  {
    "type": "paragraph",
    "text": "Autosomal recessive"
  },
  {
    "type": "paragraph",
    "text": "Disease type"
  },
  {
    "type": "paragraph",
    "text": "Inherited genetic disorder"
  },
  {
    "type": "paragraph",
    "text": "Understanding this genetic mechanism is essential because it forms the basis for carrier screening, DNA testing, newborn screening, and genetic counseling."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "What is sickle cell trait?"
  },
  {
    "type": "paragraph",
    "text": "Not everyone who inherits the sickle cell gene develops sickle cell disease."
  },
  {
    "type": "paragraph",
    "text": "A person with"
  },
  {
    "type": "paragraph",
    "text": "sickle cell trait (SCT)"
  },
  {
    "type": "paragraph",
    "text": "inherits"
  },
  {
    "type": "paragraph",
    "text": "one normal HBB gene"
  },
  {
    "type": "paragraph",
    "text": "and"
  },
  {
    "type": "paragraph",
    "text": "one altered HBB gene"
  },
  {
    "type": "paragraph",
    "text": ". Because they still produce a substantial amount of normal hemoglobin, their red blood cells generally function normally, and they usually do not experience the serious health complications associated with sickle cell disease.Â²"
  },
  {
    "type": "paragraph",
    "text": "People with sickle cell trait often live healthy lives and may never realize they carry the altered gene unless they undergo genetic testing or are identified through newborn screening or family screening programs."
  },
  {
    "type": "paragraph",
    "text": "However, being a carrier is important because the altered gene can be passed to future children. If both parents carry sickle cell trait, there is a chance that their child could inherit two altered copies of the HBB gene and develop sickle cell disease."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Sickle Cell Trait vs. Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Trait"
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "One altered HBB gene"
  },
  {
    "type": "paragraph",
    "text": "Two altered HBB genes"
  },
  {
    "type": "paragraph",
    "text": "Usually no symptoms"
  },
  {
    "type": "paragraph",
    "text": "Chronic inherited disease"
  },
  {
    "type": "paragraph",
    "text": "Normal life expectancy"
  },
  {
    "type": "paragraph",
    "text": "Requires lifelong medical care"
  },
  {
    "type": "paragraph",
    "text": "Can pass the gene to children"
  },
  {
    "type": "paragraph",
    "text": "Passes the gene to children"
  },
  {
    "type": "paragraph",
    "text": "Often identified through screening"
  },
  {
    "type": "paragraph",
    "text": "Diagnosed through newborn screening, blood tests, or genetic testing"
  },
  {
    "type": "paragraph",
    "text": "Recognizing carrier status is a cornerstone of preventive genetic healthcare. It enables individuals and couples to seek genetic counseling, understand inheritance risks, and make informed reproductive decisions.Â²Â³"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Key Takeaways"
  },
  {
    "type": "paragraph",
    "text": "Sickle cell disease is an inherited disorder caused by changes in the"
  },
  {
    "type": "paragraph",
    "text": "HBB"
  },
  {
    "type": "paragraph",
    "text": "gene."
  },
  {
    "type": "paragraph",
    "text": "The disease follows an"
  },
  {
    "type": "paragraph",
    "text": "autosomal recessive"
  },
  {
    "type": "paragraph",
    "text": "inheritance pattern, meaning two altered gene copies are usually required for the disease to develop."
  },
  {
    "type": "paragraph",
    "text": "Sickle cell trait is different from sickle cell disease; carriers are generally healthy but can pass the altered gene to their children."
  },
  {
    "type": "paragraph",
    "text": "Early genetic awareness, carrier screening, and DNA testing are essential tools for prevention, diagnosis, and informed family planning."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "References (Part 1)"
  },
  {
    "type": "paragraph",
    "text": "World Health Organization (WHO)."
  },
  {
    "type": "paragraph",
    "text": "Sickle-cell disease"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.who.int/news-room/fact-sheets/detail/sickle-cell-disease"
  },
  {
    "type": "paragraph",
    "text": "Centers for Disease Control and Prevention (CDC)."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.cdc.gov/sickle-cell/"
  },
  {
    "type": "paragraph",
    "text": "National Heart, Lung, and Blood Institute (NHLBI)."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.nhlbi.nih.gov/health/sickle-cell-disease"
  },
  {
    "type": "paragraph",
    "text": "American Society of Hematology."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.hematology.org/education/patients/anemia/sickle-cell-disease"
  },
  {
    "type": "paragraph",
    "text": "Rees DC, Williams TN, Gladwin MT."
  },
  {
    "type": "paragraph",
    "text": "Sickle-cell disease."
  },
  {
    "type": "paragraph",
    "text": "The Lancet. 2010;376(9757):2018â€“2031."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Sickle Cell Genetics: Understanding Inheritance, DNA Testing, and Prevention"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "How Is Sickle Cell Disease Inherited?"
  },
  {
    "type": "paragraph",
    "text": "Sickle cell disease follows an"
  },
  {
    "type": "paragraph",
    "text": "autosomal recessive inheritance pattern"
  },
  {
    "type": "paragraph",
    "text": ", meaning a child must inherit"
  },
  {
    "type": "paragraph",
    "text": "two altered copies"
  },
  {
    "type": "paragraph",
    "text": "of the"
  },
  {
    "type": "paragraph",
    "text": "HBB gene"
  },
  {
    "type": "paragraph",
    "text": "â€”one from each parentâ€”to develop the disease. This pattern of inheritance is different from conditions caused by a single altered gene copy and highlights the importance of understanding carrier status before or during family planning.Â¹Â³"
  },
  {
    "type": "paragraph",
    "text": "Every person inherits two copies of most genes: one from their biological mother and one from their biological father. In sickle cell genetics:"
  },
  {
    "type": "paragraph",
    "text": "AA"
  },
  {
    "type": "paragraph",
    "text": "= Two normal hemoglobin genes (does not have sickle cell disease or trait)"
  },
  {
    "type": "paragraph",
    "text": "AS"
  },
  {
    "type": "paragraph",
    "text": "= One normal gene and one altered gene (sickle cell trait/carrier)"
  },
  {
    "type": "paragraph",
    "text": "SS"
  },
  {
    "type": "paragraph",
    "text": "= Two altered genes (sickle cell disease)"
  },
  {
    "type": "paragraph",
    "text": "Most people with"
  },
  {
    "type": "paragraph",
    "text": "sickle cell trait (AS)"
  },
  {
    "type": "paragraph",
    "text": "experience few or no symptoms, but they can pass the altered gene to their children. Because carriers are often unaware of their status, genetic screening plays a critical role in identifying families who may benefit from genetic counseling before pregnancy.Â²â´"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Understanding Inheritance Risk"
  },
  {
    "type": "paragraph",
    "text": "The likelihood of a child inheriting sickle cell disease depends on the genetic status of both parents."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Scenario 1: Both Parents Have Sickle Cell Trait (AS Ã— AS)"
  },
  {
    "type": "paragraph",
    "text": "This is one of the most common situations discussed during genetic counseling."
  },
  {
    "type": "paragraph",
    "text": "Possible Outcome"
  },
  {
    "type": "paragraph",
    "text": "Probability"
  },
  {
    "type": "paragraph",
    "text": "Child without sickle cell gene (AA)"
  },
  {
    "type": "paragraph",
    "text": "25%"
  },
  {
    "type": "paragraph",
    "text": "Child with sickle cell trait (AS)"
  },
  {
    "type": "paragraph",
    "text": "50%"
  },
  {
    "type": "paragraph",
    "text": "Child with sickle cell disease (SS)"
  },
  {
    "type": "paragraph",
    "text": "25%"
  },
  {
    "type": "paragraph",
    "text": "Each pregnancy is independent, meaning these probabilities apply every time the couple has a childâ€”they do not accumulate over multiple pregnancies."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Scenario 2: One Parent Has Trait, One Parent Does Not (AS Ã— AA)"
  },
  {
    "type": "paragraph",
    "text": "Possible Outcome"
  },
  {
    "type": "paragraph",
    "text": "Probability"
  },
  {
    "type": "paragraph",
    "text": "Child without trait (AA)"
  },
  {
    "type": "paragraph",
    "text": "50%"
  },
  {
    "type": "paragraph",
    "text": "Child with trait (AS)"
  },
  {
    "type": "paragraph",
    "text": "50%"
  },
  {
    "type": "paragraph",
    "text": "Child with sickle cell disease (SS)"
  },
  {
    "type": "paragraph",
    "text": "0%"
  },
  {
    "type": "paragraph",
    "text": "In this scenario, none of the children are expected to inherit sickle cell disease, but approximately half may become carriers."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Scenario 3: One Parent Has Sickle Cell Disease (SS Ã— AA)"
  },
  {
    "type": "paragraph",
    "text": "Possible Outcome"
  },
  {
    "type": "paragraph",
    "text": "Probability"
  },
  {
    "type": "paragraph",
    "text": "Child with trait (AS)"
  },
  {
    "type": "paragraph",
    "text": "100%"
  },
  {
    "type": "paragraph",
    "text": "Child with sickle cell disease"
  },
  {
    "type": "paragraph",
    "text": "0%"
  },
  {
    "type": "paragraph",
    "text": "Every child will inherit sickle cell trait but not the disease, provided the other parent has two normal hemoglobin genes."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Scenario 4: One Parent Has Disease and One Has Trait (SS Ã— AS)"
  },
  {
    "type": "paragraph",
    "text": "Possible Outcome"
  },
  {
    "type": "paragraph",
    "text": "Probability"
  },
  {
    "type": "paragraph",
    "text": "Child with trait (AS)"
  },
  {
    "type": "paragraph",
    "text": "50%"
  },
  {
    "type": "paragraph",
    "text": "Child with sickle cell disease (SS)"
  },
  {
    "type": "paragraph",
    "text": "50%"
  },
  {
    "type": "paragraph",
    "text": "This combination carries a significantly higher chance of children being born with sickle cell disease, making genetic counselling particularly valuable before pregnancy."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Why Carrier Screening Matters"
  },
  {
    "type": "paragraph",
    "text": "Many people discover they carry the sickle cell gene only after the birth of a child with sickle cell disease. Because carriers usually have no symptoms, relying on physical health alone cannot determine whether someone carries the altered gene."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Carrier screening can:"
  },
  {
    "type": "paragraph",
    "text": "Identify individuals who carry the altered HBB gene."
  },
  {
    "type": "paragraph",
    "text": "Help couples understand their reproductive risks."
  },
  {
    "type": "paragraph",
    "text": "Support informed family planning decisions."
  },
  {
    "type": "paragraph",
    "text": "Encourage early genetic counselling."
  },
  {
    "type": "paragraph",
    "text": "Improve access to prenatal and new born screening services."
  },
  {
    "type": "paragraph",
    "text": "Carrier screening does"
  },
  {
    "type": "paragraph",
    "text": "not"
  },
  {
    "type": "paragraph",
    "text": "determine whether someone is \"healthy\" or \"unhealthy.\" Instead, it provides information that can help families make informed healthcare decisions based on their personal circumstances.Â²â´"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Why Is Sickle Cell Disease More Common in Africa?"
  },
  {
    "type": "paragraph",
    "text": "Sickle cell disease is most prevalent in"
  },
  {
    "type": "paragraph",
    "text": "sub-Saharan Africa"
  },
  {
    "type": "paragraph",
    "text": ", where it represents a major public health challenge. According to the World Health Organization, the majority of children born with sickle cell disease each year are born in Africa.Â¹"
  },
  {
    "type": "paragraph",
    "text": "The high frequency of the sickle cell gene is linked to a phenomenon known as"
  },
  {
    "type": "paragraph",
    "text": "balanced polymorphism"
  },
  {
    "type": "paragraph",
    "text": ". People who inherit"
  },
  {
    "type": "paragraph",
    "text": "one altered HBB gene (sickle cell trait)"
  },
  {
    "type": "paragraph",
    "text": "have partial protection against severe malaria, particularly malaria caused by"
  },
  {
    "type": "paragraph",
    "text": "Plasmodium falciparum"
  },
  {
    "type": "paragraph",
    "text": ". Over thousands of years, this survival advantage increased the frequency of the sickle cell trait in regions where malaria was common.âµ"
  },
  {
    "type": "paragraph",
    "text": "This evolutionary adaptation illustrates how human genetics can be shaped by environmental pressures. While the trait offered protection against malaria, inheriting two altered genes results in sickle cell disease."
  },
  {
    "type": "paragraph",
    "text": "Today, migration and global population movement mean sickle cell disease is diagnosed worldwide, making awareness important across many populationsâ€”not only in Africa."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Signs and Symptoms of Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "Symptoms often begin during infancy after fetal hemoglobin naturally declines and adult hemoglobin becomes predominant. Disease severity varies considerably between individuals."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Common signs and symptoms include:"
  },
  {
    "type": "paragraph",
    "text": "Recurrent episodes of severe pain (vaso-occlusive crises)"
  },
  {
    "type": "paragraph",
    "text": "Chronic anemia"
  },
  {
    "type": "paragraph",
    "text": "Fatigue and weakness"
  },
  {
    "type": "paragraph",
    "text": "Swelling of the hands and feet in infants"
  },
  {
    "type": "paragraph",
    "text": "Frequent infections due to reduced spleen function"
  },
  {
    "type": "paragraph",
    "text": "Delayed growth and puberty in children"
  },
  {
    "type": "paragraph",
    "text": "Vision problems"
  },
  {
    "type": "paragraph",
    "text": "Stroke"
  },
  {
    "type": "paragraph",
    "text": "Acute chest syndrome"
  },
  {
    "type": "paragraph",
    "text": "Kidney complications"
  },
  {
    "type": "paragraph",
    "text": "Organ damage over time"
  },
  {
    "type": "paragraph",
    "text": "Early diagnosis and appropriate medical care can significantly reduce complications and improve quality of life.Â³â¶"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "How Is Sickle Cell Disease Diagnosed?"
  },
  {
    "type": "paragraph",
    "text": "Modern medicine offers several reliable methods for diagnosing sickle cell disease and identifying carriers."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Newborn Screening"
  },
  {
    "type": "paragraph",
    "text": "Many countries include sickle cell disease in newborn screening programs. Early diagnosis allows healthcare providers to begin preventive treatments before complications develop."
  },
  {
    "type": "paragraph",
    "text": "Newborn screening has been associated with substantial reductions in childhood illness and mortality because children receive vaccinations, antibiotics when appropriate, and regular medical follow-up earlier in life.Â²Â³"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Blood Tests"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Laboratory tests may include:"
  },
  {
    "type": "paragraph",
    "text": "Complete Blood Count (CBC)"
  },
  {
    "type": "paragraph",
    "text": "Hemoglobin electrophoresis"
  },
  {
    "type": "paragraph",
    "text": "High-performance liquid chromatography (HPLC)"
  },
  {
    "type": "paragraph",
    "text": "Isoelectric focusing"
  },
  {
    "type": "paragraph",
    "text": "These tests identify different forms of hemoglobin and help distinguish between sickle cell disease, sickle cell trait, and other inherited blood disorders such as thalassemia.Â³"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "DNA Testing"
  },
  {
    "type": "paragraph",
    "text": "DNA testing examines the"
  },
  {
    "type": "paragraph",
    "text": "HBB gene"
  },
  {
    "type": "paragraph",
    "text": "directly to determine whether a person carries the genetic mutation responsible for sickle cell disease."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Genetic testing may be recommended for:"
  },
  {
    "type": "paragraph",
    "text": "Individuals with a family history of sickle cell disease"
  },
  {
    "type": "paragraph",
    "text": "Couples planning a pregnancy"
  },
  {
    "type": "paragraph",
    "text": "People with uncertain blood test results"
  },
  {
    "type": "paragraph",
    "text": "Families interested in understanding inherited health risks"
  },
  {
    "type": "paragraph",
    "text": "Unlike routine blood tests, DNA testing analyzes the genetic change itself and can provide highly accurate information about carrier status and inheritance.Â³â·"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Genetic Counseling"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Genetic counseling helps individuals and families understand:"
  },
  {
    "type": "paragraph",
    "text": "How sickle cell disease is inherited."
  },
  {
    "type": "paragraph",
    "text": "Their personal or family risk."
  },
  {
    "type": "paragraph",
    "text": "Available genetic testing options."
  },
  {
    "type": "paragraph",
    "text": "Reproductive choices."
  },
  {
    "type": "paragraph",
    "text": "Emotional and practical aspects of living with or planning for inherited conditions."
  },
  {
    "type": "paragraph",
    "text": "A genetic counselor does not make decisions for families. Instead, they explain the available evidence, answer questions, and support informed, values-based decision-making."
  },
  {
    "type": "paragraph",
    "text": "For communities with a high prevalence of sickle cell disease, expanding access to genetic counseling is an important step toward improving genetic literacy and reducing preventable health complications.Â²â´"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Family Planning and Reproductive Health"
  },
  {
    "type": "paragraph",
    "text": "Understanding carrier status before pregnancy gives prospective parents more time to explore their options and seek professional guidance."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Healthcare providers may recommend carrier screening when:"
  },
  {
    "type": "paragraph",
    "text": "There is a family history of sickle cell disease."
  },
  {
    "type": "paragraph",
    "text": "One partner is known to have sickle cell trait."
  },
  {
    "type": "paragraph",
    "text": "Both partners come from populations where the condition is more common."
  },
  {
    "type": "paragraph",
    "text": "Couples wish to understand inherited health risks before starting a family."
  },
  {
    "type": "paragraph",
    "text": "Genetic information should empowerâ€”not pressureâ€”individuals and families. Decisions about testing and reproduction are personal and should always be made voluntarily, with appropriate counseling and respect for cultural, ethical, and individual values."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Key Takeaways"
  },
  {
    "type": "paragraph",
    "text": "Sickle cell disease is inherited when a child receives two altered"
  },
  {
    "type": "paragraph",
    "text": "HBB"
  },
  {
    "type": "paragraph",
    "text": "genes."
  },
  {
    "type": "paragraph",
    "text": "Carrier screening helps identify people with sickle cell trait before pregnancy."
  },
  {
    "type": "paragraph",
    "text": "Early diagnosis through newborn screening and laboratory testing improves long-term health outcomes."
  },
  {
    "type": "paragraph",
    "text": "DNA testing and genetic counseling support informed family planning and personalized healthcare."
  },
  {
    "type": "paragraph",
    "text": "Increasing access to screening and counseling across Africa can contribute to earlier diagnosis, better disease management, and improved public health."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "References"
  },
  {
    "type": "paragraph",
    "text": "World Health Organization."
  },
  {
    "type": "paragraph",
    "text": "Management of Sickle Cell Disease: A Manual for Nurses and Physicians"
  },
  {
    "type": "paragraph",
    "text": ". Geneva: WHO."
  },
  {
    "type": "paragraph",
    "text": "National Human Genome Research Institute."
  },
  {
    "type": "paragraph",
    "text": "Learning About Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "Piel FB, Steinberg MH, Rees DC."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease."
  },
  {
    "type": "paragraph",
    "text": "New England Journal of Medicine."
  },
  {
    "type": "paragraph",
    "text": "2017;376:1561â€“1573."
  },
  {
    "type": "paragraph",
    "text": "Ware RE, de Montalembert M, Tshilolo L, Abboud MR."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease."
  },
  {
    "type": "paragraph",
    "text": "The Lancet."
  },
  {
    "type": "paragraph",
    "text": "2017;390(10091):311â€“323."
  },
  {
    "type": "paragraph",
    "text": "Centers for Disease Control and Prevention."
  },
  {
    "type": "paragraph",
    "text": "Data and Statistics on Sickle Cell Disease."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Sickle Cell Genetics: Understanding Inheritance, DNA Testing, and Prevention"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Living with Sickle Cell Disease: Treatment and Long-Term Care"
  },
  {
    "type": "paragraph",
    "text": "Although there is currently no universal cure for sickle cell disease, advances in medical care have dramatically improved life expectancy and quality of life. Today, many people with sickle cell disease live well into adulthood through early diagnosis, comprehensive healthcare, preventive strategies, and personalized treatment plans.Â¹Â²"
  },
  {
    "type": "paragraph",
    "text": "Treatment focuses on reducing complications, relieving symptoms, preventing infections, and preserving organ function. Because sickle cell disease affects multiple body systems, care often involves a multidisciplinary team that may include primary care physicians, hematologists, nurses, genetic counsellors, nutritionists, psychologists, and social workers."
  },
  {
    "type": "paragraph",
    "text": "A personalized care plan is essential because disease severity varies significantly between individuals."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Managing Symptoms and Preventing Complications"
  },
  {
    "type": "paragraph",
    "text": "Effective disease management combines medical treatment with healthy lifestyle practices and routine monitoring."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Healthcare providers may recommend:"
  },
  {
    "type": "paragraph",
    "text": "Staying well hydrated to reduce the risk of pain crises."
  },
  {
    "type": "paragraph",
    "text": "Maintaining a balanced, nutrient-rich diet."
  },
  {
    "type": "paragraph",
    "text": "Keeping routine vaccination schedules up to date."
  },
  {
    "type": "paragraph",
    "text": "Preventing and treating infections promptly."
  },
  {
    "type": "paragraph",
    "text": "Attending regular medical check-ups."
  },
  {
    "type": "paragraph",
    "text": "Managing chronic pain using individualized treatment plans."
  },
  {
    "type": "paragraph",
    "text": "Monitoring heart, lung, kidney, liver, eye, and brain health."
  },
  {
    "type": "paragraph",
    "text": "Seeking immediate medical attention for severe pain, fever, breathing difficulties, or neurological symptoms."
  },
  {
    "type": "paragraph",
    "text": "Preventive care remains one of the most effective ways to reduce serious complications throughout life.Â³"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Medicines Used in Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "Several medications may help reduce complications and improve quality of life."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Hydroxyurea"
  },
  {
    "type": "paragraph",
    "text": "Hydroxyurea is one of the most widely studied treatments for sickle cell disease. It works by increasing fetal hemoglobin (HbF), a form of hemoglobin that reduces red blood cell sickling."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Research has shown that hydroxyurea can:"
  },
  {
    "type": "paragraph",
    "text": "Reduce pain crises."
  },
  {
    "type": "paragraph",
    "text": "Lower hospitalization rates."
  },
  {
    "type": "paragraph",
    "text": "Decrease episodes of acute chest syndrome."
  },
  {
    "type": "paragraph",
    "text": "Reduce the need for blood transfusions."
  },
  {
    "type": "paragraph",
    "text": "Improve overall survival in many patients.â´âµ"
  },
  {
    "type": "paragraph",
    "text": "Treatment should always be supervised by qualified healthcare professionals because regular blood monitoring is required."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Blood Transfusions"
  },
  {
    "type": "paragraph",
    "text": "Blood transfusions may be recommended for people experiencing severe anemia or specific complications such as stroke prevention."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Transfusions can:"
  },
  {
    "type": "paragraph",
    "text": "Increase healthy red blood cells."
  },
  {
    "type": "paragraph",
    "text": "Improve oxygen delivery."
  },
  {
    "type": "paragraph",
    "text": "Reduce the percentage of sickled red blood cells."
  },
  {
    "type": "paragraph",
    "text": "Help prevent certain life-threatening complications."
  },
  {
    "type": "paragraph",
    "text": "Long-term transfusion therapy requires careful monitoring to manage iron overload and other potential risks."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Pain Management"
  },
  {
    "type": "paragraph",
    "text": "Pain crises are among the most common reasons people with sickle cell disease seek emergency medical care."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Pain management may include:"
  },
  {
    "type": "paragraph",
    "text": "Hydration"
  },
  {
    "type": "paragraph",
    "text": "Rest"
  },
  {
    "type": "paragraph",
    "text": "Anti-inflammatory medications"
  },
  {
    "type": "paragraph",
    "text": "Prescription pain medication when necessary"
  },
  {
    "type": "paragraph",
    "text": "Psychological support for chronic pain management"
  },
  {
    "type": "paragraph",
    "text": "Healthcare providers tailor treatment based on symptom severity and each person's medical history."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Bone Marrow and Stem Cell Transplantation"
  },
  {
    "type": "paragraph",
    "text": "Currently,"
  },
  {
    "type": "paragraph",
    "text": "hematopoietic stem cell transplantation (HSCT)"
  },
  {
    "type": "paragraph",
    "text": "remains the only widely established treatment with curative potential for some individuals with sickle cell disease."
  },
  {
    "type": "paragraph",
    "text": "The procedure replaces diseased blood-forming stem cells with healthy donor cells."
  },
  {
    "type": "paragraph",
    "text": "While transplantation has cured many patients, it is not suitable for everyone because success depends on factors such as:"
  },
  {
    "type": "paragraph",
    "text": "Availability of a compatible donor."
  },
  {
    "type": "paragraph",
    "text": "Age."
  },
  {
    "type": "paragraph",
    "text": "Overall health."
  },
  {
    "type": "paragraph",
    "text": "Disease severity."
  },
  {
    "type": "paragraph",
    "text": "Risk of treatment complications."
  },
  {
    "type": "paragraph",
    "text": "Researchers continue working to improve transplant safety and accessibility worldwide.â¶"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Gene Therapy: A New Era in Sickle Cell Treatment"
  },
  {
    "type": "paragraph",
    "text": "One of the most exciting developments in modern medicine is"
  },
  {
    "type": "paragraph",
    "text": "gene therapy"
  },
  {
    "type": "paragraph",
    "text": ", which aims to treat disease by correcting or modifying a person's own genetic material."
  },
  {
    "type": "paragraph",
    "text": "Unlike traditional treatments that manage symptoms, gene therapy seeks to address the underlying genetic cause of sickle cell disease."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Several approaches are being investigated:"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Gene Addition"
  },
  {
    "type": "paragraph",
    "text": "Adding a healthy copy of the beta-globin gene."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Gene Editing"
  },
  {
    "type": "paragraph",
    "text": "Using technologies such as"
  },
  {
    "type": "paragraph",
    "text": "CRISPR"
  },
  {
    "type": "paragraph",
    "text": "to modify DNA and restore healthy hemoglobin production."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Fetal Hemoglobin Activation"
  },
  {
    "type": "paragraph",
    "text": "Reactivating fetal hemoglobin genes to reduce red blood cell sickling."
  },
  {
    "type": "paragraph",
    "text": "In recent years, regulatory agencies in several countries have approved the first gene therapies for selected patients with sickle cell disease, representing a major milestone in precision medicine. However, these therapies remain expensive and are not yet widely accessible, particularly in many low- and middle-income countries.â·â¸"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Precision Medicine and the Future of Sickle Cell Care"
  },
  {
    "type": "paragraph",
    "text": "Precision medicine is transforming healthcare by recognizing that every person's genetic makeup is unique."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Rather than applying the same treatment to everyone, precision medicine considers factors such as:"
  },
  {
    "type": "paragraph",
    "text": "Genetics"
  },
  {
    "type": "paragraph",
    "text": "Environment"
  },
  {
    "type": "paragraph",
    "text": "Lifestyle"
  },
  {
    "type": "paragraph",
    "text": "Medical history"
  },
  {
    "type": "paragraph",
    "text": "Response to previous treatments"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "For sickle cell disease, precision medicine offers opportunities to:"
  },
  {
    "type": "paragraph",
    "text": "Predict disease severity."
  },
  {
    "type": "paragraph",
    "text": "Personalize treatment plans."
  },
  {
    "type": "paragraph",
    "text": "Improve medication selection."
  },
  {
    "type": "paragraph",
    "text": "Reduce complications."
  },
  {
    "type": "paragraph",
    "text": "Advance research into targeted therapies."
  },
  {
    "type": "paragraph",
    "text": "As African genomic research expands, precision medicine has the potential to improve healthcare for millions of people across the continent."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "The Importance of African Genomics"
  },
  {
    "type": "paragraph",
    "text": "Africa is home to the greatest human genetic diversity on Earth. Yet, African populations remain underrepresented in many global genomic databases."
  },
  {
    "type": "paragraph",
    "text": "This lack of representation can limit scientific understanding and reduce the effectiveness of genetic research for African populations. Expanding ethically conducted genomic research in Africa is essential to:"
  },
  {
    "type": "paragraph",
    "text": "Improve understanding of inherited diseases."
  },
  {
    "type": "paragraph",
    "text": "Develop more accurate diagnostic tools."
  },
  {
    "type": "paragraph",
    "text": "Advance precision medicine."
  },
  {
    "type": "paragraph",
    "text": "Increase equitable access to genomic healthcare."
  },
  {
    "type": "paragraph",
    "text": "Ensure African populations benefit from future medical innovations."
  },
  {
    "type": "paragraph",
    "text": "Strengthening African genomics is not only a scientific priority but also an important step toward global health equity.â¹Â¹â°"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Can Sickle Cell Disease Be Prevented?"
  },
  {
    "type": "paragraph",
    "text": "The inherited genetic mutation responsible for sickle cell disease cannot currently be prevented after conception."
  },
  {
    "type": "paragraph",
    "text": "However, several strategies can reduce the number of unexpected diagnoses and improve health outcomes."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "These include:"
  },
  {
    "type": "paragraph",
    "text": "Public awareness and education."
  },
  {
    "type": "paragraph",
    "text": "Carrier screening programs."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Genetic Counseling"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Newborn Screening"
  },
  {
    "type": "paragraph",
    "text": "Early diagnosis."
  },
  {
    "type": "paragraph",
    "text": "Access to comprehensive healthcare."
  },
  {
    "type": "paragraph",
    "text": "Community engagement."
  },
  {
    "type": "paragraph",
    "text": "Importantly, prevention efforts focus on"
  },
  {
    "type": "paragraph",
    "text": "providing information and healthcare choices"
  },
  {
    "type": "paragraph",
    "text": ", not limiting personal or reproductive decisions."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Reducing Stigma Through Education"
  },
  {
    "type": "paragraph",
    "text": "Misunderstanding about sickle cell disease continues to create stigma in some communities."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Common myths include the false belief that:"
  },
  {
    "type": "paragraph",
    "text": "The disease is contagious."
  },
  {
    "type": "paragraph",
    "text": "People with sickle cell disease cannot live productive lives."
  },
  {
    "type": "paragraph",
    "text": "Carriers are \"sick.\""
  },
  {
    "type": "paragraph",
    "text": "These misconceptions can discourage people from seeking testing or medical care."
  },
  {
    "type": "paragraph",
    "text": "Community education, culturally appropriate health communication, and access to reliable genetic information help reduce stigma while empowering individuals and families to make informed healthcare decisions."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Frequently Asked Questions"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Is sickle cell disease inherited?"
  },
  {
    "type": "paragraph",
    "text": "Yes. It is inherited through changes in the"
  },
  {
    "type": "paragraph",
    "text": "HBB gene"
  },
  {
    "type": "paragraph",
    "text": "and follows an autosomal recessive inheritance pattern."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "What is sickle cell trait?"
  },
  {
    "type": "paragraph",
    "text": "Sickle cell trait occurs when a person inherits one altered HBB gene and one normal HBB gene. Most carriers remain healthy but can pass the altered gene to their children."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Can DNA testing detect sickle cell disease?"
  },
  {
    "type": "paragraph",
    "text": "Yes. DNA testing can identify mutations in the HBB gene, confirm carrier status, and support diagnosis when appropriate."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Should couples consider carrier screening before pregnancy?"
  },
  {
    "type": "paragraph",
    "text": "Carrier screening may be recommended for individuals or couples with a family history of sickle cell disease or who belong to populations where the condition is more common. A healthcare professional or genetic counselor can help determine whether testing is appropriate."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Is sickle cell disease common in Africa?"
  },
  {
    "type": "paragraph",
    "text": "Yes. Sub-Saharan Africa has the highest global burden of sickle cell disease, making awareness, screening, and early diagnosis important public health priorities."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Can people with sickle cell disease live long lives?"
  },
  {
    "type": "paragraph",
    "text": "Yes. Advances in diagnosis, preventive care, medications, and comprehensive disease management have significantly improved life expectancy and quality of life for many people living with sickle cell disease."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Conclusion"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Sickle cell disease is one of the world's most common inherited blood disorders, yet it is also one of the most understood from a genetic perspective. Understanding how the condition is inherited, recognizing the importance of carrier screening, and improving access to genetic counseling and DNA testing can empower individuals and families to make informed healthcare decisions."
  },
  {
    "type": "paragraph",
    "text": "For Africa, where the burden of sickle cell disease is greatest, expanding access to genomic medicine, newborn screening, and culturally relevant genetic education has the potential to improve millions of lives. Continued investment in African genomics and precision medicine will not only strengthen healthcare across the continent but also ensure that future scientific advances benefit African populations equitably."
  },
  {
    "type": "paragraph",
    "text": "At AfriGenetry Link, we believe that genetic knowledge should be accessible, ethical, and empowering. By combining evidence-based education with community engagement, we aim to support a future where every individual can better understand their genetic heritage, make informed health decisions, and contribute to a more equitable genomic future."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "References"
  },
  {
    "type": "paragraph",
    "text": "National Institutes of Health (NIH)."
  },
  {
    "type": "paragraph",
    "text": "Gene Therapy for Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "Frangoul H, et al."
  },
  {
    "type": "paragraph",
    "text": "CRISPR-Cas9 Gene Editing for Sickle Cell Disease and Î²-Thalassemia."
  },
  {
    "type": "paragraph",
    "text": "New England Journal of Medicine."
  },
  {
    "type": "paragraph",
    "text": "2021;384:252â€“260."
  },
  {
    "type": "paragraph",
    "text": "U.S. Food and Drug Administration (FDA)."
  },
  {
    "type": "paragraph",
    "text": "Approved Gene Therapies for Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "World Health Organization (WHO)."
  },
  {
    "type": "paragraph",
    "text": "Regional Strategy for Sickle Cell Disease in Africa"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "Ware RE, de Montalembert M, Tshilolo L, Abboud MR."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease."
  },
  {
    "type": "paragraph",
    "text": "The Lancet."
  },
  {
    "type": "paragraph",
    "text": "2017;390(10091):311â€“323."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "References"
  },
  {
    "type": "paragraph",
    "text": "The following references support the scientific information presented throughout this article."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "International Health Organizations"
  },
  {
    "type": "paragraph",
    "text": "World Health Organization. (2023)."
  },
  {
    "type": "paragraph",
    "text": "Sickle-cell disease"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.who.int/news-room/fact-sheets/detail/sickle-cell-disease"
  },
  {
    "type": "paragraph",
    "text": "World Health Organization."
  },
  {
    "type": "paragraph",
    "text": "Management of Sickle Cell Disease: A Manual for Nurses and Physicians."
  },
  {
    "type": "paragraph",
    "text": "Centers for Disease Control and Prevention. (2025)."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease"
  },
  {
    "type": "paragraph",
    "text": "."
  },
  {
    "type": "paragraph",
    "text": "https://www.cdc.gov/sickle-cell/"
  },
  {
    "type": "paragraph",
    "text": "National Heart, Lung, and Blood Institute."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease."
  },
  {
    "type": "paragraph",
    "text": "https://www.nhlbi.nih.gov/health/sickle-cell-disease"
  },
  {
    "type": "paragraph",
    "text": "National Human Genome Research Institute."
  },
  {
    "type": "paragraph",
    "text": "Learning About Sickle Cell Disease."
  },
  {
    "type": "paragraph",
    "text": "https://www.genome.gov/"
  },
  {
    "type": "paragraph",
    "text": "MedlinePlus Genetics."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease."
  },
  {
    "type": "paragraph",
    "text": "https://medlineplus.gov/genetics/condition/sickle-cell-disease/"
  },
  {
    "type": "paragraph",
    "text": "American Society of Hematology."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease."
  },
  {
    "type": "paragraph",
    "text": "https://www.hematology.org/"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Peer-Reviewed Research"
  },
  {
    "type": "paragraph",
    "text": "Rees DC, Williams TN, Gladwin MT."
  },
  {
    "type": "paragraph",
    "text": "Sickle-cell disease."
  },
  {
    "type": "paragraph",
    "text": "The Lancet."
  },
  {
    "type": "paragraph",
    "text": "2010;376(9757):2018â€“2031."
  },
  {
    "type": "paragraph",
    "text": "Piel FB, Steinberg MH, Rees DC."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease."
  },
  {
    "type": "paragraph",
    "text": "New England Journal of Medicine."
  },
  {
    "type": "paragraph",
    "text": "2017;376:1561â€“1573."
  },
  {
    "type": "paragraph",
    "text": "Ware RE, de Montalembert M, Tshilolo L, Abboud MR."
  },
  {
    "type": "paragraph",
    "text": "Sickle Cell Disease."
  },
  {
    "type": "paragraph",
    "text": "The Lancet."
  },
  {
    "type": "paragraph",
    "text": "2017;390(10091):311â€“323."
  },
  {
    "type": "paragraph",
    "text": "Frangoul H, et al."
  },
  {
    "type": "paragraph",
    "text": "CRISPR-Cas9 Gene Editing for Sickle Cell Disease and Î²-Thalassemia."
  },
  {
    "type": "paragraph",
    "text": "New England Journal of Medicine."
  },
  {
    "type": "paragraph",
    "text": "U.S. Food and Drug Administration."
  },
  {
    "type": "paragraph",
    "text": "FDA Approves Gene Therapies for Sickle Cell Disease."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Author"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Written by"
  },
  {
    "type": "paragraph",
    "text": "SEO, Website & Growth Lead"
  },
  {
    "type": "paragraph",
    "text": "Kenn Mangena develops evidence-based educational resources focused on African ancestry, genomics, genetic health, precision medicine, and digital health education. His work emphasizes improving genetic literacy, increasing awareness of African genomic diversity, and supporting equitable access to genomic healthcare through trusted, accessible educational content."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Editorial Standards"
  },
  {
    "type": "paragraph",
    "text": "Every health article published by AfriGenetry Link is developed using evidence from internationally recognized health organizations, peer-reviewed scientific literature, and established clinical guidance."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Our editorial process is guided by the principles of:"
  },
  {
    "type": "paragraph",
    "text": "Scientific accuracy"
  },
  {
    "type": "paragraph",
    "text": "Transparency"
  },
  {
    "type": "paragraph",
    "text": "Cultural relevance"
  },
  {
    "type": "paragraph",
    "text": "Ethical communication"
  },
  {
    "type": "paragraph",
    "text": "Health equity"
  },
  {
    "type": "paragraph",
    "text": "Plain-language education"
  },
  {
    "type": "paragraph",
    "text": "Content is periodically reviewed to reflect new scientific discoveries and evolving clinical recommendations."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Medical Disclaimer"
  },
  {
    "type": "paragraph",
    "text": "This article is intended for educational and informational purposes only."
  },
  {
    "type": "paragraph",
    "text": "It does not provide medical advice, diagnosis, or treatment and should not replace consultation with a qualified healthcare professional, physician, hematologist, or genetic counselor."
  },
  {
    "type": "paragraph",
    "text": "Never disregard professional medical advice because of information you have read on this website."
  },
  {
    "type": "paragraph",
    "text": "If you believe you or a family member may have sickle cell disease or another inherited condition, seek medical care from an appropriately qualified healthcare provider."
  },
  {
    "type": "paragraph",
    "text": "Sickle cell genetics infographic explaining inheritance, DNA testing, carrier screening, sickle cell trait vs disease, and prevention across Africa"
  },
  {
    "type": "paragraph",
    "text": "Genes influence health, but they are only one factor."
  },
  {
    "type": "paragraph",
    "text": "Lifestyle, nutrition, environment, healthcare access, family history, and social determinants of health all contribute to overall wellbeing."
  },
  {
    "type": "paragraph",
    "text": "Genetic testing results should always be interpreted together with clinical findings and professional medical guidance."
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
            <span className="eyebrow">GENETIC HEALTH</span>
            <h1>Sickle Cell Genetics: Understanding Inheritance, DNA Testing, and Prevention</h1>
            <p className="hero-description">Explore sickle cell genetic therapy and learn about inheritance, DNA testing, and prevention. Discover how sickle cell genetic therapy can help.</p>
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
