import {getOrganizationMembers} from "../../../../../lib/fetch";
import {cookies} from "next/headers";
import {Table} from "../../../../../components/basics/table/table";
import {MembersNavbar} from "../../../../../components/organization/members/members-navbar";
import {Button} from "../../../../../components/basics/buttons";
import {Popover, PopoverContent, PopoverTrigger} from "../../../../../@/components/ui/popover";
import {Card, CardContent} from "../../../../../components/basics/card";
import {AvatarMenuButton} from "../../../../../components/navbar/avatar-menu";

export default async function Page({params}: {
    params: {
        id: string,
    }
}): Promise<JSX.Element> {

    const token = cookies().get('token')?.value
    const members = await getOrganizationMembers(token, params.id)

    return (
        <>
            <MembersNavbar/>
            <Table headersTab={["Firstname", "Lastname", "Email", "Role", ""]}
                   lineTab={members.map((member: any) => {
                       return [member.firstname, member.lastname, member.email, member.role,
                           <MembersPopover memberId={member.id}/>]
                   })} EmptyComponent={
                <div className={"flex flex-col justify-center items-center h-48"}>
                    <p className={"text-gray-500 text-sm"}>No members yet :(</p>
                </div>
            }
            />
        </>
    )
}

export async function MembersPopover({memberId}: {
    memberId: string
}) {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <p>...</p>
            </PopoverTrigger>
            <PopoverContent style={
                {
                    border: "none",
                }
            }>
                <Card className={"w-32"}>
                        <div className={"py-2"}>
                            <AvatarMenuButton href={""}>Edit Role</AvatarMenuButton>
                            <div>
                                <AvatarMenuButton href={""} danger>Remove</AvatarMenuButton>
                            </div>
                        </div>
                </Card>
            </PopoverContent>
        </Popover>
    )
}
