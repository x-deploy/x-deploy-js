import React from "react";
import Link from "next/link";

export function VerticalMenuButton({children, className, click, href, selected}: {
    children: React.ReactNode;
    className?: string;
    click?: () => void;
    href?: string;
    selected?: boolean;
} & React.ComponentProps<"button">): JSX.Element {
    const button = (<button
        className={"rounded-lg px-4 py-3 text-sm font-light w-full " +
            "text-gray-400 dark:hover:bg-gray-900 text-start hover:bg-gray-100 transition dark:bg-dark-2 dark:border-gray-800 hover:text-black dark:hover:text-white " +
            (className ? " " + className : "") +
            (selected ? " bg-gray-100 dark:bg-gray-900  dark:text-white text-black" : "")}
        onClick={click}>
        {children}
    </button>);

    return href ? (
        <Link href={href} passHref>
            {button}
        </Link>
    ) : (
        button
    );
}
