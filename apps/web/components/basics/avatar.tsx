import {clsx} from "clsx";
import Image from "next/image";

export function Avatar({ src, className}: {
    src: any;
    className?: string;
}): JSX.Element {
    return (
        <div className={clsx("relative rounded-full overflow-hidden", className)} style={{width: "35px", height: "35px"}}>
            <Image src={src} alt={"avatar"} layout="fill" objectFit="cover"/>
        </div>
    )
}

export function MiniAvatar({ src, className}: {
    src: any;
    className?: string;
}): JSX.Element {
    return (
        <div className={clsx("relative rounded-full overflow-hidden", className)} style={{width: "20px", height: "20px", minWidth: "20px"}}>
            <Image src={src} alt={"avatar"} layout="fill" objectFit="cover"/>
        </div>
    )
}

export function BigAvatar({ src, className}: {
    src: any;
    className?: string;
}): JSX.Element {
    return (
        <div className={clsx("relative rounded-full overflow-hidden", className)} style={{width: "80px", height: "80px"}}>
            <Image src={src} alt={"avatar"} layout="fill" objectFit="cover"/>
        </div>
    )
}
