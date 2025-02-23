import React from "react";
import { PropsBar, StateBarChart } from "../interface";
import { ContextDasboard } from "@/state/context/dasboard";
import Card from "@/components/Card";
import { Bar, BarChart, Label, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { barValueChart } from "@/data/dasboard";
import { getRandomInt } from "@/utilities/random";
import Button from "@/components/Button";
import { BsThreeDotsVertical } from "react-icons/bs";

export default class OrderChartBar extends React.PureComponent<PropsBar, StateBarChart> {

    private intervalID: any;

    declare public context: React.ContextType<typeof ContextDasboard>;

    public static defaultProps: PropsBar = {
        interval: false,
        themeColor: "#8c52ff",
        range: -14
    };

    public constructor(props: PropsBar) {
        super(props);
        this.state = {
            data: barValueChart,
            strokeColor: props.themeColor,
            props: this.props,
            openPanel: false
        };
        this.headerCard = this.headerCard.bind(this)
    }

    public componentDidMount(): void {
        this.updateIntervalData()
    }

    public componentWillUnmount(): void {
        clearInterval(this.intervalID)
    }

    public componentDidUpdate(prevProps: Readonly<PropsBar>, prevState: Readonly<StateBarChart>, snapshot?: any): void {
        if (prevProps.themeColor !== this.props.themeColor) {
            this.setState((item) => ({
                ...item,
                strokeColor: this.props.themeColor
            }))
        }
    }

    private barRound(props: any): React.ReactNode | React.ReactElement {

        const { x, y, width, height, value, background } = props;

        return (
            <React.Fragment>
                <g>
                    <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        rx={5}
                        ry={5}
                        fill={"url(#BGDS)"} />
                    <text
                        x={x + width / 2 }
                        y={y - 7}
                        fill={background}
                        fontSize={8}
                        fontWeight={"bold"}
                        textAnchor="middle"
                        dominantBaseline="middle">
                        {String(value[1] / 100) + "%"}
                    </text>
                </g>
            </React.Fragment>
        )
    }

    private updateIntervalData(): void {
        this.intervalID = setInterval(() => {
            this.setState((item) => ({
                ...item,
                data: [
                    ...item.data,
                    {
                        name: "Product",
                        up: getRandomInt(0, 1000),
                        down: getRandomInt(0, 1000),
                        created_at: new Date().toLocaleTimeString(),
                    }
                ].slice(this.state.props?.range)
            }))
        }, 2000)
    }

    private headerCard() : React.ReactNode{
        return(
            <div className="px-3 py-2 flex justify-between items-center">
                 <h1 className="text-xl font-semibold text-slate-700 dark:text-slate-200">Product</h1>
                 <this.itemHandleButtonPanel/>
            </div>
        )
    }

    private itemHandleButtonPanel = () => {
        return (
            <Button
                className="inline-flex p-2 focus:ring-0"
                style={{ background: "transparent" }}
                rounded
                label={<BsThreeDotsVertical size={22} />}/>
        )
    };

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <Card
                    darkMode={false}
                    header={this.headerCard}
                    className="min-h-44 bg-white dark:bg-slate-800">
                    <ResponsiveContainer width={"100%"} height={200}>
                        <BarChart
                            data={this.state.data}
                            barSize={22}
                            margin={{
                                top: 10,
                                right: 10,
                                left: 0,
                                bottom: 10
                            }}>
                            <defs>
                                <linearGradient id="BGDS" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="25%" stopColor={this.state.strokeColor} stopOpacity={0.8} />
                                    <stop offset="75%" stopColor={this.state.strokeColor} stopOpacity={0.4} />
                                </linearGradient>
                            </defs>

                            <XAxis
                                fontSize={10}
                                fontWeight={"bold"}
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
                            <Tooltip cursor={false} />
                            <Bar
                                dataKey={"up"}
                                shape={(prop: any) => <this.barRound {...prop} background={this.state.strokeColor} />}
                                fill={"url(#BGDS)"}
                                stackId={"a"} />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
            </React.Fragment>
        )
    }
};

OrderChartBar.contextType = ContextDasboard;