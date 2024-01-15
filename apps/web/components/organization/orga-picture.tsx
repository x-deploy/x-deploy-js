
import {Card, CardContent, CardTitle} from "../basics/card";
import {ImageChangeButton} from "../project/client/image-change-button";
import {BigAvatar} from "../basics/avatar";
import {OrganizationImageChangeButton} from "./client/image-change-button";


export function OrganizationPicture({src , token, organizationId}: {
    src: string,
    token: string,
    organizationId: string,
}) {
    return (
        <Card>
            <CardContent>
                <div className={"flex justify-between"}>
                    <div className={"flex-col"}>
                        <CardTitle className={"mb-4"}>Project's Picture</CardTitle>
                        <OrganizationImageChangeButton token={token} organizationId={organizationId}/>
                    </div>
                    <BigAvatar src={src}/>
                </div>
            </CardContent>
        </Card>
    )
}
