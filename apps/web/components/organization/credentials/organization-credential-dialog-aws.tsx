import {TextInput} from "../../basics/text-input";
import {Button} from "../../basics/buttons";

export function OrganizationCredentialDialogAws({organizationId, selectedButtonTab}: {
    organizationId?: string;
    selectedButtonTab?: number;
}): JSX.Element {
    return <>
        <TextInput label={"Name"}/>
        <TextInput label={"Description"}/>
        <TextInput label={"Access Key"}/>
        <TextInput label={"Secret Key"}/>
        <div className={"mt-4"}>
            <Button variant={"primary"}>Add</Button>
        </div>
    </>;
}
