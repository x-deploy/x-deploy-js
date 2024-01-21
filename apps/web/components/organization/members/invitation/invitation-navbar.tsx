import {CardContent, CardTitle} from "../../../basics/card";
import {TextInput} from "../../../basics/text-input";
import {Dialog, DialogContent, DialogTrigger} from "../../../basics/dialog/dialog";
import {Button} from "../../../basics/buttons";

export function InvitationNavbar() {
    return (
        <div className={"w-full flex justify-between mb-4"}>
            <div></div>
            <div>
                <Dialog>
                    <DialogTrigger>
                        <Button variant={"primary"}>
                            <div className={"flex items-center"}>Invite Member</div>
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <CardContent>
                            <CardTitle>Invite a new member</CardTitle>
                            <p className={"text-gray-400 text-sm"}>Enter the email of the person you want to invite</p>
                            <div className={"w-96"}>
                                <div className={"mt-2"}>
                                    <TextInput placeholder={"Email"}/>
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
