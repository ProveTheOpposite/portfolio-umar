import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-border border-t px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-muted-foreground text-sm">
          © 2026 Umar Kukarkhoev. Tous droits réservés.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://www.youtube.com/@LaFumetta"
            target="_blank"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            Youtube
          </Link>
          <Link
            href="https://x.com/lafumetta?s=21"
            target="_blank"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
