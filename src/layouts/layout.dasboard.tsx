import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import LayoutSidebar from "./layout.sidebar";
import NavbarDasboard from "@/components/Navbar/NavbarDasboard";
import TopScrool from "@/components/TopScrool";
import StateContextDasboard, { ContextDasboard } from "@/state/context/dasboard";
import { useAtom } from "jotai";
import { FooterDashboard } from '@component/Footer';

export default function LayoutDasboard(): React.ReactNode {

    const [showSidebarMobil, setSidebarMobile] = useState<boolean>(false);
    const [propsDasboard, setDasboard] = useAtom(StateContextDasboard);

    const handleOnSidebarMobile = () => {
        setSidebarMobile(false);
    }

    return (
        <React.Fragment>
            <ContextDasboard.Provider value={{ propsDasboard, setDasboard }}>
                <div className="w-full mx-auto min-h-screen bg-slate-100 dark:bg-slate-950 overflow-x-hidden">
                    <div className="container mx-auto px-5 py-3">
                        <div className="flex flex-1">
                            <LayoutSidebar 
                                isMobileSide={showSidebarMobil} 
                                onHiddeMobileSide={handleOnSidebarMobile} />
                            <div className={`text-slate-600 w-full inline-block dark:text-slate-200 transition-all duration-500 ${propsDasboard.sidebar ? "" : "lg:ml-[15.5rem] xl:ml-[15.5rem]"} md:ml-0`}>
                                <NavbarDasboard onMobile={setSidebarMobile} />
                                <Outlet />
                                <FooterDashboard />
                            </div>
                        </div>
                    </div>
                </div>
            <TopScrool />
            </ContextDasboard.Provider>
        </React.Fragment>
    )
}