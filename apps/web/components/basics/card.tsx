export function Card({ children, className , noShadow, ...props} : { children: React.ReactNode, className?: string , noShadow?: boolean}) {
    return (
        <div {...props}
            className={"rounded-xl border border-gray-200 text-black  dark:text-white dark:border-gray-800" +
                (noShadow ? "" : " shadow") +
                (className ? " " + className : "")}>
            {children}
        </div>
    )
}

export function CardContent({ children, className } : { children: React.ReactNode, className?: string }) {
    return (
        <div className="flex flex-col space-y-1.5 p-6">
            {children}
        </div>
    )
}

export function CardTitle({ children, className } : { children: React.ReactNode, className?: string }) {
    return (
        <h2 className={"text-xl font-semibold" + (className ? " " + className : "")}>
            {children}
        </h2>
    )
}
