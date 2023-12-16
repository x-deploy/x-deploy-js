export function TextInput({ label, placeholder, ...props }: { label: string, placeholder?: string } & React.ComponentProps<"input">) {
    return (
        <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-semibold" htmlFor={props.id}>{label}</label>
            <input
                className="focus:outline-none focus:border-gray-500 rounded-md border border-gray-200 px-3 py-2 text-black dark:text-white bg-transparent dark:border-gray-800 transition-colors"
                placeholder={placeholder} // Add the placeholder attribute
                {...props}
            />
        </div>
    );
}
