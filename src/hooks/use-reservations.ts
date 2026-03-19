import { z } from "zod";

export const reservationInputSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  partySize: z.coerce.number().min(1, "Must be at least 1").max(20, "For parties over 20"),
  specialRequests: z.string().optional(),
});

export type ReservationInput = z.infer<typeof reservationInputSchema>;

export function useCreateReservation() {
  // We remove useMutation to avoid the "No QueryClient" error
  const mutateAsync = async (data: ReservationInput) => {
    // 1. Validate data
    const validated = reservationInputSchema.parse(data);

    // 2. Format the WhatsApp Message
    const message = `*New Reservation Request*
--------------------------
*Name:* ${validated.name}
*Date:* ${validated.date}
*Time:* ${validated.time}
*Guests:* ${validated.partySize}
*Phone:* ${validated.phone}
*Email:* ${validated.email}
${validated.specialRequests ? `*Note:* ${validated.specialRequests}` : ""}
--------------------------`;

    // 3. Open WhatsApp (Replace with your client's number)
    const phoneNumber = "233XXXXXXXXX"; 
    const whatsappUrl = `https://wa.me{phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    return { success: true };
  };

  return { mutateAsync, isPending: false };
}
