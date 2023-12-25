"use server"
import {redirect} from "next/navigation";
export const login = async (formData : FormData) => {

    try {
        const email = formData.get('email')
        const password = formData.get('password')
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })
        const data = await response.json()
        //if data ok redirect to dashboard else show error
        if (response.ok) {
            redirect('/')
        } else {
            return data
        }
    } catch (error) {
        return {error : "Error"}
    }
}
