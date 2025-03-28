"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Modern Cuts</h3>
            <p className="text-gray-400">
              Premium grooming services for the modern gentleman since 2005.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/appointment"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Mon-Fri: 9:00 AM - 8:00 PM</li>
              <li>Saturday: 9:00 AM - 6:00 PM</li>
              <li>Sunday: 10:00 AM - 5:00 PM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <li>123 Barber Street</li>
              <li>New York, NY 10001</li>
              <li>(555) 123-4567</li>
              <li>info@moderncuts.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Modern Cuts. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-white  text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 cursor-pointer" />
          </button>
        </div>
      </div>
    </footer>
  );
}
