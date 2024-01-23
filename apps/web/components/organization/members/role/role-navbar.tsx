import {Button} from "../../../basics/buttons";

export function RoleNavbar() {
    return (
        <div className={"w-full flex justify-between mb-4"}>
            <div></div>
            <div>
                <Button variant={"primary"}>
                    <div className={"flex items-center"}>New Role</div>
                </Button>
            </div>
        </div>
    )
}
