import useMouseDown from "@/hooks/useMouseDown";
import useThemeMode from "@/hooks/useThemeMode";
import classNames from "classnames";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface DropdownProps {
    value?: any;
    onChange(value: any): void;
    selectedTemplate?: React.ReactNode | ((...option: any) => React.ReactNode);
    itemTemplate?: React.ReactNode | ((...option: any) => React.ReactNode);
    optionLabel?: string;
    iconRigt ?: boolean;
    wrapperClass?: string;
    divide?: boolean;
    data: Array<any>;
};

export default function Dropdown({ value, onChange, itemTemplate, data, divide, iconRigt, optionLabel, selectedTemplate, wrapperClass }: DropdownProps): React.ReactNode {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const toggleDropdown = async () => setIsOpen(!isOpen);
    const ref = React.useRef<HTMLDivElement>(null);
    const { themeCard } = useThemeMode();

    const divideClassName = classNames({
        "divide-y" : divide === true
    });

    useMouseDown<HTMLDivElement>(ref, setIsOpen);

    const renderItemTemplate = (val: any) => {
        if (typeof itemTemplate === "function")
            return itemTemplate(val);
        return itemTemplate || val?.[optionLabel as string];
    };

    const renderSelectedTemplate = (val: any) => {
        if (typeof selectedTemplate === "function") {
            return selectedTemplate(val);
        };
        return selectedTemplate || val?.[optionLabel as string]
    };

    return (
        <React.Fragment>
            <div className="relative inline-block w-auto text-left" ref={ref}>
                <div className="block">
                    <button
                        onClick={toggleDropdown}
                        className={`inline-flex justify-between items-center transition duration-200 ease-in-out hover:outline-blue-500 px-4 py-2 text-sm font-semibold focus:border-theme-blue focus:border-2 focus:shadow-md border border-slate-400 text-slate-500 rounded-lg ${wrapperClass ? wrapperClass : " w-auto"}`}>
                        {renderSelectedTemplate(value)}
                        {
                            iconRigt === undefined || iconRigt === true && (
                                <BsChevronDown className="-mr-3 ml-2" size={14} />
                            )
                        }
                    </button>
                </div>
                <div
                    className={`${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} ${themeCard} origin-top-right w-full absolute right-0 mt-1 rounded-md shadow-lg bg-white dark:bg-slate-700 ring-1 ring-black ring-opacity-5 transform transition duration-200 ease-out`}>
                    <div className={`max-h-56 overflow-auto bar-scrool ${divideClassName}`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu" >
                        {
                            data.map((val, idx) => {
                                return (
                                    <div
                                        role="menuitem"
                                        key={idx}
                                        onClick={() => onChange(val)}
                                        className={`block text-sm cursor-pointer ${data[idx]?.[optionLabel as string]} text-gray-700 dark:text-gray-200 hover:text-blue-600`}>
                                        {renderItemTemplate(val)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}