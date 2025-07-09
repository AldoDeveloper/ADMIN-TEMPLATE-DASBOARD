import classNames from "classnames";

const SpeedialTW = {         
    speeddial: {
        root: 'absolute flex',
        button: {
            root: ({ state } : any) => ({
                className: classNames('w-16 !h-16 !rounded-full justify-center z-10', {
                    'rotate-45': state.visible
                })
            }),
            label: {
                className: 'hidden'
            }
        },
        menu: 'm-0 p-0 list-none flex items-center justify-center transition delay-200 z-20',
        menuitem: ({ props, state } : any) => ({
            className: classNames(
                'transform transition-transform duration-200 ease-out transition-opacity duration-800',
                !state.visible ? 'opacity-0 scale-0' : 'opacity-1 scale-100',
                {
                    'my-1 first:mb-2': props.direction == 'up' && props.type == 'linear',
                    'my-1 first:mt-2': props.direction == 'down' && props.type == 'linear',
                    'mx-1 first:mr-2': props.direction == 'left' && props.type == 'linear',
                    'mx-1 first:ml-2': props.direction == 'right' && props.type == 'linear'
                },
                { absolute: props.type !== 'linear' }
            )
        }),
        action: {
            className: classNames('flex items-center justify-center rounded-full relative overflow-hidden', 'w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white')
        },
        mask: ({ state }: any) => ({
            className: classNames('absolute left-0 top-0 w-full h-full transition-opacity duration-250 ease-in-out bg-black/40 z-0', {
                'opacity-0': !state.visible,
                'pointer-events-none opacity-100 transition-opacity duration-400 ease-in-out': state.visible
            })
        })
    }
}

export default SpeedialTW;
        