"use client"
import {login} from "../../app/lib/action";
import {TextInput} from "../basics/text-input";
import {Button} from "../basics/buttons";
import {toast} from "sonner";

export default function LoginClientForm() {
    return (
        <form action={async (formData : FormData) => {
            const data = await login(formData);
            toast.error(data.error)
        }}>
            <div>
                <TextInput name={"email"} label={"Username"} placeholder={"Enter your username"}/>
                <TextInput name={"password"} type={"password"} label={"Password"} placeholder={"Enter your password"}/>
            </div>
            <div className={"my-3.5"}>
                <Button type={"submit"}  variant={"primary"} className="mt-4">Login</Button>
                <Button variant={"secondary"} className="mt-4" href={"/signup"}> Sign up</Button>
            </div>
        </form>
    )
}
