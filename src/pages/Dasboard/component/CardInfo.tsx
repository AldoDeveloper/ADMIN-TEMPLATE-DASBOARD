import Card from "@/components/Card";
import CircularProgress from "@/components/CircularProgress";
import React, { useReducer } from "react";
import { BsArrowUp, BsBellFill } from "react-icons/bs";
import { PropsSpineAnimate } from "../interface";
import classNames from "classnames";
import { ContextApp } from "@/state/context/app";
import { getRandomInt } from "@/utilities/random";
import AnimatedNumber from "react-animated-numbers";
import { ContextDasboard } from "@/state/context/dasboard";

function CardInfo() : React.ReactNode {

    const { getApp } = React.useContext(ContextApp);
    const isDark     = getApp.darkMode === "dark";
    const [value, setValue] = React.useState<Array<number>>([0, 0, 0, 0]);


    const { propsDasboard } = React.useContext(ContextDasboard);
    const theme             = propsDasboard.theme;

    const bgClassName = classNames({
        "bg-red-500"       : theme === "red",
        "bg-green-500"     : theme === "green",
        "bg-tq-blue-500"   : theme === "tq-blue",
        "bg-md-purple-500" : theme === "md-purple"
    });

    const textClassName = (opacity: string = "500") => classNames({
        [`text-red-${opacity}`]       : theme === "red",
        [`text-green-${opacity}`]     : theme === "green",
        [`text-tq-blue-${opacity}`]   : theme === "tq-blue",
        [`text-md-purple-${opacity}`] : theme === "md-purple"
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
            "bg-blue-700"  : bgColorDefault  === "info",
            "bg-yellow-700": bgColorDefault  === "warning",
            "bg-red-700"   : bgColorDefault  === "danger",
            "bg-slate-300" : bgColorDefault  === "secondary",
            "bg-green-700" : bgColorDefault  === "success"
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
    }

    return (
        <React.Fragment>
            <p className="text-slate-700 dark:text-slate-100 font-semibold text-xl mb-3">Dasboard</p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-3">
                <Card
                    darkMode={false}
                    header={<><h1 className={`text-start px-4 pt-2 text-xl ${textClassName("200")} font-semibold`}>INCOME</h1></>}
                    bodyClassName="px-4 py-3"
                    className="bg-white dark:bg-slate-800 h-36">
                    <div className="flex gap-3 items-center">
                        <AnimatedNumber
                            includeComma={false}
                            className={`font-bold ${textClassName()}`}
                            animateToNumber={value[0]}
                            fontStyle={{ fontSize: 30 }}
                            transitions={(index) => ({
                                type: "keyframes",
                                duration: index + 0.3
                            })}
                        />
                        <div className="flex gap-2 items-center">
                            <div className={`p-2 rounded-full w-auto ${bgClassName}`}>
                                <BsArrowUp strokeWidth={2} size={14} color="white" />
                            </div>
                            <span className="block text-green-500 text-md font-semibold">25%</span>
                        </div>
                    </div>
                    <div className="absolute top-4 right-3 w-11 h-11">
                        <CircularProgress value={value[0]} strokeColor={bgClassName} />
                    </div>

                    <SpinAnimate bgColor="danger" />
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </Card>
                <Card
                    darkMode={false}
                    header={<><h1 className="text-start px-4 pt-2 text-xl font-semibold">ORDER</h1></>}
                    bodyClassName="px-4 py-3"
                    className="bg-white dark:bg-slate-800 h-36">
                    <div className="flex gap-3 items-center">
                        <AnimatedNumber
                            includeComma={false}
                            className={`font-bold ${textClassName()}`}
                            animateToNumber={value[1]}
                            fontStyle={{ fontSize: 30 }}
                            transitions={(index) => ({
                                type: "keyframes",
                                duration: index + 0.3
                            })}
                        />
                        <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-full w-auto ${bgClassName}`}>
                                <BsArrowUp strokeWidth={2} size={14} color="white" />
                            </div>
                            <span className="block text-green-500 text-md font-semibold">18%</span>
                        </div>
                    </div>
                    <div className="absolute top-4 right-3 w-11 h-11">
                        <CircularProgress value={value[1]} strokeColor={bgClassName} />
                    </div>
                    <SpinAnimate bgColor="warning" />
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </Card>
                <Card
                    darkMode={false}
                    bodyClassName="px-4 py-3"
                    header={<><h1 className="text-start px-4 pt-2 text-xl font-semibold">PERSON</h1></>}
                    className="bg-white dark:bg-slate-800 h-36">
                    <div className="flex gap-3 items-center">
                        <AnimatedNumber
                            includeComma={false}
                            className={`font-bold ${textClassName()}`}
                            animateToNumber={value[2]}
                            fontStyle={{ fontSize: 30 }}
                            transitions={(index) => ({
                                type: "keyframes",
                                duration: index + 0.3
                            })}
                        />
                        <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-full w-auto ${bgClassName}`}>
                                <BsArrowUp strokeWidth={2} size={14} color="white" />
                            </div>
                            <span className="block text-green-400 text-md font-semibold">86%</span>
                        </div>
                    </div>
                    <div className="absolute top-4 right-3 w-11 h-11">
                        <CircularProgress value={value[2]} strokeColor={bgClassName} />
                    </div>
                    <SpinAnimate bgColor="success" />
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </Card>
                <Card
                    darkMode={false}
                    bodyClassName="px-4 py-3"
                    header={<><h1 className="text-start px-4 pt-2 text-xl font-semibold">DIAGNOSTIK</h1></>}
                    className="bg-white dark:bg-slate-800 h-36">
                    <div className="flex gap-3 items-center">
                        <AnimatedNumber
                            includeComma={false}
                            className={`font-bold ${textClassName()}`}
                            animateToNumber={value[3]}
                            fontStyle={{ fontSize: 30 }}
                            transitions={(index) => ({
                                type: "keyframes",
                                duration: index + 0.3
                            })}
                        />
                        <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-full w-auto ${bgClassName}`}>
                                <BsArrowUp strokeWidth={2} size={14} color="white" />
                            </div>
                            <span className="block text-green-400 text-md font-semibold">86%</span>
                        </div>
                    </div>
                    <div className="absolute top-4 right-3 w-11 h-11">
                        <CircularProgress value={value[3]} strokeColor={bgClassName} />
                    </div>
                    <SpinAnimate />
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </Card>
            </div>
        </React.Fragment>
    )
};

export default CardInfo;