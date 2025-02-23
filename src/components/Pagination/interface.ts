import { PaginationState } from "@tanstack/react-table";

export interface PropsPagination{
    space           ?: number;
    pagination      : PaginationState;
    totalPages      : number;
    canPreviousPage ?: boolean;
    canNextPage     ?: boolean;
    onPreviousPage  : () => void | Promise<void>;
    onNextPage      : () => void | Promise<void>;
    onFirstPage     : () => void | Promise<void>;
    onSetIndexPage  : (index: number) => void | Promise<void>;
    onSetPageSize   : (size: number)  => void | Promise<void>;
}