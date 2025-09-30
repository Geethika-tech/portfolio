import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";


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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >

      <nav className="w-full sticky top-0 z-50 bg-purple-100">

                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                  {/* Logo / Name */}
                  <a href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">Geethika Pidikiti</a>

                  {/* Nav Links */}
                  <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <a href="/experience" className="hover:text-purple-600 transition">Experience</a>
                    <a href="/projects" className="hover:text-purple-600 transition">Projects</a>
                    <a href="/contact" className="hover:text-purple-600 transition">Contact Me</a>

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
        <div className="fixed right-6 bottom-6 rounded-2xl p-4 flex items-center gap-6 text-gray-700 z-50">
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <IoIosCall/>
                <span><strong>+61 493 707 965</strong></span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <MdEmail/>
                <span><strong>geethikapidikiti@gmail.com</strong></span>
              </div>

              {/* Location (optional) */}
              <div className="flex items-center space-x-2">
                <IoLocationSharp/>
                <span><strong>Sydney, Australia</strong></span>
              </div>
            </div>
      </body>
    </html>
  );
}
