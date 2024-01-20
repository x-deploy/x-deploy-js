import {VerticalMenu} from "../../../../../components/navbar/settings/vertical-menu";


export default function Layout({children, params}: { children: React.ReactNode
    params: {
    id: string,
    }}) {
    return (
        <div>
            <div className={"flex flex-row min-h-full h-full w-full mt-10 ml-4"}>
                <div className={"flex flex-row min-h-full h-full w-full"}>
                    <div className={"flex flex-row min-h-full h-full w-96"}>
                        <VerticalMenu itemList={[
                            {name: "General", href: "/organization/" + params.id + "/settings"},
                            {name: "Containers Registries", href: "/organization/" + params.id + "/settings/containers-registries"},
                            {name: "Helms Repositories", href: "/organization/" + params.id + "/settings/helms-repositories"},
                            {name: "Danger Zone", href: "/organization/" + params.id + "/settings/danger-zone", danger: true},
                        ]}/>
                    </div>
                    <div className={"w-full"}>
                        <div className={"mx-4 my-1"}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
