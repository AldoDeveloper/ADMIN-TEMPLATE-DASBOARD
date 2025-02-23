import React from "react";
import { PropsPagination } from "./interface";
import Button from "@component/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination: React.FC<PropsPagination> = ({ space, pagination, totalPages, onNextPage, onPreviousPage, onSetIndexPage, canPreviousPage, canNextPage, onFirstPage, onSetPageSize }) => {

    const { pageIndex, pageSize } = pagination;
    const currentPage = pageIndex + 1;

    const NumberPagination: React.FC = (): React.ReactNode => {
        return (
            <React.Fragment>
                {
                    currentPage >= totalPages - 1 && totalPages > 2 && (
                        <>
                            <span
                                onClick={onFirstPage}
                                className="text-[0.8rem] cursor-pointer px-[0.4rem] py-[0.2rem] rounded-full w-5 h-5 text-xs text-slate-700 dark:text-slate-50 font-semibold">
                                1
                            </span>
                            <span>....</span>
                        </>
                    )
                }

                {
                    currentPage > 1 && (
                        <div onClick={() => onSetIndexPage(currentPage - 1)} className="text-[0.8rem] cursor-pointer px-[0.4rem] py-[0.1rem] rounded-full text-xs text-slate-700 dark:text-slate-50 font-semibold">
                            {currentPage - 1}
                        </div>
                    )
                }

                <div onClick={() => onSetIndexPage(currentPage)} className="text-[0.8rem] cursor-pointer px-[0.4rem] py-[0.1rem] rounded-full bg-sky-400 text-slate-50 dark:text-slate-50 font-semibold">
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
                                        onClick={() => onSetIndexPage(val - 1)}
                                        className="text-[0.8rem] cursor-pointer px-[0.4rem] py-[0.2rem] rounded-full w-5 h-5 text-xs text-slate-700 dark:text-slate-50 font-semibold">
                                        {val}
                                    </span>
                                ))
                            }
                        </>
                    )
                }
            </React.Fragment>
        )
    };

    return (
        <React.Fragment>
            <div className={`flex gap-${space ?? 4} items-center`}>
                <div className="flex gap-4 items-center">
                    <span className="text-sm">Lines Per Page</span>
                    <select
                        value={pagination.pageSize}
                        onChange={(e) => onSetPageSize(Number(e.target.value))}
                        className="rounded-lg text-sm shadow-lg bg-slate-10 p-1 dark:bg-slate-700">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
                <Button
                    bgColor="secondary"
                    rounded={false}
                    onClick={onPreviousPage}
                    disabled={!canPreviousPage}
                    className={`p-0 rounded-full dark:hover:bg-slate-600 hover:bg-slate-200 bg-transparent focus:ring-0 active:ring-0 ${!canPreviousPage ? "cursor-not-allowed" : ""}`}
                    label={
                        <>
                            <span className="w-8 h-5 rounded-full flex items-center justify-center bg-transparent">
                                <BsChevronLeft size={14} />
                            </span>
                        </>
                    } />
                <NumberPagination />
                <Button
                    key={`next_${new Date().getTime()}`}
                    bgColor="secondary"
                    rounded={false}
                    onClick={onNextPage}
                    disabled={!canNextPage}
                    className={`outline-none focus:ring-0 dark:hover:bg-slate-600 hover:bg-slate-200 ring-0 p-0 bg-transparent ${!canNextPage ? "cursor-not-allowed" : ""}`}
                    label={
                        <>
                            <span className="w-8 h-5 rounded-full flex items-center justify-center bg-transparent">
                                <BsChevronRight size={14} />
                            </span>
                        </>
                    } />
            </div>
        </React.Fragment>
    )
};

export default Pagination;