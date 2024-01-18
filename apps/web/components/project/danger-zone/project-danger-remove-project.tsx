'use client'

import {Card, CardContent, CardTitle} from "../../basics/card";
import {Button} from "../../basics/buttons";
import {Dialog, DialogContent, DialogTrigger} from "../../basics/dialog/dialog";
import {Text} from "lucide-react";
import {TextInput} from "../../basics/text-input";
import React from "react";
import {deleteProject} from "../../../lib/fetch";
import { useRouter } from 'next/navigation'

export function ProjectDangerRemoveProject({project, token, organizationId, projectId}: {
    project: any;
    token: string;
    organizationId: string;
    projectId: string;
}) {

    const router = useRouter()
    const projectName = project.name.replace(/\s+/g, '-').toLowerCase()
    const [projectNameInput, setProjectNameInput] = React.useState("")

    const deleteProjectFunc = async () => {
        const data = await deleteProject(token, organizationId, projectId)
        if (data.success) {
            await router.push("/organization/" + organizationId)
        }

    }

    return (
        <Card>
            <CardContent>
                <div className={"flex justify-between items-center"}>
                    <CardTitle>Delete Project</CardTitle>
                    <Dialog>
                        <DialogTrigger>
                            <div>
                                <Button variant={"secondary"}><span className={"text-red-500"}>Delete</span></Button>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <CardContent>
                                <div className={"w-96"}>
                                    <CardTitle>Delete Project</CardTitle>
                                    <p className={"text-xs mt-2"}>To delete the project please
                                        type <strong>{projectName}</strong></p>
                                    <div className={"mt-2"}>
                                        <TextInput onChange={(e) => {
                                            setProjectNameInput(e.target.value)
                                        }}/>
                                    </div>
                                    <div className={"flex justify-end"}>
                                        <div className={"w-20 mt-2"}>
                                            <Button  click={deleteProjectFunc} disabled={
                                                projectName !== projectNameInput
                                            } variant={"primary"}>Delete</Button>
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

