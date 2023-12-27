export function DropdownContent({ children, className, isOpen }: { children: React.ReactNode, className?: string, isOpen: boolean }) {
    return (
        <div className={"absolute border border-gray-200 p-4 z-10 dark:border-gray-800 rounded-md " + (isOpen ? "" : "hidden ") + (className ? " " + className : "")}>
            {children}
        </div>
    )
}
