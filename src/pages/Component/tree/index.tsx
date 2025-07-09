import { Card } from "primereact/card";
import { Tree } from "primereact/tree";
import React, { useState } from "react";
import { TreeData } from "./data";

const PageTree: React.FC = () => {

    const headerTemplete1 = () => {
        return (
            <h1 className="px-4 pt-4 text-xl font-semibold text-gray-500">Component Tree</h1>
        )
    };

    const [selection, setSelection] = useState<string | null>("1");
    const [selection2, setSelection2] = useState<string | null>(null);

    return (
        <div className="mt-3">
            <Card header={headerTemplete1}>
                <div className="grid grid-cols-3 items-start max-md:grid-cols-1 gap-3">
                    <div>
                        <h1 className="text-lg my-2">Tree File Basic</h1>
                        <Tree 
                            value={TreeData} 
                            className="w-full" />
                    </div>
                    <div>
                        <h1 className="text-lg my-2">Tree File Selection</h1>
                        <Tree 
                            value={TreeData}
                            selectionMode="multiple"
                            selectionKeys={selection}
                            onSelectionChange={(e) => setSelection(e.value as  any)}
                            className="w-full" />
                    </div>
                      <div>
                        <h1 className="text-lg my-2">Tree File Checkbox</h1>
                        <Tree 
                            value={TreeData}
                            selectionMode="checkbox"
                            selectionKeys={selection2}
                            expandedKeys={{ '0' : true, '0-1' : true }}
                            onSelectionChange={(e) => setSelection2(e.value as  any)}
                            className="w-full" />
                    </div>
                </div>
            </Card>
        </div>
    )
};
export default PageTree;