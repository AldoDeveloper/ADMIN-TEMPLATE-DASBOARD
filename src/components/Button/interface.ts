
import React from 'react';

type BgColor = "secondary" | "danger" | "success" | "default";

export interface PropsComponent extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label   ?: string | React.ReactNode;
    size    ?: "sm" | "lg";
    icon    ?: React.ReactNode | (() => React.ReactNode);
    iconPosition ?: "left" | "right";
    rounded ?: boolean;
    loading ?: boolean;
    bgColor ?: BgColor;
};