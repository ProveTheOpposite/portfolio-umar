"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeInUp } from "@/components/motion";

const CTA = () => {
  return (
    <section className="bg-foreground text-background px-6 py-24 md:py-32">
      <FadeInUp className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-3xl font-medium tracking-tight text-balance md:text-4xl lg:text-5xl">
          Un projet en tête ?
        </h2>

        <p className="text-background/70 mb-10 text-lg">
          Discutons de votre vision et donnons-lui vie ensemble.
        </p>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-background/30 text-background hover:bg-background hover:text-foreground group gap-3 rounded-full bg-transparent px-8 py-6 text-base transition-all"
        >
          <Link href="/contact">
            Démarrer un projet
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </FadeInUp>
    </section>
  );
};

export default CTA;
