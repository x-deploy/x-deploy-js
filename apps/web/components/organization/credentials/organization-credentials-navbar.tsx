"use client"

import {SwitchButton} from "../../basics/switch-button";
import {Button} from "../../basics/buttons";
import {Dialog, DialogContent, DialogTrigger} from "../../basics/dialog/dialog";
import {CardContent, CardTitle} from "../../basics/card";
import {OrganizationCredentialDialog} from "./organization-credential-dialog";
import React from "react";

export function OrganizationCredentialsNavbar({organizationId, selectedButtonTab, setSelectedButtonTab}: {
    organizationId?: string,
    selectedButtonTab?: number,
    setSelectedButtonTab?: any
}) {

    const [selected, setSelected] = React.useState(selectedButtonTab);

    return (
        <div className={"flex justify-between mb-4"}>
            <div>
                <SwitchButton
                    //react Node array
                    buttonTab={
                        [
                            <div>OVH</div>,
                            <div>AWS</div>,
                        ]
                    } selectedButtonTab={selectedButtonTab} setSelectedButtonTab={setSelectedButtonTab}/>
            </div>
            <div>
                <OrganizationCredentialDialog organizationId={organizationId} selectedButtonTab={selected}/>
            </div>
        </div>
    )
}
