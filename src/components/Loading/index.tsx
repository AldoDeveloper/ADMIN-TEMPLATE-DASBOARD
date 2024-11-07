import React from "react";

export default function Loading(): React.ReactNode {

    const loadColor : any = {['--color'] : "#94a3b8"};

    return (
        <React.Fragment>
            <div className="flex justify-center bg-white dark:bg-slate-900 items-center h-screen">
                <div className="loader" style={{...loadColor}} />
            </div>
        </React.Fragment>
    )
}