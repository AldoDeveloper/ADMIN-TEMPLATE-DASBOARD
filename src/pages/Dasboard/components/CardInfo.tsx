import Card from "@/components/Card";
import CircularProgress from "@/components/CircularProgress";
import React, { useEffect, useState } from "react";
import { BsBagCheck, BsBellFill, BsBoxArrowDownRight, BsCartCheck, BsMinecartLoaded } from "react-icons/bs";
import { PropsSpineAnimate } from "../interface";
import classNames from "classnames";
import { ContextApp } from "@/state/context/app";
import { getRandomInt } from "@/utilities/random";
import { ContextDasboard } from "@/state/context/dasboard";
import Skelton from "@/components/Skelton";
import useLoad from "@/hooks/useLoad";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { dataSampleRevenue } from "@/data/dasboard";

const CardInfoAnimationSkelton: React.FC<any> = () => {
    return (
        <React.Fragment>
            <Card
                darkMode
                header={<><Skelton className="w-[10rem] mx-6 my-3 mb-2 h-5" /></>}
                bodyClassName="px-4 py-3"
                className="bg-white h-44">
                <div className="flex gap-3 items-center">
                    <Skelton className="w-[8.5rem] m-2 h-7 px-4" />
                </div>
                <div className="absolute top-4 right-3 w-11 h-11">
                    <Skelton duration={1} className="w-[3rem] h-[3rem] rounded-full" />
                </div>
                <Skelton className="w-full m-2 h-5 px-4" />
            </Card>
        </React.Fragment>
    )
};

const BottomCardChart = ({ color = "#8c52ff" }: { color?: string }) => {

    const [colored, setColored] = useState(color);

    useEffect(() => {
        setColored(color)
    }, [color]);

    return (
        <ResponsiveContainer width={"100%"} height={65}>
            <AreaChart data={dataSampleRevenue} margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 0
            }}>
                <defs>
                    <linearGradient id={`F${colored}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={colored} stopOpacity={0.6} />
                        <stop offset="95%" stopColor={colored} stopOpacity={0} />
                    </linearGradient>
                </defs>
                {/* <Tooltip/> */}
                <Area
                    type={"linear"}
                    dataKey={"amount"}
                    className="fill-purple-500"
                    strokeWidth={1}
                    stroke={color}
                    fill={`url(#F${colored})`}
                    isAnimationActive={true}
                    animationDuration={400}>
                </Area>
            </AreaChart>
        </ResponsiveContainer>
    )
}

function CardInfo(): React.ReactNode {

    const { getApp } = React.useContext(ContextApp);
    const isDark = getApp.darkMode === "dark";
    const [value, setValue] = React.useState<Array<number>>([0, 0, 0, 0]);
    const loading = useLoad({ interval: 3000 });

    const { propsDasboard } = React.useContext(ContextDasboard);
    const theme = propsDasboard.theme;

    const bgClassName = classNames({
        "bg-red-500": theme === "red",
        "bg-green-500": theme === "green",
        "bg-tq-blue-500": theme === "tq-blue",
        "bg-md-purple-500": theme === "md-purple"
    });

    const textClassName = (opacity: string = "500") => classNames({
        [`text-red-${opacity}`]: theme === "red",
        [`text-green-${opacity}`]: theme === "green",
        [`text-tq-blue-${opacity}`]: theme === "tq-blue",
        [`text-md-purple-${opacity}`]: theme === "md-purple"
    });

    React.useEffect(() => {
        const intervalData = setInterval(() => {
            setValue([
                getRandomInt(0, 100),
                getRandomInt(0, 100),
                getRandomInt(0, 100),
                getRandomInt(0, 100)
            ]);
        }, 5000);
        return () => clearInterval(intervalData);

    }, [value])

    const SpinAnimate: React.FC<PropsSpineAnimate> = ({ bgColor }) => {

        const bgColorDefault = bgColor || "info";
        const bgColorClassName = classNames({
            "bg-blue-700"   : bgColorDefault === "info",
            "bg-yellow-700" : bgColorDefault === "warning",
            "bg-red-700"    : bgColorDefault === "danger",
            "bg-slate-300"  : bgColorDefault === "secondary",
            "bg-green-700"  : bgColorDefault === "success"
        });

        return (
            <React.Fragment>
                {
                    isDark && (
                        <div
                            className={`animate-ping duration-1000 inline-flex opacity-75 ${bgColorClassName} absolute top-0 right-0 p-1 rounded-full`}>
                            <BsBellFill
                                size={8}
                                color="white" />
                        </div>
                    )
                }
            </React.Fragment>
        )
    };

    return (
        <React.Fragment>
            <p className="text-slate-700 dark:text-slate-100 font-semibold text-xl mb-3">Dasboard</p>
            <div className="w-full grid grid-cols-1 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-4 xl:grid-cols-4 gap-3">
                {
                    loading && <CardInfoAnimationSkelton />
                }
                {
                    !loading && (
                        <Card
                            darkMode
                            bodyClassName="px-4 py-3"
                            className="bg-white h-44">
                            {/* <h1 className="text-start text-lg font-semibold text-gray-500">Sales Product</h1> */}

                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex w-14 h-10 mb-2 justify-center items-center rounded-lg bg-purple-100">
                                        <BsCartCheck size={25} className="fill-purple-700" />
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <h1 className="text-2xl font-semibold text-purple-700 dark:text-purple-400">2010 +</h1>
                                    </div>
                                    <span className="block font-semibold text-gray-400">Sales Product</span>
                                </div>
                                <div className="w-12 h-12">
                                    <CircularProgress value={value[0]} strokeColor={bgClassName} />
                                </div>
                            </div>
                            <BottomCardChart />
                            <SpinAnimate bgColor="danger" />
                        </Card>
                    )
                }
                {
                    loading && (<CardInfoAnimationSkelton />)
                }
                {
                    !loading && (
                        <Card
                            bodyClassName="px-4 py-3"
                            className="bg-white h-44">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex w-14 h-10 mb-2 justify-center items-center rounded-lg bg-green-100">
                                        <BsBagCheck size={25} className="fill-green-700" />
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <h1 className="text-2xl font-semibold text-green-700 dark:text-green-400">179 +</h1>
                                    </div>
                                    <span className="block font-semibold text-gray-400">Stock Product</span>
                                </div>
                                <div className="w-12 h-12">
                                    <CircularProgress value={value[1]} strokeColor={"bg-green-500"} />
                                </div>
                            </div>
                            <BottomCardChart color="#15803d" />
                            <SpinAnimate bgColor="danger" />
                        </Card>
                    )
                }
                {
                    loading && (<CardInfoAnimationSkelton />)
                }
                {
                    !loading && (
                        <Card
                            bodyClassName="px-4 py-3"
                            className="bg-white h-44">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex w-14 h-10 mb-2 justify-center items-center rounded-lg bg-red-100">
                                        <BsMinecartLoaded size={25} className="fill-red-700" />
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <h1 className="text-2xl font-semibold text-red-700 dark:text-red-400">80 +</h1>
                                    </div>
                                    <span className="block font-semibold text-gray-400">Return Product</span>
                                </div>
                                <div className="w-12 h-12">
                                    <CircularProgress value={value[2]} strokeColor={"bg-red-500"} />
                                </div>
                            </div>
                            <BottomCardChart color="#ef4444" />
                            <SpinAnimate bgColor="danger" />
                        </Card>
                    )
                }

                {loading && <CardInfoAnimationSkelton />}

                {
                    !loading && (
                        <Card
                            bodyClassName="px-4 py-3"
                            className="bg-white h-44">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex w-14 h-10 mb-2 justify-center items-center rounded-lg bg-yellow-100">
                                        <BsBoxArrowDownRight size={25} className="fill-yellow-700" />
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <h1 className="text-2xl font-semibold text-yellow-700 dark:text-yellow-400">8720 +</h1>
                                    </div>
                                    <span className="block font-semibold text-gray-400">Incom Product</span>
                                </div>
                                <div className="w-12 h-12">
                                    <CircularProgress value={value[3]} strokeColor={"bg-yellow-600"} />
                                </div>
                            </div>
                            <BottomCardChart color="#eab308" />
                            <SpinAnimate bgColor="danger" />
                        </Card>
                    )
                }
            </div>
        </React.Fragment>
    )
};

export default CardInfo;