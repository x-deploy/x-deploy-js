'use client'

import {TextInput} from "../../basics/text-input";
import {Button} from "../../basics/buttons";
import {useState} from "react";
import {patchOrganization, patchProject} from "../../../lib/fetch";

export function OrganizationDescriptionFormBlock({organization, token, organizationId}: {
    organization: any,
    token: string,
    organizationId: string,
}) {

    const [description, setDescription] : [string, any] = useState(organization.description)

    const changeDescription = async () => {
        const tempOrganization = {
            name: organization.name,
            description: description,
            website: organization.website,
            contact_email: organization.contact_email
        }
        await patchOrganization(token, organizationId, tempOrganization)
    }

    return (
        <div className={"flex items-center w-full"}>
            <div className={"w-full mr-4"}>
                <TextInput placeholder={organization.description} onChange={
                    (e) => setDescription(e.target.value)
                }/>
            </div>
            <div style={
                {
                    width: "160px",
                    height: "38px",
                }
            }>
                <Button variant={"secondary"} click={() => changeDescription()}>Change</Button>
            </div>
        </div>
    )
}
