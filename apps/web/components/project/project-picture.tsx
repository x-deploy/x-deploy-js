import {Card, CardContent, CardTitle} from "../basics/card";
import {BigAvatar} from "../basics/avatar";
import {Button} from "../basics/buttons";
import {ImageChangeButton} from "./client/image-change-button";

export function ProjectPicture({src , token, organizationId, projectId}: {
    src: string,
    token: string,
    organizationId: string,
    projectId: string
}) {
    return (
        <Card>
            <CardContent>

                <div className={"flex justify-between"}>
                    <div className={"flex-col"}>
                        <CardTitle className={"mb-4"}>Project's Picture</CardTitle>
                        <ImageChangeButton token={token} organizationId={organizationId} projectId={projectId}/>
                    </div>
                    <BigAvatar src={src}/>
                </div>
            </CardContent>
        </Card>
    )
}
