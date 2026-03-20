import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-display text-8xl md:text-9xl text-white mb-6">404</h1>
      <p className="font-sans text-primary tracking-widest uppercase text-sm mb-4">Page Not Found</p>
      <p className="text-muted-foreground max-w-md mb-10">
        We apologize, but the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <Button size="lg">Return to Home</Button>
      </Link>
    </div>
  );
}