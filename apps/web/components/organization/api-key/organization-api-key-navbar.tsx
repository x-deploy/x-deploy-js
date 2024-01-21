import {OrganizationApiKeyNavbarNew} from "./organization-api-key-navbar-new";

export const OrganizationApiKeyNavbar = ({ organizationId }: { organizationId: string }) => {
    return (
        <div className={"flex justify-between mb-4"}>
            <div></div>
            <OrganizationApiKeyNavbarNew organizationId={organizationId} />
        </div>
    )
}
