import Link from "next/link";

export default function Nav() {
    const navItems = [
        {name:"About", path:"/about"},
        {name:"Home", path:"/home"}
    ];

    return (
        <>
            <div className="flex flex-col absolute h-screen bg-black mt-0">
                {navItems.map((item, index) => {
                    return <Link href={item.path} className="ml-2 text-white text-2xl border-1 ">{item.name}</Link>;
                })}
            </div>
        </>
    )
};