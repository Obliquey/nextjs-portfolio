import Link from "next/link";

export default function Nav() {
    const navItems = [
        {name:"About", path:"/about"},
        {name:"Home", path:"/home"}
    ];

    return (
        <>
            <p>Let's see if this returns anything</p>
            {navItems.map((item, index) => {
                return <Link href={item.path}>{item.name}</Link>;
            })}
        </>
    )
};