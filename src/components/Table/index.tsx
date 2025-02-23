import React from "react";
import { PropsTable } from "./interface";
import { getCoreRowModel, useReactTable, getSortedRowModel, flexRender, getPaginationRowModel } from "@tanstack/react-table";
import Pagination from "../Pagination";
import OverlayPanelPrime from "../Overlay/PanelPrime";

const Table: React.FC<PropsTable> = (
    {
        data, columns,
        className,
        optionsPagination,
        canPagination,
        canVisibility,
        optionsVisibility
    }): React.ReactNode => {

    const [dataTable, setDataTable] = React.useState<Array<any>>(data);

    const instances = useReactTable({
        data: dataTable,
        columns,
        getSortedRowModel: getSortedRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: optionsPagination?.setChangePagination,
        onColumnVisibilityChange: canVisibility ? optionsVisibility!.setChangeVisibility : undefined,
        state: {
            pagination: optionsPagination?.paginate ? { ...optionsPagination.paginate } : {
                pageIndex: 0,
                pageSize: 5
            },
            columnVisibility: canVisibility ? optionsVisibility?.visibility : undefined
        },
        debugTable: false,
        debugHeaders: false
    });

    return (
        <React.Fragment>
            {
                canVisibility && (
                    <div className="flex justify-between items-center my-2">
                        <div><h1>Custom</h1></div>
                        <OverlayPanelPrime
                            label="Column"
                            className=" dark:text-slate-200">
                            <fieldset className="divide-y">
                                {
                                    instances.getAllColumns().map((val: any, idx) => {
                                        if (!val.columnDef?.column) {
                                            return (
                                                <div key={idx} className="w-[7.5rem] px-2 py-2">
                                                    <input
                                                        type="checkbox"
                                                        checked={val.getIsVisible()}
                                                        disabled={!val.getCanHide()}
                                                        onChange={val.getToggleVisibilityHandler()}
                                                        className={`peer/${val.columnDef.header} mr-2`}
                                                        name={`${val.columnDef.header}`}
                                                        id={`${val.columnDef.header + val.id}`} />
                                                    <label htmlFor={`${val.columnDef.header + val.id}`} className={`text-md peer-checked/${val.columnDef.header + val.id}:text-sky-500`}>{val.columnDef.header as any}</label>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </fieldset>
                        </OverlayPanelPrime>
                    </div>
                )
            }

            <div className="aspect-w-16 aspect-h-9 overflow-x-auto">
                <table className={`border-collapse rounded-sm shadow-sm shadow-slate-300 dark:shadow-none min-w-full max-md:min-w-[90vh] table-fixed ${className}`}>
                    <thead>
                        {
                            instances.getHeaderGroups().map((headers) => (
                                <tr key={headers.id}>
                                    {
                                        headers.headers.map((head) => (
                                            <th key={head.id} colSpan={head.colSpan} className="py-2 border-2 border-slate-300 dark:border-slate-600">
                                                {
                                                    head.isPlaceholder ? null : (
                                                        <>
                                                            <div {...{
                                                                className: head.column.getCanSort() ? "cursor-pointer" : "",
                                                                onClick: head.column.getToggleSortingHandler()
                                                            }
                                                            }>
                                                                {
                                                                    flexRender(
                                                                        head.column.columnDef.header,
                                                                        head.getContext()
                                                                    )
                                                                }
                                                                {
                                                                    {
                                                                        asc: <span className="text-lg text-gray-400">&#x1F839;</span>,
                                                                        desc: <span className="text-lg text-gray-400">&#x1F83B;</span>,
                                                                    }
                                                                    [head.column.getIsSorted() as string] ?? <span className="font-light text-xs"> &#x1F859;</span>
                                                                }
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>

                    <tbody>
                        {
                            instances.getRowModel().rows.map((data, idx) => (
                                <tr
                                    key={ data.id }
                                    onClick={data.getToggleSelectedHandler()}
                                    className={`hover:bg-slate-100 ${data.getIsSelected() ? "bg-slate-100 dark:bg-slate-700" : ""} cursor-pointer hover:dark:bg-slate-700`}>
                                    {
                                        data.getVisibleCells().map((cell, idx) => (
                                            <td key={cell.id} className={`text-center text-sm py-4 px-6 border-2 border-slate-300 dark:border-slate-600 rounded-sm`}>
                                                {
                                                    flexRender(cell.column.columnDef.cell, cell.getContext())
                                                }
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {
                    optionsPagination && (
                        <div className="flex py-3 justify-end items-center">
                            <Pagination
                                pagination={optionsPagination.paginate}
                                totalPages={instances.getPageCount()}
                                onSetIndexPage={instances.setPageIndex}
                                onSetPageSize={instances.setPageSize}
                                onNextPage={instances.nextPage}
                                onFirstPage={instances.firstPage}
                                onPreviousPage={instances.previousPage}
                                canNextPage={instances.getCanNextPage()}
                                canPreviousPage={instances.getCanPreviousPage()}
                            />
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    )
};

export default Table;
