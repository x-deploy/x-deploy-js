import {getOrganizationInvitations} from "../../../../../../lib/fetch";
import {cookies} from "next/headers";
import {Table} from "../../../../../../components/basics/table/table";
import {InvitationNavbar} from "../../../../../../components/organization/members/invitation/invitation-navbar";

export default async function Page({params}: {
    params: {
        id: string,
    }
}) {

    const token = cookies().get('token')?.value
    const invitations = await getOrganizationInvitations(token, params.id)


    return (
        <>
            <InvitationNavbar/>
            <Table headersTab={["Firstname", "Lastname", "Email"]} lineTab={
                invitations.map((invitation : any) => {
                    return [invitation.firstname, invitation.lastname, invitation.email]
                })
            }
            />
        </>)
}
