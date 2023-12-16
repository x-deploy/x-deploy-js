import React from "react";

export function Button({ children, className, variant, disabled, onClick, }: {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary"
    disabled?: boolean;
    onClick?: () => void;
}): JSX.Element {
    return (React.createElement("button", { className: "rounded-lg px-4 py-2 text-sm font-semibold  hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed w-full h-full" +
            (variant === "primary"
                ? "text-white bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-black transition-all text-white"
                : "") +
            (variant === "secondary"
                ? "bg-white text-black border border-gray-200 hover:bg-gray-100 transition dark:bg-dark-2 dark:border-gray-800 dark:hover:bg-dark-3 dark:text-white"
                : "") +
            (className ? " " + className : ""), disabled: disabled, onClick: onClick }, children));
}
