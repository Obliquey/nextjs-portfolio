import React from "react";
import GetRepos from "../api/github/Github";


// This component needs to fetch github projects somehow, formulate them into objects + links, and post them.

export default async function Projects() {

    // reaching into GetRepos, which is a function-fetch call to the Github API for the list of my projects.
    const projects = await GetRepos();
    console.log("Here are our projects:", projects);
    const exampleProjects = [
        {name: "Momentum", description: "Gamified personal development app built for a client."},
        {
            name: "StuMP3d", description: "Music guessing game, perfect for long car rides and testing your friends!"
        }
    ]
    return (
        <>
            {exampleProjects.map((item, index) =>{
                return (
                    <div className="min-w-72 h-auto border-2 rounded-md border-white" key={index}>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </>
    )
}