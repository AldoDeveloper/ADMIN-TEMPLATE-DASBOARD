import { ContextApp } from "@/state/context/app";
import { getRandomInt } from "@/utilities/random";
import React from "react";
import { BsCaretDownFill, BsCaretLeftFill, BsCaretRightFill, BsChevronDown, BsChevronRight, BsFile } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";

type StateSidebarNode = {
    isOpenChildren: boolean
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

        if (this.props.icon) {
            switch (typeof this.props.icon) {
                case "function":
                    return (
                        <div
                            className={`inline-flex ${className}`}>
                            {this.props.icon()}
                        </div>
                    );

                case "string":
                    return (
                        <div className={`${this.props.icon} ${className}`} />
                    );

                default:
                    return (
                        <div className={className}>{this.props.icon}</div>
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

    public render(): React.ReactNode {

        const { getApp } = this.context
        const hasChildren = this.props.children && this.props.children.length > 0;
        const isOpenChildren = this.state.isOpenChildren;
        const isDark = getApp.darkMode === "dark";

        return (
            <React.Fragment>
                <li className="relative">
                    <NavLink
                        to={this.props.to ? this.props.to as string : "/"}
                        end
                        className={({ isActive, isPending }) => `w-full inline-flex dark:hover:text-red-400 items-center ${isActive ? "text-red-400 font-semibold" : "text-slate-800 dark:text-slate-200"}`} onClick={hasChildren && this.handleToogleIsOpen as any}>
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
                                                {!this.state.isOpenChildren ? <BsCaretRightFill size={17} color={isDark ? "stroke-slate-200" : "stroke-slate-800"} /> : <BsCaretDownFill size={17} color={isDark ? "white" : "gray"} />}
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
                </li>
                <motion.li
                    key={this.props.id}
                    animate={hasChildren && isOpenChildren ? "show" : "hidde"}
                    initial={"hidde"}
                    variants={variantAnimation}
                    exit={"exite"}
                    transition={{ duration: 0.3 }}
                    // ref={!hasChildren ? this.ref as any : undefined as any}
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