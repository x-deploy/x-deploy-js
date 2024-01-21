import {Card} from "../card";

export function Table({headersTab, lineTab, EmptyComponent} : {
    headersTab: Array<string>
    lineTab: Array<Array<string>>
    EmptyComponent?: any
}) {
    return (
        <Card>
            <div className={"overflow-x-auto"}>
                <table className={"w-full"}>
                    <thead>
                    <tr className={"border-b border-gray-800"}>
                         {headersTab.map((header) => {
                            return (
                                <th className={"text-left p-4"}>{header}</th>
                            )
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {lineTab && lineTab.length >= 1 ? lineTab.map((line) => {
                        return (
                            <TableRow lineTab={line} bottomLine={lineTab.indexOf(line) !== lineTab.length - 1}/>
                        )
                    }) : EmptyComponent ? <div>{EmptyComponent}</div> : <></>}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

function TableRow({lineTab, bottomLine} : {
    lineTab: Array<string>
    bottomLine?: boolean
}) {
    return (
        <tr className={bottomLine ? "border-b border-gray-800" : ""}>
            {lineTab.map((header) => {
                return (
                    <TableHeader name={header} />
                )
            })}
        </tr>
    )

}

function TableHeader({name}: {name: string}) {
    return (
        <th className={"text-left p-4 font-light"}>{name}</th>
    )
}
