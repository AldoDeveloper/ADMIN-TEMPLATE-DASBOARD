
export interface PropsCircularProgress{
    value        : number;
    strokeColor ?: string | "success" | "info" | "warning" | "danger";
    theme       ?: boolean;
    sizeText    ?: number;
    trailStroke ?: string;
    strokeWidth ?: number;
};