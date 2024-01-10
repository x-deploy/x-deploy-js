import React from "react";
import Link from "next/link";

export function Navbutton({children, href} : {
    children?: React.ReactNode,
    href?: string
    } & React.ComponentProps<"button">) : JSX.Element {
    const button = (<button className={"text-sm text-gray-500 hover:text-black dark:hover:text-white  pr-4 pl-4"}>
        {children}
    </button>)
    return href ? (
        <Link href={href} passHref>
            {button}
        </Link>
    ) : (
        <div>
            {button}
        </div>
    );
}
