import React from "react";
import { PropsSpinerLoading } from "./interface";
import classNames from "classnames";

const SpinerLoading: React.FC<PropsSpinerLoading> = ({ size, position }) => {

    const sizeDefault    = size || "sm";
    const spinerPosition = position || "center";

    const spinerSize = classNames({
        "h-5 w-5"   : sizeDefault === "sm",
        "h-8 w-8"   : sizeDefault === "lg",
        "h-12 w-12" : sizeDefault === "xl"
    });

    return (
        <div className={`flex w-full justify-${ spinerPosition } items-center`}>
            <svg className={`animate-spin ${ spinerSize } mr-3 text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
        </div>
    )
}

export default SpinerLoading;