import classNames from "classnames";

const TailwindTree = {
    tree: {
        root: {
            className: classNames('max-w-[30rem] md:w-full', 'border border-solid border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 p-5 rounded-md')
        },
        wrapper: 'overflow-auto',
        container: 'm-0 p-0 list-none overflow-auto',
        node: 'p-1 outline-none',
        content: ({ context, props } : any) => ({
            className: classNames(
                'flex items-center',
                'rounded-lg transition-shadow duration-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'bg-blue-50 text-blue-600': context.selected },
                { 'cursor-pointer select-none': props.selectionMode == 'single' || props.selectionMode == 'multiple' }
            )
        }),
        toggler: ({ context } : any) => ({
            className: classNames(
                'cursor-pointer select-none inline-flex items-center justify-center overflow-hidden relative shrink-0',
                'mr-2 w-8 h-8 border-0 bg-transparent rounded-full transition duration-200',
                'hover:border-transparent focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'text-gray-500 dark:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-800 dark:hover:text-white/80': !context.selected,
                    'text-blue-600 hover:bg-white/30': context.selected
                },
                {
                    hidden: context.leaf
                }
            )
        }),
        checkboxcontainer: 'mr-2',
        checkbox: ({ context, props } : any) => ({
            className: classNames(
                'cursor-pointer inline-flex relative select-none align-bottom',
                'w-6 h-6',
                'flex items-center justify-center',
                'border-2 w-6 h-6 rounded-lg transition-colors duration-200 text-white text-base dark:text-gray-900',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900': !context.checked,
                    'border-blue-500 text-white bg-blue-500 dark:border-blue-400 dark:bg-blue-400': context.checked
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            )
        }),
        nodeicon: 'mr-2 text-gray-600 dark:text-white/70',
        subgroup: {
            className: classNames('m-0 list-none', 'p-0 pl-4')
        },
        filtercontainer: {
            className: classNames('mb-2', 'relative block w-full')
        },
        input: {
            className: classNames(
                'm-0 p-3 text-base w-full pr-7',
                'font-sans text-gray-600 dark:text-white/70 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        searchicon: 'absolute top-1/2 -mt-2 right-3 text-gray-600 dark:hover:text-white/70'
    }
};

export default TailwindTree;
        