import React from "react";
import { PropsTreeSelect } from "./interface";
import TreeSelectComponent from "./TreeSelectComponent";

const TreeSelect: React.FC<PropsTreeSelect> = ({ data }) => {
    return(
        <React.Fragment>
            {
                data.map((node, idx) => (
                    <TreeSelectComponent key={idx} node={node}/>
                ))
            }
        </React.Fragment>
    )
}

export default TreeSelect;