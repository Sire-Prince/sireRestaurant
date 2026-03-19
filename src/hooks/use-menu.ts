// src/hooks/use-menu.ts
import { useState, useEffect } from "react";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-03-19",
  useCdn: false, 
  perspective: 'published',
  token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN, // Add this line
});

export type MenuItem = {
  id: string;
  name: string;
  price: string;
  description: string;
  category: "Appetizers" | "Mains" | "Desserts" | "Drinks";
  image: string;
};

export function useMenu() {
  const [data, setData] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMenu() {
      try {
        
        const query = `*[_type == "dish"] {
          "id": _id,
          name,
          price,
          description,
          category,
          "image": image.asset->url
        }`;
        
        const result = await client.fetch(query, {}, { 
          next: { revalidate: 0 } // Bypasses Next.js Data Cache
        });

        console.log("Sanity Raw Result:", result);

        if (!result || result.length === 0) {
          console.warn("No dishes found. Are they PUBLISHED in the Studio?");
        }

const formattedData = result.map((item: any) => {
  let category = item.category;
  if (category?.toLowerCase().startsWith("appetizer")) category = "Appetizers";
  if (category?.toLowerCase().startsWith("main")) category = "Mains";
  if (category?.toLowerCase().startsWith("dessert")) category = "Desserts";
  if (category?.toLowerCase().startsWith("drink")) category = "Drinks";

  return {
    ...item,
    price: item.price ? item.price.toString() : "0",
    category: category as "Appetizers" | "Mains" | "Desserts" | "Drinks"
  };
});


        setData(formattedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Sanity fetch error:", error);
        setIsError(true);
        setIsLoading(false);
      }
    }

    fetchMenu();
  }, []);

  return { data, isLoading, isError };
}
