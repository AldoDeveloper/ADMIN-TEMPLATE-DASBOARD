import Card from "@/components/Card";
import { DataTable, DataTableRowEditCompleteEvent } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import product from '@/data/product'
import { Column, ColumnEditorOptions } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import order from '@/data/orders_with_items.json';
import Button from "@/components/Button";
import { BsFileEarmarkExcel, BsFilePdf, BsPlus, BsSearch, BsTrashFill, BsX } from "react-icons/bs";
import { FaSearch } from "react-icons/fa"
import { Tag } from "primereact/tag";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import TailwindConfirmPopup from "@/tailwinds/tailwind.confirm.popup";
import { toast } from "react-toastify";
import { Button as PrimeButton } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { InputNumber, InputNumberValueChangeEvent } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { FilterMatchMode } from "primereact/api";

const PageTable: React.FC<{}> = () => {

    const [dataOrder, setDataOrder] = useState<typeof order>([]);
    const [statusOrder, setStatusOrder] = useState<string[]>(["Canceled", "Delivered", "Pending", "Processing", "Shipped"]);

    const [filterSearch, setFilterSeacrh] = useState({
        filters: {
            global: {
                value: null,
                matchMode: FilterMatchMode.CONTAINS
            }
        }
    });

    const total = product.slice(0, 7).reduce((prev, { stock }) => prev + stock, 0);
    const total2 = product.reduce((prev, { stock }) => prev + stock, 0);

    const accept = (data: typeof order[0]) => {

        const dataBeforeDelete = dataOrder.filter((val) => val.orderId !== data.orderId);
        setDataOrder(dataBeforeDelete)
        toast("Removed Order Success", {
            position: "top-right",
            autoClose: 2500,
            type: "success",
            containerId: "B"
        })
    };

    const reject = (_data: typeof order[0]) => {
        toast("Removed Cancle", {
            position: "top-right",
            autoClose: 2500,
            type: "warning",
            containerId: "B"
        })
    };

    const confirmDelete = (event: any, data: any) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: () => <BsTrashFill />,
            defaultFocus: 'reject',
            acceptIcon: () => <BsX size={20} />,
            acceptClassName: "bg-red-500",
            accept: () => accept(data),
            reject: () => reject(data)
        });
    };

    const headerTableaBasic = () => {
        return (
            <h1 className="text-xl text-center font-semibold mt-3">Table Header Colum Basic</h1>
        )
    };

    const headerTabelBasic = () => {
        return (
            <h1 className="text-xl text-center font-semibold mt-3">Table Basic</h1>
        )
    };

    const headerTableCrud = () => {
        return (
            <h1 className="text-2xl mx-4 my-3 text-start font-semibold mt-3">Table Crud</h1>
        )
    };

    useEffect(() => {
        setDataOrder(order)
    }, []);

    const statusBodyTemplate = (status: string) => {

        let statusSeverity;
        status = status.toLowerCase();

        if (status === "cancelled") {
            statusSeverity = "danger"
        }

        else if (status === "delivered") {
            statusSeverity = "success"
        }

        else if (status === "pending") {
            statusSeverity = "warning"
        }

        else if (status === "Processing") {
            statusSeverity = "info"
        }

        else {
            statusSeverity = "secondary"
        }

        return <Tag value={status} severity={statusSeverity as any} />
    }

    const priceBodyTemplate = (rowData: typeof order[0]) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    const totalBodyTemplate = (rowData: typeof order[0]) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.total);
    };


    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header={"No"} rowSpan={2} />
                <Column colSpan={1} />
                <Column
                    header={"Product"}
                    colSpan={3} />
            </Row>
            <Row>
                <Column header="Product" />
                <Column header="Category" />
                <Column header="Stock" />
            </Row>
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column colSpan={3} footer={"Total Stock"} footerStyle={{ textAlign: "center" }} />
                <Column footer={total} />
            </Row>
        </ColumnGroup>
    );

    const headerOrderGroup = (
        <ColumnGroup>
            <Row>
                <Column header={"Order ID"} rowSpan={2} bodyStyle={{ textAlign: 'center' }} />
                <Column colSpan={2} header={"Info Order"} style={{ textAlign: "center" }} />
                <Column colSpan={3} header={"Total Sum Order"} />
                <Column colSpan={3} header={"Data Edit/Action"} />
            </Row>
            <Row>
                <Column header={"Name"} />
                <Column header={"Status"} />
                <Column header={"Price"} />
                <Column header={"Qty"} />
                <Column header={"Total"} />
                <Column header={"Tanggal"} />
                <Column header={"Action"} headerStyle={{ textAlign: 'center' }} rowSpan={2} colSpan={2} />
            </Row>
        </ColumnGroup>
    )

    const footerGroupTableBasic = (
        <ColumnGroup>
            <Row>
                <Column colSpan={3} footer={"Total All Stock"} footerStyle={{ textAlign: "center" }} />
                <Column footer={total2} />
            </Row>
        </ColumnGroup>
    );

    const onRowEditComplete = (e: DataTableRowEditCompleteEvent) => {
        const _orders = [...dataOrder];
        const { newData, index } = e
        _orders[index] = newData as typeof order[0];
        setDataOrder(_orders);

        toast(`Update Order ${_orders[index].orderId} Success`, {
            containerId: "B",
            type: "success",
            position: "top-right",
            theme: "colored",
            autoClose: 1500
        })
    }

    const renderBodyAction = (rowData: typeof order[0]) => {
        return (
            <div className="flex gap-3 justify-center items-center text-slate-100">
                <Button
                    className="px-2"
                    bgColor={"error"}
                    size={"sm"}
                    onClick={(ev) => confirmDelete(ev, rowData)}
                    label={<BsTrashFill size={20} />} />
            </div>
        )
    };

    const textEditor = (options: ColumnEditorOptions) => {
        return (
            <InputText
                type="text"
                value={options.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => options.editorCallback!(e.target.value as any)}
            />
        )
    };

    const statusEditor = (options: ColumnEditorOptions) => {
        return (
            <Dropdown
                value={options.value}
                options={statusOrder}
                onChange={(e: DropdownChangeEvent) => options.editorCallback!(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return statusBodyTemplate(option)
                }}
            />
        );
    };

    const priceEditor = (options: ColumnEditorOptions) => {
        return <InputNumber
            value={options.value}
            onValueChange={(e: InputNumberValueChangeEvent) => options.editorCallback!(e.value)}
            mode="currency"
            currency="USD"
            locale="en-US" />;
    };

    const numberEditor = (option: ColumnEditorOptions) => {
        return (
            <div className="flex-auto">
                <InputNumber
                    value={option.value}
                    min={0}
                    max={Infinity}
                    onValueChange={(e) => option.editorCallback!(e.value)}
                    mode="decimal"
                />
            </div>
        )
    }

    const editorDate = (option: ColumnEditorOptions) => {
        return (
            <Calendar
                value={new Date(option.value)}
                dateFormat="dd/mm/yy"
                onChange={(val) => option.editorCallback!(val.value?.toLocaleDateString())} />
        )
    };

    const onSearchGlobal = (e: any) => {
        setFilterSeacrh({
            filters: {
                global: {
                    value: e.target.value,
                    matchMode: FilterMatchMode.CONTAINS
                }
            }
        })
    }

    return (
        <React.Fragment>
            <div className="grid grid-cols-2 items-start max-md:grid-cols-1 gap-4">
                <Card className="my-2" header={headerTabelBasic} headerClassName="px-4 py-2">
                    <DataTable
                        value={product}
                        showGridlines
                        rows={8}
                        onValueChange={(value) => console.log(value)}
                        footerColumnGroup={footerGroupTableBasic}
                        paginator
                        className="w-full">
                        <Column field="id" header="No" sortable />
                        <Column field="name" header="Product" sortable />
                        <Column field="category" header="Category" sortable />
                        <Column field="stock" header="Stock" sortable />
                    </DataTable>
                </Card>
                <div className="col-span-1">
                    <Card className="my-2" header={headerTableaBasic} headerClassName="px-4 py-2">
                        <DataTable
                            headerColumnGroup={headerGroup}
                            footerColumnGroup={footerGroup}
                            dragSelection
                            showGridlines={false}
                            value={product.slice(0, 7)}
                            className="w-full">
                            <Column field="id" header="No" sortable />
                            <Column field="name" header="Product" sortable />
                            <Column field="category" header="Category" sortable />
                            <Column field="stock" header="Stock" sortable />
                        </DataTable>
                    </Card>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <Card className="my-2 w-full" header={headerTableCrud}>
                    <div className="my-3 flex justify-between max-md:flex-wrap max-md:flex-col-reverse max-md:gap-3 items-center">
                        <div className="flex items-center gap-2">
                            <PrimeButton
                                size="small"
                                severity="info"
                                // rounded
                                label="Add Order"
                                className="bg-purple-500 border-none hover:bg-purple-600"
                                icon={() => <BsPlus size={22} color="white" />} />

                            <PrimeButton
                                size="small"
                                severity="success"
                                label="Export Excel"
                                iconPos="left"
                                icon={() => <BsFileEarmarkExcel size={20} color="white" className="mr-2" />}
                            />

                            <PrimeButton
                                size="small"
                                severity="danger"
                                label="Export Pdf"
                                iconPos="left"
                                icon={() => <BsFilePdf size={20} color="white" className="mr-2" />}
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <IconField iconPosition="left">
                                    <InputIcon>
                                        <FaSearch size={16} className="ml-2" />
                                    </InputIcon>
                                    <InputText
                                        onChange={onSearchGlobal}
                                        className="w-[17rem] pl-11"
                                        size={10}
                                        placeholder="Search" />
                                </IconField>
                            </div>
                        </div>
                    </div>
                    <DataTable
                        value={dataOrder}
                        dataKey={"orderId"}
                        className="w-full"
                        headerColumnGroup={headerOrderGroup}
                        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                        paginator
                        filters={filterSearch.filters}
                        filterDisplay="row"
                        editMode="row"
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        rows={10}
                        onRowEditComplete={(e) => onRowEditComplete(e)}
                        showGridlines>

                        <Column
                            field="orderId"
                            header={"ID"}
                            sortable
                            editor={(options) => textEditor(options)}
                            headerStyle={{ textAlign: "center" }} />

                        <Column
                            field="customerName"
                            header={"Name"}
                            editor={(options) => textEditor(options)}
                            sortable />

                        <Column
                            field="status"
                            header={"Status"}
                            bodyStyle={{ textAlign: "center" }}
                            editor={(option) => statusEditor(option)}
                            body={(option) => statusBodyTemplate(option.status)}
                            sortable />

                        <Column
                            field="price"
                            header={"Price"}
                            editor={(option) => priceEditor(option)}
                            body={priceBodyTemplate} />

                        <Column
                            field="quantity"
                            header={"Qty"}
                            editor={(option) => numberEditor(option)}
                            sortable />

                        <Column
                            field="total"
                            header={"Total"}
                            sortable
                            editor={(option) => priceEditor(option)}
                            body={totalBodyTemplate} />

                        <Column
                            field="orderDate"
                            header={"Date"}
                            editor={(option) => editorDate(option)}
                            body={(option) => <span>{new Date(option?.orderDate).toLocaleDateString()}</span>}
                            sortable />

                        <Column
                            rowEditor
                            headerStyle={{ width: '10%', minWidth: '5rem' }}
                            bodyStyle={{ textAlign: 'center' }} />

                        <Column
                            header={"Action"}
                            body={renderBodyAction}
                            headerStyle={{ textAlign: "center", width: "10%", minWidth: "5rem" }} />
                    </DataTable>
                </Card>
            </div>
            <ConfirmPopup
                pt={{ ...TailwindConfirmPopup.confirmpopup as any }}
            />
        </React.Fragment>
    );
};

export default PageTable;