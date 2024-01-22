"use client"

import {SwitchButton} from "../../../../../../components/basics/switch-button";
import {
    OrganizationCredentialsNavbar
} from "../../../../../../components/organization/credentials/organization-credentials-navbar";
import React, {Suspense} from "react";
import {
    OrganizationCredentialOvh
} from "../../../../../../components/organization/credentials/organization-credential-ovh";
import {
    OrganizationCredentialAws
} from "../../../../../../components/organization/credentials/organization-credential-aws";

export default function Page({params}: { params: { id: string } }) {

    const [selectedButtonTab, setSelectedButtonTab] = React.useState(0);

    return (
        <div>
            <OrganizationCredentialsNavbar organizationId={params.id} selectedButtonTab={selectedButtonTab}
                                           setSelectedButtonTab={setSelectedButtonTab}/>
            <Suspense fallback={null}>
                <div>
                    {selectedButtonTab === 0 ? <OrganizationCredentialOvh organizationId={params.id}/> : <></>}
                    {selectedButtonTab === 1 ? <OrganizationCredentialAws organizationId={params.id}/> : <></>}
                </div>
            </Suspense>
        </div>
    )
}
