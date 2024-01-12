import {Navbar} from "../../components/navbar/navbar";

export default function Layout({ children } : { children: React.ReactNode }) {
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
            {children}
        </div>
    )
}
