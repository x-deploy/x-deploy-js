import React from "react";
import Link from "next/link";

export function Navbutton({children, href} : {
    children?: React.ReactNode,
    href?: string
    } & React.ComponentProps<"button">) : JSX.Element {
    const button = (<button className={" text-gray-500 hover:text-black dark:hover:text-white h-full p-2"}>
        {children}
    </button>)
    return href ? (
        <Link href={href} passHref>
            {button}
        </Link>
    ) : (
        button
    );
}
