import { useState } from "react";
import { motion } from "framer-motion";
import { useMenu } from "@/hooks/use-menu";
import { clsx } from "clsx";

const CATEGORIES = ["Appetizers", "Mains", "Desserts", "Drinks"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const { data: menuItems, isLoading, isError } = useMenu();

  const filteredItems = menuItems?.filter((item) => item.category === activeCategory) || [];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background relative">
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-card to-transparent pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl mb-6 text-white"
          >
            The Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm tracking-widest uppercase"
          >
            Symphony of Flavors
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                "font-sans uppercase text-sm tracking-widest pb-2 border-b-2 transition-all duration-300",
                activeCategory === category 
                  ? "border-primary text-primary" 
                  : "border-transparent text-muted-foreground hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="min-h-[400px]">
          {isLoading ? (
            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="animate-pulse flex items-baseline justify-between">
                  <div className="h-6 bg-border/50 rounded w-1/3"></div>
                  <div className="flex-1 mx-6 border-b border-dotted border-border/30"></div>
                  <div className="h-6 bg-border/50 rounded w-12"></div>
                </div>
              ))}
            </div>
          ) : isError ? (
            <div className="text-center text-destructive py-12">
              <p>Failed to load the menu. Please try again later.</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              <p>No items found in this category.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    
                    {/* Dotted Leader */}
                    <div className="flex-1 border-b border-dotted border-muted mx-4 md:mx-6 opacity-30 group-hover:opacity-60 transition-opacity"></div>
                    
                    <span className="font-sans text-primary tracking-widest text-lg">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed md:max-w-[80%]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
