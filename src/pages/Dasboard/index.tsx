import React from "react";
import CardInfo from "./components/CardInfo";
import RevenueChart from "./components/RevenueChart";
import { ContextDasboard } from "@/state/context/dasboard";
import classNames from "classnames";
import { ThemeStrokeColor } from "@/data/dasboard";
import OrderChartBar from "./components/OrderChartBar";
import TableDasboard from "./components/TableDasboard";
import products from '@/data/product';
import PreviewMore from "./components/PreviewMore";
import Card    from "@/components/Card";
import useLoad from "@/hooks/useLoad";
import Skelton from "@/components/Skelton";

const SkeltonAnimationChart: React.FC = () => {
    return (
        <React.Fragment>
            <Card
                bodyClassName="px-4 py-3"
                darkMode
                className="w-full">
                <Skelton className="w-full h-[30vh]" duration={1.5} />
            </Card>
        </React.Fragment>
    )
};

const SkeltonAnimationTable: React.FC = () => {

    const HeaderCardSkelton = () => {
        return (
            <React.Fragment>
                <div className="flex justify-between items-center px-10 py-2">
                    <Skelton duration={1} className="w-[4.5rem] h-8" />
                    <div className="flex gap-3 items-center">
                        {
                            Array.from({length: 3}).map((__, idx) => (
                                <Skelton 
                                    key={idx} 
                                    className="w-[6.5rem] h-10"/>
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Card header={HeaderCardSkelton} darkMode className="w-full" bodyClassName="px-10 py-6">
                {
                    Array.from({ length: 10 }).map((__, idx) => (
                        <Skelton 
                            key={idx} 
                            className="w-full h-8 mb-3" 
                            duration={1} />
                    ))
                }
            </Card>
        </React.Fragment>
    )
}

export default function Dasboard(): React.ReactNode {

    const { propsDasboard } = React.useContext(ContextDasboard);
    const theme = propsDasboard.theme;
    const load  = useLoad({ interval: 4000 });

    const loadTable   = useLoad({ interval: 3500 });

    const bgClassName = classNames({
        "bg-red-500"      : theme === "red",
        "bg-green-500"    : theme === "green",
        "bg-tq-blue-500"  : theme === "tq-blue",
        "bg-md-purple-500": theme === "md-purple"
    });

    const storkeColorTheme = ThemeStrokeColor[bgClassName.substring(3)];

    return (
        <React.Fragment>
            <div id="content" className="overflow-y-hidden overflow-x-hidden min-h-[100vh] my-2">

                <CardInfo />
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2 mt-3">
                    {!load && (
                        <>
                            <RevenueChart  themeColor={storkeColorTheme} />
                            <OrderChartBar themeColor={storkeColorTheme} />
                        </>
                    )}
                    { load && (
                        <>
                            <SkeltonAnimationChart />
                            <SkeltonAnimationChart />
                        </>
                    )}
                </div>

                <div className="grid grid-cols-1 gap-2 mt-3">
                    { loadTable  && ( <SkeltonAnimationTable /> ) }
                    { !loadTable && ( <TableDasboard data={products} /> ) }
                </div>

                <div className="grid grid-cols-3 grid-flow-row auto-rows-max max-md:grid-cols-1 gap-2 my-3">
                    <PreviewMore />
                </div>
            </div>
        </React.Fragment>
    )
}