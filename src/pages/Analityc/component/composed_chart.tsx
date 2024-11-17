import React from "react";
import { Area, CartesianGrid, LabelList, Legend, Line, ReferenceDot, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ComposedChart as RComposedChart } from 'recharts';
import getDataComposedChart from "./data";
import { BsCheck, BsDownload } from "react-icons/bs";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { getRandomInt } from "@/utilities/random";
import html2canvas from 'html2canvas-pro';

type StateComponent = {
    ipw: boolean;
    ipm: boolean;
    data: typeof getDataComposedChart;
};

export default class ComposedChart extends React.Component<any, StateComponent | any> {

    private intervalIdData: any;
    private refSvg: any;

    public constructor(props: any) {
        super(props);
        this.state = {
            ipw: true,
            ipm: true,
            data: getDataComposedChart.map((val) => ({ ...val, additional: { valueAdd: getRandomInt(10000, 10009) }, date: new Date(val.date).toLocaleTimeString() })),
        }
        this.refSvg = React.createRef();
        this.renderContentLegend = this.renderContentLegend.bind(this);
        this.renderHeaderChart = this.renderHeaderChart.bind(this);
        this.updateDataRealtime = this.updateDataRealtime.bind(this);
    }

    public componentDidMount(): void {
        this.updateDataRealtime();
    }

    public componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if (prevState.data !== this.state.data) {
            if(this.state.data.length >= 100){
                clearInterval(this.intervalIdData)
            }
        }
    }

    public componentWillUnmount(): void {
        clearInterval(this.intervalIdData)
    }

    private updateDataRealtime(): void {

        this.intervalIdData = setInterval(() => {
            this.setState((val: any) => {
                return {
                    ...val,
                    data: [
                        ...val.data,
                        {
                            ipw: getRandomInt(10000, 100000),
                            ipm: getRandomInt(10000, 100000),
                            additional: { valueAdd: getRandomInt(10000, 100000) },
                            date: new Date().toLocaleTimeString(),
                        }
                    ].slice(-100)
                }
            })
        }, 2000);
    }

    private renderContentLegend(props: any): React.ReactNode {
        const { payload } = props;
        return (
            <ul className="inline-flex w-full justify-center my-2 gap-3 items-center">
                {
                    payload.map((val: any, idx: number) => (
                        <li className="uppercase font-semibold" key={idx}>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    checked={this.state?.[`${val.value}`]}
                                    type="checkbox"
                                    onChange={() => this.setState((valData: StateComponent) => ({ ...valData, [`${val.value}`]: !this.state?.[`${val.value}`] }))}
                                    className="peer hidden" />
                                <span style={{ borderColor: val.color, backgroundColor: this.state?.[`${val.value}`] ? val.color : "" }} className={`inline-flex mr-2 gap-3 justify-center items-center w-4 h-4 rounded-md border peer-checked:bg-[${val.color}]`}>
                                    {
                                        this.state?.[`${val.value}`] && (<BsCheck size={20} color="white" />)
                                    }
                                </span>
                                <span style={{ color: val.color }}>{val.value}</span>
                            </label>
                        </li>
                    ))
                }
            </ul>
        )
    }

    private renderHeaderChart(): React.ReactNode {

        const RenderLabel: React.FC<{}> = () => {
            return (
                <label className="inline-flex w-full items-center text-white font-semibold text-xs">
                    <span><BsDownload size={14} className="mr-2" /></span>
                    <span className="text-xs">Download</span>
                </label>
            )
        };

        const RenderLabelReset: React.FC<{}> = () => {
            return (
                <span>Reset</span>
            )
        };

        return (
            <div className="flex justify-between items-center mx-3 my-3">
                <h1 className="font-semibold">Analitic</h1>
                <div className="flex gap-2 items-center">
                    <Button
                        bgColor="success"
                        className="p-2 rounded-lg"
                        style={{ background: "#fbd24e" }}
                        onClick={() => this.downloadToImg()}
                        label={<RenderLabel />} />
                    {this.state.data.length >= 100 && (
                        <Button
                            bgColor="success"
                            className="p-2 rounded-lg"
                            style={{ background: "#fbd24e" }}
                            onClick={() => this.downloadToImg()}
                            label={<RenderLabelReset />} />
                    )}
                </div>
            </div>
        )
    }

    private downloadToImg() {

        const containerRef = this.refSvg.current;
        if (!containerRef) return;

        html2canvas(containerRef, { useCORS: true, backgroundColor: "transparent" }).then((canvas) => {
            const img = canvas.toDataURL('img/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = img;
            downloadLink.download = 'downloaded-image.png';
            downloadLink.click();
        });
    };

    private labelListAreaChart = (props: any) => {
        const { x, y, value } = props;
        return (
            <text
                fontSize={10}
                fontWeight={0.1}
                x={x}
                y={y}
                textAnchor="middle"
                rotate={10}
                className="fill-slate-400 dark:fill-slate-50 font-light">{value}</text>
        )
    }

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <Card
                    header={this.renderHeaderChart}
                    className="w-full min-h-[350px]"
                    bodyClassName="px-0">
                    <ResponsiveContainer width={"100%"} height={350} ref={this.refSvg}>
                        <RComposedChart
                            data={this.state.data}
                            margin={{ top: 10, right: 0, left: 0, bottom: 5 }}>
                            <defs>
                                <linearGradient id="CGD" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={"#1acd81"} stopOpacity={0.6} />
                                    <stop offset="95%" stopColor={"#81f4c3"} stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <defs>
                                <linearGradient id="CGB" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="10%" stopColor={"green"} stopOpacity={0.6} />
                                    <stop offset="70%" stopColor={"green"} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <defs>
                                <linearGradient id="CGG" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={"#fe68a7"} stopOpacity={0.6} />
                                    <stop offset="95%" stopColor={"#fe68a7"} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Legend
                                verticalAlign="bottom"
                                content={(props) => <this.renderContentLegend {...props} />} />
                            <YAxis fontSize={10} strokeDasharray={"2 2"} strokeWidth={0.4} />
                            <XAxis dataKey={"date"} strokeWidth={0.4} fontSize={8} strokeDasharray={"2 2"} />
                            <CartesianGrid strokeWidth={0.4} strokeDasharray={"2 2"} />
                            <Tooltip />
                            {/* <Bar barSize={20} dataKey={"additional.valueAdd"} fill={"url(#CGG)"}/> */}
                            <Area
                                isAnimationActive
                                animationEasing="ease"
                                animationDuration={1000}
                                hide={!this.state.ipw}
                                dataKey={"ipw"}
                                type={"monotone"}
                                fill={"url(#CGD)"}
                                strokeWidth={2}
                                stroke="#81f4c3">
                                <LabelList content={this.labelListAreaChart} fontSize={10} dataKey={"ipw"} position={"insideTop"} />
                            </Area>

                            <Line
                                isAnimationActive
                                animationEasing="ease"
                                animationDuration={1000}
                                hide={!this.state.ipm}
                                type={"monotone"}
                                dataKey={"ipm"}
                                stroke="#fabe25"
                                strokeWidth={1.5}>
                                <LabelList fontSize={10} dataKey={"ipm"} position={"top"} />
                            </Line>

                            {/* <ReferenceLine 
                                y={80000} 
                                label={"Max"} 
                                stroke="red" 
                                strokeWidth={1.5}/> */}
                            <ReferenceDot strokeWidth={10} x1={100} y1={100} label={"Dot"} fill="red" r={20} y={100} />

                        </RComposedChart>
                    </ResponsiveContainer>
                </Card>
            </React.Fragment>
        )
    }
}