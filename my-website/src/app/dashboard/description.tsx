import React from "react";
import { Button } from "@/components/ui/button"
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import {useRouter} from "next/navigation";


export default function Description(){
  const router = useRouter();

    const handleWorkClick=()=>{
      console.log("Work button clicked");


        }

    const handleAboutClick=()=>{
       console.log("About button clicked");
       router.push('/about');

        }

    return(

        <>
        <div className="mt-2 flex items-center justify-center px-6 text-center">
                       <p className="text-lg md:text-2xl max-w-2xl text-black-700 leading-relaxed">
                         Passionate Software Engineer with expertise in building scalable web applications and services. Skilled in JavaScript, React, Node.js, and Python. Adept at collaborating with cross-functional teams to deliver high-quality software solutions that meet business objectives.
                       </p>

         </div>
          <div className="mt-2 flex items-center justify-center px-6">
            <IoMdMail className="text-2xl text-gray-700 mr-2" />geethikapidikiti9@gmail.com
            <FaPhoneAlt className="text-2xl text-gray-700 mr-2 ml-4" />+61 0493707965
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              <Button variant="outline" size="lg" className="bg-black text-white hover:bg-blue-500 "
              onClick={handleWorkClick}
              >
                My work
              </Button>
              <Button variant="outline" size="lg" className="bg-purple-900 text-white hover:bg-purple-500"
              onClick={handleAboutClick}
              >
                About me
              </Button>
              </div>

            </>





        )




    }