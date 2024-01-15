'use client'

import {TextInput} from "../../basics/text-input";
import {Button} from "../../basics/buttons";
import {useState} from "react";
import {patchProject} from "../../../lib/fetch";

export function ProjectDescriptionFormBlock({project, token, organizationId, projectId}: {
    project: any,
    token: string,
    organizationId: string,
    projectId: string
}) {

    const [description, setDescription] : [string, any] = useState(project.description)

    const changeDescription = async () => {
        const tempProject = {
            name: project.name,
            description: description
        }
        await patchProject(token, organizationId, projectId, tempProject)
    }

    return (
        <div className={"flex items-center w-full"}>
            <div className={"w-full mr-4"}>
                <TextInput placeholder={project.description} onChange={
                    (e) => setDescription(e.target.value)
                }/>
            </div>
            <div style={
                {
                    width: "160px",
                    height: "38px",
                }
            }>
                <Button variant={"secondary"} click={() => changeDescription()}>Change</Button>
            </div>
        </div>
    )
}
