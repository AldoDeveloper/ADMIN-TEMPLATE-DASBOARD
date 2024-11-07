import React from "react";
import { PropsTreeSelectComponentData, StateTreeSelectComponentData } from "./interface";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

export default class TreeSelectComponent extends React.Component<PropsTreeSelectComponentData, StateTreeSelectComponentData> {

    public constructor(props: any) {
        super(props);
        this.state = {
            isOpenChildren: false
        }
    }

    public componentDidMount(): void {

    }

    public render(): React.ReactNode {

        const hasChildren = this.props.node && this.props.node.children?.length as number > 0;

        return (
            <React.Fragment>
                <div className="ml-3">
                    <div className="relative flex items-center cursor-pointer py-2 px-2" onClick={() => this.setState({ isOpenChildren: !this.state.isOpenChildren })}>
                        {
                            hasChildren && (
                                <span className="mr-2">
                                    {this.state.isOpenChildren ? <BsChevronDown size={20} /> : <BsChevronRight size={20} />}
                                </span>
                            )
                        }
                        <div className="absolute -left-3 w-2 h-[0.2px] bg-cyan-400"></div>
                        <div className="absolute -left-1 w-2 h-2 rounded-full bg-cyan-400"></div>
                        <span className="text-sm ml-1">{this.props.node?.name}</span>
                    </div>
                    <div className={`ml-2 border-l border-cyan-300 transition-all duration-300 ease-in-out ${this.state.isOpenChildren && hasChildren ? "opacity-1 scale-x-[1] min-h-10" : "opacity-0 max-h-0 scale-h-0"}`}>
                        {
                            this.props.node?.children?.map((node, idx) => (
                                <TreeSelectComponent key={idx} node={node} />
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}