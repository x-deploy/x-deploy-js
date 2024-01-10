import {Navbutton} from "./navbutton";

export const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center w-full">
            <div className={"flex justify-between w-full"}>
                <div className={"flex p-2"}>
                    <h1>X-Deploy</h1>
                </div>
                <div className={"flex"}>
                    <Navbutton href={"/help"}>Help</Navbutton>
                    <Navbutton href={"/help"}>Help</Navbutton>
                    <Navbutton >Help</Navbutton>
                    <Navbutton >Settings</Navbutton>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
