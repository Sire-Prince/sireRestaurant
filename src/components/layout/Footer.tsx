"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-25 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-display text-3xl tracking-[0.2em] mb-6 text-foreground">BELLA VISTA</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Experience the pinnacle of Italian fine dining. Culinary elegance reimagined through seasonal ingredients and masterful technique.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-primary mb-6">Visit Us</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={16} className="text-primary/70" />
                <span>123 Culinary Avenue, New York, NY 10012</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={16} className="text-primary/70" />
                <span>+1 (212) 555-0199</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={16} className="text-primary/70" />
                <span>reservations@bellavista.com</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-primary mb-6">Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground mb-8">
              <li>Mon - Thu: 5:00 PM - 10:00 PM</li>
              <li>Fri - Sat: 5:00 PM - 11:00 PM</li>
              <li>Sunday: 4:00 PM - 9:00 PM</li>
            </ul>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Bella Vista. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground tracking-widest uppercase">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}