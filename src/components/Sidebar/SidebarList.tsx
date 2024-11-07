import React from "react";
import SidebarNode from "./SidebarNode";

export type PropsSidebarList = {
    data: Array<TreeNodeProps>;
    space?: "1" | "2" | "3" | "3" | "4" | "5" | "6" | "7" | "8" | "8" |"10"
}

export default class SidebarList extends React.Component<PropsSidebarList> {

    public static defaultProps: PropsSidebarList = {
        data: [],
        space: "10"
    }

    public constructor(props: any) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <ul className={`ml-2 relative space-y-5`}>
                    {
                        this.props.data.map((val, idx) => (
                            <SidebarNode  {...val} key={idx} />
                        ))
                    }
                </ul>
            </React.Fragment>
        )
    }
}