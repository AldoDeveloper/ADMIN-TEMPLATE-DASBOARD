import React from "react";
import { PropsComponent } from "./interface";
import classNames from "classnames";
import { SpinerLoading } from "../Spiner";
import useThemeColorDasboard from "@/hooks/useThemeColor";

export default function Button(
    {
        label,
        className,
        type,
        icon,
        size,
        rounded,
        bgColor,
        disabled,
        loading,
        iconPosition,
        optionTheme = 'none',
        ...rest
    }: PropsComponent): React.ReactNode {

    const IconPosition  = iconPosition || "left";
    const btnSize       = size || "sm";
    const optionBgColor = bgColor || "default"

    const theme = useThemeColorDasboard();

    const classNameSettingButton = classNames(
        {
            "py-[0.50rem]"  : btnSize === "sm",
            "py-[0.65rem]"  : btnSize === "lg",
            "rounded-full"  : rounded,
            "rounded-lg"    : !rounded,
            "bg-violet-500 focus:ring-violet-300 hover:bg-violet-600" : optionBgColor === "default",
            "bg-red-700    focus:ring-red-500  hover:bg-red-700"      : optionBgColor === "danger",
            "bg-red-500    focus:ring-red-300  hover:bg-red-600"      : optionBgColor === "error",
            "bg-gray-400   focus:ring-gray-300 hover:bg-gray-500"     : optionBgColor === "secondary",
            "bg-green-500  focus:ring-green-300 hover:bg-green-600"   : optionBgColor === "success",
            "bg-yellow-500 focus:ring-yellow-300 hover:bg-yellow-600" : optionBgColor === "warning",
            "bg-blue-500   focus:ring-blue-300 hover:bg-blue-600"     : optionBgColor === "info",
            "bg-slate-800  focus:ring-slate-300 hover:bg-slate-900"   : optionBgColor === "dark",
            "bg-slate-200  focus:ring-slate-300 hover:bg-slate-300"   : optionBgColor === "light", 
        }
    );

    const RendererIcon: React.FC<any> = () => {
        if (typeof icon === "function") {
            return icon();
        }
        return icon;
    };

    return (
        <React.Fragment>
            <button
                disabled={disabled === undefined || disabled === false ? false :  true}
                type={type}
                style={theme && optionTheme === "auto" ? { backgroundColor: theme.hexColor , color: "white"} : undefined}
                className={`${classNameSettingButton} relative py-1 focus:outline-none focus:ring transition duration-300 ease-in-out ${className}`}
                {...rest}>
                {
                    loading && ( <SpinerLoading size="sm"/> )
                }
                {
                    !loading && (
                        <>
                            {
                                icon && (
                                    <>
                                        {
                                            IconPosition === "left" &&
                                            <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 ml-3">
                                                <RendererIcon />
                                            </span>
                                        }
                                    </>
                                )
                            }
                            { label }
                            {
                                icon && (
                                    <>
                                        {
                                            IconPosition === "right" &&
                                            <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 right-0 mr-3">
                                                <RendererIcon />
                                            </span>
                                        }
                                    </>
                                )
                            }
                        </>
                    )
                }
            </button>
        </React.Fragment>
    )
}