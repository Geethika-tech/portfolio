import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function SocialTab(){
    return (
        <>
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 bg-white shadow-lg rounded-xl p-3 animate-float">
                <a
                  href="https://www.linkedin.com/in/geethika-pidikiti-a75a53227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={24} /> Linkedin
                </a>
                <a
                  href="https://github.com/Geethika-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-black"
                >
                  <FaGithub size={24} /> Github
                </a>
              </div>


        </>





        )






    }