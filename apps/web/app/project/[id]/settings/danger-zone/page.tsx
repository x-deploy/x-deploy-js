import {ProjectDangerRemoveProject} from "../../../../../components/project/danger-zone/project-danger-remove-project";
import {cookies} from "next/headers";
import {getProject} from "../../../../../lib/fetch";
import bober from "/images/bober.jpeg"

export default async function Page({params}: { params: { id: string }}) {

    const token = cookies().get("token")?.value
    //TODO to dynamic organizatio
    const organization = "65a3272d6528a5a16c6c8acb"
    const project = await getProject(token, organization, params.id)

    const img = project.logoUrl ? project.logoUrl : bober

    return (
        <>
            <div>
                <ProjectDangerRemoveProject project={project} token={token ? token: ""} organizationId={organization} projectId={params.id}/>
            </div>
        </>
    )
}
