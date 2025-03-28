"use client";

import { useState, useEffect } from "react";
import { Scissors } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [pathname, setPathname] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure the component runs only on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Scissors className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold">Modern Cuts</span>
          </Link>

          {pathname === "/" && (
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-50 cursor-pointer hover:text-black transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-50 cursor-pointer hover:text-black transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-50 cursor-pointer hover:text-black transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-50 cursor-pointer hover:text-black transition-colors"
              >
                Contact
              </button>
            </div>
          )}

          <Link
            href="/appointment"
            className="bg-gray-200 text-black px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
