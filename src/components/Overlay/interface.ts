import React from "react";

export interface PropsOverlaySidebar{
    onHidde  : () => void;
    visible  : boolean;
    position ?: "top" | "right" | "left" | "bottom";
    className ?: string;
    children : React.ReactNode;
};

export interface OverlayPanelProps {
    children  : React.ReactNode;
    isOpen    : boolean;
    onChange  : (rest: any) => void;
    item      ?: React.ReactNode | (() => React.ReactNode);
    iconClose ?: boolean;
};

export interface PropsOverlayPanelPrime{
    itemSelected ?: React.ReactNode | ((props: any) => React.ReactNode);
    label     : string
    className ?: string;
    children  : React.ReactNode | JSX.Element;
};