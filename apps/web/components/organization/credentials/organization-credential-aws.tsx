import {getOrganizationCredentialsAws, getOrganizationCredentialsOvh} from "../../../lib/fetch";
import Cookies from "js-cookie";
import React from "react";

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
            {awsCredentials && awsCredentials.length >= 1 ? awsCredentials.map((credential: any, index: number) => {
                return (
                    <div key={index}>
                        <p>{credential.name}</p>
                    </div>
                )
            }) : <></>}
        </div>
    )
}
