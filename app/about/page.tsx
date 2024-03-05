'use client';
import React from "react";
import portrait from "../../public/pics/240216 25 Anders Headshot.jpg";
import Image from "next/image";

export default function About() {
    // I think I'll want my portrait on one side, and a scrolling text on the other. Do I want to continue making my site not scrollable? Having it be more of a static page? 
    let shortBio1 = "I'm anders. I got into software engineering because I wanted to build things, use my creativity, and solve problems for folks.";
    let shortBio2 = "Making the move into tech was tough, but I received a lot of help and encouragement along the way that I want to pass on. ";

    return(
        <div id="aboutPage" className="w-2/3 flex flex-row gap-20 place-content-center m-auto my-40 max-h-screen">
            <p id="bio" className="text-white text-center text-xl font-medium self-center lowercase tracking-widest">{shortBio1}
            <br></br>
            <br></br>
            {shortBio2}
            </p>
            <Image src={portrait} alt="Portrait of a Developer" className="max-w-sm shadow-xl rounded" />
        </div>
    )
};