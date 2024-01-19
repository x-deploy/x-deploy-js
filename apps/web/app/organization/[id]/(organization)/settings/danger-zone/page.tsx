import {cookies} from "next/headers";
import {
    OrganizationDangerRemoveOrg
} from "../../../../../../components/organization/danger-zone/organization-danger-remove-org";
import {getOrganization} from "../../../../../../lib/fetch";


export default async function Page({params}: { params: { id: string }}) {

    const token = cookies().get("token")?.value
    //TODO to dynamic organizatio
    const organization = params.id
    const org  = await getOrganization(token, organization)

    return (
        <>
            <div>
                <OrganizationDangerRemoveOrg token={token ? token : ""} organizationId={organization} organization={org}/>
            </div>
        </>
    )
}
