import useMouseDown from "@/hooks/useMouseDown";
import useThemeMode from "@/hooks/useThemeMode";
import classNames from "classnames";
import React from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { DropdownProps } from './type'

export default function Dropdown({
    value,
    onChange,
    itemTemplate,
    placeholder,
    data,
    size,
    divide,
    iconRigt,
    optionLabel,
    selectedTemplate,
    wrapperClass
}: DropdownProps): React.ReactNode {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const ref = React.useRef<HTMLDivElement>(null);
    const { themeCard } = useThemeMode();

    const toggleDropdown = async () => setIsOpen(!isOpen);
    const divideClassName = classNames({ "divide-y": divide === true });

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
        return placeholder ? placeholder : "Select an option";
    };

    const classNameSelected = classNames(
        "cusrsor-pointer",
        "inline-flex",
        "justify-between",
        "items-center",
        "transition",
        "duration-200",
        "ease-in-out",
        "min-w-[12rem]",
        "hover:outline-blue-500",
        "text-sm",
        "text-gray-600",
        "font-semibold",
        "focus:border-theme-blue",
        "focus:border-2",
        "focus:shadow-md",
        "border",
        "border-slate-400",
        "text-slate-500",
        "rounded-lg",
        "w-auto",
        {
            "px-3 py-2": size === "small",
            "px-4 py-3": size === "medium" || size === undefined,
            "px-5 py-4": size === "large"
        },
        `${wrapperClass ?? ""}`,
    );

    const classNamePanelItem = classNames(
        `${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`,
        `${themeCard}`,
        "origin-top-right",
        "w-full",
        "absolute",
        "right-0",
        "mt-1",
        "rounded-md",
        "shadow-lg",
        "bg-white",
        "dark:bg-gray-800",
        "ring-1",
        "ring-black",
        "ring-opacity-5",
        "transform",
        "transition",
        "duration-200",
        "ease-out",
        "max-h-64",
        "overflow-auto",
        `${divideClassName}`
    );

    const onChangeItem = (val: any) => {
        onChange(val);
        setIsOpen(false);
    };

    // const ItemDropdown: React.FC<any> = (val) => {
    //     const isActive = value?.[optionLabel as string] === val?.[optionLabel as string];
    //     return (
    //         <div
    //             role="menuitem"
    //             onClick={() => onChangeItem(val)}
    //             className={`block text-sm cursor-pointer ${isActive ? "bg-slate-200 dark:bg-slate-600" : ""} ${data[idx]?.[optionLabel as string]} text-gray-700 dark:text-gray-200 hover:text-blue-600`}>
    //             {renderItemTemplate(val)}
    //         </div>
    //     )
    // }

    return (
        <React.Fragment>
            <div
                className="relative inline-block text-left"
                ref={ref}>
                <div
                    onClick={toggleDropdown}
                    className={`${classNameSelected} cursor-pointer`}>
                    <div className="flex items-center truncate max-w-[150px]">
                        <span>
                            {
                                iconRigt === true && (
                                    <BsCaretDownFill
                                        className={`mr-3 ml-2 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                                        size={14} />
                                )
                            }
                        </span>
                        {renderSelectedTemplate(value)}
                    </div>
                    <button>
                        {
                            iconRigt === true && (
                                <BsCaretDownFill
                                    className={`mr-3 ml-2 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                                    size={14} />
                            )
                        }
                    </button>
                    <BsCaretDownFill className={`flex-shrink-0`} />
                </div>
                <div className={classNamePanelItem} style={{zIndex: 9999}}>
                    {
                        data.map((val, idx) => {
                            const isActive = value?.[optionLabel as string] === val?.[optionLabel as string];
                            return (
                                <div
                                    role="menuitem"
                                    key={idx}
                                    onClick={() => onChangeItem(val)}
                                    className={`block text-sm cursor-pointer ${isActive ? "bg-slate-200 dark:bg-slate-600" : ""} ${data[idx]?.[optionLabel as string]} text-gray-700 dark:text-gray-200 hover:text-blue-600`}>
                                    {renderItemTemplate(val)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}