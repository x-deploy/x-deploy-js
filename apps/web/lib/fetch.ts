

export const getOrganizations = async (token?: string) => {
    console.log(token)
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/organization', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        cache: 'no-cache',
    })
    const data = await response.json()
    console.log(data)
    if (response.ok) {
        return data
    } else {
        return data
    }
}


export const getProfileInfo = async (token?: string) => {
    console.log(token)
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/account', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'

        },
        cache: 'no-cache',
    })
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
        return data
    } else {
        return data
    }
}

export const getProjects = async (token?: string, organizationId?: string) => {
    console.log(token)
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/project`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        cache: 'no-cache',
    })
    const data = await response.json()
    console.log(data)
    if (response.ok) {
        return data
    } else {
        return data
    }
}
