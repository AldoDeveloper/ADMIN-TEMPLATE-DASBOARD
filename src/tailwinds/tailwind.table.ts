import classNames from "classnames";
import { TRANSITIONS } from "./transitions";

export default {
    datatable: {
        root: ({ props }: any) => ({
            className: classNames('relative', {
                'flex flex-col h-full': props.scrollable && props.scrollHeight === 'flex'
            })
        }),
        loadingoverlay: {
            className: classNames(
                'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                'transition duration-200',
                'absolute flex items-center justify-center z-2',
                'dark:bg-slate-800' // Dark Mode
            )
        },
        loadingicon: 'w-8 h-8',
        wrapper: ({ props }: any) => ({
            className: classNames({
                relative: props.scrollable,
                'flex flex-col grow h-full': props.scrollable && props.scrollHeight === 'flex'
            })
        }),
        header: ({ props }: any) => ({
            className: classNames(
                'bg-slate-50 text-slate-700 border-gray-300 font-bold p-4',
                'dark:border-slate-800/20 dark:text-white/80 dark:bg-slate-800', // Dark Mode
                props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0'
            )
        }),
        table: 'w-full border-spacing-1',
        thead: ({ context }: any) => ({
            className: classNames({
                'bg-slate-50 top-0 z-[1]': context.scrollable
            })
        }),
        tbody: ({ props, context }: any) => ({
            className: classNames({
                'sticky z-[1]': props.frozenRow && context.scrollable
            })
        }),
        tfoot: ({ context }: any) => ({
            className: classNames({
                'bg-slate-50 bottom-0 z-[1]': context.scrollable
            })
        }),
        footer: {
            className: classNames(
                'bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-slate-300 font-bold p-4',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-slate-800' // Dark Mode
            )
        },
        column: {
            headercell: ({ context, props }: any) => ({
                className: classNames(
                    'text-left border-0 border-b border-solid border-slate-300 dark:bg-slate-800 font-bold',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50 text-slate-700', // Sort
                    context.sorted ? 'dark:text-white/80 dark:bg-blue-300' : 'dark:text-white/80 dark:bg-slate-800', // Dark Mode
                    {
                        'sticky z-[1]': props.frozen || props.frozen === '', // Frozen Columns
                        'border-x border-y': context?.showGridlines,
                        'overflow-hidden space-nowrap border-y relative bg-clip-padding': context.resizable // Resizable
                    }
                )
            }),
            headercontent: 'flex items-center',
            bodycell: ({ props, context }: any) => ({
                className: classNames(
                    'text-left border-0 border-b border-solid border-gray-300',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:border-slate-200/40 dark:border-1', // Dark Mode
                    {
                        'sticky bg-inherit': props && (props.frozen || props.frozen === ''), // Frozen Columns
                        'border-x border-y': context.showGridlines
                    }
                )
            }),
            footercell: ({ context }: any) => ({
                className: classNames(
                    'text-left border-0 border-b border-solid border-gray-300 font-bold',
                    'bg-slate-50 text-slate-700',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:bg-slate-800 dark:border-blue-900/40', // Dark Mode
                    {
                        'border-x border-y': context.showGridlines
                    }
                )
            }),
            sorticon: ({ context }: any) => ({
                className: classNames('ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70')
            }),
            sortbadge: {
                className: classNames(
                    'flex items-center justify-center align-middle',
                    'rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2',
                    'text-blue-700 bg-blue-50',
                    'dark:text-white/80 dark:bg-blue-400' // Dark Mode
                )
            },
            columnfilter: 'inline-flex items-center ml-auto',
            filteroverlay: {
                className: classNames(
                    'bg-white text-gray-600 border-0 rounded-md min-w-[12.5rem]',
                    'dark:bg-slate-800 dark:border-blue-900/40 dark:text-white/80' //Dark Mode
                )
            },
            filtermatchmodedropdown: {
                root: 'min-[0px]:flex mb-2'
            },
            filterrowitems: 'm-0 p-0 py-3 list-none ',
            filterrowitem: ({ context }: any) => ({
                className: classNames(
                    'm-0 py-3 px-5 bg-transparent',
                    'transition duration-200',
                    context?.highlighted ? 'text-blue-700 bg-blue-100 dark:text-white/80 dark:bg-blue-300' : 'text-gray-600 bg-transparent dark:text-white/80 dark:bg-transparent'
                )
            }),
            filteroperator: {
                className: classNames(
                    'px-5 py-3 border-b border-solid border-gray-300 text-slate-700 bg-slate-50 rounded-t-md',
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-slate-800' // Dark Mode
                )
            },
            filteroperatordropdown: {
                root: 'min-[0px]:flex'
            },
            filterconstraint: 'p-5 border-b border-solid border-gray-300 dark:border-blue-900/40',
            filteraddrule: 'py-3 px-5',
            filteraddrulebutton: {
                root: 'justify-center w-full min-[0px]:text-sm',
                label: 'flex-auto grow-0',
                icon: 'mr-2'
            },
            filterremovebutton: {
                root: 'ml-2',
                label: 'grow-0'
            },
            filterbuttonbar: 'flex items-center justify-between p-5',
            filterclearbutton: {
                root: 'w-auto min-[0px]:text-sm border-blue-500 text-blue-500 px-4 py-3'
            },
            filterapplybutton: {
                root: 'w-auto min-[0px]:text-sm px-4 py-3'
            },
            filtermenubutton: ({ context }: any) => ({
                className: classNames(
                    'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2',
                    'w-8 h-8 rounded-[50%]',
                    'transition duration-200',
                    'hover:text-slate-700 hover:bg-gray-300/20', // Hover
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                    'dark:text-white/70 dark:hover:text-white/80 dark:bg-slate-800', // Dark Mode
                    {
                        'bg-blue-50 text-blue-700': context.active
                    }
                )
            }),
            headerfilterclearbutton: ({ context }: any) => ({
                className: classNames('inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative', 'text-left bg-transparent m-0 p-0 border-none select-none ml-2', {
                    invisible: !context.hidden
                })
            }),
            columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
            rowreordericon: 'cursor-move',
            roweditorinitbutton: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-slate-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                )
            },
            roweditorsavebutton: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-slate-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                )
            },
            roweditorcancelbutton: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                )
            },
            radioButton: {
                className: classNames('relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6')
            },
            radioButtonInput: {
                className: classNames(
                    'w-full h-full top-0 left-0 absolute appearance-none select-none',
                    'p-0 m-0 opacity-0 z-[1] rounded-[50%] outline-none',
                    'cursor-pointer peer'
                )
            },
            radioButtonBox: ({ context }: any) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'h-6 w-6 rounded-full border-2 text-gray-700 transition duration-200 ease-in-out',
                    context.checked
                        ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400 peer-hover:bg-blue-700 peer-hover:border-blue-700'
                        : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-slate-800 peer-hover:border-blue-500',
                    {
                        'hover:border-blue-500 focus:shadow-input-focus focus:outline-none focus:outline-offset-0 dark:hover:border-blue-400 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled,
                    },
                ),
            }),
            radioButtonIcon: ({ context }: any) => ({
                className: classNames(
                    'transform rounded-full',
                    'block h-3 w-3 bg-white transition duration-200 dark:bg-slate-800',
                    {
                        'backface-hidden scale-10 invisible': context.checked === false,
                        'visible scale-100 transform': context.checked === true,
                    },
                ),
            }),
            headercheckboxwrapper: {
                className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
            },
            headercheckbox: ({ context }: any) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-slate-800',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                )
            }),
            headercheckboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
            checkboxwrapper: {
                className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
            },
            checkbox: ({ context }: any) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-slate-800',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                )
            }),
            checkboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
            transition: TRANSITIONS.overlay
        },
        bodyrow: ({ context }: any) => ({
            className: classNames(
                context.selected ? 'bg-blue-50 text-slate-700 dark:bg-slate-500' : 'bg-white text-slate-600 dark:bg-slate-800',
                context.stripedRows ?  'bg-white text-slate-600 dark:bg-slate-600' : 'bg-blue-50/50 text-slate-600 dark:bg-slate-800',
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.10rem]', // Focus
                'dark:text-white/80 dark:focus:outline dark:focus:outline-[0.10rem] dark:focus:outline-slate-300 dark:focus:outline-offset-[-0.10rem]', // Dark Mode
                {
                    'cursor-pointer': context.selectable,
                    'hover:bg-gray-300/20 hover:text-gray-600': context.selectable && !context.selected // Hover
                }
            )
        }),
        rowexpansion: 'bg-white text-gray-600 dark:bg-slate-800 dark:text-white/80',
        rowgroupheader: {
            className: classNames('sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200')
        },
        rowgroupfooter: {
            className: classNames('sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200')
        },
        rowgrouptoggler: {
            className: classNames(
                'text-left m-0 p-0 cursor-pointer select-none',
                'inline-flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-[50%]',
                'transition duration-200',
                'dark:text-white/70' // Dark Mode
            )
        },
        rowgrouptogglericon: 'inline-block w-4 h-4',
        resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
    }
}