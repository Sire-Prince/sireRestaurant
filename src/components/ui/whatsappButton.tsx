"use client";

import Link from "next/link";

interface WhatsAppButtonProps {
  phoneNumber?: string; // Optional phone number prop, with default
  message?: string;     // Optional pre-filled message
}

export function WhatsAppButton({ 
  phoneNumber = "233245546733", // Replace with your default number
  message = "Hello! I'd like to make a reservation." 
}: WhatsAppButtonProps) {
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
          className="text-white"
        >
          <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2c-5.349 0-9.715 4.367-9.718 9.717 0 1.713.448 3.399 1.3 4.894L2 22l5.333-1.4c1.45.792 3.1 1.212 4.796 1.212h.004c5.349 0 9.723-4.367 9.726-9.718.001-2.596-1.01-5.037-2.898-6.923zM12.006 20.04h-.003c-1.461 0-2.895-.393-4.145-1.133l-.297-.178-3.163.83.844-3.079-.194-.31c-.738-1.184-1.128-2.553-1.128-3.953.003-4.446 3.621-8.067 8.076-8.067 2.158 0 4.186.842 5.713 2.37 1.527 1.528 2.367 3.558 2.365 5.717-.002 4.447-3.619 8.066-8.068 8.066z"/>
          <path d="M16.682 13.563c-.235-.117-1.389-.686-1.605-.764-.215-.079-.372-.117-.529.117-.157.235-.604.764-.741.921-.137.157-.274.176-.509.059-.944-.442-1.562-1.567-1.71-1.832-.137-.264-.015-.408.103-.539.107-.117.235-.313.353-.47.117-.156.157-.274.235-.47.078-.196.039-.352-.02-.493-.059-.141-.529-1.276-.725-1.747-.191-.46-.385-.398-.529-.405-.136-.007-.293-.007-.45-.007-.157 0-.411.059-.626.293-.215.235-.822.803-.822 1.957 0 1.154.84 2.269.957 2.426.117.156 1.643 2.537 3.99 3.484 2.348.947 2.348.632 2.771.593.423-.04 1.367-.559 1.56-1.099.193-.54.193-1.002.135-1.099-.058-.098-.216-.157-.45-.274z"/>
        </svg>
      </a>
    </div>
  );
}