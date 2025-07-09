import React from "react";
import classNames from "classnames";
import { ContextDasboard } from "@/state/context/dasboard";
import { ThemeStrokeColor } from "@/data/dasboard";
import { SidebarList } from "@/components/Sidebar";
import { dataSidebar } from "@/data/sidebar";
import { Sidebar } from "@/components/Overlay";
import useIsMobile from "@/hooks/useMobile";

interface PropsLayoutSidebar {
    isMobileSide?: boolean;
    onHiddeMobileSide: () => void;
}

export default function LayoutSidebar({ isMobileSide, onHiddeMobileSide }: PropsLayoutSidebar): React.ReactNode {

    const { propsDasboard } = React.useContext(ContextDasboard);
    const classSidebar = classNames({ "translate-x-0 w-0": propsDasboard.sidebar, "-translate-x-[110%] w-60": !propsDasboard.sidebar });

    const theme = propsDasboard.theme;
    const isMobile = useIsMobile();

    const bgClassName = classNames({
        "bg-red-500": theme === "red",
        "bg-green-500": theme === "green",
        "bg-tq-blue-500": theme === "tq-blue",
        "bg-md-purple-500": theme === "md-purple"
    });

    const bgImage = classNames({
        "/img/circle_red.png": theme === "red",
        "/img/circle_green.png": theme === "green",
        "/img/circle_tq_blue.png": theme === "tq-blue",
        "/img/circle_purple.png": theme === "md-purple"
    });

    const findHexColor = ThemeStrokeColor[bgClassName.substring(3)];

    return (
        <React.Fragment>
            <aside className={`fixed inset-0 overflow-y-scroll top-3 left-3 shadow-xl rounded-lg bg-white dark:bg-gray-900 text-white transition-all duration-500 transform ${classSidebar} lg:translate-x-0 h-[96vh] disabled-scrool`}>
                <div className="flex justify-start gap-3 items-center pl-8 border-b py-5">
                    <picture>
                        <source srcSet={bgImage} type="image/png" />
                        <img src={bgImage} className="w-[20px]" alt="" />
                    </picture>
                    <h1 className="text-xl text-slate-600 dark:text-slate-100 font-semibold uppercase">Admin</h1>
                </div>
                <nav className="px-5 py-4">
                    <SidebarList
                        space="5"
                        data={dataSidebar(findHexColor)} />
                </nav>
            </aside>
            {
                isMobile && (
                    <Sidebar
                        position="left"
                        visible={isMobileSide as any}
                        className="overflow-y-scroll"
                        onHidde={onHiddeMobileSide}>
                        <div className="flex justify-start gap-3 items-center pl-8 border-b py-5">
                            <picture>
                                <source srcSet={bgImage} type="image/png" />
                                <img src={bgImage} className="w-[20px]" alt="" />
                            </picture>
                            <h1 className="text-xl text-slate-600 dark:text-slate-100 font-semibold uppercase">Admin</h1>
                        </div>
                        <nav className="px-5 py-4">
                            <SidebarList
                                space="5"
                                data={dataSidebar(findHexColor)} />
                        </nav>
                    </Sidebar>
                )
            }
        </React.Fragment>
    )
}