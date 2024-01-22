'use client'

import {Card, CardContent, CardTitle} from "../../basics/card";
import {GigaBigAvatar} from "../../basics/avatar";
import bober from "/images/bober.jpeg";
import {Button} from "../../basics/buttons";
import {useState} from "react";
import {setNewOrganizationPicture} from "../../../lib/fetch";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

export function NewOrganizationPicture({token, organizationId}: {
    token: string,
    organizationId: any
}) {

    const [image, setImage] : [any, any] = useState(null) // [image, setImage
    const [preview, setPreview] : [any, any] = useState(null) // [image, setImage

    const uploadImage = async () => {
        if (image && organizationId) {
            await setNewOrganizationPicture(token, organizationId, image)
        } else {
            toast.error("No image selected")
        }
    }

    const router = useRouter()

    return (
        <Card>
            <CardContent>
                <div className={"mb-4"}>
                    <CardTitle>Choose a Picture</CardTitle>
                </div>
                <div className={"w-96 h-96"}>
                    <div className={"flex justify-center items-center h-80"}>
                        <div onClick={
                            () => {
                                document.getElementById("image-upload")?.click()
                            }
                        } className={"hover:border-2 rounded-full border-gray-500 cursor-pointer"}>
                            <GigaBigAvatar src={image ? preview : bober}/>
                            <input id={"image-upload"} type={"file"} className={"hidden"} onChange={
                                (e) => {
                                    // @ts-ignore
                                    const file = e.target.files[0];
                                    if (file) {
                                        setImage(file)
                                        const reader = new FileReader();
                                        reader.onload = function (e) {
                                            // @ts-ignore
                                            setPreview(e.target.result);
                                        }
                                        reader.readAsDataURL(file);
                                    } else {
                                        console.error('No file selected.');
                                    }
                                }
                            }/>
                        </div>
                    </div>
                    <div className={"mt-6 flex justify-between"}>
                        <div className={"w-32"}>
                            <Button click={() => router.push("/organization/" + organizationId)} variant={"secondary"}>Skip</Button>
                        </div>
                        <div className={"w-32"}>
                            <Button variant={"primary"} click={uploadImage}>Update</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
