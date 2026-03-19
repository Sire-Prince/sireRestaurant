"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Next.js hook for current path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Contact" },
     { href: "/gallery", label: "Gallery" },

  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b",
        isScrolled
          ? "bg-white/10 backdrop-blur-xl backdrop-saturate-150 border-white/20 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          href="/" 
          className="font-display text-2xl md:text-3xl tracking-[0.2em] text-white hover:text-primary transition-colors"
        >
          BELLA VISTA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-xs uppercase tracking-widest transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-white/80"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservations"
            className="font-sans text-xs uppercase tracking-widest text-primary border border-primary/50 px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Reservations
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "absolute top-full left-0 w-full bg-background border-b border-border/50 shadow-2xl transition-all duration-300 overflow-hidden md:hidden",
          mobileMenuOpen ? "max-h-[400px] py-6" : "max-h-0 py-0 border-transparent shadow-none"
        )}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "font-sans text-sm uppercase tracking-widest transition-colors w-full text-center hover:text-primary",
                pathname === link.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservations"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center font-sans text-sm uppercase tracking-widest text-primary border border-primary/50 px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 mt-2"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </nav>
  );
}