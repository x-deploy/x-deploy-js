export const MiniRoundedPlusIcon = ({color} : {
    color?: string
}) => {
    return (
        <div className={"w-25 h-25"}>
            <svg width="20px" height="20px" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="17" stroke="var(--icon-color)" stroke-width="2" fill="none"/>
                <line x1="18" y1="11" x2="18" y2="25" stroke="var(--icon-color)" stroke-width="2"/>
                <line x1="11" y1="18" x2="25" y2="18" stroke="var(--icon-color)" stroke-width="2"/>
            </svg>
        </div>
    )
}
