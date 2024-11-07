import React from "react";
import { ModeTheme } from "../Theme";
import Avatar from 'react-avatar';
import { BsBell, BsBoxArrowInLeft, BsEnvelope, BsGear, BsHouseAdd, BsOption, BsPerson } from "react-icons/bs";
import { HamburgerMenu } from "@component/Hamburger";
import { ContextDasboard } from "@/state/context/dasboard";
import Breadcrumb from "@component/BreadCrumb";
import { Sidebar } from "@component/Overlay";
import OverlayPanel from "../Overlay/Panel";
import Divider from "../Divider";
import { NavLink } from "react-router-dom";
import { ListView } from "../List";
import classNames from "classnames";
import { ThemeStrokeColor } from "@/data/dasboard";
import { ThemeSelector } from "../Selector";

const NavbarDasboard: React.FC<{}> = ({ }) => {

    const { propsDasboard, setDasboard } = React.useContext(ContextDasboard);
    const [visibleSide, setSide] = React.useState<boolean>(false);

    const [openPanel, setOpenPanel] = React.useState<boolean>(false);
    const [msgPanel, setMsgPanel] = React.useState<boolean>(false);

    const theme = propsDasboard.theme;

    const bgClassName = classNames({
        "bg-red-500": theme === "red",
        "bg-green-500": theme === "green",
        "bg-tq-blue-500": theme === "tq-blue",
        "bg-md-purple-500": theme === "md-purple"
    });

    const hexColor = ThemeStrokeColor[bgClassName.substring(3)] || "#8c52ff"

    const templateItem = (item: any) => {
        return (
            <div className="relative flex items-center justify-start gap-2">
                <Avatar name="Aldo Ratmawan" color={hexColor} size="35" round />
                <div className="inline-block">
                    <span className="block text-xs font-bold opacity-95">ALDO</span>
                    <p className="text-[10px] opacity-50">Lorem, ipsum dolor....</p>
                </div>
                <div id="badge" className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-green-400" aria-label="badge-label">
                    <p className="text-white font-semibold text-[10px] text-center">2</p>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <nav className="list-none flex w-full flex-row justify-between items-center flex-1 rounded-md shadow-xl h-[3.5rem] px-3 py-2 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-3">
                    <div className="inline-block">
                        <HamburgerMenu
                            visible={propsDasboard.sidebar}
                            onChange={async () => setDasboard("side", { sidebar: !propsDasboard.sidebar })} />
                    </div>
                    <Breadcrumb data={[
                        {
                            name: "Home",
                            icon: <BsHouseAdd />,
                            to: "/home",
                            space: 2
                        },
                        {
                            name: "Setting",
                            icon: <BsGear />,
                            to: "/setting",
                            space: 2
                        },
                        {
                            name: "About",
                            icon: <BsOption />,
                            to: "/setting",
                            space: 2
                        }
                    ]} />
                </div>

                <div className="flex gap-7 items-center">
                    <ModeTheme />
                    <OverlayPanel
                        isOpen={msgPanel}
                        onChange={(value) => setMsgPanel(value)}
                        item={(
                            <div className="inline-block relative cursor-pointer mt-2" onClick={() => setMsgPanel(!msgPanel)}>
                                <BsEnvelope size={20} />
                                <div className="animate-ping absolute right-0 top-0 bg-red-500 h-2 w-2 rounded-full"></div>
                            </div>
                        )}>
                        <div className="w-40 h-48 overflow-x-scroll disabled-scrool">
                            <div id="header" className="mb-3">
                                <h1 className="text-slate-800 text-center font-semibold text-xl dark:text-slate-100 px-2">Message</h1>
                            </div>
                            <ListView
                                itemTemplate={templateItem}
                                items={[
                                    { name: "List1" },
                                    { name: "List2" },
                                    { name: "List3" },
                                    { name: "List4" },
                                    { name: "List5" }
                                ]} />
                        </div>

                    </OverlayPanel>
                    <div className="inline-block relative cursor-pointer" onClick={() => setSide(true)}>
                        <BsGear size={20} />
                        <div className="absolute right-0 top-0 bg-red-800 h-2 w-2 rounded-full"></div>
                    </div>
                    <div className="inline-block relative cursor-pointer" onClick={() => setSide(true)}>
                        <BsBell size={20} />
                        <div className="absolute right-0 top-0 bg-red-800 h-2 w-2 rounded-full"></div>
                    </div>
                    <OverlayPanel
                        isOpen={openPanel}
                        onChange={(value) => setOpenPanel(value)}
                        item={<Avatar name="Aldo Ratmawan" onClick={() => setOpenPanel(!openPanel)} className="cursor-pointer" color={hexColor} size="35" round />}>

                        <div className="w-40">
                            <div className="block">
                                <div className="flex flex-row gap-3 items-center justify-start">
                                    <span className="relative inline-block">
                                        <Avatar name="Aldo Ratmawan" color={hexColor} size="38" round />
                                        <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-400"></div>
                                    </span>
                                    <div>
                                        <p className="block text-sm font-semibold">Aldo Ratmawan</p>
                                        <p className="block text-xs">aldo12758</p>
                                    </div>
                                </div>
                                <Divider space="sm" />
                                <div className="block">
                                    <NavLink to={"#"} className="flex gap-3 items-start hover:bg-slate-500 rounded-lg py-3  px-2">
                                        <BsPerson size={20} />
                                        <span className="block text-sm">Profile</span>
                                    </NavLink>
                                    <NavLink to={"#"} className="flex gap-3 items-start hover:bg-slate-500 rounded-lg py-3 px-2">
                                        <BsGear size={20} />
                                        <span className="block text-sm">Setting</span>
                                    </NavLink>
                                    <NavLink to={"#"} className="flex gap-3 items-start hover:bg-slate-500 rounded-lg py-3 px-2">
                                        <BsBoxArrowInLeft size={20} />
                                        <span className="block text-sm">Logout</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </OverlayPanel>
                </div>
            </nav>

            <Sidebar
                visible={visibleSide}
                position="right"
                onHidde={() => setSide(false)}>
                
                <ThemeSelector/>
            </Sidebar>
        </React.Fragment>
    )
};
export default NavbarDasboard;