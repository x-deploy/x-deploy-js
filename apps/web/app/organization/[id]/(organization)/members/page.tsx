import {getOrganizationMembers} from "../../../../../lib/fetch";
import {cookies} from "next/headers";
import {Table} from "../../../../../components/basics/table/table";
import {MembersNavbar} from "../../../../../components/organization/members/members-navbar";

export default async function Page({params} : {
    params: {
        id: string,
    }
}): Promise<JSX.Element> {

    const token = cookies().get('token')?.value
    const members = await getOrganizationMembers(token, params.id)

    return (
        <>
            <MembersNavbar/>
            <Table headersTab={["Firstname","Lastname", "Email", "Role"]}
                   lineTab={members.map((member) => {
                       return [member.firstname, member.lastname, member.email, member.role]
                   })}
            />
        </>
    )
}
