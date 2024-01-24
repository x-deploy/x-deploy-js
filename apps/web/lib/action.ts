"use server"
import {redirect} from "next/navigation";
import {cookies} from 'next/headers'
import {getOrganizations} from "./fetch";
import {revalidatePath} from "next/cache";

export const login = async (formData: FormData) => {
    const email = formData.get('email')
    const password = formData.get('password')
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/login/credentials', {
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
        redirect('/dashboard')
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

export const newProject = async (organizationId: string, formData: FormData) => {
    const name = formData.get('name');
    const description: string = "";
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/project`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookies().get('token')?.value,
        },
        body: JSON.stringify({name, description}),
    })
    const data =  await response.json();
    if (response.ok) {
        revalidatePath('/organization/[id]')
        return {success: true}
    }
    return data
}

export const newOrganization = async (formData: FormData) => {
    const name = formData.get('name');
    const description = formData.get('description');
    const website = formData.get('website');
    const contact_email = formData.get('contact_email');

    //check if organization already exists and if fields are valid
    if (name === "") {
        return {
            error: "Name cannot be empty"
        }
    }


    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookies().get('token')?.value,
        },
        body: JSON.stringify({name, description, website, contact_email}),
    })
    const data = await response.json();
    if (response.ok) {
        // @ts-ignore
        //TODO rework this
        const organizations = await getOrganizations(cookies().get('token')?.value)
        const organizationId = organizations.find((organization: any) => organization.name === name).id
        return {success: true, id: organizationId}
    }
    // @ts-ignore
    const organizations = await getOrganizations(cookies().get('token')?.value)
    const organizationId = organizations.find((organization: any) => organization.name === name).id
    console.log(organizationId)
    return {...data, id: organizationId}
}

export const newRole = async (organizationId: string, formData: FormData) => {
    const name = formData.get('name');
    const description = formData.get('description');
    console.log(name, description)
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/role`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookies().get('token')?.value,
        },
        body: JSON.stringify({name, description}),
    })
    const data = await response.json();
    if (response.ok) {
        revalidatePath('/organization/[id]/members/role')
        return {success: true}

    }
    return data
}
