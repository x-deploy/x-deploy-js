import {cookies} from "next/headers";
import {getProjects} from "../../lib/fetch";
import {ProjectCard} from "../../components/organization/project-card";
import {ProjectNavbar} from "../../components/organization/project-navbar";

export default async function Page(): Promise<JSX.Element> {
    const token = cookies().get("token")?.value
    //TODO template organization
    const projects = await getProjects(token, "65a3272d6528a5a16c6c8acb")

    return (
        <>
            <ProjectNavbar/>
            <div>
                {projects.map((project: any) => {
                    return (
                        <ProjectCard project={project} href={"/project/" + project.id} key={project.id}/>
                    )
                })}
            </div>
        </>
    )
}
