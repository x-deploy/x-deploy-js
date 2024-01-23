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
            } EmptyComponent={
                <div className={"flex flex-col justify-center items-center h-48"}>
                    <p className={"text-gray-500 text-sm"}>No invitations yet :(</p>
                </div>
            }
            />
        </>)
}
