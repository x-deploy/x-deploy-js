'use client'

import {TextInput} from "../../basics/text-input";
import {Button} from "../../basics/buttons";
import {useState} from "react";
import {patchOrganization, patchProject} from "../../../lib/fetch";

export function OrganizationNameFormBlock({organization, token, organizationId}: {
    organization: any,
    token: string,
    organizationId: string,
}) {

    const [name, set] : [string, any] = useState(organization.name)

    const changeName = async () => {
        const tempOrganization = {
            name: name,
            description: organization.description,
            website: organization.website,
            contact_email: organization.contact_email
        }
        await patchOrganization(token, organizationId, tempOrganization)
        }


    return (
        <div className={"flex items-center w-full"}>
            <div className={"w-full mr-4"}>
                <TextInput placeholder={organization.name} onChange={(e) => set(e.target.value)}/>
            </div>
            <div style={
                {
                    width: "160px",
                    height: "38px",
                }
            }>
                <Button variant={"secondary"} click={() => changeName()}>Change</Button>
            </div>
        </div>
    )
}
