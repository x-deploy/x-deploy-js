import {Card, CardContent, CardTitle} from "../basics/card";
import {TextInput} from "../basics/text-input";
import {Button} from "../basics/buttons";

export function LoginForm() {
    return (
        <>
            <div style={
                {
                    width: "400px",
                    height: "400px"
                }
            }>
                <CardContent>
                    <CardTitle className="text-center">
                        Welcome
                    </CardTitle>
                    <div>
                        <TextInput label={"Username"} placeholder={"Enter your username"}/>
                        <TextInput label={"Password"} placeholder={"Enter your password"}/>
                    </div>
                    <div className={"my-3.5"}>
                        <Button variant={"primary"} className="mt-4"> Login</Button>
                        <Button variant={"secondary"} className="mt-4"> Sign up</Button>
                    </div>
                </CardContent>
            </div>
        </>
    )
}
