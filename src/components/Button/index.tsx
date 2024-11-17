import React from "react";
import { PropsComponent } from "./interface";
import classNames from "classnames";
import { SpinerLoading } from "../Spiner";

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
        ...rest
    }: PropsComponent): React.ReactNode {

    const IconPosition  = iconPosition || "left";
    const btnSize       = size || "sm";
    const optionBgColor = bgColor || "default"

    const classNameSettingButton = classNames(
        {
            "py-[0.50rem]"  : btnSize === "sm",
            "py-[0.65rem]"  : btnSize === "lg",
            "rounded-full"  : rounded,
            "rounded-lg"    : !rounded,
            "bg-violet-500 focus:ring-violet-300 hover:bg-violet-600" : optionBgColor === "default",
            "bg-red-500    focus:ring-red-300  hover:bg-red-600"      : optionBgColor === "danger",
            "bg-gray-400   focus:ring-gray-300 hover:bg-gray-500"     : optionBgColor === "secondary",
            "bg-green-500  focus:ring-green-300 hover:bg-green-600"   : optionBgColor === "success"
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