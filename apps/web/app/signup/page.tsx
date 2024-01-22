import {Card} from "../../components/basics/card";
import Image from "next/image";
import canada from "*.jpeg";
import {LoginForm} from "../../components/login/login-form";
import {SignUpForm} from "../../components/signup/signup-form";


export default function Page() : JSX.Element {
    return (
        <div className="w-full h-screen p-2.5 flex justify-center items-center">
            <Card>
                <SignUpForm/>
            </Card>
        </div>
    );
}
