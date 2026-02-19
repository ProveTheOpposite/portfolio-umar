"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useScreenSize } from "@/hooks/useScreenSize";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const screenSize = useScreenSize();

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled || pathname !== "/" || screenSize < 1280
          ? "bg-background/80 border-b backdrop-blur-md"
          : "bg-transparent"
      } border-border fixed top-0 right-0 left-0 z-50`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <h2>
            <Link
              href="/"
              className={`${scrolled || pathname !== "/" || screenSize < 1280 ? "text-foreground" : "text-white"} text-xl font-medium`}
            >
              Umar Kukarkhoev
            </Link>
          </h2>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${scrolled || pathname !== "/" || screenSize < 1280 ? "text-muted-foreground hover:text-foreground" : "text-white hover:text-white/80"} text-sm transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`${scrolled || pathname !== "/" || screenSize < 1280 ? "" : "text-white"} md:hidden`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-border bg-background border-t md:hidden">
          <nav className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground py-2 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
