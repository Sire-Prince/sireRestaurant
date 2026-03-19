import { z } from "zod";

export const reservationInputSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  // Change z.coerce.number() to z.string()
  partySize: z.string().min(1, "Please select a party size"), 
  specialRequests: z.string().optional(),
});

export type ReservationInput = z.infer<typeof reservationInputSchema>;

export function useCreateReservation() {
  const mutateAsync = async (data: ReservationInput) => {
    const validated = reservationInputSchema.parse(data);

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

    const phoneNumber = "233XXXXXXXXX"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    return { success: true };
  };

  return { mutateAsync,   isPending: false };
}
