"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useMenu } from "@/hooks/use-menu";
import { Gallery } from "./Gallary"; 
import { MenuItem } from "@/hooks/use-menu";
import { bookMealOnWhatsApp } from "@/lib/booking"; 

export default function Home() {
  const { data: MENU_DATA } = useMenu();
  const featuredItems = MENU_DATA.filter(item => item.category === "Mains").slice(0, 4);


  return (
    <div className="w-full bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -5, 0] }}
            transition={{ 
              delay: 0.2, 
              duration: 0.8,
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="font-sans text-primary tracking-[0.3em] uppercase text-sm mb-6"
          >
            A Taste of Perfection
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl text-white mb-8 leading-tight"
          >
            Culinary Elegance <br />
            <span className="italic text-primary/90">Reimagined</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/reservations" passHref>
              <Button size="lg" className="px-12 py-4 rounded-full">
                Reserve Your Table
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Cuisine", desc: "Modern Ghanaian", detail: "Traditional recipes elevated with local organic produce and global culinary arts." },
              { title: "Dinner", desc: "Nightly from 5 PM", detail: "Join us for an unforgettable evening. Last seating is at 10 PM on weekdays." },
              { title: "Location", desc: "Accra, Ghana", detail: "Nestled in a serene atmosphere, providing an intimate escape from the city rush." }
            ].map((highlight, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl transition-all duration-300 hover:bg-primary/5 border border-transparent hover:border-primary/10 text-center md:text-left"
              >
                <h3 className="font-sans text-primary uppercase tracking-widest text-sm mb-4">{highlight.title}</h3>
                <p className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">{highlight.desc}</p>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{highlight.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section - 4 Column Grid */}
      <section className="py-32 bg-card relative overflow-hidden border-r border-border">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="font-sans text-primary uppercase tracking-widest text-sm mb-4">Discover</p>
            <h2 className="font-display text-4xl md:text-5xl">Featured Creations</h2>
            <div className="w-12 h-px bg-primary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredItems.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-background rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-[450px]"
              >
                <div className="relative h-[55%] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"; }}
                  />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-primary">GH₵ {item.price}</span>
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">{item.description}</p>
                  </div>
                
                  <Button 
  onClick={() => bookMealOnWhatsApp(item)}
          className="w-full rounded-xl bg-foreground text-background hover:bg-primary transition-all duration-300">

  Book This Meal
</Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
           <Link href="/menu">
  <Button 
    variant="outline" 
    size="lg" 
    className="rounded-full px-10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
  >
    View All Menu
    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">➡</span>
  </Button>
</Link>
          </div>
        </div>
      </section>
    
      {/* Gallery Section */}
      <Gallery />
    
      {/* Story Section */}
<section className="flex flex-col-reverse lg:grid lg:grid-cols-2 bg-background border-r border-border mt-12 lg:mt-24">
        <div className="h-[500px] lg:h-auto relative overflow-hidden">
          <Image
            src="/images/chef.png"  
            alt="Signature Dish"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>
        <div className="bg-secondary/5 flex flex-col justify-center p-12 lg:p-24">
          <p className="font-sans text-primary uppercase tracking-widest text-sm mb-4">Our Philosophy</p>
          <h2 className="font-display text-4xl mb-8 leading-tight">Taste is a Story <br/> Best Shared Together</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            From the bustling markets of Accra to your plate, we celebrate the richness of local ingredients with a modern touch.
          </p>
          <Link href="/about">
            <Button variant="link" className="p-0 text-primary uppercase tracking-widest text-xs h-auto">
              Our Journey →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}