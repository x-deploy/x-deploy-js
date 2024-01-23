import {Button} from "../../../basics/buttons";
import {Dialog, DialogContent, DialogTrigger} from "../../../basics/dialog/dialog";
import {CardContent, CardTitle} from "../../../basics/card";
import {TextInput} from "../../../basics/text-input";

export function RoleNavbar() {
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
                            <div className={"w-96"}>
                                <div className={"mt-2"}>
                                    <TextInput label={"Name"} placeholder={"Name"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <TextInput label={"Description"} placeholder={"Description"}/>
                                </div>
                                <div className={"flex justify-end"}>
                                    <div className={"mt-4"}>
                                        <Button variant={"primary"}>Invite</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
