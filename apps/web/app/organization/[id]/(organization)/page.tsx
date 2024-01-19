import {cookies} from "next/headers";
import {getProjects} from "../../../../lib/fetch";
import {ProjectCard} from "../../../../components/organization/project-card";
import {ProjectNavbar} from "../../../../components/organization/project-navbar";

export default async function Page({params}: {
    params: {
        id: string,
    }
}): Promise<JSX.Element> {
    const token = cookies().get("token")?.value
    const projects = await getProjects(token, params.id)

    return (
        <>
            <ProjectNavbar/>
            <div>
                {projects.map((project: any) => {
                    return (
                        <ProjectCard project={project} href={"/organization/" + params.id + "/project/" + project.id} key={project.id}/>
                    )
                })}
            </div>
        </>
    )
}
