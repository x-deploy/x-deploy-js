"use client"

import {TextInput} from "../../../basics/text-input";
import {Button} from "../../../basics/buttons";

export function InvitationNavbarDialog({organizationId} : {organizationId: string}) {
    return (
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
    )
}
