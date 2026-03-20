"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl mb-6 text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm tracking-widest uppercase"
          >
            We'd love to hear from you
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-display text-3xl text-white mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-white mb-2">Location</h3>
                    <p className="text-muted-foreground text-sm">123 Culinary Avenue<br />New York, NY 10012</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-white mb-2">Phone</h3>
                    <p className="text-muted-foreground text-sm">+1 (212) 555-0199</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-white mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">info@bellavista.com<br/>reservations@bellavista.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                    <Clock className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-white mb-2">Hours</h3>
                    <p className="text-muted-foreground text-sm">Mon - Thu: 5:00 PM - 10:00 PM<br/>Fri - Sat: 5:00 PM - 11:00 PM<br/>Sun: 4:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

      
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-[500px] lg:h-full bg-card relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none mix-blend-color z-10 bg-secondary/20"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.774044417697!2d-0.04266543786!3d5.6957845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9f3eb60b9c3d%3A0xf1b5c21d79a2ceef!2sAshaiman%2C%20Ghana!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Edge Barbershop Location - Ashaiman, Ghana"
              />
          </motion.div>
        </div>
      </div>
    </div>
  );
}