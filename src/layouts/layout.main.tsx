import React from "react";
import { Outlet, useAsyncValue } from "react-router-dom";

export default function LayoutMain() : React.ReactNode | React.ReactElement{
    return(
        <React.Fragment>
            <Outlet/>
        </React.Fragment>
    )
};