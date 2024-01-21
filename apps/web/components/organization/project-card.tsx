import bober from "/images/bober.jpeg";
import {Card, CardContent} from "../basics/card";
import Image from "next/image";
import {Button} from "../basics/buttons";

export const ProjectCard = ({project, href}: {
    project: {
        id: string;
        name: string;
        description: string;
        logoUrl: string;
        organizationId: string;
    },
    href: string
}) => {

    const image = project.logoUrl ? project.logoUrl : bober

    return (
        <div className={"w-96"}>
            <Button variant={"secondary"} href={href}
                    className={"dark:bg-black bg-white text-sm max-h-44 hover:shadow-lg transition-all duration-75 cursor-pointer"}>
                <div className={"px-2 py-3 w-96"}>
                    <div className={"flex items-center"}>
                        <Image alt={"project-image"} width={20} height={20} src={image}
                               className={"rounded-full w-10 h-10"}/>
                        <div className={"ml-3"}>
                            <p className={"text-sm font-bold"}>{project.name}</p>
                            <p className={"text-xs text-left text-gray-500 overflow-hidden"}>{project.description}</p>
                        </div>
                    </div>
                </div>
            </Button>
        </div>
    )


}
