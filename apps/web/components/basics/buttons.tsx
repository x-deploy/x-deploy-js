import React from "react";
import Link from "next/link";

export function Button({children, className, variant, disabled, onClick, href}: {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary"
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}): JSX.Element {
    const button = (<button
        className={"rounded-lg px-4 py-2 text-sm font-semibold  disabled:bg-gray-300 disabled:cursor-not-allowed w-full h-full " +
            (variant === "primary"
                ? " hover:bg-gray-800  bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-black transition-all text-white"
                : "") +
            (variant === "secondary"
                ? "text-black dark:hover:bg-gray-900 border border-gray-200 hover:bg-gray-100 transition dark:bg-dark-2 dark:border-gray-800  dark:text-white"
                : "") +
            (className ? " " + className : "")}
        disabled={disabled}
        onClick={onClick}>
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
