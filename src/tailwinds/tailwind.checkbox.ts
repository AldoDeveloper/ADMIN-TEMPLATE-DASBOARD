import classNames from "classnames";

export default{
    checkbox: {
        root: {
            className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
        },
        input: {
            className: classNames('absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer')
        },
        box: ({ props, context } : any) => ({
            className: classNames(
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                {
                    'border-slate-300 bg-white dark:border-slate-500/40 dark:bg-slate-800': !context.checked,
                    'border-slate-500 bg-blue-500 dark:border-slate-400 dark:bg-blue-400': context.checked
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            )
        }),
        icon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900'
    }
}