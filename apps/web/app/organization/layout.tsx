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
            <div className={"flex flex-row min-h-full h-full w-full mt-10 ml-4"}>
                <div className={"flex flex-row min-h-full h-full w-full"}>
                    <div className={"flex flex-row min-h-full h-full w-96"}>
                        <VerticalMenu itemList={[
                            {name: "General", href: "/organization/settings"},
                            {name: "Containers Registries", href: "/organization/settings/containers-registry"},
                            {name: "Helms Repositories", href: "/organization/settings/helms-repository"},
                        ]}/>
                    </div>
                    <div className={"w-full"}>
                        <div className={"mx-4 my-1"}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
