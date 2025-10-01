
import React from 'react';
import AboutMe from '../about/page';



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