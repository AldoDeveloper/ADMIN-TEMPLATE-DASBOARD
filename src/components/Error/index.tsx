import React from "react";
import { useRouteError } from "react-router-dom";


export default function Error(): React.ReactNode | React.ReactElement {

    const error = useRouteError();
    return (
        <React.Fragment>
            <div className="w-full flex justify-center min-h-[85vh] items-center">
                <svg width="80%" height="10%">
                    <text x="50%" y="80%" className="text-svg">404</text>
                    <text x="50%" y="100%" textAnchor="middle" className="message-svg">Page Not Found</text>
                </svg>
            </div>
        </React.Fragment>
    )
}