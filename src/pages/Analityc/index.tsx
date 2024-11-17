import Card from "@/components/Card";
import React from "react";
import ComposedChart from "./component/composed_chart";

export default function Analityc(): React.ReactNode {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 grid-flow-row mt-3">
                <ComposedChart />
            </div>
        </React.Fragment>
    )
}