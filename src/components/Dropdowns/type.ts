
type SizeOption     = "small" | "medium" | "large";
type TemplateCustom = React.ReactNode | ((...option: any) => React.ReactNode);

export interface DropdownProps {
    value ?: any;
    onChange(value: any) : void;
    selectedTemplate ?: TemplateCustom;
    itemTemplate ?: TemplateCustom;
    placeholder  ?: string;
    size         ?: SizeOption;
    optionLabel  ?: string;
    iconRigt     ?: boolean;
    wrapperClass ?: string;
    divide       ?: boolean;
    data         : Array<any>;
};