"use client"
import {Dialog, DialogContent, DialogTrigger} from "../../basics/dialog/dialog";
import {Button} from "../../basics/buttons";
import {CardContent, CardTitle} from "../../basics/card";
import {SwitchButton} from "../../basics/switch-button";
import React from "react";
import {TextInput} from "../../basics/text-input";
import {OrganizationCredentialDialogOvh} from "./organization-credential-dialog-ovh";
import {OrganizationCredentialDialogAws} from "./organization-credential-dialog-aws";

export function OrganizationCredentialDialog({organizationId, selectedButtonTab}: {
    organizationId?: string,
    selectedButtonTab?: number,
}) {

    const [selected, setSelected] = React.useState(selectedButtonTab);

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={"primary"}>Add</Button>
            </DialogTrigger>
            <DialogContent>
                <CardContent>
                    <CardTitle>Add Credentials</CardTitle>
                    <SwitchButton buttonTab={[<div>OVH</div>, <div>AWS</div>]} selectedButtonTab={selected}
                                  setSelectedButtonTab={setSelected}/>
                    <div className={"w-96"}>
                        {selected === 0 ? <OrganizationCredentialDialogOvh organizationId={organizationId}/> : <></>}
                        {selected === 1 ? <OrganizationCredentialDialogAws organizationId={organizationId}/> : <></>}
                    </div>
                </CardContent>
            </DialogContent>
        </Dialog>
    )
}
