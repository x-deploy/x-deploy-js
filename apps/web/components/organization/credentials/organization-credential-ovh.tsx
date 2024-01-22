import {getOrganizationCredentialsOvh} from "../../../lib/fetch";
import Cookies from 'js-cookie'
import React from "react";
import {Table} from "../../basics/table/table";
export  function OrganizationCredentialOvh({organizationId} : {organizationId: string}) {


    const [ovhCredentials, setOvhCredentials] = React.useState([])

    React.useEffect(() => {
       async function getCredentials() {
           const token = Cookies.get("token")
           const credentials = await getOrganizationCredentialsOvh(token ? token : "", organizationId)
           setOvhCredentials(credentials)
       }
         getCredentials()
    }, [organizationId])

    return (
        <div>
            <Table headersTab={["Name", "Description", "Created At"]}
                   lineTab={ovhCredentials.map((credential: any) => {
                           return [credential.name, credential.description, credential.createdAt]
                   }
                     )} EmptyComponent={<div className={"text-center text-gray-500 flex items-center justify-center w-full h-48"}>No OVH Credentials :(</div>}/>
        </div>
    )
}
