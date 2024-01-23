"use client"
import {TextInput} from "../../../basics/text-input";
import {Button} from "../../../basics/buttons";
import {login, newRole} from "../../../../lib/action";
import {toast} from "sonner";

export function RoleNavbarDialog({organizationId}: { organizationId: string }) {
    return (
        <div className={"w-96"}>
            <form action={async (formData : FormData) => {
                const data = await newRole(organizationId, formData)
                if (data.success) {
                    toast.success("Role created")
                    return
                }
                toast.error("Error creating role")

            }}>
                <div className={"mt-2"}>
                    <TextInput name={"name"} label={"Name"} placeholder={"Name"}/>
                </div>
                <div className={"mt-2"}>
                    <TextInput name={"description"} label={"Description"} placeholder={"Description"}/>
                </div>
                <div className={"flex justify-end"}>
                    <div className={"mt-4"}>
                        <Button variant={"primary"}>Invite</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
