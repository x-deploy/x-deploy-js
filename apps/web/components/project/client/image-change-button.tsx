'use client'

import {Button} from "../../basics/buttons";
import {setNewProjectPicture} from "../../../lib/fetch";
import {read} from "node:fs";

export function ImageChangeButton ({
    token,
    organizationId,
    projectId
    }: {
    token: string,
    organizationId: string,
    projectId: string
    }) {

    const uploadImage = async (e: any) => {
        const file = e.target.files[0];
        if (file) {
            await setNewProjectPicture(token, organizationId, projectId, file)
        } else {
            console.error('No file selected.');
        }
    }

    return (
        <div>
            <Button click={() => {
                document.getElementById("image-upload")?.click()
            }} variant={"secondary"}>Change
                <input id={"image-upload"} type={"file"} className={"hidden"} onChange={
                    (e) => uploadImage(e)
                }/>
            </Button>
        </div>
)
}
