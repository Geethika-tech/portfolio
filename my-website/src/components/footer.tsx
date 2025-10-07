"use client";

import { useState, useEffect, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { X } from "lucide-react";

export default function Footer() {
  const [showInfo, setShowInfo] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const email = process.env.NEXT_PUBLIC_EMAIL || "geethikapidikiti@gmail.com";
  const location = process.env.NEXT_PUBLIC_LOCATION || "Sydney, Australia";

  // Optional: close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowInfo(false);
      }
    }
    if (showInfo) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showInfo]);

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">
      {/* Icon + Text Button */}
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-purple-300 hover:bg-orange-300 text-gray-800 shadow-md transition-all font-medium"
      >
        <FaRegAddressCard size={22} />
         <span className="hidden sm:inline">Contact Info</span>
      </button>

      {/* Popup Card */}
      {showInfo && (
        <div
          ref={popupRef}
          className="absolute bottom-16 right-0 w-64 rounded-2xl p-4 bg-white/80 backdrop-blur-md shadow-xl border text-gray-700 animate-fade-in"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Contact Details</h3>
            <button
              onClick={() => setShowInfo(false)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MdEmail className="text-lg" />
              <a
                href={`mailto:${email}`}
                className="text-sm font-semibold hover:underline"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <IoLocationSharp className="text-lg" />
              <span className="text-sm font-semibold">{location}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
