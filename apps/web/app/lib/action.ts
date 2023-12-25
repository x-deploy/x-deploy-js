
export const login = async (formData : FormData) => {
    "use server"
    const email = formData.get('email')
    const password = formData.get('password')
   const response =  await fetch(process.env.NEXT_PUBLIC_API_URL +  '/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    return await response.json()
}
