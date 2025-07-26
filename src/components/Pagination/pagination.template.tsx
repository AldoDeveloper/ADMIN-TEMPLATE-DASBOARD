import classNames from "classnames";
import { Dropdown } from "primereact/dropdown";
import { PaginatorTemplateOptions } from "primereact/paginator";
import { Ripple } from "primereact/ripple";

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

export default paginatorTemplate;
