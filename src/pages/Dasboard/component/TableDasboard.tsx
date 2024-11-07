import React from "react";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable, getSortedRowModel, getFilteredRowModel, Table } from '@tanstack/react-table';
import Card from "@component/Card";
import Button from "@component/Button";
import { BsChevronBarDown, BsDiagram3, BsDownload, BsMapFill, BsSearch, BsX } from "react-icons/bs";
import Dropdown from "@/components/Dropdowns";
import OverlayPanel from "@/components/Overlay/Panel";

type PropsComponentTable = {
    data: Array<Product>;
}

type StateComponentTable = {
    data: PropsComponentTable["data"];
    hasInputSearch: boolean;
    hasColomPanel: boolean;
};


export default class TableDasboard extends React.Component<PropsComponentTable, StateComponentTable> {

    private createColumn = createColumnHelper<Array<Product>>();
    private refBtn = React.createRef<HTMLDivElement>();

    static defaultProps: PropsComponentTable = {
        data: [],
    };

    public constructor(props: PropsComponentTable) {
        super(props);
        this.state = {
            data: props.data,
            hasInputSearch: false,
            hasColomPanel: false
        };
        this.renderHeadOption = this.renderHeadOption.bind(this);
        this.renderApp = this.renderApp.bind(this);
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

    public componentDidUpdate(prevProps: Readonly<PropsComponentTable>, prevState: Readonly<StateComponentTable>, snapshot?: any): void {

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
            <div className="flex gap-2 items-center text-xs">
                <span>Area</span>
                <div className="w-5 rounded-xl bg-slate-100 text-sky-400 font-semibold">4</div>
                <span>Selected</span>
                <BsChevronBarDown size={14} className="mr-0" />
                <BsX size={22} />
            </div>
        )
    }

    private templateItemAreaFilter = (props: any): React.ReactNode => {
        return (
            <span className="block px-3 py-3">{props?.name}</span>
        )
    }

    private handleOnChageColumnPanel = (data: boolean): void | Promise<void> => {
        this.setState((prop) => ({ ...prop, hasColomPanel: data }))
    }

    private itemTemplateColumnPanel = (): React.ReactNode => {
        return (
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
        )
    }

    public componentWillUnmount(): void {
        document.removeEventListener("mousedown", (ev) => this.handleMouseDown(this.refBtn, ev))
    }

    private settingColumns() {

        const columnOption = React.useMemo(() => [

            this.createColumn.accessor("id", {
                header: "ID",
                enableHiding: false
            }),

            this.createColumn.accessor("name", {
                header: "Product Name",
            }),

            this.createColumn.accessor("price", {
                header: "Price"
            }),

            this.createColumn.accessor("stock", {
                header: "Stock"
            }),

            this.createColumn.accessor("rating", {
                header: "Name"
            }),

            this.createColumn.accessor("category", {
                header: "Category"
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
                <div className="mb-2 text-sm inline-flex flex-wrap gap-3 w-full justify-between items-center px-3 py-4 shadow-sm dark:shadow-none dark:border-b shadow-slate-300 rounded-sm">
                    <div id="start">
                        <label className="relative transition-all cursor-pointer duration-200 w-full text-slate-500 font-semibold mr-7">
                            <span>Product</span>
                            <div className="absolute rounded-sm -bottom-[1.6rem] left-0 w-full h-[0.18rem] bg-bg-theme-blue" />
                        </label>
                        <label className="relative text-slate-500 font-semibold mr-7 cursor-pointer">
                            <span>Store</span>
                            {/* <div className="absolute rounded-sm -bottom-[1.1rem] left-0 w-full h-[0.20rem] bg-sky-400"/> */}
                        </label>
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
                                            onChange={(ev) => table.setGlobalFilter(ev.target.value.toString())}
                                            className={`outline-none bg-transparent text-gray-700`} />
                                    </div>
                                )
                            }
                            {
                                !this.state.hasInputSearch && (
                                    <Button
                                        onClick={this.handleInputSeacrh}
                                        size="sm"
                                        className="px-2 py-1 bg-white ring-1 ring-slate-300"
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
                <div className="flex justify-between items-center py-2">
                    <div className="flex gap-2 items-center">
                        <Dropdown
                            value={{ name: "Test1" }}
                            data={[{ name: "Test1" }, { name: "Test2" }]}
                            onChange={(val) => { }}
                            divide
                            optionLabel="name"
                            wrapperClass="w-[11.5rem] py-2 px-3"
                            iconRigt={false}
                            itemTemplate={this.templateItemAreaFilter}
                            selectedTemplate={this.templateSelectAreaFilter} />
                    </div>
                    <div className="w-[7rem] rounded-lg px-3 py-[0.40rem] text-center bg-transparent transition duration-300 border border-slate-500 border-dotted text-sm cursor-pointer hover:bg-slate-400 hover:text-white">Clear</div>
                </div>
            </React.Fragment>
        )
    }

    private renderApp(): React.ReactNode {

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
            name: false, 
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
            state: { columnVisibility },
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
            getFilteredRowModel: getFilteredRowModel(),
            onColumnVisibilityChange: setColumnVisibility,
            debugTable: true,
            debugHeaders: false
        });

        return (
            <React.Fragment>
                <Card darkMode={false} className="w-full min-h-44 bg-white dark:bg-slate-700">
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
                                                                    <div {
                                                                        ...{
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
                                                                            [head.column.getIsSorted() as string] ?? <span className="font-light text-xs"> &#x1F859;</span>}
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
                                        <tr key={data.id} className="hover:bg-slate-100 hover:dark:bg-slate-600 rounded-sm">
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
                                    <td colSpan={6} className="rounded-sm shadow-sm dark:shadow-none dark:border-b shadow-slate-200 px-6 py-3">
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
