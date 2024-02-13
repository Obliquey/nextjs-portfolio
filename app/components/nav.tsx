import Link from "next/link";

export default function Nav() {
    const navItems = [
        {name: "Home", path:"/"},
        {name:"About", path:"/about"},
        {name:"Projects", path:"/projects"},
        {name: "Blog", path:"/blog"}
    ];

    return (
        <>
            <div id="navBar" className="flex flex-col absolute left-0 top-0 h-max bg-stone-800 w-32">
                {navItems.map((item, index) => {
                    return <Link href={item.path} className="ml-2 text-white text-2xl border-1 p-5 ">{item.name}</Link>;
                })}
            </div>
        </>
    )
};