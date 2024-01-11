import {Avatar} from "../basics/avatar";

export const AvatarMenu = ({img} : {
    img: any;
}) => {
    return (
        <div className={"hover:cursor-pointer"}>
            <Avatar src={img}/>
        </div>
    )
}
