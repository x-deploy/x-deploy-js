import {getOrganizations} from "../../lib/fetch";
import {cookies} from "next/headers";
import {Button} from "../basics/buttons";

export const OrganisationSwitcher = async () => {

    const organizations = await getOrganizations(cookies().get("token")?.value)
    console.log(organizations)
    return (
        <div>
            <Button variant={"secondary"}>{organizations[0].name}<span className={"text-gray-500"}>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>project name</Button>
        </div>
    )
}
