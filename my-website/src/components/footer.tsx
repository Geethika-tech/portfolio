import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer(){
    const email = process.env.NEXT_PUBLIC_EMAIL;
    const location = process.env.NEXT_PUBLIC_LOCATION;
return(

<div className="fixed right-6 bottom-6 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-gray-700 z-50
                         backdrop-blur-md shadow-lg bg-white/70">
          {/* Phone */}


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

)

}