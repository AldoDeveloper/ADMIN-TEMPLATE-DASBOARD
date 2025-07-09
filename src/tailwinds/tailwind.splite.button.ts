import classNames from "classnames";

const TRANSITIONS = {
    overlay: {
        enterFromClass   : 'opacity-0 scale-75',
        enterActiveClass : 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass : 'transition-opacity duration-150 ease-linear',
        leaveToClass     : 'opacity-0'
    }
};

const TailwindSpliteButton = {  

    splitbutton: {

        root: ({ props } : any) => ({
            className: classNames('inline-flex relative', 'rounded-md', { 'shadow-lg': props.raised })
        }),
        
        button: {
            root: ({ parent } : any) => ({
                className: classNames('rounded-r-none border-r-0', { 'rounded-l-full': parent.props.rounded })
            }),
            icon: 'mr-2'
        },

        menu: {
            className: classNames('outline-none', 'm-0 p-0 list-none')
        },

        menulist: 'relative',

        menubutton: {
            root: ({ parent } : any) => ({
                className: classNames('rounded-l-none', { 'rounded-r-full': parent.props.rounded })
            }),
            label: 'hidden'
        }
    }
}

export default TailwindSpliteButton;
        