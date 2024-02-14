import { Manuale } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    // for my portfolio / blog
    // BLOG WILL COME LATER

    // for now, just get the basics up:
      // 1. An About Me page, with something akin to a cover letter
      // 2. A "History" type page with past work experiences?
      // 3. A Projects page, with a current list of Github projects
      // 4. An informations page, including a small box for visitors to send me emails?
      

      // need to separate these elements out more, make their positioning less dependent on each other. 
      <main className="flex flex-row place-content-center m-auto absolute top-1/3 inset-x-1/4 gap-10">
        <div id="nametag" className="text-white text-8xl m-auto place-self-center">
            <h1>anders <br></br>boyum</h1>
        </div>
        <div id="pinstripe" className="text-white text-8xl place-self-center h-full">
          <p>|</p>
        </div>
        <div id="bio" className="text-white text-6xl place-self-center">
          <p>full-stack engineer</p>
        </div>
      </main>
  );
}


// PREVIOUS BUILD
{/* <main className="">
<div id="parent" className="flex flex-row gap-12 place-content-center mt-10">
    <div id="image" className="basis-1/5">
        <img src={imgURL} alt="something about coding" className="rounded-lg shadow-lg"/>
    </div>
    <div id="bio" className="basis-2/5 flex flex-col">
        <p className="text-white text-3xl place-self-center">
          Anders Boyum
        </p>
        <p className="text-white text-xl place-self-center">I'm a software developer </p>
    </div>
</div>

</main> */}
