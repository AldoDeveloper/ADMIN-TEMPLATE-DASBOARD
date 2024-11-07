import React from "react";

export interface PropsFooter extends React.HTMLAttributes<HTMLDivElement>{
    header   ?: React.ReactNode | (()  => React.ReactNode);
    footer   ?: React.ReactNode | (()  => React.ReactNode);
}