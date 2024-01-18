import {VerticalMenu} from "../../../../components/navbar/settings/vertical-menu";


export default function Layout({children, params}: {
    children: React.ReactNode, params: { id: string }
}) {
    return (
        <div>
            <div className={"flex flex-row min-h-full h-full w-full mt-10 ml-4"}>
                <div className={"flex flex-row min-h-full h-full w-full"}>
                    <div className={"flex flex-row min-h-full h-full w-96"}>
                        <VerticalMenu itemList={[
                            {name: "General", href: "/project/"+ params.id +"/settings"},
                            {name: "Danger Zone", href: "/project/"+ params.id +"/settings/danger-zone", danger: true},
                        ]}/>
                    </div>
                    <div className={"w-full"}>
                        <div className={"mx-4 my-1 mr-12"}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
