import React from "react";
import { DataTable } from 'primereact/datatable';
import { IPropsTabelPrime, IStateTabelPrime } from "./interface";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { BsSearch } from "react-icons/bs";
import { IconField } from 'primereact/iconfield';
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { Card } from "primereact/card";

export default class TablePrime extends React.Component<IPropsTabelPrime, IStateTabelPrime> {

    static defaultProps: IPropsTabelPrime = {
        data: [],
        columns: [],
        isPaginator: true,
        isSelection: false,
        isSearchGlobal: false,
        stripedRows: false,
        showGridlines: false
    };

    public constructor(props: IPropsTabelPrime) {
        super(props);
        this.headerTable = this.headerTable.bind(this);
        this.onChangeSearchGlobal = this.onChangeSearchGlobal.bind(this);
        this.state = {
            filters: {
                global: {
                    value: null,
                    matchMode: FilterMatchMode.CONTAINS,
                }
            },
            column: this.props.columns,
            selection: []
        }
    }

    public componentDidMount(): void {
        if (this.props.selectionMode) {
            this.setState((state) => {
                return {
                    filters: {
                        ...state.filters,
                    },
                    selection: [...state.selection as any],
                    column: [{ selectionMode: "multiple", style: { width: "3rem" } }, ...state.column]
                }
            })
        }
    }

    public componentWillUnmount(): void {

    }

    public componentDidUpdate(prevProps: IPropsTabelPrime, prevState: IStateTabelPrime): void {
        if (prevProps.columns !== this.props.columns) {

        }
    }

    public onChangeSearchGlobal = (e: React.ChangeEvent<HTMLInputElement>): void => {

        this.setState({
            filters: {
                global: {
                    value: e.target.value,
                    matchMode: FilterMatchMode.CONTAINS
                }
            }
        })
    }

    public headerTable(): React.ReactNode {

        return (
            <React.Fragment>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-lg font-semibold dark:text-slate-200">Table</h1>
                    </div>
                    <div>
                        <IconField iconPosition="left">
                            <InputIcon>
                                <BsSearch size={16} />
                            </InputIcon>
                            <InputText onChange={this.onChangeSearchGlobal} className="w-[17.5rem] pl-10" size={10} placeholder="Search" />
                        </IconField>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <Card className="mt-3 rounded-lg">
                    <DataTable
                        sortMode="multiple"
                        sortOrder={-1}
                        value={this.props.data}
                        filters={this.state.filters}
                        paginator
                        rows={10}
                        dataKey={"id"}
                        selectionAutoFocus
                        selectionMode={this.props.selectionMode as any}
                        dragSelection
                        selection={this.state.selection as any}
                        onSelectionChange={(e: any) => this.setState((val) => ({ ...val, selection: [...e.value] }) as any)}
                        header={this.headerTable}
                        paginatorDropdownAppendTo={"self"}
                        rowsPerPageOptions={[5, 10, 20]}
                        showGridlines={this.props.showGridlines}
                        stripedRows={this.props.stripedRows}>
                        {
                            this.state.column.map((col, idx) => (
                                <Column key={idx} {...col} />
                            ))
                        }
                    </DataTable>
                </Card>
            </React.Fragment>
        )
    }
}