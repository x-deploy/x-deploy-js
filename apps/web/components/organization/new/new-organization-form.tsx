'use client'

import {TextInput} from "../../basics/text-input";
import {Button} from "../../basics/buttons";
import {newOrganization} from "../../../lib/action";
import {toast} from "sonner";

export function NewOrganizationForm({setOrganizationId , handleNextClick}: {
    setOrganizationId: any
    handleNextClick: any
}) {
    return (
        <form action={async (formData) => {
            const data = await newOrganization(formData);
            if (data) {
                setOrganizationId(data.id)
                toast.success("Organization created")
                handleNextClick()
                return
            }
            else {
                toast.error(data.error)
            }
        }}>
            <div className={"mb-4"}>
                <TextInput name={"name"} label={"Name"}/>
            </div>
            <div className={"mb-4"}>
                <TextInput name={"description"} label={"Description"} optional/>
            </div>
            <div className={"mb-4"}>
                <TextInput name={"website"} label={"Website"} optional/>
            </div>
            <div className={"mb-4"}>
                <TextInput name={"contact_email"} label={"Contact Email"} optional/>
            </div>
            <div className={"mt-10"}>
                <Button variant={"primary"}>Create</Button>
            </div>
        </form>
    )
}
