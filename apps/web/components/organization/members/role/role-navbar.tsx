import {Button} from "../../../basics/buttons";
import {Dialog, DialogContent, DialogTrigger} from "../../../basics/dialog/dialog";
import {CardContent, CardTitle} from "../../../basics/card";
import {TextInput} from "../../../basics/text-input";
import {RoleNavbarDialog} from "./role-navbar-dialog";

export function RoleNavbar({organizationId}: { organizationId: string }) {
    return (
        <div className={"w-full flex justify-between mb-4"}>
            <div></div>
            <div>
                <Dialog>
                    <DialogTrigger>
                    <Button variant={"primary"}>
                        <div className={"flex items-center"}>New Role</div>
                    </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <CardContent>
                            <CardTitle>Create a new role</CardTitle>
                            <p className={"text-gray-400 text-sm"}>You will have to set the permissions later</p>
                            <RoleNavbarDialog organizationId={organizationId}/>
                        </CardContent>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
