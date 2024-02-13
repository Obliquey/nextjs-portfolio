import {Octokit, App} from "octokit";


export default async function GetRepos() {

    const octokit = new Octokit({
        auth: process.env.GITHUB_PUBLIC_KEY
    })

    const res = await octokit.request("GET /user/repos", {
        since: "2023-08-01T12:12:12Z",
        sort: "pushed",
        // per_page:6
    })
    let projects = res.data.map((item, index) => {
        return {
            name: item.name,
            url: item.html_url,
            language: item.language,
            size: item.size,
            last_updated: item.updated_at,
            img: item.owner.avatar_url
        };
    })
    // console.log("This is our endpoint:", projects.length, projects);
    return(projects);
}