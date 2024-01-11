import {getOrganizations} from "../../lib/fetch";
import {cookies} from "next/headers";
import {Button} from "../basics/buttons";
import {Avatar, MiniAvatar} from "../basics/avatar";
import bober from "/images/bober.jpeg";

export const OrganisationSwitcher = async () => {

    const organizations = await getOrganizations(cookies().get("token")?.value)
    console.log(organizations)
    const img = organizations[0].logoUrl ? organizations[0].logoUrl : bober
    return (
        <div>
            <Button variant={"secondary"} className={"flex"}><MiniAvatar src={bober} className={"mr-2"}/>{organizations[0].name}<span className={"text-gray-500"}>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>project name</Button>
        </div>
    )
}
