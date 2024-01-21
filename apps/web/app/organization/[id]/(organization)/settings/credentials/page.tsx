import {SwitchButton} from "../../../../../../components/basics/switch-button";
import {
    OrganizationCredentialsNavbar
} from "../../../../../../components/organization/credentials/organization-credentials-navbar";

export default async function Page({params} : {params: {id: string}}): Promise<JSX.Element> {
    return (
        <div>
            <OrganizationCredentialsNavbar />
            <p>Credentials</p>
        </div>
    )
}
