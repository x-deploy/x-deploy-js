import {OrganizationApiKeyNavbar} from "../../../../../../components/organization/api-key/organization-api-key-navbar";
import {getOrganizationApiKeys} from "../../../../../../lib/fetch";
import {cookies} from "next/headers";
import {Table} from "../../../../../../components/basics/table/table";

export default async function Page({params} : {params : {id: string}}): Promise<JSX.Element> {
    const token = cookies().get("token")?.value;
    const apiKeys = await getOrganizationApiKeys(token, params.id);
    return (

        <div>
            <OrganizationApiKeyNavbar organizationId={params.id} />
            <div>
                <Table headersTab={["Api Keys"]} lineTab={
                    apiKeys.map((apiKey: any) => {
                        return [apiKey.name]
                    })
                }/>
            </div>
        </div>
    )
}
