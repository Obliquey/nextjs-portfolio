import React from "react";
import GetRepos from "../api/github/Github";


// This component needs to fetch github projects somehow, formulate them into objects + links, and post them.

export default async function Projects() {

    // reaching into GetRepos, which is a function-fetch call to the Github API for the list of my projects.
    const projects = await GetRepos();
    console.log("Here are our projects:", projects);

    return (
        <>
            {projects.map((item, index) =>{
                return (
                    <div className="size-40 rounded overflow-hidden shadow-lg bg-white text-black shadow-indigo-600" key={index}>
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