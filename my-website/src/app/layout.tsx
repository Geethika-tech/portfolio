import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import Link from 'next/link';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Geethika Pidikiti's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
     const phone = process.env.NEXT_PUBLIC_PHONE;
     const email = process.env.NEXT_PUBLIC_EMAIL;
     const location = process.env.NEXT_PUBLIC_LOCATION;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >

      <nav className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">

                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                  {/* Logo / Name */}
                  <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">Geethika Pidikiti</Link>

                  {/* Nav Links */}
                  <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <Link href="/experience" className="hover:text-purple-600 transition">Experience</Link>
                    <Link href="/projects" className="hover:text-purple-600 transition">Projects</Link>
                    <Link href="/contact" className="hover:text-purple-600 transition">Contact Me</Link>

                  </div>

                  {/* Mobile Menu Button */}
                  <div className="md:hidden">
                    <button className="text-gray-700 focus:outline-none">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </nav>
        {children}
        <div className="fixed right-6 bottom-6 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-gray-700 z-50
                         backdrop-blur-md shadow-lg bg-white/70">
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <IoIosCall className="text-lg" />
            <a href="tel:+61493707965" className="text-sm sm:text-base font-semibold hover:underline">
              {phone}
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <MdEmail className="text-lg" />
            <a href="mailto:geethikapidikiti@gmail.com" className="text-sm sm:text-base font-semibold hover:underline">
              {email}
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2">
            <IoLocationSharp className="text-lg" />
            <span className="text-sm sm:text-base"><strong>{location}</strong></span>
          </div>
        </div>
      </body>
    </html>
  );
}
