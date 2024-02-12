import React from "react";



export default function Projects() {

    const exampleProjects = [
        {name: "Momentum", description: "Gamified personal development app built for a client."},
        {
            name: "StuMP3d", description: "Music guessing game, perfect for long car rides and testing your friends!"
        }
    ]
    return (
        <>
            {exampleProjects.map((item, index) => {
                console.log("Is this even happening?");
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