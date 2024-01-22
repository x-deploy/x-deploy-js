import {Card} from "../card";
import {ReactNode} from "react";

export function Table({ headersTab, lineTab, EmptyComponent }: {
    headersTab: Array<string>;
    lineTab: Array<Array<ReactNode>>;
    EmptyComponent?: ReactNode;
}) {
    const hasRows = lineTab && lineTab.length > 0;

    return (
        <Card>
            <div className={"overflow-x-auto"}>
                <table className={"w-full"}>
                    <thead>
                    <tr className={"border-b border-gray-800"}>
                        {headersTab.map((header, index) => (
                            <th key={index} className={"text-left p-4"}>{header}</th>
                        ))}
                    </tr>
                    </thead>
                    {hasRows ? (
                        <tbody>
                        {lineTab.map((line, index) => (
                            <TableRow key={index} lineTab={line} bottomLine={index !== lineTab.length - 1} />
                        ))}
                        </tbody>
                    ) : (
                        <tbody>
                        <tr>
                            <td colSpan={headersTab.length}>
                                {EmptyComponent ? EmptyComponent : null}
                            </td>
                        </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </Card>
    );
}

function TableRow({lineTab, bottomLine} : {
    lineTab: Array<ReactNode>
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

function TableHeader({name}: {name: ReactNode}) {
    return (
        <th className={"text-left p-4 font-light"}>{name}</th>
    )
}
