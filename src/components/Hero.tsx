import { CalendarDays } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80"
          alt="Barbershop Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div data-aos="fade-up" className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Grooming for the Modern Gentleman
          </h1>
          <p className="text-xl mb-8">
            Experience the art of traditional barbering with a modern twist.
            Book your appointment today and elevate your style.
          </p>

          <Link href="appointment">
            <button className="bg-white cursor-pointer text-black px-8 py-3 rounded-md text-lg font-semibold flex items-center hover:bg-gray-100 transition-colors">
              <CalendarDays className="mr-2" />
              Schedule Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
