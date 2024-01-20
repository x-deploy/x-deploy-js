import {getOrganizations, getProjects} from "../../lib/fetch";
import {cookies} from "next/headers";
import {Button} from "../basics/buttons";
import {Avatar, MiniAvatar} from "../basics/avatar";
import bober from "/images/bober.jpeg";
import {Popover, PopoverContent, PopoverTrigger} from "../../@/components/ui/popover";
import {Card, CardContent, CardTitle} from "../basics/card";
import {MiniRoundedPlusIcon} from "../svg/rounded-plus-icon";
import {Suspense} from "react";
import {Dialog, DialogContent, DialogTrigger} from "../basics/dialog/dialog";
import {TextInput} from "../basics/text-input";
import Link from "next/link";
import {ProjectDialogForm} from "./project-dialog-form";
import {DialogContentOrganization} from "./dialog-content";
import {getOrgaIdFromCookies, setNewProjectCookie} from "../../lib/ cookie";

export const OrganisationSwitcher = async ({organizationId, project}: {
    organizationId?: string,
    project?: string
}) => {

    const token = cookies().get("token")?.value
    const organizations = await getOrganizations(token)
    const orgaId = organizationId ? organizationId : getOrgaIdFromCookies() ? getOrgaIdFromCookies() : organizations[0].id
    const projets = await getProjects(token, orgaId)
    const projectSelected = projets.find((proj: any) => proj.id === project)
    const orga = organizations.find((org: any) => org.id === orgaId)
    const img = orga ? orga.logoUrl ? orga.logoUrl : bober : bober
    const name = orga ? orga.name : "No organization"

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant={"secondary"} className={"flex"}><MiniAvatar src={img}
                                                                                 className={"mr-2"}/>{name}
                        {project ?
                            <><span
                                className={"text-gray-500"}>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>{projectSelected.name}</>
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
                    <Card className={"dark:bg-black bg-white text-sm max-h-44"}>
                        <div className={"flex max-h-44"}>
                            <div className={"border-r dark:border-gray-800 w-1/2 overflow-y-auto"}>
                                <p className={"text-gray-500 text-xs m-3"}>Organizations</p>
                                <div>
                                    {organizations[0] ? organizations.map((org: any) => {
                                        return (
                                            <Link href={"/organization/" + org.id}>
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
                                            </Link>
                                        )
                                    }) : <></>}
                                    <Link href={"/organization/new"}>
                                        <div
                                            className={"flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-75 w-full cursor-pointer rounded-bl-xl"}>
                                            <MiniRoundedPlusIcon/>

                                            <div className={"ml-2 truncate"}>
                                                New
                                            </div>
                                        </div>
                                    </Link>

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
                                            <Link href={org.id ? "/organization/" + orgaId + "/project/" + org.id : ""}>
                                                <div
                                                    className={"flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-75 w-full cursor-pointer"}>
                                                    <MiniAvatar src={org.logoUrl ? org.logoUrl : bober}/>
                                                    <div className={"ml-2 truncate"}>
                                                        {org.name}
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    }) : <></>}
                                    <Dialog>

                                        <DialogTrigger>
                                            <div
                                                className={"flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-75 w-full cursor-pointer"}>
                                                <MiniRoundedPlusIcon/>
                                                <div className={"ml-2 truncate"}>
                                                    New
                                                </div>
                                            </div>

                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogContentOrganization organization={organizations[0]}/>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                    </Card>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export const OrganisationSwitcherSkeleton = () => {
    return (
        <div
            className={"rounded-lg px-4 py-2 text-sm font-semibold  disabled:bg-gray-300 disabled:cursor-not-allowed  text-black dark:hover:bg-gray-900 border border-gray-200 hover:bg-gray-100 transition dark:bg-dark-2 dark:border-gray-800  dark:text-white"}>
            <div className={"flex animate-pulse items-center"}>
                <div className={"rounded-full w-5 h-5 bg-gray-300 mr-2"}/>
                <div className="flex-1 h-3 bg-gray-400 rounded w-28"></div>
            </div>
        </div>
    )
}
