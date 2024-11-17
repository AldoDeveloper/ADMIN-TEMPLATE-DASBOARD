import React from "react";
import CardInfo from "./component/CardInfo";
import RevenueChart from "./component/RevenueChart";
import { ContextDasboard } from "@/state/context/dasboard";
import classNames from "classnames";
import { ThemeStrokeColor } from "@/data/dasboard";
import OrderChartBar from "./component/OrderChartBar";
import TableDasboard from "./component/TableDasboard";
import products from '@/data/product';
import Card from "@/components/Card";
import PreviewMore from "./component/PreviewMore";

export default function Dasboard(): React.ReactNode {

    const { propsDasboard } = React.useContext(ContextDasboard);
    const theme = propsDasboard.theme;

    const bgClassName = classNames({
        "bg-red-500": theme === "red",
        "bg-green-500": theme === "green",
        "bg-tq-blue-500": theme === "tq-blue",
        "bg-md-purple-500": theme === "md-purple"
    });

    const storkeColorTheme = ThemeStrokeColor[bgClassName.substring(3)];

    return (
        <React.Fragment>
            <div id="content" className="overflow-y-hidden overflow-x-hidden min-h-[100vh] my-3">
                <CardInfo />
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2 mt-3">
                    <RevenueChart  themeColor={storkeColorTheme} />
                    <OrderChartBar themeColor={storkeColorTheme} />
                </div>
                <div className="grid grid-cols-1 gap-2 mt-3">
                    <TableDasboard data={products} />
                </div>
                <div className="grid grid-cols-3 grid-flow-row auto-rows-max max-md:grid-cols-1 gap-2 my-3">
                   <PreviewMore/>
                </div>
            </div>
        </React.Fragment>
    )
}