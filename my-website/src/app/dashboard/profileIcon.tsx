import React from "react";
import Image from "next/image";



export default function ProfileIcon(){

    return(
        <>
        <div className="flex justify-center items-center">
              <Image
                src="profilePhoto.jpg"
                alt="Profile"
                className="w-70 h-70 rounded-full object-cover border-2  shadow-lg"
              />
            </div>

    </>




        )



    }