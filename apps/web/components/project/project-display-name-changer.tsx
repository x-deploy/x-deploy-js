import {Card, CardContent, CardTitle} from "../basics/card";
import {TextInput} from "../basics/text-input";
import {Button} from "../basics/buttons";
import {ProjectNameFormBlock} from "./client/project-name-form-block";

export function ProjectDisplayNameChanger({project, token, organizationId, projectId}: {
    project: any,
    token: string,
    organizationId: string,
    projectId: string
}) {

    return (
        <Card className={"mt-10"}>
            <CardContent>
                <CardTitle className={"mb-2"}>
                    Display Name
                </CardTitle>
                <ProjectNameFormBlock project={project} token={token} organizationId={organizationId} projectId={projectId}/>
            </CardContent>
        </Card>
    )
}
