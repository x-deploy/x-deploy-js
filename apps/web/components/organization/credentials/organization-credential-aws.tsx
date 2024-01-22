import {getOrganizationCredentialsAws, getOrganizationCredentialsOvh} from "../../../lib/fetch";
import Cookies from "js-cookie";
import React from "react";
import {Table} from "../../basics/table/table";

export  function OrganizationCredentialAws({organizationId} : {organizationId: string}) {

    const [awsCredentials, setAwsCredentials] = React.useState([])

    React.useEffect(() => {
        async function getCredentials() {
            const token = Cookies.get("token")
            const credentials = await getOrganizationCredentialsAws(token ? token : "", organizationId)
            setAwsCredentials(credentials)
        }
        getCredentials()
    }, [organizationId])



    return (
        <div>
            <Table headersTab={["Name", "Description", "Created At"]}
                   lineTab={awsCredentials.map((credential: any) => {
                           return [credential.name, credential.description, credential.createdAt]
                       }
                   )} EmptyComponent={<div className={"text-center text-gray-500 flex items-center justify-center w-full h-48"}>No AWS Credentials :(</div>} />
        </div>
    )
}
