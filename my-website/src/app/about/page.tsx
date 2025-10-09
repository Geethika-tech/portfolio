import React from 'react';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';

export default function AboutMe(){

    return(

    <>
    <div className="max-w-7xl mt-10 mx-auto p-6 flex flex-col md:flex-row gap-2">
      {/* Left Side - Profile & Contact */}
      <div className="md:w-1/3 flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl space-y-8">
        {/* Profile Image */}
        <Image
          src="/profilePhoto.png"
          alt="Profile"
          className="rounded-full object-cover border-4"
          width={200}
          height={200}
        />

        {/* Name & Role */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold text-gray-800">
            Geethika Pidikiti
          </h2>
          <p className="text-gray-500 text-lg">FullStack Developer</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-3">
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
        </div>

        {/* Download CV Button */}
        <a
          href="Geethika-Resume.pdf"
          download
          className="bg-purple-600 text-white px-8 py-3 rounded-xl shadow hover:bg-purple-700 transition duration-300 text-lg"
        >
          Download Resume
        </a>
      </div>

      {/* Right Side - About Me */}
      <div className="md:w-2/3 flex flex-col bg-white p-8 rounded-3xl shadow-xl space-y-8">
        <div className="space-y-6">
          <h3 className="text-4xl bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent text-center">
            About me
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed tracking-wide hyphens-auto">
            Hello! I have over 4 years of experience as a Full Stack Developer,
            specializing in building scalable web applications with React.js,
            Next.js, and TypeScript. I have developed and optimized REST APIs,
            implemented responsive UI components, and deployed applications on AWS.
            My work includes integrating frontend and backend systems, enhancing
            performance, and ensuring accessibility standards. I enjoy solving
            complex problems, collaborating with cross-functional teams, and
            delivering user-focused solutions.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-4xl bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent text-center">
            What I do!
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Web Development */}
            <div className="bg-purple-50 p-6 rounded-2xl shadow hover:shadow-purple-200 transition duration-300 space-y-3">
              <h5 className="font-semibold text-purple-600 text-lg">
                Web Development
              </h5>
              <p className="text-gray-700 text-justify leading-relaxed tracking-wide ">
                I specialize in building full-stack applications using React.js,
                Next.js, TypeScript, and Node.js. I enjoy creating responsive,
                high-performance, and user-friendly web platforms that solve
                real-world problems.
              </p>
            </div>

            {/* Mentorship */}
            <div className="bg-orange-50 p-6 rounded-2xl shadow hover:shadow-orange-200 transition duration-300 space-y-3">
              <h5 className="font-semibold text-orange-600 text-lg">Mentorship</h5>
              <p className="text-gray-700 text-justify leading-relaxed tracking-wide hyphens-auto">
                I have found great joy in sharing my knowledge with others. Being a
                technical mentor allows me to give back to the community that has
                supported me throughout my career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    </>
)

}