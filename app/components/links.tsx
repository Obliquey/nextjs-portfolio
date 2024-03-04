// this is going to be the links to socials like linkedIn, twitter? github, etc.

// icons
// import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaTwitch } from "react-icons/fa";

export default function Links(){
    const links = [
        {social: "LinkedIn", url: "https://www.linkedin.com/in/anders--boyum/"},
        {social:"Github", url: "https://github.com/Obliquey"},
        {social:"Twitter / X", url: "https://twitter.com/_Obliquey"}
    ]

    return(
        <div id="links" className="flex-col absolute right-1 top-1">
            <a href='https://github.com/Obliquey' target="_blank"><SlSocialGithub className="text-white border rounded right-1 top-1 size-9 p-1 mb-2" /></a>
            <a href='https://www.linkedin.com/in/anders--boyum/' target="_blank"><SlSocialLinkedin className="text-white border rounded right-1 top-1 size-9 p-1 mb-2" /></a>
            <a href='https://twitter.com/_Obliquey' target="_blank"><BsTwitterX className="text-white border rounded right-1 top-1 size-9 p-1 mb-2" /></a>
            <a href="https://www.twitch.tv/sobliquey" target="_blank"><FaTwitch className="text-white border rounded right-1 top-1 size-9 p-1 mb-2"/></a>
        </div>
    )
}