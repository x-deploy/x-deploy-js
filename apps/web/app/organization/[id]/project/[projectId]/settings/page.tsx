import {ProjectPicture} from "../../../../../../components/project/project-picture";
import {getProject} from "../../../../../../lib/fetch";
import {cookies} from "next/headers";
import bober from "/images/bober.jpeg"
import {ProjectDisplayNameChanger} from "../../../../../../components/project/project-display-name-changer";
import {ProjectDisplayDescriptionChanger} from "../../../../../../components/project/project-display-description-changer";

export default async function Page({params}: { params: { id: string, projectId: string } }) {

    const token = cookies().get("token")?.value
    //TODO to dynamic organizatio
    const organization = "65a3272d6528a5a16c6c8acb"
    const project = await getProject(token, organization, params.projectId)

    const img = project.logoUrl ? project.logoUrl : bober

    return (
        <>
            <div>
                <ProjectPicture src={img} token={token ? token: ""} organizationId={organization} projectId={params.projectId}/>
                <ProjectDisplayNameChanger project={project} token={token ? token: ""} organizationId={organization} projectId={params.projectId}/>
                <ProjectDisplayDescriptionChanger project={project} token={token ? token: ""} organizationId={organization} projectId={params.projectId}/>
            </div>
        </>
    )
}
