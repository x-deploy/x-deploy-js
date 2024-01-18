import {Navbar} from "../../../components/navbar/navbar";

export default function Layout({children, params}: { children: React.ReactNode, params: {
    id: string,
    }}) {
    return (
        <div>
            <Navbar navTab={
                [
                    {
                        name: "Clusters",
                        href: "/project/" + params.id,
                    },
                    {
                        name: "Environments",
                        href: "/project/" + params.id + "/environments",
                    },
                    {
                        name: "Settings",
                        href: "/project/" + params.id + "/settings",
                    },
                ]
            } project={params.id}/>
            <div className={""}>
                {children}
            </div>
        </div>
    )
}
