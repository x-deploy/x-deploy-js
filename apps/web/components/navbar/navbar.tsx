import {Navbutton} from "../basics/navbutton";
import {Avatar} from "../basics/avatar";
import bober from "/images/bober.jpeg";
import {getOrganizations, getProfileInfo} from "../../lib/fetch";
import {cookies} from "next/headers";
import {OrganisationSwitcher} from "./organisation-switcher";
import {AvatarMenu} from "./avatar-menu";

export const Navbar = async  () => {

    console.log(cookies().get("token")?.value)
    const infos = await getProfileInfo(cookies().get("token")?.value)
    const img = infos?.avatar_url ? infos.profilePictureUrl : bober
    return (
        <div className="flex flex-col justify-between items-center w-full">
            <div className={"flex justify-between w-full pt-3 pl-6 pr-6"}>
                <div className={"flex p-2"}>
                    <div className={"flex items-center mr-5"}>
                        <h1>X-Deploy</h1>
                    </div>
                    <OrganisationSwitcher/>
                </div>
                <div className={"flex items-center"}>
                    <div className={"flex pr-8"}>
                        <Navbutton href={"/help"}>Help</Navbutton>
                        <Navbutton href={"/help"}>Help</Navbutton>
                        <Navbutton>Help</Navbutton>
                        <Navbutton>Settings</Navbutton>
                    </div>
                   <AvatarMenu img={img}/>
                </div>
            </div>
            <div className={"w-full border-b pb-2 dark:border-gray-700 border-gray-200 pl-6 pr-6 flex items-center mt-2"}>
                <Navbutton href={"/help"}>Help</Navbutton>
                <Navbutton href={"/help"}>Help</Navbutton>
                <Navbutton href={"/help"}>Help</Navbutton>
                <Navbutton href={"/help"}>Help</Navbutton>

            </div>
        </div>
    )
}
