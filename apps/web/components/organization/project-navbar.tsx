import {Button} from "../basics/buttons";
import {Dialog, DialogContent, DialogTrigger} from "../basics/dialog/dialog";
import {DialogContentOrganization} from "../navbar/dialog-content";

export const ProjectNavbar = ({organizationId} : { organizationId: string }) => {
    return (
        <>
            <div className={"flex justify-between mt-4 mb-2"}>
                <div></div>
                <div>
                    <Dialog>
                        <DialogTrigger>
                            <Button variant={"primary"}>New Project</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogContentOrganization organizationId={organizationId}/>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </>
    )
}
