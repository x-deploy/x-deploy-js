import {Navbar} from "../../components/navbar/navbar";
import {VerticalMenu} from "../../components/navbar/settings/vertical-menu";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar navTab={
                [
                    {
                        name: "Overview",
                        href: "/organization",
                    },
                    {
                        name: "Members",
                        href: "/organization/members",
                    },
                    {
                        name: "Settings",
                        href: "/organization/settings",
                    },
                ]
            }/>
            <div className={"mx-40 my-1"}>
                {children}
            </div>
        </div>
    )
}
