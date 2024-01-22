import {Card, CardContent, CardTitle} from "../basics/card";
import {TextInput} from "../basics/text-input";
import {Button} from "../basics/buttons";
import {sign} from "crypto";
import {signup} from "../../lib/action";
import {SignupClientForm} from "./signup-client-form";

export function SignUpForm(): JSX.Element {
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
                    <SignupClientForm/>
                </CardContent>
            </div>
        </>
    )
}
