import {getOrganizationCredentialsOvh} from "../../../lib/fetch";
import Cookies from 'js-cookie'
import React from "react";
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
            {ovhCredentials.map((credential: any, index: number) => {
                return (
                    <div key={index}>
                        <p>{credential.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
