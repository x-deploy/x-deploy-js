'use client'

import {Card, CardContent, CardTitle} from "../../basics/card";
import {Button} from "../../basics/buttons";
import {Dialog, DialogContent, DialogTrigger} from "../../basics/dialog/dialog";
import {Text} from "lucide-react";
import {TextInput} from "../../basics/text-input";
import React from "react";
import {deleteOrganization, deleteProject} from "../../../lib/fetch";
import { useRouter } from 'next/navigation'

export function OrganizationDangerRemoveOrg({token, organizationId}: {
    token: string;
    organizationId: string;
}) {

    const router = useRouter()
    const [orgPassInput, setOrgPassInput] = React.useState("")

    const deleteOrgFunc = async () => {
        const data = await deleteOrganization(token, organizationId, orgPassInput)
        if (data.success) {
            router.push("/organization")
        }

    }

    return (
        <Card>
            <CardContent>
                <div className={"flex justify-between items-center"}>
                    <CardTitle>Delete Organization</CardTitle>
                    <Dialog>
                        <DialogTrigger>
                            <div>
                                <Button variant={"secondary"}><span className={"text-red-500"}>Delete</span></Button>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <CardContent>
                                <div className={"w-96"}>
                                    <CardTitle>Delete Organization</CardTitle>
                                    <p className={"text-xs mt-2"}>To delete the project please
                                        type your password</p>
                                    <div className={"mt-2"}>
                                        <TextInput onChange={(e) => {
                                            setOrgPassInput(e.target.value)
                                        }}/>
                                    </div>
                                    <div className={"flex justify-end"}>
                                        <div className={"w-20 mt-2"}>
                                            <Button  click={deleteOrgFunc} variant={"primary"}>Delete</Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardContent>
        </Card>
    )
}

