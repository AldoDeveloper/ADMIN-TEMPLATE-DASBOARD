import React from "react";
import { Area, AreaChart, CartesianGrid, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PropsRevenueChart, StateRevenueChart } from "../interface";
import { revenueData } from "@/data/dasboard";
import { getRandomInt } from "@/utilities/random";
import { ContextApp } from "@/state/context/app";
import { CurveType } from "recharts/types/shape/Curve";
import OverlayPanel from "@/components/Overlay/Panel";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { BsThreeDotsVertical } from "react-icons/bs";

const rangeOptions: Array<number> = [35, 30, 20, 15, 10, 5];
const strokeWidth : Array<number> = [1.5, 2, 2.5, 3, 3.5];

const curveTypeOption: Array<CurveType> = ["bump", "basis", "monotone", "step", "natural", "linear"];

export default class RevenueChart extends React.Component<PropsRevenueChart, StateRevenueChart> {

    private intervalID: any;
    public declare context: React.ContextType<typeof ContextApp>;

    public static defaultProps: PropsRevenueChart = {
        range: -Math.abs(30),
        interval: 5000,
        themeColor: "#8c52ff",
        type: "bump",
        xAxis: true,
        yAxis: false,
        grid: false,
        strokeWidth: 1.5,
    };


    public constructor(props: PropsRevenueChart) {
        super(props);
        this.state = {
            data: revenueData,
            props: this.props,
            openPanel: false,
            strokeColor: props.themeColor
        };
        this.updateValue = this.updateValue.bind(this);
        this.DotChart = this.DotChart.bind(this);
        this.renderXaxis = this.renderXaxis.bind(this);
        this.headerCard = this.headerCard.bind(this);
    }

    public componentDidUpdate(prevProps: Readonly<PropsRevenueChart>, prevState: Readonly<StateRevenueChart>, snapshot?: any): void {
        if (prevProps.themeColor !== this.props.themeColor) {
            this.setState((item) => ({ ...item, strokeColor: this.props.themeColor }))
        }
    }

    public componentDidMount(): void {
        this.updateValue();
    }

    public componentWillUnmount(): void {
        clearInterval(this.intervalID);
    }

    private DotChart(props: any): JSX.Element {
        const { cx, cy, value } = props
        return (
            <g>
                <circle cx={cx} cy={cy} r={3} fill={this.state.strokeColor} />
                <Label value={value} position="top" />
            </g>
        );
    }

    private updateValue(): void {

        this.intervalID = setInterval(() => {
            this.setState((prop) => {
                return {
                    ...prop,
                    data: [...prop.data, {
                        name: "Product",
                        value: getRandomInt(0, 1000),
                        created_at: new Date().toLocaleTimeString(),
                    }].slice(this.state.props?.range)
                }
            })
        }, this.props.interval)
    }

    private renderXaxis() {
        return (
            <XAxis
                fontSize={10}
                dataKey={"created_at"}
                strokeWidth={1.5}
                stroke={this.props.themeColor}>
                <Label
                    value="Date Time"
                    fontWeight={"200"}
                    stroke={this.props.themeColor}
                    fontSize={12}
                    offset={-5}
                    position="insideBottom" />
            </XAxis>
        )
    }

    private itemHandleButtonPanel = () => {
        return (
            <Button
                className="inline-flex p-2 focus:ring-0"
                style={{ background: "transparent" }}
                rounded
                label={<BsThreeDotsVertical size={22} />}
                onClick={() => this.setState((item) => ({ ...item, openPanel: !this.state.openPanel }))} />
        )
    };

    private changeHandleRevenueType = async (type: CurveType) => {
        this.setState((item) => ({ ...item, props: { ...item.props, type } }))
    };

    private changeTooegleRevenueXaxis = async () => {
        this.setState((item) => (
            {
                ...item,
                props: {
                    ...item.props,
                    xAxis: !this.state.props?.xAxis
                }
            })
        )
    };

    private changeTooegleRevenueYaxis = async () => {
        this.setState((item) => (
            {
                ...item,
                props: {
                    ...item.props,
                    yAxis: !this.state.props?.yAxis
                }
            })
        )
    };

    private changeToogleRevenueGrid = async () => {
        this.setState((item) => (
            {
                ...item,
                props: {
                    ...item.props,
                    grid: !this.state.props?.grid
                }
            })
        )
    };

    private changeStrokeWidth = async (size: number) => {
        this.setState((item) => ({ ...item, props: { ...item.props, strokeWidth: size } }))
    };

    private changeRange = async (size: number) => {
        this.setState((item) => (
            { 
                ...item, 
                props: { 
                    ...item.props, 
                    range: -Math.abs(size) 
                } 
            })
        )
    };

    private headerCard(): React.ReactNode {

        return (
            <div className=" px-3 py-3 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-slate-700 dark:text-slate-200">Revenue</h1>
                <OverlayPanel
                    isOpen={this.state.openPanel}
                    iconClose
                    item={this.itemHandleButtonPanel}
                    onChange={(value) => this.setState((item) => ({ ...item, openPanel: value }))}>
                    <div className="block divide-y divide-gray-100 w-[17rem] max-md:w-[40vh] mt-2">
                        <div className="pb-2">
                            <h1 className="my-3 text-center">Type AreaChart</h1>
                            <ul className="flex gap-2 *:cursor-pointer flex-wrap *:rounded-full *:px-2 *:py-0.5 *:border-[1.5px] *:border-sky-300">
                                {
                                    curveTypeOption.map((item, idx) => (
                                        <li key={idx} onClick={() => this.changeHandleRevenueType(item)} className={`text-sm transition duration-150 hover:bg-sky-500 ${item === this.state.props?.type ? "bg-sky-500 text-white font-semibold" : ""}`}>{item as string}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="grid grid-cols-3 mb-2 place-content-start place-items-start">
                            <div>
                                <h1 className="my-3 text-start">Axis</h1>
                                <ul className="w-full flex gap-2 *:cursor-pointer flex-wrap *:rounded-full *:px-2 *:py-0.5 *:border-[1.5px] *:border-sky-300">
                                    <li className={`text-sm ${this.state.props?.xAxis ? "bg-sky-500" : ""}`} onClick={this.changeTooegleRevenueXaxis}>XAxis</li>
                                    <li className={`text-sm ${this.state.props?.yAxis ? "bg-sky-500" : ""}`} onClick={this.changeTooegleRevenueYaxis} >YAxis</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="my-3">Grid</h1>
                                <ul className="w-full flex gap-2 *:cursor-pointer flex-wrap *:rounded-full *:px-2 *:py-0.5 *:border-[1.5px] *:border-sky-300">
                                    <li className={`text-sm ${this.state.props?.grid ? "bg-sky-500" : ""}`} onClick={this.changeToogleRevenueGrid}>Grid</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="my-3 text-center">Background</h1>
                                <div className="inline-flex">
                                    <input type="color" onChange={(ev) => this.setState((item) => ({ ...item, strokeColor: ev.target.value }))} className="w-8 h-5 rounded-sm" defaultValue={this.state.strokeColor} />
                                </div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <h1 className="my-3 text-center">Range Area Chart</h1>
                            <ul className="flex justify-center gap-2 *:cursor-pointer flex-wrap *:rounded-full *:px-2 *:py-0.5 *:border-[1.5px] *:border-sky-300">
                                {
                                    rangeOptions.map((item, idx) => (
                                        <li key={idx} onClick={() => this.changeRange(item)} className={`text-sm transition duration-150 ${-Math.abs(this.state.props?.range as number) === -item ? "bg-sky-500" : ""} hover:bg-sky-500`}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="mb-2">
                            <h1 className="my-3 text-center">Stroke Width</h1>
                            <ul className="flex justify-center gap-2 *:cursor-pointer flex-wrap *:rounded-full *:px-2 *:py-0.5 *:border-[1.5px] *:border-sky-300">
                                {
                                    strokeWidth.map((item, idx) => (
                                        <li key={idx} onClick={() => this.changeStrokeWidth(item)} className={`text-sm transition duration-150 ${this.state.props?.strokeWidth === item ? "bg-sky-500" : ""} hover:bg-sky-500`}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </OverlayPanel>
            </div>
        )
    }

    public render(): React.ReactNode {

        const { data, props } = this.state;

        return (
            <React.Fragment>
                <Card
                    header={this.headerCard}
                    className="min-h-44 bg-white dark:bg-slate-700"
                    darkMode={false}
                    bodyClassName="px-0 py-2">
                    <ResponsiveContainer width={"100%"} height={200}>
                        <AreaChart data={data} margin={{
                            top: 0,
                            right: 10,
                            left: -20,
                            bottom: 10
                        }}>
                            {/* gradient bg color SVG */}
                            <defs>
                                <linearGradient id="CGD" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={this.state.strokeColor} stopOpacity={0.6} />
                                    <stop offset="95%" stopColor={this.state.strokeColor} stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            {/* Legend Option SVG */}

                            <Legend verticalAlign="top" height={30} />
                            <Area
                                type={this.state.props?.type}
                                dataKey={"value"}
                                strokeWidth={this.state.props?.strokeWidth}
                                stroke={this.state.strokeColor}
                                fill="url(#CGD)"
                                dot={(props) => <this.DotChart {...props} />}
                                isAnimationActive={true}
                                animationDuration={400}>
                            </Area>

                            <XAxis
                                className={this.state.props?.xAxis ? "block" : "hidden"}
                                fontSize={10}
                                dataKey={"created_at"}
                                strokeWidth={1.5}
                                stroke={this.state.strokeColor}>
                                <Label
                                    value="Date Time"
                                    fontWeight={"200"}
                                    stroke={this.state.strokeColor}
                                    fontSize={12}
                                    offset={-5}
                                    position="insideBottom" />
                            </XAxis>

                            <YAxis
                                className={this.state.props?.yAxis ? "block" : "hidden"}
                                fontSize={10}
                                strokeWidth={1.5}
                                stroke={this.state.strokeColor}>
                            </YAxis>

                            <CartesianGrid
                                className={this.state.props?.grid ? "block" : "hidden"}
                                strokeOpacity={0.5}
                                strokeWidth={0.2} />

                            <Tooltip
                                labelFormatter={() => ''}
                                formatter={(value) => value as number}
                                labelStyle={{ padding: 0, margin: 0 }}
                                position={{ x: 30, y: -30 }}
                                contentStyle={{
                                    borderRadius: 5,
                                    outline: "none",
                                    border: 'none',
                                    boxShadow: '1px 2px 2px 1px rgba(0, 0, 0, 0.2)'
                                }} />
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>
            </React.Fragment>
        )
    }
}

RevenueChart.contextType = ContextApp;