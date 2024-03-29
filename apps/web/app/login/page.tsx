import {LoginForm} from "../../components/login/login-form";
import Image from "next/image";
import canada from "/images/canada.jpeg";
export default async function Page(): Promise<JSX.Element> {

    return (
        <div className="w-full h-screen flex justify-center items-center">
                <div className="flex w-full h-full justify-between items-center">
                    <div className="hidden lg:flex w-1/2 h-full justify-center items-center relative bg-gray-800">
                        {/*<Image*/}
                        {/*    src={canada}*/}
                        {/*    alt="login-image"*/}
                        {/*    layout="fill"*/}
                        {/*    objectFit="cover"*/}
                        {/*/>*/}
                    </div>
                    <div className="flex w-full lg:w-1/2  h-full justify-center items-center">
                        <LoginForm/>
                    </div>
                </div>
        </div>
    );
}
