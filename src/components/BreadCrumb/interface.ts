import React from "react";

export interface PropsBreadCrumbs {
    data : Array<Partial<{
        name: string;
        to: string;
        icon: React.ReactNode | (() => React.ReactNode);
        space: number;
    }>>
};