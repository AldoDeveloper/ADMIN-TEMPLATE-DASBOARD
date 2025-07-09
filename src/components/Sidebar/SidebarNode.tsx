import { ContextApp } from "@/state/context/app";
import { getRandomInt } from "@/utilities/random";
import React from "react";
import { BsCaretDownFill, BsCaretLeftFill, BsCaretRightFill, BsFile } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";
import { ContextDasboard } from "@/state/context/dasboard";
import classNames from "classnames";
import { ThemeStrokeColor } from "@/data/dasboard";

type StateSidebarNode = {
    isOpenChildren: boolean;
};

const variantAnimation = {
    show: {
        opacity: 1,
        y: 1,
        display: "block"
    },

    hidde: {
        opacity: 0,
        y: -12,
        display: "none"
    },

    exite: {
        opacity: 0,
        y: -12,
        display: "none",
        transition: {
            duration: 0.2
        }
    }
}

export default class SidebarNode extends React.Component<TreeNodeProps, StateSidebarNode> {

    declare public context: React.ContextType<typeof ContextApp>;

    private ref = React.createRef<HTMLDivElement>()

    private static idRandom: number = getRandomInt(0, 500);

    public static defaultProps: TreeNodeProps = {
        id: `${this.idRandom}`,
        name: `Component ${this.idRandom}`,
        icon: <BsFile size={18} />,
        space: "5"
    }

    public constructor(props: TreeNodeProps) {
        super(props);
        this.state = {
            isOpenChildren: false
        };
        this.renderIcon = this.renderIcon.bind(this);
        this.Link = this.Link.bind(this);
    }

    private handeleMouseDown = (ev: MouseEvent) => {
        if (this.ref.current && !this.ref.current.contains(ev.target as Node)) {
            this.setState((prop) => {
                return { ...prop, isOpenChildren: false }
            })
        }
    }

    public componentDidMount(): void {

        document.addEventListener("pointerdown", this.handeleMouseDown);
        if (this.props.children && this.props.children.length > 0 && this.props.to?.indexOf(window.location.pathname) !== -1) {
            this.setState((prop) => {
                return { ...prop, isOpenChildren: true }
            })
        }

        if (window.location.pathname.split("/").length > 3) {
            const path = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
            const findChildren = this.props.children?.find((val) => val.to?.indexOf(path) !== -1);
            if (findChildren) {
                this.setState((prop) => {
                    return { ...prop, isOpenChildren: true }
                })
            }
        }
    }

    public componentWillUnmount(): void {
        return document.removeEventListener("pointerdown", this.handeleMouseDown)
    }

    public componentDidUpdate(prevProps: Readonly<TreeNodeProps>, prevState: Readonly<StateSidebarNode>, snapshot?: any): void {
        if (prevProps.space !== this.props.space) {
            //    
        }
    }

    private renderIcon({ className }: { className?: string }): React.ReactNode {

        if (this.props?.icon) {
            switch (typeof this.props?.icon) {
                case "function":
                    return (
                        <div
                            className={`inline-flex ${className}`}>
                            {this.props?.icon()}
                        </div>
                    );

                case "string":
                    return (
                        <div className={`${this.props?.icon} ${className}`} />
                    );

                default:
                    return (
                        <div className={className}>{this.props?.icon}</div>
                    )
            }
        }

        return (
            <div className={`inline-flex ${className}`}>
                <BsFile size={2} />
            </div>
        )
    }

    private handleToogleIsOpen = () => {
        this.setState((prop) => {
            return { isOpenChildren: !this.state.isOpenChildren }
        })
    }

    private Link() {

        const { getApp }  = this.context;
        const hasChildren = (this.props?.children && this.props?.children?.length > 0) ?? false;
        const isDark = getApp.darkMode === "dark";
        const { propsDasboard } = React.useContext(ContextDasboard);

        const themeClass = classNames({
            "text-red-500"       : propsDasboard.theme === "red",
            "text-green-500"     : propsDasboard.theme === "green",
            "text-tq-blue-500"   : propsDasboard.theme === "tq-blue",
            "text-md-purple-500" : propsDasboard.theme === "md-purple"
        });

        const color = ThemeStrokeColor[themeClass.substring(5)];

        return <NavLink
            type="button"
            to={this.props.to ? this.props.to as string : "/"}
            end
            style={({ isActive }) => ({ color: isActive && this.props.to != "#" ? color : "" })}
            className={({ isActive, isPending }) =>
                `w-full inline-flex dark:hover:text-${propsDasboard.theme}-500 items-center 
                            ${isActive && this.props.to != "#"
                    ? `font-semibold`
                    : "text-slate-800 dark:text-slate-200"}`
            }

            onClick={hasChildren && this.handleToogleIsOpen as any}>
            {
                ({ isActive }) => (
                    <React.Fragment>
                        <div className="flex items-center">
                            <this.renderIcon className="mr-3" />
                            <div className="tracking-wide inline-block text-sm">{this.props.name}</div>
                        </div>
                        {
                            hasChildren && (
                                <div className="inline-block absolute top-0 -right-3">
                                    { 
                                        !this.state.isOpenChildren 
                                            ? <BsCaretRightFill 
                                                size={17} 
                                                className={isDark ? "fill-gray-200" : "fill-gray-500"} /> 
                                            : <BsCaretDownFill 
                                                size={17} 
                                                color={isDark ? "white" : "gray"} />}
                                </div>
                            )
                        }
                        {
                            isActive && !hasChildren && (
                                <div className="inline-flex transition-all duration-200 absolute top-0 -right-[1.6rem]">
                                    <BsCaretLeftFill size={17} />
                                </div>
                            )
                        }
                    </React.Fragment>
                )
            }
        </NavLink>
    }

    public render(): React.ReactNode {

        const hasChildren = (this.props?.children && this.props?.children?.length > 0) ?? false;
        const isOpenChildren = this.state.isOpenChildren;

        return (
            <React.Fragment>
                <li className="relative">
                    <this.Link />
                </li>

                <motion.li
                    key={this.props.id}
                    animate={hasChildren && isOpenChildren ? "show" : "hidde"}
                    initial={"hidde"}
                    variants={variantAnimation}
                    exit={"exite"}
                    transition={{ duration: 0.3 }}
                    className="ml-3 py-1">
                    <li className={`space-y-3`}>
                        {
                            this.props.children?.map((val, idx) => (
                                <SidebarNode {...val} key={idx} />
                            ))
                        }
                    </li>
                </motion.li>
            </React.Fragment>
        )
    }
}

SidebarNode.contextType = ContextApp;