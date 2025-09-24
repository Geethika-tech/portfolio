"use client"

import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";



export default function Footer(){

    return(
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

        )









    }