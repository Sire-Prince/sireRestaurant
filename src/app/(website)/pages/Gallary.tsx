"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/interior.jpg",
    alt: "Restaurant interior",
    category: "Ambiance",
  },
  {
    id: 2,
    src: "/images/gallery/chef.jpg",
    alt: "Chef preparing food",
    category: "Kitchen",
  },
  {
    id: 3,
    src: "/images/gallery/dish.png",
    alt: "Jollof Rice",
    category: "Food",
  },
  {
    id: 4,
    src: "/images/gallery/tilapia.jpg",
    alt: "Grilled Tilapia",
    category: "Food",
  },
  {
    id: 5,
    src: "/images/gallery/red-red.jpg",
    alt: "Red Red",
    category: "Food",
  },
  {
    id: 6,
    src: "/images/gallery/waakye.jpg",
    alt: "Waakye",
    category: "Food",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);

  return (
     <section className="py-24 bg-card relative overflow-hidden border-l border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-sans text-primary uppercase tracking-widest text-sm mb-4">Moments</p>
          <h2 className="font-display text-4xl md:text-5xl">Our Gallery</h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6"></div>
        </div>

        {/* Responsive image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-3 md:px-0">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Category overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-sans tracking-wider">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

          <div className="text-center mt-16">
        <Link href="/gallery">
  <Button 
    variant="outline" 
    size="lg" 
    className="rounded-full px-10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
  >
    View All Gallery
    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">➡</span>
  </Button>
</Link>
          </div>
              </div>
    </section>
  );
}