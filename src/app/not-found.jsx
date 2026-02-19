"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="space-y-6 p-8 text-center">
        <h1 className="text-primary text-9xl font-bold">404</h1>

        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Page non trouvée</h2>
          <p className="text-muted-foreground">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été
            déplacée.
          </p>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <Button
            className="cursor-pointer"
            variant="outline"
            onClick={() => router.back()}
          >
            ← Retour
          </Button>

          <Button>
            <Link href="/">Accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
