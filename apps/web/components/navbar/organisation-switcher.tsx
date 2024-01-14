import {getOrganizations, getProjects} from "../../lib/fetch";
import {cookies} from "next/headers";
import {Button} from "../basics/buttons";
import {Avatar, MiniAvatar} from "../basics/avatar";
import bober from "/images/bober.jpeg";
import {Popover, PopoverContent, PopoverTrigger} from "../../@/components/ui/popover";
import {Card} from "../basics/card";
import {MiniRoundedPlusIcon} from "../svg/rounded-plus-icon";

export const OrganisationSwitcher = async ({project} : {
    project?: boolean
}) => {

    const token = cookies().get("token")?.value
    const organizations = await getOrganizations(token)
    console.log(organizations)
    const img = organizations[0] ? organizations[0].logoUrl ? organizations[0].logoUrl : bober : bober
    const name = organizations[0] ? organizations[0].name : "error"
    const projets = await getProjects(token)
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant={"secondary"} className={"flex"}><MiniAvatar src={img}
                                                                                 className={"mr-2"}/>{name}
                        {project ?
                            <><span
                                className={"text-gray-500"}>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>project name</>
                            :
                            <></>
                        }
                        </Button>
                </PopoverTrigger>
                <PopoverContent style={
                    {
                        border: "none",
                        width: "600px",
                        maxWidth: "600px",
                    }
                } arrowPadding={100} alignOffset={100}>
                    <Card  className={"dark:bg-black bg-white text-sm max-h-44"}>
                        <div className={"flex max-h-44"}>
                            <div className={"border-r dark:border-gray-800 w-1/2 overflow-y-auto"}>
                                <p className={"text-gray-500 text-xs m-3"}>Organizations</p>
                                <div>
                                    {organizations[0] ? organizations.map((org: any) => {
                                        return (
                                            <div style={
                                                {
                                                    scrollbarWidth: "none",
                                                }
                                            }
                                                className={"flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-75 w-full cursor-pointer"}>
                                                <MiniAvatar src={org.logoUrl ? org.logoUrl : bober}/>
                                                <div className={"ml-2 truncate"}>
                                                    {org.name}
                                                </div>
                                            </div>
                                        )
                                    }) : <></>}
                                    <div className={"flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-75 w-full cursor-pointer rounded-bl-xl"}>
                                        <MiniRoundedPlusIcon/>
                                        <div className={"ml-2 truncate"}>
                                            New
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={
                                {
                                    scrollbarWidth: "none",
                                }
                            } className={"w-1/2 overflow-y-auto"}>
                                <p className={"text-gray-500 text-xs m-3"}>Projects</p>
                                <div>
                                    {projets[0] ? projets.map((org: any) => {
                                        return (
                                            <div
                                                className={"flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-75 w-full cursor-pointer"}>
                                                <MiniAvatar src={org.logoUrl ? org.logoUrl : bober}/>
                                                <div className={"ml-2 truncate"}>
                                                    {org.name}
                                                </div>
                                            </div>
                                        )
                                    }) : <></>}
                                    <div className={"flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-75 w-full cursor-pointer"}>
                                        <MiniRoundedPlusIcon/>
                                        <div className={"ml-2 truncate"}>
                                            New
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </PopoverContent>
            </Popover>
        </div>
    )
}
