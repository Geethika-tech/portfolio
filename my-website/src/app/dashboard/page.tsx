
import React from 'react';
import AboutMe from '../about/page';



export default function Dashboard(){

    return (
      <div className="flex flex-col">



        {/* Main content takes available space */}
        <main className="flex-grow">
          <AboutMe />
        </main>

        {/* Footer always stays at bottom */}

      </div>

    );

}