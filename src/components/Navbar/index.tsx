import classNames from "classnames";
import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "@/components/Dropdowns/dropdown.custom"
import { ContextApp } from "@/state/context/app";
import { useTranslation } from "react-i18next";
import ModeTheme from "../Theme/ModeThema";

const DATA_LNG = [
    {
        id: "id",
        country: "indonesia",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Indonesia.png"
    },
    {
        id: "en",
        country: "english",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/800px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
    },
];

export default function NavbarAuth({ toggleTheme } : { toggleTheme: () => void | Promise<void> }) : React.ReactNode | ReactElement {

    const activeLink = (status: boolean) => classNames("font-semi-bold", "text-lg", "hover:text-yellow-400", { "text-yellow-400": status, "font-bold": status })
    const { getApp, setApp } = React.useContext(ContextApp);
    const defaultLng = DATA_LNG.find(({ id }) => id === getApp.language) as typeof DATA_LNG[0];

    const { i18n } = useTranslation();
    const [select, setSelect] = React.useState<typeof DATA_LNG[0]>(defaultLng)

    const handleChange = (value: typeof DATA_LNG[0]) => {
        setApp("lang", { language: value.id as any });
        i18n.changeLanguage(value.id);
        setSelect(value);
    };

    const itemTemplateDropdown = (value: typeof DATA_LNG[0]) => {
        return (
            <div className={`flex justify-between items-center px-3 py-2 ${value.id === select.id ? "text-orange-400 font-semibold" : ""}`}>
                <div className="flex items-center gap-2">
                    <img src={value.image} width={19} alt="thumbnail_lng" />
                    <span className="block">{value.id.toUpperCase()}</span>
                </div>
                {/* {
                    value.id === select.id && ( <BsCheck color="green" size={18} /> )
                } */}
            </div>
        )
    };

    const selectedTampleDropdown = (value: typeof DATA_LNG[0]) => {
        return (
            <div className="flex gap-3 items-center w-[4rem]">
                <img src={value.image} width={19} alt="thumbnail_lng" />
                <span className="">{value?.id.toLocaleUpperCase()}</span>
            </div>
        )
    };

    return (
        <React.Fragment>
            <nav className="animate-fadeInBottom flex px-0 pt-5 justify-between items-center h-16 bg-transparent">
                <li className="flex items-center max-md:hidden text-gray-500 dark:text-gray-200 gap-9 list-none p-0 m-0">
                    <NavLink to={"#"} className={`font-semibold text-lg hover:text-text-theme-blue`}>Home</NavLink>
                    <NavLink to={"#"} className={`font-semibold text-lg hover:text-text-theme-blue`}>About</NavLink>
                    <NavLink to={"#"} className={`font-semibold text-lg hover:text-text-theme-blue`}>Resources</NavLink>
                    <NavLink to={"#"} className={`font-semibold text-lg hover:text-text-theme-blue`}>Blog</NavLink>
                    <Dropdown
                        value={select}
                        optionLabel="name"
                        selectedTemplate={selectedTampleDropdown}
                        itemTemplate={itemTemplateDropdown}
                        onChange={handleChange}
                        data={DATA_LNG} />
                </li>
                <header className="flex items-center gap-4 md:hidden">
                    <img src="/img/circle.png" className="w-8 rounded" alt="circle" />
                    <h1 className="text-xl font-bold text-gray-400">Home</h1>
                </header>
                <li className="flex items-center text-gray-200 max-md:text-gray-600 gap-14 list-none p-0 m-0">
                    <div className="flex items-center gap-9">
                        <NavLink to={"/auth/sign-in"} className={({ isActive }) => activeLink(isActive)}>Sign In</NavLink>
                        <NavLink to={"/auth/sign-up"} className={({ isActive }) => activeLink(isActive)}>Sign Up</NavLink>
                    </div>
                    <ModeTheme/>
                </li>
            </nav>
        </React.Fragment>
    )
}