import React from 'react';
import classNames from 'classnames';
import { PropsComponent } from './interface';

const InputText : React.FC<PropsComponent> = ({className, register, label, classNameLabel, invalid, sizeType , ...rest}) => {

    const isLabel = typeof label === "string";
    const invalidClass = classNames({
        "border-red-400 focus:ring-1 shadow-sm focus:ring-red-400 text-red-600 placeholder-red-400": invalid,
        "border-slate-300 dark:border-slate-400 dark:text-slate-100 text-lg shadow-sm placeholder-slate-400 dark:placeholder-slate-100 focus:text-slate-400 focus:ring-1 dark:focus:ring-2 focus:ring-theme-blue": !invalid
    }) || undefined 

    const typeSizeClassNames = classNames({"py-[0.7rem]" : sizeType === "lg", "py-[0.9rem]" : sizeType === "xl", "py-[0.5rem]" : sizeType === undefined})

    return (
        <React.Fragment>
            {isLabel ? <span className={`block text-sm font-medium text-slate-400 dark:text-slate-200 ${classNameLabel}`}>{label}</span> : label}
            <input className={`rounded-lg bg-white dark:bg-slate-600 mt-1 px-3 ${typeSizeClassNames} block w-full text-sm focus:outline-none border ${invalidClass} transition duration-300 ease-in-out ${className}`} {...register} {...rest} />
        </React.Fragment>
    )
};

export default InputText;