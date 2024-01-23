import {Card, CardContent, CardTitle} from "../basics/card";
import {ProjectDialogForm} from "./project-dialog-form";

export function DialogContentOrganization({closeDialog, organizationId}: { closeDialog?: any, organizationId: string }) {
    console.log("closeDialog in DialogContentOrganization component:", closeDialog);

    return (
        <CardContent>
            <div className="w-96">
                <CardTitle>
                    <div className="flex items-center">
                        <div>Create a new project</div>
                    </div>
                </CardTitle>
                <ProjectDialogForm closeDialog={closeDialog} organizationId={organizationId}/>

            </div>
        </CardContent>
    );
}
