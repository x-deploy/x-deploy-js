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
                    <Card className={"bg-black text-sm"}>
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

export const AvatarMenuButton = ({href, children}: {
    href: string
    children: React.ReactNode
}) => {
    return (
        <Link href={href} passHref>
            <div className={"dark:text-gray-500 dark:hover:text-white p-2 pl-4 font-light dark:hover:bg-gray-800 hover:bg-gray-200"}>
            {children}
             </div>
        </Link>
    )
}
