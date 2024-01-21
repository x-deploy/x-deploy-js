import {SwitchButton} from "../../basics/switch-button";
import {Button} from "../../basics/buttons";

export function OrganizationCredentialsNavbar() {
    return (
        <div className={"flex justify-between mb-4"}>
            <div>
                <SwitchButton
                //react Node array
                buttonTab={
                    [
                        <div>OVH</div>,
                        <div>AWS</div>,
                    ]
                } selectedButtonTab={0} />
            </div>
            <div><Button variant={"primary"}>Add</Button></div>
        </div>
    )
}
