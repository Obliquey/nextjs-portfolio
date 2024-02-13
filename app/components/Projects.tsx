import React from "react";
import GetRepos from "../api/github/Github";


// This component needs to fetch github projects somehow, formulate them into objects + links, and post them.

export default async function Projects() {

    // reaching into GetRepos, which is a function-fetch call to the Github API for the list of my projects.
    const projects = await GetRepos();

    // I'll want to figure out a way to hide the overflow and have them pop in on scroll
    // plus make the whole site more reactive. I'm still kinda thinking a single-page portfolio would be good. But we'll see

    return (
        <>
            {projects.map((item, index) =>{
                return (
                    <div className="max-w-52 rounded overflow-hidden shadow-lg bg-white text-black shadow-indigo-600" key={index}>
                        <img className="w-full z-1" src={item.img} alt="Who knows" />
                        <div className="px-6 py-4 z-10">
                            <div className="font-bold text-xl mb-2">{item.name}</div>
                            <p>{item.language}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}