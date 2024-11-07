import React from "react";
import { Outlet } from "react-router-dom";
import LayoutSidebar from "./layout.sidebar";
import NavbarDasboard from "@/components/Navbar/NavbarDasboard";
import TopScrool from "@/components/TopScrool";
import StateContextDasboard, { ContextDasboard } from "@/state/context/dasboard";
import { useAtom } from "jotai";

export default function LayoutDasboard(): React.ReactNode {
    
    const [propsDasboard, setDasboard] = useAtom(StateContextDasboard);

    return (
        <React.Fragment>
            <ContextDasboard.Provider value={{ propsDasboard, setDasboard }}>
                <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
                    <div className="container mx-auto px-5 py-3">
                        <div className="flex flex-1">
                            <LayoutSidebar />
                            <div className={`text-slate-600 w-full inline-block dark:text-slate-200 transition-all duration-500 ${propsDasboard.sidebar ? "" : "lg:ml-[15.5rem] xl:ml-[15.5rem]"} md:ml-0`}>
                                <NavbarDasboard />
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </ContextDasboard.Provider>
            <TopScrool />
        </React.Fragment>
    )
}