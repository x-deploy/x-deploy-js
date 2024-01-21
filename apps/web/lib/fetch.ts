import {toast} from "sonner";


export const getOrganizations = async (token?: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/organization', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        cache: 'no-cache',
    })
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        return data
    }
}


export const getProfileInfo = async (token?: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/account', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'

        },
        cache: 'no-cache',
    })
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        return data
    }
}

export const getProjects = async (token?: string, organizationId?: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/project`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
        cache: 'no-cache',
    })
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        return data
    }
}

export const getProject = async (token?: string, organizationId?: string, projectId?: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/project/${projectId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
        cache: 'no-cache',
    })
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        return data
    }
}

//send the binary file to the server
export const setNewProjectPicture = async (token?: string, organizationId?: string, projectId?: string, file?: any) => {
    if (!file) {
        console.log("file is null")
    }
    console.log(file)
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/project/${projectId}/logo`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: file
    })
    const data = await response.json()
    if (response.ok) {
        toast.success("Project picture updated")
    } else {
        toast.error("Error updating project picture")
    }
}

export const patchProject = async (token?: string, organizationId?: string, projectId?: string, body?: any) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/project/${projectId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
        body:  JSON.stringify(body)
    })
    const data = await response.json()
    if (response.ok) {
        toast.success("Project updated")
    } else {
        toast.error("Error updating project")
    }
}

export const getOrganization = async (token?: string, organizationId?: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
        cache: 'no-cache',
    })
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        return data
    }
}

export const patchOrganization = async (token?: string, organizationId?: string, body?: any) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
        body:  JSON.stringify(body)
    })
    const data = await response.json()
    if (response.ok) {
        toast.success("Organization updated")
    } else {
        toast.error("Error updating organization")
    }
}

export const deleteProject = async (token?: string, organizationId?: string, projectId?: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/project/${projectId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
    })
    const data = await response.json()
    if (response.ok) {
        toast.success("Project deleted")
        return {success: true}
    } else {
        toast.error("Error deleting project")
        return data
    }
}

export const deleteOrganization = async (token?: string, organizationId?: string, password? : string  ) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
        body: JSON.stringify({password})
    })
    const data = await response.json()
    if (response.ok) {
        toast.success("Organization deleted")
        return {success: true}
    } else {
        toast.error(data.error)
        return data
    }
}

export const setNewOrganizationPicture = async (token?: string, organizationId?: string, file?: any) => {
    if (!file) {
        console.log("file is null")
    }
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/logo`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: file
    })
    const data = await response.json()
    if (response.ok) {
        toast.success("Project picture updated")
    } else {
        toast.error("Error updating project picture")
    }
}

export const getOrganizationMembers = async (token?: string, organizationId?: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/member`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
        cache: 'no-cache',
    })
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        return data
    }
}

export const getOrganizationInvitations = async (token?: string, organizationId?: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/invitation`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
        cache: 'no-cache',
    })
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        return data
    }
}

export const getOrganizationApiKeys = async (token?: string, organizationId?: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/organization/${organizationId}/api-key`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
        cache: 'no-cache',
    })
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        return data
    }
}
