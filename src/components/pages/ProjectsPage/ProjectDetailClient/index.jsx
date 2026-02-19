"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInUp, motion } from "../../../motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProjectDetailClient = ({ project, nextProject }) => {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Video */}
      <FadeIn>
        <section className="bg-secondary relative h-screen w-full overflow-hidden">
          <iframe
            src={project.videoUrl}
            title={project.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="h-full w-full"
          />
        </section>
      </FadeIn>

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* Infos clés */}
        <FadeInUp delay={0.1}>
          <section className="mb-16">
            <div className="text-muted-foreground mb-4 flex flex-wrap items-center gap-3 text-sm">
              <span className="bg-secondary rounded-full px-3 py-1">
                {project.roles[0]}
              </span>
              <span className="bg-secondary rounded-full px-3 py-1">
                {project.client}
              </span>
              <span className="bg-secondary rounded-full px-3 py-1">
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl font-medium tracking-tight text-balance md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </section>
        </FadeInUp>

        {/* Description */}
        <FadeInUp delay={0.2}>
          <section className="mb-16">
            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
              <div>
                <h2 className="text-muted-foreground mb-3 text-sm tracking-wider uppercase">
                  Contexte
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {project.description.context}
                </p>
              </div>

              <div>
                <h2 className="text-muted-foreground mb-3 text-sm tracking-wider uppercase">
                  Objectif
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {project.description.objective}
                </p>
              </div>

              <div>
                <h2 className="text-muted-foreground mb-3 text-sm tracking-wider uppercase">
                  Résultat
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {project.description.result}
                </p>
              </div>
            </div>
          </section>
        </FadeInUp>

        {/* Détails techniques */}
        <FadeInUp delay={0.2}>
          <section className="mb-20">
            <div className="border-border border-t pt-10">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Rôle */}
                <div>
                  <h2 className="text-muted-foreground mb-4 text-sm tracking-wider uppercase">
                    Mon rôle
                  </h2>
                  <ul className="space-y-2">
                    {project.roles.map((role) => (
                      <li
                        key={role}
                        className="text-foreground/90 flex items-center gap-2"
                      >
                        <span className="bg-foreground/40 h-1.5 w-1.5 rounded-full" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outils */}
                <div>
                  <h2 className="text-muted-foreground mb-4 text-sm tracking-wider uppercase">
                    Outils
                  </h2>
                  <ul className="space-y-2">
                    {project.tools.map((tool) => (
                      <li
                        key={tool}
                        className="text-foreground/90 flex items-center gap-2"
                      >
                        <span className="bg-foreground/40 h-1.5 w-1.5 rounded-full" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Année */}
                <div>
                  <h2 className="text-muted-foreground mb-4 text-sm tracking-wider uppercase">
                    Année
                  </h2>
                  <p className="text-foreground/90 text-2xl">{project.year}</p>
                </div>
              </div>
            </div>
          </section>
        </FadeInUp>

        {/* Navigation */}
        <FadeInUp delay={0.1}>
          <nav className="border-border flex items-center justify-between border-t pt-10">
            <motion.div whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
              <Button variant="ghost" asChild className="gap-2">
                <Link href="/projects">
                  <ArrowLeft className="h-4 w-4" />
                  Retour aux projets
                </Link>
              </Button>
            </motion.div>

            {nextProject && (
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Button variant="ghost" asChild className="gap-2">
                  <Link href={`/projects/${nextProject.slug}`}>
                    Projet suivant
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            )}
          </nav>
        </FadeInUp>
      </div>
    </main>
  );
};

export default ProjectDetailClient;
