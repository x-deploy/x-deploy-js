import {Card, CardContent, CardTitle} from "../basics/card";
import {OrganizationNameFormBlock} from "./client/organization-name-form-block";


export function OrganizationDisplayNameChanger({organization, token}: {
    organization: any,
    token: string,
}) {

    return (
        <Card className={"mt-10"}>
            <CardContent>
                <CardTitle className={"mb-2"}>
                    Display Name
                </CardTitle>
                <OrganizationNameFormBlock organization={organization} token={token} organizationId={organization.id}/>
            </CardContent>
        </Card>
    )
}
