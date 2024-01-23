import {cookies} from "next/headers";
import {getOrganizationRoles} from "../../../../../../lib/fetch";
import {RoleNavbar} from "../../../../../../components/organization/members/role/role-navbar";
import {Table} from "../../../../../../components/basics/table/table";

export default async function Page({params}: {
    params: {
        id: string,
    }
}) {

    const token = cookies().get('token')?.value
    const roles = await getOrganizationRoles(token ? token : "", params.id)

    return (
        <>
            <RoleNavbar/>
            <Table headersTab={["Name", "Description", "Permissions"]} lineTab={
                roles.map((role : any) => {
                    return [role.name, role.description, role.permissions]
                })
            } EmptyComponent={
                <div className={"flex flex-col justify-center items-center h-48"}>
                    <p className={"text-gray-500 text-sm"}>No roles yet :(</p>
                </div>
            }
            />
        </>
    )
}
