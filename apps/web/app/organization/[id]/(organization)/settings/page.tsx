import {VerticalMenu} from "../../../../../components/navbar/settings/vertical-menu";
import {cookies} from "next/headers";
import {getOrganization, getOrganizations} from "../../../../../lib/fetch";
import bober from "/images/bober.jpeg"
import {OrganizationPicture} from "../../../../../components/organization/orga-picture";
import {OrganizationDisplayNameChanger} from "../../../../../components/organization/organization-display-name-changer";
import {
    OrganizationDisplayDescriptionChanger
} from "../../../../../components/organization/organization-display-description-changer";

export default async function Page(): Promise<JSX.Element> {

    const token = cookies().get("token")?.value
    //TODO to dynamic organizatio
    const organizationId = "65a3272d6528a5a16c6c8acb"

    const organization = await getOrganization(token, organizationId)

    const img = organization.logoUrl ? organization.logoUrl : bober

    return (
        <div>
            <OrganizationPicture src={img} token={token ? token : ""} organizationId={organizationId}/>
            <OrganizationDisplayNameChanger organization={organization} token={token ? token: ""} />
            <OrganizationDisplayDescriptionChanger organization={organization} token={token ? token : ""}/>
        </div>
    )
}
