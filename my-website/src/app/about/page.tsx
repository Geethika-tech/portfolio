import React from 'react';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';

export default function AboutMe(){

    return(

    <>
      <div className="max-w-7xl mt-10 mx-auto p-12 bg-white rounded-3xl shadow-xl flex flex-col md:flex-row gap-10">
                {/* Left Side - Profile & Contact */}
                <div className="md:w-1/3 flex flex-col items-center bg-gray-50 p-8 rounded-3xl shadow-inner space-y-8">
                  {/* Profile Image */}
                  <Image
                    src="/profilePhoto.jpg"
                    alt="Profile"
                 className="rounded-full object-cover border-4"
                     width={240}
                     height={240}

                  />

                  {/* Name & Role */}
                  <div className="text-center space-y-3">
                    <h2 className="text-3xl font-semibold text-gray-800">Geethika Pidikiti</h2>
                    <p className="text-gray-500 text-lg">FullStack Developer</p>

                    {/* Social Links (Styled Icons after role) */}
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
                <div className="md:w-2/3 flex flex-col space-y-8">
                  <h3 className="text-4xl font-semibold text-gray-800">ABOUT ME</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Hello there! I&apos;m thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies. My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.
                  </p>

                  <h4 className="text-3xl font-semibold text-gray-800">What I do!</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Web Development */}
                    <div className="bg-purple-50 p-6 rounded-2xl shadow hover:shadow-purple-200 transition duration-300">
                      <h5 className="font-semibold text-purple-600 mb-3 text-lg">Web Development</h5>
                      <p className="text-gray-700 text-base">
                        As a developer, I find myself most captivated by the power and flexibility of Next.js. I&apos;m always eager to dive into new projects that leverage NEXT.js, and discover innovative ways to create fast, scalable, and user-friendly applications.
                      </p>
                    </div>




                    {/* Mentorship */}
                    <div className="bg-orange-50 p-6 rounded-2xl shadow hover:shadow-orange-200 transition duration-300">
                      <h5 className="font-semibold text-orange-600 mb-3 text-lg">Mentorship</h5>
                      <p className="text-gray-700 text-base">
                        I have found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career.
                      </p>
                    </div>
                  </div>
                </div>

              </div>


    </>
)

}