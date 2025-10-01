
"use client";
import React from "react";
import Image from "next/image";


export default function Contact(){

    return(
       <div className="flex flex-col items-center justify-start min-h-screen w-full text-lg bg-gradient-to-b from-purple-100 to-orange-50 p-6 gap-10">

         {/* Heading & Paragraph */}
         <div className="text-center max-w-2xl">
           <h1 className="text-3xl font-bold text-purple-700 mb-4">Let’s Connect!</h1>
           <p className="text-gray-700 text-lg">
             Shoot me a message about any upcoming projects or if you need help with something —
             I’d be happy to collaborate or assist.
           </p>
         </div>

         {/* Form + Image Section */}
         <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10">
           {/* Form */}
           <form className="flex flex-col gap-4 w-full md:w-1/2 max-w-lg p-8 bg-white rounded-2xl shadow-lg">
             <input
               type="text"
               placeholder="Name"
               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
             />
             <input
               type="email"
               placeholder="Email"
               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
             />
             <textarea
               placeholder="Message"
               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 h-32 resize-none"
             />
             <button
               type="submit"
               className="bg-purple-500 text-white py-3 rounded-lg shadow hover:bg-purple-600 transition"
             >
               Send
             </button>
           </form>

           {/* Image */}
           <Image
             src="/gif_sent-dribble.gif"
             alt="Send email gif"
             className="rounded-xl"
             width={384}
             height={256}
           />
         </div>
       </div>


)

}
