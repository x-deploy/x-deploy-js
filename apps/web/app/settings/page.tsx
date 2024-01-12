import {VerticalMenu} from "../../components/navbar/settings/vertical-menu";

export default async function Page(): Promise<JSX.Element> {
    return (
        <>
            <VerticalMenu itemList={[
                {name: "General", href: "/settings/general"},
                {name: "Containers Registries", href: "/settings/containers-registry"},
                {name: "Helms Repositories", href: "/settings/helms-repository"},
            ]}/>
        </>
    )
}
