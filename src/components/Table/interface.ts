
import { PaginationState } from "@tanstack/react-table";
import React from "react";

export interface OptionsPaginationTable{
    paginate: PaginationState;
    setChangePagination : React.Dispatch<React.SetStateAction<PaginationState>>
};

export interface OptionsVisibilityColumnTable{
    visibility: any;
    setChangeVisibility : React.Dispatch<React.SetStateAction<any>>
};

export interface PropsTable{
    data              : Array<any>;
    columns           : any;
    className         ?: string;
    canVisibility     ?: boolean;
    canPagination     ?: boolean;
    optionsPagination ?: OptionsPaginationTable;
    optionsVisibility ?: OptionsVisibilityColumnTable
}