
import React from 'react';
import RollingTitles from './rollingTitles';
import Typography from "@mui/material/Typography";
import AboutMe from '../about/page';
import SocialTab from './socialTab';
import Footer from './footer';


export default function Dashboard(){

    return (
      <div className="bg-gradient-to-b from-purple-100 to-orange-50 min-h-screen flex flex-col">



        {/* Main content takes available space */}
        <main className="flex-grow">
          <AboutMe />
        </main>

        {/* Footer always stays at bottom */}

      </div>

    );

}