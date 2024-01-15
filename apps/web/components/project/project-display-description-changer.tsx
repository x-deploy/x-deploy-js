import {Card, CardContent, CardTitle} from "../basics/card";
import {TextInput} from "../basics/text-input";
import {Button} from "../basics/buttons";
import {ProjectDescriptionFormBlock} from "./client/project-description-form-block";

export function ProjectDisplayDescriptionChanger({project, token, organizationId, projectId}: {
    project: any,
    token: string,
    organizationId: string,
    projectId: string
}) {


    return (
        <Card className={"mt-10"}>
            <CardContent>
                <CardTitle className={"mb-2"}>
                    Description
                </CardTitle>
                <ProjectDescriptionFormBlock project={project} token={token} organizationId={organizationId} projectId={projectId}/>
            </CardContent>
        </Card>
    )
}
