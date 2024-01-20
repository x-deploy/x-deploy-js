export function TextInput({label, placeholder, optional, ...props}: {
    label?: string,
    placeholder?: string,
    optional?: boolean
} & React.ComponentProps<"input">) {
    return (
        <div className="flex flex-col space-y-1.5">
            <div className={"flex items-center"}>
                {label && <label className="text-sm font-semibold" htmlFor={props.id}>{label}</label>}
                {label && optional && <span className="text-xs text-gray-500 ml-3">Optional</span>}
            </div>
            <input
                className="placeholder:text-sm text-sm  focus:outline-none focus:border-gray-500 rounded-md border border-gray-200 px-3 py-2 text-black dark:text-white bg-transparent dark:border-gray-800 transition-colors"
                placeholder={placeholder} // Add the placeholder attribute
                {...props}
            />
        </div>
    );
}
