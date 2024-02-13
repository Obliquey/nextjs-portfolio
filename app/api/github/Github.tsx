import {Octokit, App} from "octokit";


export default async function GetRepos() {

    // using octokit to call for my repositories. 
    // Will want to possibly paginate this eventually. Here are some helpful links:
    // https://docs.github.com/en/rest/guides/scripting-with-the-rest-api-and-javascript?apiVersion=2022-11-28#catching-errors
    // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28

    // vvv This authorizes to my account
    const octokit = new Octokit({
        auth: process.env.GITHUB_PUBLIC_KEY
    })
    // vvvv This makes the call for my repositories, using headers to specify what I want.
    const res = await octokit.request("GET /user/repos", {
        since: "2023-08-01T12:12:12Z",
        sort: "pushed",
        // per_page:6
    })
    // vvvv This formulates a projects obj, ONLY utilizing information from res that I want to show on my portfolio.
    // I think I might want to actually build a PROJECT class using TS at some point.
    let projects = res.data.map((item, index) => {
        return {
            name: item.name,
            url: item.html_url,
            language: item.language,
            size: item.size,
            last_updated: item.updated_at,
            img: item.owner.avatar_url
        };
    }).filter((item, index) => {
        return !item.name.includes("portfolio");
    })
    
    return(projects);
}