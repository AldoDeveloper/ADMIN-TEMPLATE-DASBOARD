import React from "react";
import { createColumnHelper, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable, getSortedRowModel, getFilteredRowModel, Table, PaginationState } from '@tanstack/react-table';
import Card from "@component/Card";
import Button from "@component/Button";
import { BsCheck, BsChevronBarDown, BsChevronLeft, BsChevronRight, BsDiagram3, BsDownload, BsMapFill, BsSearch, BsX } from "react-icons/bs";
import Dropdown from "@/components/Dropdowns";
import OverlayPanel from "@/components/Overlay/Panel";
import { toast } from "react-toastify";

type PropsComponentTable = {
    data: Array<Product>;
};

type StateComponentTable = {
    data: PropsComponentTable["data"];
    hasInputSearch: boolean;
    hasColomPanel: boolean;
    tabTable: [number, string];
    selectCategory: Array<string>;
};

const TabsTable = ["Store", "Product"]

export default class TableDasboard extends React.Component<PropsComponentTable, StateComponentTable> {

    private createColumn = createColumnHelper<Array<Product>>();
    private refBtn = React.createRef<HTMLDivElement>();

    private selectedCategory: Array<any> = []
    static defaultProps: PropsComponentTable = {
        data: [],
    }

    public constructor(props: PropsComponentTable) {
        super(props);
        this.selectedCategory = Object.values(Object.fromEntries(new Set(this.props.data.map((val) => val.category)).entries())).map((val) => ({ label: val }))
        this.state = {
            data: props.data,
            hasInputSearch: false,
            hasColomPanel: false,
            tabTable: [0, "product"],
            selectCategory: [],
        };
        this.renderHeadOption = this.renderHeadOption.bind(this);
        this.renderApp = this.renderApp.bind(this);
        this.CheckBoxSelection = this.CheckBoxSelection.bind(this);
    }

    private handleMouseDown = (ref: React.RefObject<HTMLDivElement>, ev: MouseEvent) => {
        if (ref.current && !ref.current.contains(ev.target as Node)) {
            this.setState((item) => ({
                ...item,
                hasInputSearch: false
            }))
        }
    }

    public componentDidMount(): void {
        document.addEventListener("mousedown", (ev) => this.handleMouseDown(this.refBtn, ev))
    }

    public componentDidUpdate(
        prevProps: Readonly<PropsComponentTable>,
        prevState: Readonly<StateComponentTable>, snapshot?: any): void {
        if (prevProps.data !== this.props.data) {
            this.setState((prop) => {
                return {
                    ...prop,
                    data: this.props.data
                }
            })
        }

        if (prevState.hasInputSearch !== this.state.hasInputSearch) {
            this.setState((prop) => {
                return {
                    ...prop,
                    hasInputSearch: this.state.hasInputSearch
                }
            })
        }
    }

    private templateSelectAreaFilter = (props: any): React.ReactNode => {
        return (
            <div className="flex gap-1 items-center text-xs">
                <span>Category</span>
                <div className="
                    min-w-5 rounded-xl 
                    bg-white
                    text-sky-400 
                    font-semibold">4</div>
                <span className="mr-1">Select</span>
                <BsChevronBarDown size={14} className="mr-0" />
                <BsX size={22} />
            </div>
        )
    }

    private templateItemAreaFilter = (props: any): React.ReactNode => {
        return (
            <span className="block px-3 py-3">{props?.label}</span>
        )
    }

    private handleOnChageColumnPanel = (data: boolean): void | Promise<void> => {
        this.setState((prop) => ({ ...prop, hasColomPanel: data }))
    }

    private itemTemplateColumnPanel = (): React.ReactNode => {
        return (
            <Button
                size="sm"
                className="px-2 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-100 ring-1 ring-slate-300"
                label={<>
                    <div className="flex gap-2 items-center">
                        <BsMapFill size={15} />
                        <span className="text-xs font-semibold">Columns</span>
                    </div>
                </>}
                bgColor="secondary" />
        )
    }

    public componentWillUnmount(): void {
        document
            .removeEventListener(
                "mousedown",
                (ev) => this.handleMouseDown(this.refBtn, ev)
            )
    }

    private CheckBoxSelection({ disabled, checked, onChange }: { disabled?: boolean, checked?: boolean, onChange: (ev: any) => void }): React.ReactNode {
        return (
            <React.Fragment>
                <label className="inline-flex">
                    <input
                        disabled={disabled}
                        checked={checked}
                        onChange={onChange}
                        className="peer hidden"
                        type="checkbox" />
                        <span className="inline-flex justify-center items-center w-5 h-5 border-[1.5px] border-sky-200 rounded-md peer-checked:bg-sky-400">
                            {
                                checked && (
                                    <BsCheck color="white" size={20} />
                                )
                            }
                        </span>
                </label>
            </React.Fragment>
        )
    }

    private settingColumns() {

        const columnOption = React.useMemo(() => [

            this.createColumn.display({
                id: "select-col",
                enableSorting: false,
                header: ({ table }) => (
                    <this.CheckBoxSelection
                        checked={table.getIsAllRowsSelected()}
                        onChange={table.getToggleAllRowsSelectedHandler()} />
                ),
                cell: ({ row }) => (
                    <this.CheckBoxSelection
                        checked={row.getIsSelected()}
                        disabled={!row.getCanSelect()}
                        onChange={row.getToggleSelectedHandler()}
                    />
                ),
                meta: {
                    iconSorting: false
                }
            }),
            this.createColumn.accessor("name", {
                header: "Product Name",
            }),

            this.createColumn.accessor("price", {
                header: "Price",
            }),

            this.createColumn.accessor("stock", {
                header: "Stock",
                cell(props) {
                    return <span>{props.getValue() as any}</span>
                },
            }),

            this.createColumn.accessor("rating", {
                header: "Name"
            }),

            this.createColumn.accessor("category", {
                header: "Category",
                meta: {
                    filterVariant: "select"
                }
            }),

            this.createColumn.accessor("brand", {
                header: "Brand"
            }),

            this.createColumn.display({
                header: "Action",
                cell(props) {
                    return "Action"
                },
            })
        ], []);

        return columnOption;
    }

    private handleInputSeacrh = (): void => {
        this.setState((item) => ({ ...item, hasInputSearch: !this.state.hasInputSearch }))
    }

    private renderHeadOption(table: Table<Array<Product>>): React.ReactNode {
        return (
            <React.Fragment>
                <div
                    className="
                    mb-2 text-sm 
                    inline-flex 
                    flex-wrap gap-3 
                    w-full justify-between 
                    items-center 
                    px-3 py-4 
                    shadow-sm 
                    dark:shadow-none 
                    dark:border-b
                     shadow-slate-300 
                    rounded-sm">
                    <div id="start">
                        {
                            TabsTable.map((val, idx) => (
                                <label
                                    key={idx}
                                    onClick={() => this.setState((props) => ({ ...props, tabTable: [idx, val.toLowerCase()] }))}
                                    className="relative transition-all cursor-pointer duration-200 w-full text-slate-800 dark:text-slate-100 font-semibold mr-7">
                                    <span>{val}</span>
                                    {
                                        idx === this.state.tabTable[0] && (
                                            <div className="absolute rounded-sm -bottom-[1.6rem] left-0 w-full h-[0.18rem] bg-bg-theme-blue" />
                                        )
                                    }
                                </label>
                            ))
                        }
                    </div>
                    <div id="ends" className="flex divide-x divide-slate-300 items-center">
                        <div className="flex gap-2 items-center pr-3">
                            {
                                this.state.hasInputSearch && (
                                    <div ref={this.refBtn} className={`inline-flex justify-center items-center py-2 px-2 border border-slate-300 rounded-lg`}>
                                        <BsSearch className="mr-2" />
                                        <input
                                            placeholder="Search..."
                                            type="text"
                                            onChange={(ev) => this.setState((val) => ({ ...val, selectCategory: [ev.target.value.toString()] }))}
                                            className={`outline-none bg-transparent text-slate-600 dark:text-slate-100`} />
                                    </div>
                                )
                            }
                            {
                                !this.state.hasInputSearch && (
                                    <Button
                                        onClick={this.handleInputSeacrh}
                                        size="sm"
                                        className="px-2 py-1 bg-white dark:bg-slate-700 ring-1 ring-slate-300"
                                        label={<BsSearch size={15} />}
                                        bgColor="secondary" />
                                )
                            }

                            <OverlayPanel
                                item={this.itemTemplateColumnPanel}
                                onChange={this.handleOnChageColumnPanel}
                                isOpen={this.state.hasColomPanel}>
                                <fieldset className="divide-y">
                                    {
                                        table.getAllColumns().map((val, idx) => (
                                            <div key={idx} className="w-[7.5rem] px-2 py-2">
                                                <input
                                                    type="checkbox"
                                                    checked={val.getIsVisible()}
                                                    disabled={!val.getCanHide()}
                                                    onChange={val.getToggleVisibilityHandler()}
                                                    className={`peer/${val.columnDef.header} mr-2`}
                                                    name={`${val.columnDef.header}`}
                                                    id={`${val.columnDef.header + val.id}`} />
                                                <label htmlFor={`${val.columnDef.header + val.id}`} className={`text-xs peer-checked/${val.columnDef.header + val.id}:text-sky-500`}>{val.columnDef.header as any}</label>
                                            </div>
                                        ))
                                    }
                                </fieldset>
                            </OverlayPanel>
                            <Button
                                size="sm"
                                className="px-2 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-100 ring-1 ring-slate-300 hover:bg-slate-300"
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
                <div className="flex justify-between items-center py-2">
                    <div className="flex gap-2 items-center">
                        <Dropdown
                            value={this.selectedCategory[2]}
                            data={this.selectedCategory}
                            onChange={(val) => {
                                table.setGlobalFilter(val.label);
                                toast.info(`Category ${val.label}`, {
                                    position: "bottom-right",
                                    autoClose: 1500
                                })
                            }}
                            divide
                            optionLabel="label"
                            wrapperClass="w-[11.5rem] py-2 px-3"
                            iconRigt={false}
                            itemTemplate={this.templateItemAreaFilter}
                            selectedTemplate={this.templateSelectAreaFilter} />
                    </div>
                    <div
                        onClick={() => table.resetGlobalFilter()} className="w-[7rem] rounded-lg px-3 py-[0.40rem] text-center bg-transparent transition duration-300 border border-slate-500 border-dotted text-sm cursor-pointer hover:bg-slate-400 hover:text-white">Clear</div>
                </div>
            </React.Fragment>
        )
    }

    private renderApp(): React.ReactNode {

        const [pagination, setPagination] = React.useState<PaginationState>({
            pageIndex: 0,
            pageSize: 5
        });

        const [selectionRow, setSelectionRow] = React.useState<{}>({});

        const [columnVisibility, setColumnVisibility] = React.useState<Partial<
            {
                id: boolean,
                name: boolean,
                price: boolean,
                category: boolean,
                stock: boolean,
                description: boolean,
                brand: boolean,
                rating: boolean
            }>
        >({
            id: true,
            name: true,
            price: true,
            category: true,
            stock: true,
            description: true,
            brand: true,
            rating: true
        })

        const table = useReactTable({
            columns: this.settingColumns(),
            data: this.state.data as any,
            state: {
                columnVisibility,
                globalFilter: this.state.selectCategory,
                pagination
            },
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
            getFilteredRowModel: getFilteredRowModel(),
            onColumnVisibilityChange: setColumnVisibility,
            getPaginationRowModel: getPaginationRowModel(),
            onPaginationChange: setPagination,
            onGlobalFilterChange: (filterValue) => this.setState(val => ({ ...val, selectCategory: [filterValue] })),
            debugTable: false,
            debugHeaders: false
        });


        const NumberPagination = (): React.ReactNode => {

            const { pageIndex, pageSize } = pagination;
            const totalPages  = table.getPageCount();
            const currentPage = pageIndex + 1;

            return (
                <React.Fragment>
                    {
                        currentPage > 1 && (
                            <div
                                className="
                                px-[0.4rem] 
                                py-[0.1rem]
                                rounded-full 
                                text-xs 
                                text-slate-700 
                                dark:text-slate-50 
                                font-semibold">
                                { currentPage - 1 }
                            </div>
                        )
                    }
                    <div
                        className="
                            px-[0.4rem] 
                            py-[0.1rem]
                            rounded-full 
                            text-xs 
                            bg-sky-400
                            text-slate-50 
                            dark:text-slate-50 
                            font-semibold">
                        { currentPage }
                    </div>
                    {
                        currentPage < totalPages - 1 && (
                            <>
                                <span>...</span>
                                {
                                    [totalPages - 1, totalPages].map((val, idx) => (
                                        <span
                                            key={idx}
                                            className="
                                            px-[0.4rem] 
                                            py-[0.2rem] 
                                            rounded-full 
                                            w-5 h-5 
                                            text-xs 
                                            text-slate-700 
                                            dark:text-slate-50 
                                            font-semibold">
                                            {val}
                                        </span>
                                    ))
                                }
                            </>
                        )
                    }
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <Card darkMode className="w-full min-h-44 bg-white">
                    <this.renderHeadOption {...table} />
                    <div className="aspect-w-16 aspect-h-9 overflow-x-auto">
                        <table className={`border-collapse rounded-sm shadow-sm shadow-slate-300 dark:shadow-none min-w-full max-md:min-w-[90vh] table-fixed`}>
                            <thead>
                                {
                                    table.getHeaderGroups().map((header) => (
                                        <tr key={header.id} className="shadow-sm shadow-slate-300 dark:shadow-none dark:border-b">
                                            {
                                                header.headers.map((head) => (
                                                    <th key={head.id} className="py-3" colSpan={head.colSpan}>
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
                                    table.getRowModel().rows.map((data, idx) => (
                                        <tr 
                                            key={data.id} 
                                            onClick={data.getToggleSelectedHandler()}
                                            className={`hover:bg-slate-100 ${data.getIsSelected() ? "bg-slate-100 dark:bg-slate-700" : ""} cursor-pointer hover:dark:bg-slate-700`}>
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
                            </tbody>
                        </table>
                        <div className="w-full max-md:min-w-[90vh] py-4 px-3 flex justify-between items-center">
                            <h1><span className="mr-2">Total</span> <span className="px-1 py-1 text-xs text-slate-800  font-semibold rounded-full bg-sky-200">{table.getRowCount()}</span></h1>
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center gap-2 text-sm">
                                    <span>Lines Per Page</span>
                                    <select
                                        value={table.getState().pagination.pageSize}
                                        className="rounded-lg shadow-lg bg-slate-10 p-1 dark:bg-slate-700"
                                        onChange={(e) => { table.setPageSize(Number(e.target.value) as any) }}>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                    </select>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Button
                                        bgColor="secondary"
                                        rounded={false}
                                        onClick={table.previousPage}
                                        disabled={!table.getCanPreviousPage()}
                                        className={`p-0 w-5 h-5 rounded-full bg-transparent focus:ring-0 active:ring-0 ${!table.getCanPreviousPage() ? "cursor-not-allowed" : ""}`}
                                        label={
                                            <>
                                                <BsChevronLeft size={12} />
                                            </>
                                        } />
                                    <NumberPagination />
                                    <Button
                                        bgColor="secondary"
                                        rounded={false}
                                        onClick={table.nextPage}
                                        disabled={!table.getCanNextPage()}
                                        className={`outline-none focus:ring-0 hover:bg-none ring-0 p-0 bg-transparent ${!table.getCanNextPage() ? "cursor-not-allowed" : ""}`}
                                        label={
                                            <>
                                                <BsChevronRight size={12} />
                                            </>
                                        } />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </React.Fragment>
        )
    }

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <this.renderApp />
            </React.Fragment>
        )
    }
}
