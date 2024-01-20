
import {NewOrganizationContainer} from "../../../components/organization/new/new-organization-container";
import {cookies} from "next/headers";

export default function Page() {

    const token = cookies().get('token')?.value

    return (
        <>
            <NewOrganizationContainer token={token ? token : ""}/>
        </>
    )
}
