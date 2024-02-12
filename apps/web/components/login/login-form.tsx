"use client"
import {CardContent, CardTitle} from "../basics/card";
import LoginClientForm from "./login-client-form";
import {useEffect, useState} from "react";
import {getProviders, signIn} from "next-auth/react";
import {Button} from "../basics/buttons";
import Cookies from "js-cookie";
import {toast} from "sonner";

export function LoginForm() {

//TODO better typing
    const [providers, setProviders]: [any, any] = useState(null)

    useEffect(() => {
        const errorCookie = Cookies.get("error")
        if (errorCookie) {
            setTimeout(() => {
                toast.error(errorCookie)
                Cookies.remove("error")
            }, 0)

        }
        const fetchProviders = async () => {
            const providers = await getProviders()
            setProviders(providers)
        }
        fetchProviders()
    }, []);

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
                    {providers && Object.values(providers).map((provider: any) => (
                        <div key={provider.name}>
                            <Button variant={"secondary"} click={() => signIn(provider.id)}>Sign in
                                with {provider.name}</Button>
                        </div>
                    ))}
                    <LoginClientForm/>
                </CardContent>
            </div>
        </>
    )
}
