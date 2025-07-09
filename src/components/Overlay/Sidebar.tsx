import React from "react";
import { PropsOverlaySidebar } from "./interface";
import useMouseDown from "@/hooks/useMouseDown";
import { BsXLg } from "react-icons/bs";

const Sidebar: React.FC<PropsOverlaySidebar> = ({ onHidde, visible, position, className, children }) => {

    const ref = React.useRef<HTMLDivElement>(null);
    
    const defaultPosition = position || "left";

    const left   = defaultPosition === "left";
    const right  = defaultPosition === "right"
    const bottom = defaultPosition === "bottom";
    const top    = defaultPosition === "top";

    const ContentSidebar = (): React.ReactNode => {
        return (
            <React.Fragment>
                <header id="header" className="inline-flex float-end">
                    <div className="inline-block cursor-pointer" onClick={() => onHidde()}>
                        <BsXLg size={22} />
                    </div>
                </header>
                <div id="body" className="mt-2">
                    { children }
                </div>
            </React.Fragment>
        )
    }

    useMouseDown(ref, onHidde)

    return (
        <React.Fragment>
            {
                visible && (
                    <div
                        className="fixed z-[1000] top-0 left-0 inset-x-0 w-full h-full"
                        style={{ background: "rgba(0, 0, 0, 0.3)" }} />
                )
            }
            {
                right && (
                    <div
                        ref={ref}
                        className={`fixed z-[1000] top-0 right-0 h-full w-64 bg-white shadow-lg dark:bg-gray-800 text-slate-800 dark:text-slate-20 p-4 transform transition-all duration-300 ease-in-out ${className} ${visible ? "translate-x-0" : "translate-x-full opacity-0"}`}
                        aria-label="overlay-sidebar">
                        <ContentSidebar />
                    </div>
                )
            }
            {
                left && (
                    <div
                        ref={ref}
                        className={`fixed  z-[1000] top-0 left-0 h-full w-64 bg-white shadow-lg dark:bg-gray-800 text-slate-800 dark:text-slate-20 p-4 transform transition-all duration-300 ease-in-out ${className} ${visible ? "translate-x-0" : "-translate-x-full opacity-0"}`}
                        aria-label="overlay-sidebar">
                        <ContentSidebar />
                    </div>
                )
            }
            {
                bottom && (
                    <div
                        ref={ref}
                        className={`fixed  z-[1000] bottom-0 left-0 h-60 w-full bg-white shadow-lg dark:bg-gray-800 text-slate-800 dark:text-slate-200 p-4 transform transition-all duration-300 ease-in-out ${className} ${visible ? "translate-y-0" : "translate-y-full opacity-0"}`}
                        aria-label="overlay-sidebar">
                        <ContentSidebar />
                    </div>
                )
            }
            {
                top && (
                    <div
                        ref={ref}
                        className={`fixed  z-[1000] top-0 left-0 h-60 w-full bg-white shadow-lg dark:bg-gray-800 text-slate-800 dark:text-slate-200 p-4 transform transition-all duration-300 ease-in-out ${className} ${visible ? "translate-y-0" : "-translate-y-full opacity-0"}`}
                        aria-label="overlay-sidebar">
                        <ContentSidebar />
                    </div>
                )
            }
        </React.Fragment>
    )
};

export default Sidebar;