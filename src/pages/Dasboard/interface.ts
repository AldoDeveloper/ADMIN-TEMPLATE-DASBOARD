import { PropsBarData, PropsRevenueData } from "@/data/dasboard"
import { CurveType } from "recharts/types/shape/Curve";

export interface PropsSpineAnimate{
    bgColor ?: "secondary" | "info" | "warning" | "danger" | "success"
};

export interface StateRevenueChart{
    data        : Array<PropsRevenueData>;
    openPanel   : boolean;
    props       ?: PropsRevenueChart;
    strokeColor ?: string
};

export interface PropsRevenueChart{
    interval    ?: number;
    range       ?: number;
    themeColor  ?: string;
    type        ?: CurveType;
    dot         ?: boolean;
    strokeWidth ?: number;
    xAxis       ?: boolean;
    yAxis       ?: boolean;
    grid        ?: boolean;
};

export interface PropsBar{
    interval   ?: boolean;
    themeColor ?: string;
    range      ?: number;
};

export interface StateBarChart{
    data         : Array<PropsBarData>;
    openPanel    : boolean;
    props       ?: PropsBar;
    strokeColor ?: string;
};