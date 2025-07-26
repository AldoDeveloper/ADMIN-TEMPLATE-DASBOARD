import Button from "@/components/Button";
import Card from "@/components/Card";
import classNames from "classnames";
import { Column, ColumnProps } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { PaginatorTemplateOptions } from "primereact/paginator";
import { Ripple } from "primereact/ripple";
import { Row } from "primereact/row";
import React, { useRef, useState } from "react";
import { BsChevronDown, BsColumns, BsColumnsGap, BsFileExcelFill, BsFilePdfFill, BsTable, BsTrashFill } from "react-icons/bs";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { FaSearch } from "react-icons/fa";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button as PButton } from 'primereact/button';
import * as XLSX from 'xlsx';
import saveAs from 'file-saver'

interface PropsTableDasboard {
    data: Product[]
};

const category = [
    {
        id: 1,
        label: "Electronics"
    },
    {
        id: 2,
        label: "Home Appliances"
    },
    {
        id: 3,
        label: "Photography"
    },
    {
        id: 4,
        label: "Gaming"
    }
];

const TabelDasboard: React.FC<PropsTableDasboard> = ({ data }) => {

    const columRef = useRef<any>(null);

    const [selectionData, setSelectionData] = useState<Array<any>>([]);
    const [selectedCategory, setSelectedCategory] = useState();

    const [filterGlobal, setFilterGLobal] = useState<any>({
        filters: {
            global: {
                value: null,
                matchMode: FilterMatchMode.CONTAINS
            }
        }
    });

    const onSelectedCategory = (value: any) => {
        setSelectedCategory(value);
        setFilterGLobal({
            filters: {
                global: {
                    value: value?.label,
                    matchMode: FilterMatchMode.EQUALS
                }
            }
        })
    }

    const renderBodyAction = (rowData: Product) => {
        return (
            <div className="flex gap-3 justify-center items-center text-slate-100">
                <Button
                    className="px-2"
                    bgColor={"error"}
                    size={"sm"}
                    // onClick={(ev) => confirmDelete(ev, rowData)}
                    label={<BsTrashFill size={20} />} />
            </div>
        )
    };

    const [columnVisible, setColumnVisible] = useState<ColumnProps[]>([
        { field: "id", header: "Id", hidden: false, sortable: true, style: { width: "5%" } },
        { field: "name", header: "Product Name", hidden: false },
        { field: "stock", header: "Stock", hidden: false },
        { field: "price", header: "Price", hidden: false },
        { field: "rating", header: "Rating", hidden: false },
        { field: "category", header: "Category", hidden: false },
        { field: "brand", header: "Brand", hidden: false },
        { header: "Action", hidden: false, body: renderBodyAction }
    ]);

    const headerColumnGroup = (
        <ColumnGroup>
            <Row>
                {
                    columnVisible.map((item, idx) => (
                        <Column {...item} key={idx} />
                    ))
                }
            </Row>
        </ColumnGroup>
    )

    const paginatorTemplate: PaginatorTemplateOptions = {

        layout: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",

        PageLinks(options) {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'disable:opacity-50': true });
                return (
                    <span className={`${className} ml-6`} style={{ userSelect: 'none' }}>
                        ...
                    </span>
                );
            }

            return (
                <button
                    type="button"
                    className={`${options.className} ${options.page === options.currentPage ? "bg-gray-300 shadow-md dark:bg-gray-600 dark:ring-1 dark:ring-blue-500" : ""} w-8 h-8 rounded-lg ml-6 bg-gray-100 dark:bg-gray-800 dark:text-white`}
                    onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            );
        },

        RowsPerPageDropdown(options) {

            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];

            return (
                <Dropdown
                    options={dropdownOptions}
                    value={options.value}
                    style={{ width: 100, height: 40, display: "flex", justifyContent: "center", alignItems: "center" }}
                    size={5}
                    onChange={options.onChange} />
            )
        },
    };

    const itemDropdownFilterCategory = (value: any) => {
        return (
            <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-gray-500" />
                <span>{value?.label}</span>
            </div>
        )
    }

    const valueDropdownFilterCategory = (option: any, props: any) => {

        if (option) {
            return (
                <div className="flex items-center space-x-2 dark:text-white">
                    <span><BsColumnsGap className="fill-purple-500" /></span>
                    <span>{option?.label}</span>
                </div>
            )
        }

        return (
            <div className="flex items-center space-x-2 dark:text-white">
                <span><BsColumnsGap className="fill-purple-500" /></span>
                <span>Category</span>
            </div>
        )
    }

    const headerHeader = () => {

        const handleChangeVisibleColum = (ev: React.ChangeEvent<HTMLInputElement>, value: any) => {

            const checked = ev.target.checked;
            const column = [...columnVisible];

            setColumnVisible(
                column.map((item) => item.field === value?.field ? { ...item, hidden: checked } : item)
            )
        }

        const itemTemplate = (value: any, idx: number) => {
            return (
                <div className="px-3 py-3 flex items-center space-x-3">
                    <input
                        type="checkbox"
                        className="w-4 h-4"
                        onChange={(ev) => handleChangeVisibleColum(ev, value)}
                        checked={value?.hidden}
                    />
                    <span className="block text-xs">{value?.field?.toUpperCase()}</span>
                </div>
            )
        };

        const downloadXlsx = () => {

            const worksheet = XLSX.utils.json_to_sheet(data);
            const workbook = XLSX.utils.book_new();

            XLSX.utils.book_append_sheet(workbook, worksheet, "Product");

            const excelBuffer = XLSX.write(workbook, {
                bookType: "xlsx",
                type: "array"
            })

            const blob = new Blob([excelBuffer], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });

            saveAs(blob, "product.xlsx");
        }

        return (
            <div className="flex justify-between flex-wrap items-center px-6 pt-5">
                <div className="flex items-center max-md:mb-3 space-x-4">
                    <PButton
                        severity="success"
                        label="Export Excel"
                        outlined
                        className="py-3"
                        onClick={downloadXlsx}
                        icon={() => <BsFileExcelFill size={18} />} />

                    <PButton
                        severity="danger"
                        label="Export Pdf"
                        className="py-3"
                        outlined
                        icon={() => <BsFilePdfFill size={18} />} />

                    <PButton
                        severity="warning"
                        icon={() => <BsTable size={18} />}
                    />
                </div>

                <div className="flex flex-wrap items-center space-x-4 max-md:justify-start max-md:space-y-3">
                    <div id="search">
                        <IconField iconPosition="left" className="w-[17rem] max-md:w-full">
                            <InputIcon>
                                <FaSearch size={16} />
                            </InputIcon>
                            <InputText
                                placeholder="Search"
                                onChange={(ev) => setFilterGLobal({
                                    filters: {
                                        global: {
                                            value: ev.target.value as any,
                                            matchMode: FilterMatchMode.CONTAINS
                                        }
                                    }
                                })}
                                className="py-3 w-full focus:shadow-none hover:border-purple-500" />
                        </IconField>
                    </div>

                    <Dropdown
                        options={category}
                        dataKey="label"
                        value={selectedCategory}
                        showClear
                        variant="filled"
                        panelClassName="divide-y"
                        itemTemplate={itemDropdownFilterCategory}
                        valueTemplate={valueDropdownFilterCategory}
                        onChange={(val) => onSelectedCategory(val.value)}
                        style={{ padding: 0, margin: 0 }}
                        className="w-full md:w-[12rem] border-slate-300 dark:text-white hover:border-purple-500"
                        placeholder="Select Category" />

                    <button
                        type="button"
                        onClick={(e) => columRef.current?.toggle(e)}
                        className="flex justify-between focus:border-purple-500 space-x-3 text-slate-500 dark:text-white items-center min-w-[10rem] rounded-md border border-slate-300 px-4 py-3">
                        <div className="flex space-x-2 items-center">
                            <span><BsColumns className="fill-purple-500" /></span>
                            <span>Columns</span>
                        </div>
                        <span>
                            <BsChevronDown />
                        </span>
                    </button>
                    <OverlayPanel ref={columRef} showCloseIcon className="min-w-[10rem] border border-slate-500">
                        <div className="divide-y" aria-label="list">
                            {
                                columnVisible.slice(0, columnVisible.length - 1).map((data, idx) => itemTemplate(data, idx))
                            }
                        </div>
                    </OverlayPanel>
                </div>
            </div>
        )
    }

    return (
        <Card darkMode className="w-full" header={headerHeader}>
            <DataTable
                value={data}
                rows={10}
                className="w-full"
                paginator
                showGridlines
                paginatorClassName="justify-end mt-4"
                paginatorPosition="bottom"
                filters={filterGlobal.filters}
                filterDisplay="row"
                selectionAutoFocus
                selectionMode={"multiple"}
                selection={selectionData}
                dragSelection
                onSelectionChange={(e) => setSelectionData(e.value)}
                paginatorTemplate={paginatorTemplate}
                headerColumnGroup={headerColumnGroup}>
                {
                    columnVisible.map((val, idx) => (
                        <Column key={idx} {...val} />
                    ))
                }
            </DataTable>
        </Card>
    )
}

export default TabelDasboard;