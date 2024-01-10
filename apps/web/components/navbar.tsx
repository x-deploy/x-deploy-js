import {Navbutton} from "./basics/navbutton";
import {Avatar} from "./basics/avatar";
import bober from "/images/bober.jpeg";

export const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center w-full">
            <div className={"flex justify-between w-full pt-3 pl-6 pr-6"}>
                <div className={"flex p-2"}>
                    <h1>X-Deploy</h1>
                </div>
                <div className={"flex items-center"}>
                    <div className={"flex pr-10"}>
                        <Navbutton href={"/help"}>Help</Navbutton>
                        <Navbutton href={"/help"}>Help</Navbutton>
                        <Navbutton>Help</Navbutton>
                        <Navbutton>Settings</Navbutton>
                    </div>
                    <Avatar src={bober} size={30} alt={""}/>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
