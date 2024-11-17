import React from "react";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable, getSortedRowModel } from '@tanstack/react-table';
import Card from "../Card";
import Button from "../Button";
import { BsDiagram3, BsDownload, BsMapFill, BsSearch } from "react-icons/bs";
import products from '@/data/product';

export default function TableProduct() : React.ReactNode {

    const [data, setData] = React.useState<Array<TableDataProps> | any>(products);
    const createColumn    = createColumnHelper<Array<TableDataProps>>();

    const columns = React.useMemo(() => [

        createColumn.accessor("order_id", {
            header: "Order Id",
            size: 3,
        }),

        createColumn.accessor("product_name", {
            header: "Product Name",
        }),

        createColumn.accessor("price", {
            header: "Price"
        }),

        createColumn.accessor("quantity", {
            header: "Quantity"
        }),

        createColumn.accessor("customer_name", {
            header: "Name"
        }),

        createColumn.display({
            header: "Action",
            cell(props) {
                return "Action"
            },
        })
    ], [])

    const tableInstance = useReactTable(
        {
            columns,
            data,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
            debugTable: true,
            debugHeaders: false
        }
    );

    const RenderHeadOptionTable: React.FC<{}> = () => {
        return (

            <div className="mb-2 text-sm inline-flex w-full justify-between items-center px-3 py-4 shadow-sm shadow-slate-300 rounded-sm">
                <div id="start">
                    <label className="relative transition-all cursor-pointer duration-200 w-full text-slate-500 font-semibold mr-7">
                        <span>Product</span>
                        <div className="absolute rounded-sm -bottom-[1.1rem] left-0 w-full h-[0.18rem] bg-bg-theme-blue" />
                    </label>
                    <label className="relative text-slate-500 font-semibold mr-7 cursor-pointer">
                        <span>Store</span>
                        {/* <div className="absolute rounded-sm -bottom-[1.1rem] left-0 w-full h-[0.20rem] bg-sky-400"/> */}
                    </label>
                </div>
                <div id="ends" className="flex divide-x divide-slate-300 items-center">
                    <div className="flex gap-2 items-center pr-3">
                        <Button
                            size="sm"
                            className="px-2 py-1 bg-white ring-1 ring-slate-300"
                            label={<BsSearch size={15} />}
                            bgColor="secondary" />
                        <Button
                            size="sm"
                            className="px-2 py-1 bg-white ring-1 ring-slate-300"
                            label={<>
                                <div className="flex gap-2 items-center">
                                    <BsMapFill size={15} />
                                    <span className="text-xs font-semibold text-slate-600">Columns</span>
                                </div>
                            </>}
                            bgColor="secondary" />
                        <Button
                            size="sm"
                            className="px-2 py-1 bg-white ring-1 ring-slate-300 hover:bg-slate-300"
                            label={<>
                                <div className="flex gap-2 items-center hover:text-white">
                                    <BsDiagram3 size={15} />
                                    <span className="text-xs font-semibold">Filter</span>
                                </div>
                            </>}
                            bgColor="secondary" />
                    </div>
                    <div className="pl-3">
                        <Button
                            size="sm"
                            className="px-2 py-1"
                            label={<>
                                <div className="flex items-center gap-2 text-white">
                                    <BsDownload size={15} />
                                    <span className="text-xs font-semibold">Export</span>
                                </div>
                            </>}
                            bgColor="default" />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <React.Fragment>
            <Card darkMode={false} className="min-h-44 bg-white dark:bg-slate-700">
                <RenderHeadOptionTable />
                <table className="border-collapse rounded-sm shadow-sm shadow-slate-300 w-full table-fixed">
                    <thead>
                        {
                            tableInstance.getHeaderGroups().map((header) => (
                                <tr key={header.id} className="shadow-sm shadow-slate-300">
                                    {
                                        header.headers.map((head) => (
                                            <th key={head.id} className="py-3" colSpan={head.colSpan}>
                                                {
                                                    head.isPlaceholder ? null : (
                                                        <>
                                                            <div {
                                                                ...{ 
                                                                    className: head.column.getCanSort() ? "cursor-pointer" : "",
                                                                    onClick  : head.column.getToggleSortingHandler()
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
                                                                        asc: <span className="ml-1 text-lg text-gray-400">&#x1F839;</span>,
                                                                        desc: <span className="ml-1 text-lg text-gray-400">&#x1F83B;</span>,
                                                                    }  
                                                                [ head.column.getIsSorted() as string] ?? null }
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
                            tableInstance.getRowModel().rows.map((data, idx) => (
                                <tr key={data.id} className="hover:bg-slate-100 rounded-sm">
                                    {
                                        data.getVisibleCells().map((cell, idx) => (
                                            <td key={cell.id} className={`text-center text-sm py-4 px-6 border-b border-slate-200 rounded-sm`}>
                                                {
                                                    flexRender(cell.column.columnDef.cell, cell.getContext())
                                                }
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={6} className="rounded-sm shadow-sm shadow-slate-200 px-6 py-3">
                                <div className="flex items-center justify-between">
                                    <h1>Size 50</h1>
                                    <div>
                                        Lorem, ipsum dolor.
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </React.Fragment>
    )
}