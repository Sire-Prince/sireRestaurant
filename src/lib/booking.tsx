// lib/booking.ts
import { MenuItem } from "@/hooks/use-menu";

// For meal booking (single item)
export const bookMealOnWhatsApp = (item: MenuItem) => {
  const phoneNumber = process.env.NEXT_PUBLIC_RESTAURANT_WHATSAPP;
  if (!phoneNumber) {
    console.error("WhatsApp number not configured");
    alert("Booking service is temporarily unavailable. Please try again later.");
    return;
  }

  const message = `Hello, I'd like to book the meal: *${item.name}* (GH₵ ${item.price}).\n\nDescription: ${item.description}\n\nPlease let me know if it's available and how to proceed.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

// For table reservation (full form)
export const sendReservationToWhatsApp = (data: {
  name: string;
  email: string;
  phone: string;
  partySize: string;
  date: string;
  time: string;
  specialRequests?: string;
}) => {
  const phoneNumber = process.env.NEXT_PUBLIC_RESTAURANT_WHATSAPP;
  if (!phoneNumber) {
    throw new Error("WhatsApp number not configured. Please contact the restaurant directly.");
  }

  const message = `
    *New Reservation Request*
    
    *Name:* ${data.name}
    *Email:* ${data.email}
    *Phone:* ${data.phone}
    *Party Size:* ${data.partySize}
    *Date:* ${data.date}
    *Time:* ${data.time}
    ${data.specialRequests ? `*Special Requests:* ${data.specialRequests}` : ""}
  `.replace(/^\s+/gm, "");

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};