"use client";

import { useState, useEffect } from "react";

import { ArrowRight } from "lucide-react";

import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/motion";

import CTA from "@/components/pages/HomePage/CTA";
import Image from "next/image";

const sections = [
  { id: "qui-je-suis", label: "Qui je suis" },
  { id: "approche", label: "Mon approche" },
  { id: "outils", label: "Outils & Compétences" },
];

const processSteps = [
  {
    number: "01",
    title: "Compréhension du besoin",
    description:
      "Échange pour cerner vos objectifs, votre audience et vos attentes.",
  },
  {
    number: "02",
    title: "Concept & direction créative",
    description:
      "Proposition d'une direction visuelle alignée avec votre identité.",
  },
  {
    number: "03",
    title: "Production & animation",
    description:
      "Création du contenu avec des allers-retours pour valider chaque étape.",
  },
  {
    number: "04",
    title: "Livraison & ajustements",
    description:
      "Fichiers optimisés pour chaque plateforme, retouches incluses.",
  },
];

const tools = [
  "After Effects",
  "Premiere Pro",
  "DaVinci Resolve",
  "Photoshop",
  "Blender (les bases)",
];

const skills = [
  "Motion Design 2D",
  "Montage Vidéo",
  "Animation de logos",
  "Compositing",
  "Sound Design",
];

const formats = [
  "Réseaux sociaux (Reels, TikTok, Stories)",
  "YouTube (intros, transitions, habillages)",
  "Publicités (Social Ads, YouTube Ads)",
];

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("qui-je-suis");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 61;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Sticky Nav */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-1/2 right-8 z-40 hidden -translate-y-1/2 lg:block"
      >
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`group flex cursor-pointer items-center gap-3 text-sm transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`h-px w-8 transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-foreground w-12"
                      : "bg-muted-foreground/50 group-hover:bg-foreground group-hover:w-10"
                  }`}
                />
                <span
                  className={`transition-opacity duration-300 ${
                    activeSection === section.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {section.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
              {/* Photo */}
              <div className="relative shrink-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-secondary relative h-40 w-40 overflow-hidden rounded-2xl md:h-52 md:w-52"
                >
                  <Image
                    src="/images/profil.png"
                    alt="Umar Kukarkhoev"
                    className="rounded-2xl object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    loading="eager"
                  />
                </motion.div>
                {/* Decorative element */}
                <div className="border-foreground/10 absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-2xl border-2" />
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <p className="text-muted-foreground mb-4 text-sm tracking-widest uppercase">
                  À propos
                </p>
                <h1 className="mb-4 text-4xl font-medium tracking-tight text-balance md:text-5xl lg:text-6xl">
                  Umar Kukarkhoev
                </h1>
                <p className="text-muted-foreground max-w-xl text-lg leading-relaxed md:text-xl">
                  Motion Designer & Video Editor qui crée des contenus visuels
                  percutants pour les marques et créateurs ambitieux.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qui je suis Section */}
        <section
          id="qui-je-suis"
          className="border-border scroll-mt-24 border-t px-6 py-16 md:py-24"
        >
          <FadeInUp className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
              <h2 className="text-2xl font-medium">Qui je suis</h2>
              <div className="text-foreground/80 space-y-6 text-lg leading-relaxed">
                <p>
                  Depuis plus de{" "}
                  <span className="text-foreground group relative inline-block cursor-default font-medium">
                    2 ans
                    <span className="bg-foreground absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                  </span>
                  , je collabore avec des{" "}
                  <span className="text-foreground group relative inline-block cursor-default font-medium">
                    marques
                    <span className="bg-foreground absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                  </span>
                  ,{" "}
                  <span className="text-foreground group relative inline-block cursor-default font-medium">
                    créateurs de contenu
                    <span className="bg-foreground absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                  </span>{" "}
                  et{" "}
                  <span className="text-foreground group relative inline-block cursor-default font-medium">
                    agences
                    <span className="bg-foreground absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                  </span>{" "}
                  pour donner vie à leurs idées à travers la vidéo et
                  l&apos;animation.
                </p>
                <p>
                  Ce qui me passionne ? Transformer un brief en une vidéo qui
                  capte l&apos;attention dès les premières secondes. Que ce soit
                  pour des social ads, du branding animé ou des contenus
                  YouTube, je m&apos;adapte à chaque projet avec la même
                  exigence : créer quelque chose qui marque.
                </p>
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* Process Section */}
        <section
          id="approche"
          className="bg-secondary/50 scroll-mt-24 px-6 py-16 md:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <FadeInUp className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
              <h2 className="text-2xl font-medium">Mon approche</h2>
              <StaggerContainer className="grid gap-6 sm:grid-cols-2">
                {processSteps.map((step) => (
                  <StaggerItem key={step.number}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.05 }}
                      className="group bg-background border-border hover:border-foreground/20 rounded-lg border p-6 transition-all duration-200 hover:shadow-sm"
                    >
                      <span className="text-muted-foreground group-hover:text-foreground font-mono text-xs transition-colors">
                        {step.number}
                      </span>
                      <h3 className="mt-2 mb-2 text-lg font-medium">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInUp>
          </div>
        </section>

        {/* Outils et Compétences Section */}
        <section
          id="outils"
          className="border-border scroll-mt-24 border-t px-6 py-16 md:py-24"
        >
          <FadeInUp className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
              <h2 className="text-2xl font-medium">Outils & Compétences</h2>
              <div className="space-y-12">
                {/* Logiciels */}
                <div>
                  <h3 className="text-muted-foreground mb-4 text-sm tracking-widest uppercase">
                    Logiciels
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <motion.span
                        key={tool}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-secondary hover:bg-foreground hover:text-background cursor-default rounded-full px-4 py-2 text-sm transition-colors"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Compétences */}
                <div>
                  <h3 className="text-muted-foreground mb-4 text-sm tracking-widest uppercase">
                    Compétences
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-secondary hover:bg-foreground hover:text-background cursor-default rounded-full px-4 py-2 text-sm transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Formats */}
                <div>
                  <h3 className="text-muted-foreground mb-4 text-sm tracking-widest uppercase">
                    Formats maîtrisés
                  </h3>
                  <ul className="space-y-3">
                    {formats.map((format) => (
                      <motion.li
                        key={format}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="group flex cursor-default items-center gap-3"
                      >
                        <ArrowRight className="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-all" />
                        <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                          {format}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* CTA Section */}
        <CTA />
      </div>
    </>
  );
};

export default AboutPage;
