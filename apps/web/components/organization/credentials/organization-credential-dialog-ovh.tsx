import {TextInput} from "../../basics/text-input";
import {Button} from "../../basics/buttons";

export function OrganizationCredentialDialogOvh({organizationId}: {
    organizationId?: string;
}): JSX.Element {
    return <>
        <TextInput label={"Name"}/>
        <TextInput label={"Description"}/>
        <TextInput label={"Application Key"}/>
        <TextInput label={"Application Secret"}/>
        <TextInput label={"Consumer Key"}/>
        <div className={"mt-4"}>
            <Button variant={"primary"}>Add</Button>
        </div>
    </>;
}
