import React from "react";
import { SkeltonProps } from "./interface";

const Skelton: React.FC<Partial<SkeltonProps>> = ({ className, duration }) => {

    const animationDuration : any = {
        "--animation-skelton-duration" : `${duration ?? 2}s`
    };

    return (
        <React.Fragment>
            <div style={{...animationDuration}} className={`dark:bg-slate-700 bg-slate-200 rounded relative overflow-hidden ${className}`}>
                <div className="absolute inset-0 bg-gradient-to-r dark:from-slate-700 from-slate-200 dark:via-slate-500 via-slate-50 dark:to-slate-700  to-slate-200
                        bg-[length:200%_100%] animate-shimmer duration-75"></div>
            </div>
        </React.Fragment>
    )
}

export default Skelton;