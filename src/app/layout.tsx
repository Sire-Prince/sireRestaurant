import type { Metadata } from "next";

import "@fontsource-variable/geist/index.css";
import "@fontsource-variable/geist-mono/index.css";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Sire Restaurant",
  description: "Authentic food and easy WhatsApp booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
