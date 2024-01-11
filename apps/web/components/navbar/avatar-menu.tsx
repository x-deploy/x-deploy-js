import {Avatar} from "../basics/avatar";
import {Popover, PopoverContent, PopoverTrigger} from "../../@/components/ui/popover";
import {Card, CardContent} from "../basics/card";
import {Button} from "../basics/buttons";

export const AvatarMenu = ({img}: {
    img: any;
}) => {
    return (
        <div className={"hover:cursor-pointer"}>
            <Popover>
                <PopoverTrigger>
                    <Avatar src={img}/>
                </PopoverTrigger>
                <PopoverContent style={
                    {
                        border: "none"
                    }
                }>
                    <Card className={"bg-black"}>
                        <CardContent>
                            <Button variant={"secondary"}><span className={"text-red-500"}>Log Out</span></Button>
                        </CardContent>
                    </Card>
                </PopoverContent>
            </Popover>
        </div>
    )
}
