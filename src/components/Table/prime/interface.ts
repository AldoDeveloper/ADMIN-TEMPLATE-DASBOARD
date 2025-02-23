import { ColumnProps } from "primereact/column";

export interface IPropsTabelPrime {
    data: Array<any>;
    columns: Array<ColumnProps>;
    isPaginator?: boolean;
    isSelection?: boolean;
    isSearchGlobal?: boolean;
    stripedRows   ?: boolean;
    showGridlines ?: boolean;
    selectionMode ?:  'single' | 'radiobutton' | "multiple" | "checkbox"
}

export interface IStateTabelPrime {
    filters?: {
        global?: {
            value: string | null,
            matchMode: any
        }
    },
    column : Array<ColumnProps>;
    selection ?: Array<any>
}