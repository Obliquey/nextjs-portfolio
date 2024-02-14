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
            <div id="navBar">
                {navItems.map((item, index) => {
                    return <Link href={item.path}  className="navItem">{item.name}</Link>;
                })}
            </div>
        </>
    )
};