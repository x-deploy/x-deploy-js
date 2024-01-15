'use client';
import Link from "next/link";
import {VerticalMenuButton} from "../../basics/vertical-menu-button";
import {headers} from 'next/headers';
import {usePathname} from "next/navigation";



export const VerticalMenu = ({itemList}: {
    itemList: Array<{ name: string, href: string, selected?: boolean }>;
}) => {

    const pathname = usePathname();
    return (
        <div className={"h-full min-w-full"}>
            <div className="flex flex-col h-full">
                {itemList.map((item, index) => (
                    <div className={"mx-4 my-1"}>
                        <VerticalMenuButton key={index} href={item.href}
                                            selected={pathname === item.href}>{item.name}</VerticalMenuButton>
                    </div>
                ))}
            </div>
        </div>
    )
}
