import React from "react";
import { PropsMenuHamburger } from "./interface";

const HamburgerMenu: React.FC<PropsMenuHamburger> = ({ onChange, visible }) => {

    return (
        <React.Fragment>
            <button
                onClick={onChange}
                className="relative w-10 h-10 focus:outline-none">
                <div
                    className={`block w-6 ${visible && "w-7"} h-0.5 bg-black dark:bg-slate-100 transform transition duration-300 ease-in-out ${visible ? "rotate-[45deg] translate-y-2" : "translate-y-0"
                        }`}
                ></div>
                <div
                    className={`block w-6 h-0.5 bg-black dark:bg-slate-100 transform transition duration-300 ease-in-out mt-[0.30rem] ${visible ? "opacity-0" : "opacity-100"
                        }`}
                ></div>
                <div
                    className={`block w-6 ${visible && "w-7"} h-0.5 bg-black dark:bg-slate-100 transform transition duration-300 ease-in-out mt-[0.30rem] ${visible ? "-rotate-[45deg] -translate-y-[0.35rem]" : "translate-y-0"
                        }`}
                ></div>
            </button>
        </React.Fragment>
    )
};

export default HamburgerMenu;