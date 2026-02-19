"use client";

import { Film, Sparkles, Share2, Wand2 } from "lucide-react";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/motion";

const services = [
  {
    icon: Film,
    title: "Montage Vidéo",
    description: "Narration fluide et rythme captivant pour vos projets.",
  },
  {
    icon: Sparkles,
    title: "Motion Design 2D/3D",
    description: "Animations visuelles qui donnent vie à vos idées.",
  },
  {
    icon: Share2,
    title: "Contenu Réseaux Sociaux",
    description: "Formats optimisés pour maximiser l'engagement.",
  },
];

const Services = () => {
  return (
    <section className="bg-muted/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <FadeInUp className="mb-16 text-center">
          <p className="text-muted-foreground mb-3 text-sm tracking-[0.2em] uppercase">
            Expertise
          </p>
          <h2 className="text-foreground text-4xl font-medium tracking-tight md:text-5xl">
            Services
          </h2>
        </FadeInUp>

        {/* Services Grid */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="group bg-background border-border hover:border-foreground/20 h-full rounded-lg border p-6 transition-colors"
              >
                <div className="bg-muted group-hover:bg-foreground group-hover:text-background mb-5 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-medium">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;
