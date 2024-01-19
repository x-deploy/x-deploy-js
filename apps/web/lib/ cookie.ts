import {cookies} from "next/headers";

export function getOrgaIdFromCookies() {
    return cookies().get("orgaId")?.value
}

export function getProjectIdFromCookies() {
    return cookies().get("project")?.value
}

export function setNewProjectCookie(projectId: string) {
    cookies().set("project", projectId)
}
