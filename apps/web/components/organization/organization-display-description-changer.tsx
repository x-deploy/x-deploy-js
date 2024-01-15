import {Card, CardContent, CardTitle} from "../basics/card";
import {OrganizationDescriptionFormBlock} from "./client/organization-description-form-block";

export function OrganizationDisplayDescriptionChanger({organization, token}: {
    organization: any,
    token: string,
}) {


    return (
        <Card className={"mt-10"}>
            <CardContent>
                <CardTitle className={"mb-2"}>
                    Description
                </CardTitle>
                <OrganizationDescriptionFormBlock organization={organization} token={token} organizationId={organization.id}/>
            </CardContent>
        </Card>
    )
}
