import { Manuale } from "next/font/google";
import Image from "next/image";
import Nav from "./components/nav";

export default function Home() {
  return (
    // for my portfolio / blog
    // BLOG WILL COME LATER

    // for now, just get the basics up:
      // 1. An About Me page, with something akin to a cover letter
      // 2. A "History" type page with past work experiences
      // 3. A Projects page, with a current list of Github projects
      // 4. An informations page, including a small box for visitors to send me emails.
      
      <main className="h-screen">
        <div id="parent" className="flex flex-row">
            <div id="image" className="flex">

            </div>
            <div id="bio">
                <p>
                  Welcome to my website!
                </p>
            </div>
        </div>

      </main>
  );
}
