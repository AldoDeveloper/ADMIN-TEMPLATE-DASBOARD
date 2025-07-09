import React from "react";
import { Link } from "react-router-dom";
import { PropsBreadCrumbs } from "./interface";

const Breadcrumb: React.FC<PropsBreadCrumbs> = ({ data }) => {

    const rendererIcon: React.FC<any> = (icon: React.ReactNode | (() => React.ReactNode)) => {
        if (typeof icon === "function") {
            return icon();
        };
        return icon;
    };

    const FirstRenderer = ({ to, icon, name } : PropsBreadCrumbs["data"][0]) => {
        return (
            <li className={`inline-flex items-center ${icon ? "gap-2" : ""}`}>
                {
                    icon && (
                        <>
                            { rendererIcon(icon) }        
                        </>
                    )
                }
                <Link
                    to={to as string}
                    className={`inline-flex items-center text-sm text-slate-700 dark:text-slate-200 hover:text-text-theme-blue`}
                >{name}</Link>
            </li>
        )
    }
    
    return (
        <nav className="flex text-gray-600 max-md:hidden" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {
                    data.map(({ to, name, space, icon }, idx) => {
                        if (idx === 0)
                            return (
                                <FirstRenderer
                                    to={to}
                                    key={idx}
                                    name={name}
                                    space={space}
                                    icon={icon} />
                            );
                        return (
                            <li key={idx} className="flex items-center">
                                {
                                    (
                                        <>
                                            <svg
                                                className="w-6 h-6 text-gray-400"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.293 12l-5.646 5.646a.5.5 0 01-.707-.707L15.293 12l-5.353-5.353a.5.5 0 11.707-.707L16.293 12z" />
                                            </svg>
                                            <Link
                                                to={to as string}
                                                className={`inline-flex items-center ml-1 text-sm ${icon ? "gap-2" : ""} font-medium text-slate-700 dark:text-slate-200 md:ml-2`}>
                                                {
                                                    icon && (
                                                        <>
                                                            { rendererIcon(icon) }
                                                        </>
                                                    )
                                                }
                                                { name }
                                            </Link>
                                        </>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ol>
        </nav>
    );
};

export default Breadcrumb;
