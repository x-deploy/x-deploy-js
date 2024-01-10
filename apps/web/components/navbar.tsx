import {Navbutton} from "./basics/navbutton";
import {Avatar} from "./basics/avatar";
import bober from "/images/bober.jpeg";
import {getOrganizations} from "../lib/fetch";
import {cookies} from "next/headers";

export const Navbar = async  () => {

    console.log(cookies().get("token")?.value)
    const organizations = await getOrganizations(cookies().get("token")?.value)

    return (
        <div className="flex flex-col justify-between items-center w-full">
            <div className={"flex justify-between w-full pt-3 pl-6 pr-6"}>
                <div className={"flex p-2"}>
                    <h1>X-Deploy</h1>
                </div>
                <div className={"flex items-center"}>
                    <div className={"flex pr-8"}>
                        <Navbutton href={"/help"}>Help</Navbutton>
                        <Navbutton href={"/help"}>Help</Navbutton>
                        <Navbutton>Help</Navbutton>
                        <Navbutton>Settings</Navbutton>
                    </div>
                    <Avatar src={bober}/>
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
