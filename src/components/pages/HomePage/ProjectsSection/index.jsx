"use client";

import ProjectCard from "@/components/ProjectCard";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion";

import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

import { featuredProjects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <FadeInUp className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-muted-foreground mb-3 text-sm tracking-[0.2em] uppercase">
              Projets sélectionnés
            </p>
            <h2 className="text-foreground text-4xl font-medium tracking-tight md:text-5xl">
              Travaux récents
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground group hidden items-center gap-2 text-sm transition-colors md:flex"
          >
            Voir tout
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeInUp>

        {/* Projects Grid */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile Link */}
        <FadeInUp delay={0.4} className="mt-10 text-center md:hidden">
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            Voir tous les projets
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ProjectsSection;
