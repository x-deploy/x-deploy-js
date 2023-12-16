import {Card, CardContent, CardTitle} from "../../components/basics/card";
import {LoginForm} from "../../components/login/login-form";
import Image from "next/image";
import bober from "/images/bober.jpeg";
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
            <Card>
                <div style={
                    {
                        width: "1000px",
                        height: "600px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }
                }>
                    <div style={
                        {
                            width: "50%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                        }
                    }>
                        <Image style={{
                            borderRadius: "10px 0px 0px 10px",
                        }}  objectFit={"cover"}
                            fill src={bober} alt={"login-image"}/>
                    </div>
                        <div style={
                        {
                            width: "50%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }>
                        <LoginForm/>
                    </div>

                </div>
            </Card>

        </div>
    );
}
