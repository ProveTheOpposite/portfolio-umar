"use client";

import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion";

import MotionReelCard from "@/components/MotionReelCard";
import ProjectCard from "@/components/ProjectCard";

import { motionReels } from "@/data/motion-reels";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <>
      <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <h1 className="text-foreground mb-6 text-5xl font-medium tracking-tight md:text-7xl">
              Projets
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed md:text-xl">
              Une sélection de mes travaux récents en motion design, montage
              vidéo et création de contenu pour des marques ambitieuses.
            </p>
          </div>

          {/* Projects Grid */}
          <StaggerContainer delay={0.1} className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-secondary/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <FadeInUp className="mb-12 md:mb-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">
                  Extraits
                </p>
                <h2 className="text-foreground text-3xl font-medium tracking-tight md:text-4xl">
                  Motion Design
                </h2>
              </div>
              <p className="text-muted-foreground max-w-md text-sm md:text-base">
                Aperçu de mes animations, transitions et effets visuels.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2} className="my-8 text-center md:hidden">
            <p className="text-muted-foreground/70 text-sm">
              Survolez et cliquez pour lire les extraits
            </p>
          </FadeInUp>

          {/* Reels Grid */}
          <FadeInUp delay={0.2}>
            <StaggerContainer
              delay={0.1}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {motionReels.map((reel) => (
                <StaggerItem key={reel.id}>
                  <MotionReelCard reel={reel} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeInUp>

          {/* Note */}
          <FadeInUp delay={0.2} className="mt-8 hidden text-center md:block">
            <p className="text-muted-foreground/70 text-sm">
              Survolez et cliquez pour lire les extraits
            </p>
          </FadeInUp>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
