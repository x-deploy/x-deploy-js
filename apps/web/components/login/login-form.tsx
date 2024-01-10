"use client"
import {CardContent, CardTitle} from "../basics/card";
import {TextInput} from "../basics/text-input";
import {Button} from "../basics/buttons";
import {login} from "../../lib/action";
import LoginClientForm from "./login-client-form";

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
                    <LoginClientForm/>
                </CardContent>
            </div>
        </>
    )
}
