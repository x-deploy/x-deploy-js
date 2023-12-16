import {Card, CardContent, CardTitle} from "../../components/basics/card";
import {Button} from "../../components/basics/buttons";
import {TextInput} from "../../components/basics/text-input";


export default function Page(): JSX.Element {
    return (
        <div style={
            {
                width: "100%",
                height: "100vh",
                paddingLeft: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }>
            <Card style={
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
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
