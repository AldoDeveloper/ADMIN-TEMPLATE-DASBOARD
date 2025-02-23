import React from "react";
import { Outlet } from "react-router-dom";

export default function LayoutMain() : React.ReactNode | React.ReactElement{
    return(
        <React.Fragment>
            <Outlet/>
        </React.Fragment>
    )
};