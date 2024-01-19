import {Navbar} from "../../../../../components/navbar/navbar";

export default function Layout({children, params}: { children: React.ReactNode, params: {
    id: string,
    projectId: string,
    }}) {
    return (
        <div>
            <Navbar navTab={
                [
                    {
                        name: "Clusters",
                        href: "/organization/" + params.id + "/project/" + params.projectId
                    },
                    {
                        name: "Environments",
                        href: "/organization/" + params.id + "/project/" + params.projectId + "/environments",
                    },
                    {
                        name: "Settings",
                        href: "/organization/" + params.id + "/project/" + params.projectId + "/settings",
                    },
                ]
            } project={params.projectId}/>
            <div className={""}>
                {children}
            </div>
        </div>
    )
}
