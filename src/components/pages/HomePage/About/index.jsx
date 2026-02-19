"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeInUp, motion } from "@/components/motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="grid items-center gap-10 md:grid-cols-[280px_1fr] md:gap-16">
          {/* Photo */}
          <FadeInUp className="relative mx-auto md:mx-0">
            <div className="bg-secondary h-48 w-48 overflow-hidden rounded-2xl md:h-64 md:w-64">
              <Image
                src="/images/profil.png"
                alt="Umar Kukarkhoev"
                className="h-48 w-48 rounded-2xl object-cover md:h-64 md:w-64"
                width={256} // just for no having error because we are using width and height in classname
                height={256} // just for no having error because we are using width and height in classname
                loading="eager"
              />
            </div>
            {/* Decorative element */}
            <div className="border-foreground/10 absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-2xl border-2" />
          </FadeInUp>

          {/* Content */}
          <FadeInUp delay={0.15} className="text-center md:text-left">
            <p className="text-muted-foreground mb-4 text-sm tracking-[0.2em] uppercase">
              À propos
            </p>

            <p className="text-foreground mb-8 text-2xl leading-relaxed font-medium text-balance md:text-3xl">
              Je suis Umar, motion designer et monteur vidéo. J&apos;accompagne
              les marques et créateurs dans la réalisation de contenus visuels
              percutants.
            </p>

            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground group inline-flex items-center gap-2 text-sm transition-colors"
            >
              En savoir plus
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default About;
