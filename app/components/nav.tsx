import Link from "next/link";
import { TiChevronRightOutline } from "react-icons/ti";

export default function Nav() {
    const navItems = [
        {name: "home", path:"/"},
        {name:"about", path:"/about"},
        {name:"projects", path:"/projects"},
        {name: "blog", path:"/blog"}
    ];

    return (
        <>
            <div id="navBar" className="flex-row">
                {navItems.map((item, index) => {
                    return <Link href={item.path}  className="navItem">{item.name}</Link>;
                })}
                <TiChevronRightOutline  className="text-white text-3xl m-auto ml-14 mr-2"/>
            </div>
        </>
    )
};