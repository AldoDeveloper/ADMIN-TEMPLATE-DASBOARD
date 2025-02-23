import React from "react";

export interface SkeltonProps{
    width     : string  | number;
    height    : string | number;
    duration  ?: number;
    container ?: boolean;
    children  ?: React.ReactNode;
    className ?: string;
}