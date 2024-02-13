import { Manuale } from "next/font/google";
import Image from "next/image";
import Nav from "./components/nav";
// import Projects from "./components/projects";

export default function Home() {
  // const imgURL = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww";
  const imgURL = "/pics/Random_Selfie.jpg";
  return (
    // for my portfolio / blog
    // BLOG WILL COME LATER

    // for now, just get the basics up:
      // 1. An About Me page, with something akin to a cover letter
      // 2. A "History" type page with past work experiences
      // 3. A Projects page, with a current list of Github projects
      // 4. An informations page, including a small box for visitors to send me emails.
      
      <main className="">
        <div id="parent" className="flex flex-row gap-12 place-content-center mt-10">
            <div id="image" className="basis-1/5">
                <img src={imgURL} alt="something about coding" />
            </div>
            <div id="bio" className="basis-2/5 flex flex-col">
                <p className="text-white text-3xl place-self-center">
                  Welcome to my website!
                </p>
                <p className="text-white text-xl place-self-center">This is going to be a short bio of who I am, what I love, and the work I do.</p>
            </div>
        </div>


        {/* will need to figure out how best to print projects to the DOM. Will be dependent on how I retrieve that info from Github */}
        <div id="projects" className="flex flex-row gap-10 place-content-center mt-40">
          {/* <Projects /> */}
        </div>

      </main>
  );
}
