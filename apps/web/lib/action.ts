"use server"
import {redirect} from "next/navigation";
import { cookies } from 'next/headers'
import {toast} from "sonner";

export const login = async (formData: FormData) => {
    const email = formData.get('email')
    const password = formData.get('password')
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache',
        body: JSON.stringify({email, password}),
    })
    const data = await response.json()
    console.log(data)
    if (response.ok) {
        cookies().set('token', data.token)
        redirect('/')
    } else {
        return data
    }
}


export const signup = async (formData: FormData) => {
    const email = formData.get('email');
    const firstname = formData.get('firstname');
    const lastname = formData.get('lasname');
    const password = formData.get('password');
    const password_confirmation = formData.get('password_confirmation');
    const phone = formData.get('phone');

    if (password !== password_confirmation) {
        return {
            error: {message: 'Password and password confirmation are not the same'}
        }
    }
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, firstname, lastname, password, phone}),
    })
    const data = await response.json();
    if (response.ok) {

        redirect('/login')
    } else {
        if (data.error) {
            return data
        } else {
            return {
                error: 'An error occurred'
            }
        }
    }
}
