"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl mb-8 text-white"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed text-lg"
          >
            Bella Vista was born from a passion for authentic Italian traditions married with the relentless innovation of modern gastronomy. What started as a dream in a small Tuscan village has evolved into Manhattan's premier dining destination.
          </motion.p>
        </div>

        {/* Image & Text block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 border border-primary/30"></div>
            <Image
              src="/images/hero-bg.png"
              alt="Restaurant Ambiance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative z-10 object-cover shadow-2xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-4xl text-white">The Atmosphere</h2>
            <div className="w-12 h-px bg-primary"></div>
            <p className="text-muted-foreground leading-relaxed">
              Step into a space designed to transport you. From the dim, warm glow of our crystal chandeliers to the dark oak textures and plush burgundy seating, every detail of Bella Vista is curated to create an intimate, unforgettable environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe dining is more than sustenance; it is a theatrical experience. The clinking of glasses, the murmur of conversation, and the flawless orchestration of our service staff all contribute to the magic.
            </p>
          </motion.div>
        </div>

        {/* Chef block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 space-y-6"
          >
            <h2 className="font-display text-4xl text-white">Meet the Chef</h2>
            <div className="w-12 h-px bg-primary"></div>
            <h3 className="font-sans tracking-widest text-primary uppercase text-sm">Executive Chef Alessandro Rossi</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over two decades of culinary mastery acquired in Michelin-starred kitchens across Europe, Chef Alessandro brings a disciplined, ingredient-first approach to Bella Vista. 
            </p>
            <blockquote className="border-l-2 border-primary pl-6 my-8 py-2">
              <p className="font-display text-2xl text-white/90 italic">
                "Cooking is the art of translating emotion into flavor. My goal is never just to feed, but to make you feel."
              </p>
            </blockquote>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative h-[600px]"
          >
            <Image
              src="/images/chef.png"
              alt="Executive Chef"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}