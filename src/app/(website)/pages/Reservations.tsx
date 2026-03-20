"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { reservationInputSchema, type ReservationInput } from "@/hooks/use-reservations";
import { Button } from "@/components/ui/button";
import { sendReservationToWhatsApp } from "@/lib/booking"; 

const TIME_SLOTS = Array.from({ length: 11 }).map((_, i) => {
  const hour = Math.floor(17 + i / 2);
  const minutes = i % 2 === 0 ? "00" : "30";
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${minutes} ${ampm}`;
});

export default function Reservations() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false); // local loading state

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationInput>({
    resolver: zodResolver(reservationInputSchema),
    defaultValues: {
      partySize: "2",
    }
  });

  const onSubmit = async (data: ReservationInput) => {
    setSubmitError(null);
    setIsSending(true);

    try {
      // Call the WhatsApp function (it may throw if number not configured)
      sendReservationToWhatsApp(data);
      
      // On success, show the confirmation screen
      setIsSuccess(true);
      reset(); // optional: clear the form
    } catch (err: any) {
      setSubmitError(err.message || "Failed to open WhatsApp. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-background overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/gallery/jollof.png"
          alt="Restaurant ambiance"
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-background/50 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl mb-6 text-white">Make a Reservation</h1>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Join Us for an Evening
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-card p-8 border border-border">
              <h3 className="font-display text-2xl text-white mb-6">Reservation Policy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                We accept reservations up to 30 days in advance. For parties larger than 6 guests, or for private event inquiries, please contact us directly.
              </p>
              <div className="space-y-4 text-sm text-white/80">
                <p><strong className="text-primary font-normal tracking-widest uppercase text-xs">Phone:</strong> <br/> +1 (212) 555-0199</p>
                <p><strong className="text-primary font-normal tracking-widest uppercase text-xs">Email:</strong> <br/> reservations@bellavista.com</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-border p-12 text-center flex flex-col items-center justify-center min-h-[500px]"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl text-white mb-4">Reservation Request Sent</h2>
                  <p className="text-muted-foreground mb-8">
                    We have received your request via WhatsApp. A member of our team will confirm shortly.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Make Another Booking
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {submitError && (
                      <div className="bg-destructive/10 border border-destructive/30 text-destructive p-4 text-sm">
                        {submitError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</label>
                        <input 
                          {...register("name")}
                          className="w-full bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-white transition-all placeholder:text-muted"
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                        <input 
                          {...register("email")}
                          type="email"
                          className="w-full bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-white transition-all placeholder:text-muted"
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                        <input 
                          {...register("phone")}
                          type="tel"
                          className="w-full bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-white transition-all placeholder:text-muted"
                          placeholder="(555) 123-4567"
                        />
                        {errors.phone && <p className="text-destructive text-xs">{errors.phone.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Party Size</label>
                        <select 
                          {...register("partySize")}
                          className="w-full bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-white transition-all appearance-none"
                        >
                          {Array.from({length: 10}).map((_, i) => (
                           <option className="bg-gray-800"  key={i+1} value={i+1}>{i+1} {i === 0 ? 'Guest' : 'Guests'}</option>
                          ))}
                        </select>
                        {errors.partySize && <p className="text-destructive text-xs">{errors.partySize.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Date</label>
                        <input 
                          {...register("date")}
                          type="date"
                          className="w-full bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-white transition-all color-scheme-dark"
                          style={{ colorScheme: "dark" }}
                        />
                        {errors.date && <p className="text-destructive text-xs">{errors.date.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Time</label>
                        <select 
                          {...register("time")}
                          className="w-full border border-border focus:border-white focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-white transition-all appearance-none"
                        >
                          <option value="" className="bg-gray-900 py-5">Select your time</option>
                          {TIME_SLOTS.map((time) => (
                            <option className="bg-gray-800" key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        {errors.time && <p className="text-destructive text-xs">{errors.time.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Special Requests (Optional)</label>
                      <textarea 
                        {...register("specialRequests")}
                        rows={4}
                        className="w-full bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-white transition-all resize-none placeholder:text-muted"
                        placeholder="Anniversaries, dietary restrictions, etc."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" isLoading={isSending}>
                      Confirm Reservation
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}