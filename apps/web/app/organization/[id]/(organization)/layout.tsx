import {Navbar} from "../../../../components/navbar/navbar";
import React from "react";

export default async function Layout({children, params}: { children: any, params: {
    id: string,
    }}) {
    return (
        <div>
            <Navbar navTab={
                [
                    {
                        name: "Overview",
                        href: "/organization/" + params.id,
                    },
                    {
                        name: "Members",
                        href: "/organization/" + params.id + "/members",
                    },
                    {
                        name: "Settings",
                        href: "/organization/" + params.id + "/settings",
                    },
                ]
            } organizationId={params.id} />
            <div className={"mx-40 my-1"}>
                {children}
            </div>
        </div>
    )
}
