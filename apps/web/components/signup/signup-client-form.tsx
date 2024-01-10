"use client"
import {signup} from "../../lib/action";
import {TextInput} from "../basics/text-input";
import {Button} from "../basics/buttons";
import {toast} from "sonner";

export function SignupClientForm() {
    return (
        <form action={async (formData: FormData) => {
            const data = await signup(formData);
            toast.error(data.error)
        }}>
            <div>
                <TextInput label={"Email"} placeholder={"Enter your email"}/>
                <TextInput label={"Username"} placeholder={"Enter your username"}/>
                <TextInput type={"password"} label={"Password"} placeholder={"Enter your password"}/>
                <TextInput type={"password"} label={"Confirm password"}
                           placeholder={"Enter your password"}/>
            </div>
            <div className={"my-3.5"}>
                <Button variant={"primary"} className="mt-4"> Sign up</Button>
                <Button variant={"secondary"} className="mt-4" href={"/login"}> Login</Button>
            </div>
        </form>
    )
}
