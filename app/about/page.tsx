import React from "react";
import portrait from "../../public/pics/240216 25 Anders Headshot.jpg";
import Image from "next/image";

export default function About() {

    // I think I'll want my portrait on one side, and a scrolling text on the other. Do I want to continue making my site not scrollable? Having it be more of a static page? 

    return(
        <div id="aboutPage" className="w-1/3 flex flex-row gap-40 place-content-center m-auto my-40 max-h-screen">
            <p className="text-white text-lg bold self-center tracking-widest">This is the about page. Eventually there will be a fun bio or sumthin'</p>
            <img src={portrait.src} alt="Portrait of Anders Boyum" 
                className="max-w-sm shadow-xl rounded"/>
        </div>
    )
};