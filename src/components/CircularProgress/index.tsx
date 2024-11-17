import React from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { PropsCircularProgress } from "./interface";
import { ThemeStrokeColor } from "@/data/dasboard";
import classNames from "classnames";

export default function CircularProgress({ value, strokeColor, sizeText, trailStroke, strokeWidth, theme = true } : PropsCircularProgress): React.ReactNode {

    const strokeBg = ThemeStrokeColor[strokeColor?.substring(3) as any]
    
    const classNameTextLabel = classNames({
        'text-[0.50rem]' : sizeText === undefined,
        [`text-[${sizeText}]rem`] : sizeText !== undefined,
    });

    return (
        <CircularProgressbarWithChildren
            value={value as number}
            strokeWidth={ strokeWidth ? strokeWidth : 15 }
            minValue={1}
            maxValue={100}
            styles={{
                root: {},
                path: {
                    stroke: strokeBg,
                    strokeLinecap: 'round',
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },
                trail: {
                    stroke: trailStroke ? trailStroke : "#d6d6d6",
                    strokeLinecap: 'round',
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },
                text: {
                    textAlign: 'center'
                },
                background: {
                    fill: 'blue',
                },
            }}>

            <strong className={classNameTextLabel}>{ value }</strong>
        </CircularProgressbarWithChildren>
    )
}