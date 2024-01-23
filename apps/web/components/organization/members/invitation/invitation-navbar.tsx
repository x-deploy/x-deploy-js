import {CardContent, CardTitle} from "../../../basics/card";
import {TextInput} from "../../../basics/text-input";
import {Dialog, DialogContent, DialogTrigger} from "../../../basics/dialog/dialog";
import {Button} from "../../../basics/buttons";
import {InvitationNavbarDialog} from "./invitation-navbar-dialog";

export function InvitationNavbar({organizationId} : {organizationId: string}) {
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
                            <InvitationNavbarDialog organizationId={organizationId}/>
                        </CardContent>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
