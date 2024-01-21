import {getOrganizationInvitations} from "../../../../../../lib/fetch";
import {cookies} from "next/headers";
import {Table} from "../../../../../../components/basics/table/table";

export default async function Page({params}: {
    params: {
        id: string,
    }
}) {

    const token = cookies().get('token')?.value
    const invitations = await getOrganizationInvitations(token, params.id)


    return (
        <>

            <Table headersTab={["Firstname", "Lastname", "Email"]} lineTab={
                invitations.map((invitation) => {
                    return [invitation.firstname, invitation.lastname, invitation.email]
                })
            }
            />
        </>)
}
