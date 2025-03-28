import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosProvider from "@/components/AosProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Cuts - Premium Barbershop",
  description: "Premium grooming services for the modern gentleman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.className} antialiased text-gray-900 overflow-x-hidden`}
      >
        <AosProvider>
          <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AosProvider>
      </body>
    </html>
  );
}
