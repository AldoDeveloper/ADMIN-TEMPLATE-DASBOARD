
export interface ListViewProps {
    items: Array<any>;
    itemTemplate?: React.ReactNode | ((item: any) => React.ReactNode)
};
