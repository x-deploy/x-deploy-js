import {Card, CardContent, CardTitle} from "../basics/card";
import {TextInput} from "../basics/text-input";
import {Button} from "../basics/buttons";

export function SignUpForm() {
    return (
        <>
            <div style={
                {
                    width: "400px",
                    height: "600px"
                }
            }>
                <CardContent>
                    <CardTitle className="text-center">
                        Sign up
                    </CardTitle>
                    <div>
                        <TextInput label={"Email"} placeholder={"Enter your email"}/>
                        <TextInput label={"Username"} placeholder={"Enter your username"}/>
                        <TextInput label={"Password"} placeholder={"Enter your password"}/>
                        <TextInput label={"Confirm password"} placeholder={"Enter your password"}/>
                    </div>
                    <div className={"my-3.5"}>
                        <Button variant={"primary"} className="mt-4"> Sign up</Button>
                        <Button variant={"secondary"} className="mt-4" href={"/login"}> Login</Button>
                    </div>
                </CardContent>
            </div>
        </>
    )
}
