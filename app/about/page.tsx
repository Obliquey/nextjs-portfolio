import React from "react";
import portrait from "../../public/pics/240216 25 Anders Headshot.jpg";
import Typewriter from "../functions/typewriter";

export default function About() {
    // I think I'll want my portrait on one side, and a scrolling text on the other. Do I want to continue making my site not scrollable? Having it be more of a static page? 
    let shortBio1 = "I'm anders. I got into software engineering beacuse I wanted to build things, use my creativity, and solve problems for folks.";
    let shortBio2 = "How about now?";

    return(
        <div id="aboutPage" className="w-2/3 flex flex-row gap-20 place-content-center m-auto my-40 max-h-screen">
            <p id="bio" className="text-white text-center text-xl font-medium self-center lowercase tracking-widest">{Typewriter(shortBio1)}<br></br><br></br>{shortBio2}</p>
            <img src={portrait.src} alt="Portrait of Anders Boyum" 
                className="max-w-sm shadow-xl rounded"/>
        </div>
    )
};