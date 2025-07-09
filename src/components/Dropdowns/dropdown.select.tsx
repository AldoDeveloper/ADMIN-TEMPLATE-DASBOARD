import React from "react";
import { Dropdown, DropdownProps } from 'primereact/dropdown';

interface DropdownSelectProps extends DropdownProps {
    activedChecked?: boolean;
};

const DropdownSelect: React.FC<DropdownSelectProps> = ({ activedChecked, className, ...prop }) => {

    const itemTemplate = (option: any) => {
        return (
            <div className="flex items-center gap-2">
                { option?.icon ?? <></> }
                <span>{ option.name }</span>
            </div>
        )
    };

    return (
        <React.Fragment>
            <Dropdown
                {...prop}
                itemTemplate={prop?.itemTemplate ? prop?.itemTemplate : itemTemplate}
                highlightOnSelect={false}
                className={`w-full md:w-14rem ${className}`} />
        </React.Fragment>
    )
};

export default DropdownSelect;