import useMouseDown from "@/hooks/useMouseDown";
import useThemaSystem from "@/hooks/useThema";
import { ContextApp } from "@/state/context/app";
import classNames from "classnames";
import React from "react";
import { BsBrightnessHigh, BsFillMoonStarsFill, BsLaptop } from "react-icons/bs";

type Attr = Partial<{ name: string, size: number, icon: React.ReactNode }>;
type PropsThemeList = Array<Attr>;

const List_Theme = [
    {
        name: "Light",
        icon: <BsBrightnessHigh size={18}/>
    },
    {
        name: "Dark",
        icon: <BsFillMoonStarsFill size={18}/>
    },
    {
        name: "System",
        icon: <BsLaptop size={18}/>
    },
];

const ModeTheme : React.FC<any> = () => {

    const[toogle, setToogle] = React.useState<boolean>(false);
    const { getApp }         = React.useContext(ContextApp)
    const[mode, setMode]     = React.useState<Attr>(List_Theme.find((val) => val.name.toLocaleLowerCase() === getApp.darkMode) as any);
    const { setApp }         = React.useContext(ContextApp);

    const ref         = React.useRef<HTMLDivElement>(null);
    const themeSystem = useThemaSystem();

    const handleChangeTheme = async (value: Attr) => {
        
        const root = window.document.documentElement;
        const isTheme = value.name?.toLocaleLowerCase() === "system" ? themeSystem as any : value.name?.toLowerCase();
        root.classList.toggle("dark", isTheme === "dark");
        setApp("setDarkMode", {darkMode: isTheme})
        setMode(value);
        
    };
    const showDropdownList   = classNames({"opacity-100 scale-100" : toogle, "opactiy-0 scale-0" : !toogle})
    
    useMouseDown<HTMLDivElement>(ref, setToogle);
   
    return(
        <React.Fragment>
            <div className="relative mt-2 inline-block w-auto text-left" ref={ref}>
                <div 
                    className="inline-block cursor-pointer" 
                    onClick={() => setToogle(!toogle)}>
                   { mode.icon }
                </div>

                <div className={`${showDropdownList} z-[10000] origin-top-left w-28 mt-4 absolute right-0 shadow-lg rounded-lg bg-white dark:bg-slate-700`}>
                    <div className="max-h-60 overflow-auto" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {
                            List_Theme.map((val, index) => (
                                <li
                                    role="menuitem" 
                                    onClick={() => handleChangeTheme(val)}
                                    className="block list-none px-4 font-semibold cursor-pointer hover:rounded-lg dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500 py-[0.45rem] text-sm text-gray-500 dark:text-gray-200"
                                    key={index}>
                                   <div className="flex items-center gap-3 justify-start">
                                        {val.icon}
                                        <span>{val.name}</span>
                                   </div>
                                </li>
                            ))
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ModeTheme;