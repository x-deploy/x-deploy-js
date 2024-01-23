import {Avatar} from "../basics/avatar";
import {Popover, PopoverContent, PopoverTrigger} from "../../@/components/ui/popover";
import {Card, CardContent} from "../basics/card";
import {Button} from "../basics/buttons";
import Link from "next/link";

export const AvatarMenu = ({img, topText}: {
    img: any;
    topText?: string;
}) => {
    return (
        <div className={"hover:cursor-pointer"}>
            <Popover>
                <PopoverTrigger>
                    <Avatar src={img}/>
                </PopoverTrigger>
                <PopoverContent style={
                    {
                        border: "none",
                        width: "300px",
                    }
                }>
                    <Card className={"dark:bg-black bg-white text-sm"}>
                        <div className={"m-4 text-gray-500 font-light"}>
                            {topText}
                        </div>
                        <div>
                            <AvatarMenuButton href={"/settings"}>Settings</AvatarMenuButton>
                        </div>
                        <div className={"m-4"}>
                            <Button variant={"secondary"}><span className={"text-red-500"}>Log Out</span></Button>
                        </div>
                    </Card>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export const AvatarMenuButton = ({href, children, click, danger}: {
    href: string
    children: React.ReactNode
    click?: any
    danger?: boolean
}) => {
    return (
        <Link href={href} passHref onClick={click}>
            <div
                className={"text-gray-500 dark:hover:text-white hover:text-black p-2 pl-4 font-light dark:hover:bg-gray-900 hover:bg-gray-200 transition-all duration-75" + (danger ? " text-red-500" : "")}>
                {children}
            </div>
        </Link>
    )
}


