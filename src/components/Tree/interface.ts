import React from "react";

export interface TreeSelectData{
    name      ?: string;
    icon      ?: React.ReactNode | (() => React.ReactNode);
    style     ?: React.CSSProperties;
    className ?: string;
    children  ?: Array<TreeSelectData>;
}

export interface PropsTreeSelectComponentData{
    node ?: TreeSelectData
}

export interface StateTreeSelectComponentData{
    isOpenChildren : boolean;
}

export interface PropsTreeSelect{
    data : Array<TreeSelectData>
}