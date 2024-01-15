'use client'

import {TextInput} from "../../basics/text-input";
import {Button} from "../../basics/buttons";
import {useState} from "react";
import {patchProject} from "../../../lib/fetch";

export function ProjectNameFormBlock({project, token, organizationId, projectId}: {
    project: any,
    token: string,
    organizationId: string,
    projectId: string
}) {

    const [name, set] : [string, any] = useState(project.name)

    const changeName = async () => {
        const tempProject = {
            name: name,
            description: project.description
        }
        console.log(tempProject)
        await patchProject(token, organizationId, projectId, tempProject)
    }

    return (
        <div className={"flex items-center w-full"}>
            <div className={"w-full mr-4"}>
                <TextInput placeholder={project.name} onChange={(e) => set(e.target.value)}/>
            </div>
            <div style={
                {
                    width: "160px",
                    height: "38px",
                }
            }>
                <Button variant={"secondary"} click={() => changeName()}>Change</Button>
            </div>
        </div>
    )
}
