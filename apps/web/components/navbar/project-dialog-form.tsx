'use client'

import {TextInput} from "../basics/text-input";
import {Button} from "../basics/buttons";
import {toast} from "sonner";
import {newProject} from "../../lib/action";


export const ProjectDialogForm = ({closeDialog, organizationId} : { closeDialog: any, organizationId: string}) => {


    return (
        <div className={"mt-4"}>
            <form action={async (formData : FormData) => {
                const data = await newProject(organizationId, formData);
                if (data.success) {
                    toast.success("Project created")
                    //normal if not find the function is injected after
                    //TODO closeDialog()
                    //closeDialog();
                    return
                }
                toast.error(data.error)
            }}>
                <TextInput name={"name"} label={"Name"}/>
                <div className={"flex justify-end"}>
                    <div className={"w-20 mt-4"}>
                        <Button variant={"primary"}>Create</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
