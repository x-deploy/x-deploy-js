import {CardContent, CardTitle} from "../basics/card";
import {TextInput} from "../basics/text-input";
import {Button} from "../basics/buttons";
import {login} from "../../app/lib/action";


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
                    <form action={login}>
                        <div>
                            <TextInput name={"email"} label={"Username"} placeholder={"Enter your username"}/>
                            <TextInput name={"password"} type={"password"} label={"Password"} placeholder={"Enter your password"}/>
                        </div>
                        <div className={"my-3.5"}>
                            <Button type={"submit"}  variant={"primary"} className="mt-4">Login</Button>
                            <Button variant={"secondary"} className="mt-4" href={"/signup"}> Sign up</Button>
                        </div>
                    </form>
                </CardContent>
            </div>
        </>
    )
}
