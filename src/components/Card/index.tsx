import React from "react";

interface PropsComponent extends React.HTMLAttributes<HTMLDivElement>{
    children        ?: React.ReactNode | React.ReactElement;
    header          ?: React.ReactNode | (() => React.ReactNode);
    darkMode        ?: boolean;
    bodyClassName   ?: string;
    headerClassName ?: string
};

const Card: React.FC<PropsComponent> = ({ children, className, header, darkMode, headerClassName, bodyClassName, ...rest }: PropsComponent) => {

    const isDark = darkMode === false ? false : true;

    const rendererHeader = () => {
        if (typeof header === 'function') {
            return header();
        };
        return header;
    };

    return (
        <React.Fragment>
            <div className={`relative animate-fadeInTop w-full shadow-xl bg-white ${isDark ? "dark:bg-slate-800" : ""} rounded-xl ${className}`} {...rest}>
                {
                    header && (
                        <div className={`py-0 px-0 ${headerClassName}`}>
                            { rendererHeader() }
                        </div>
                    )
                }
                <div className={`${bodyClassName ? bodyClassName : "px-[1.7rem] py-[1.7rem]"}`}>
                    { children }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card;