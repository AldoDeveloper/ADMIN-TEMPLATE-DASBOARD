import { MenuItem, MenuItemOptions } from "primereact/menuitem";
import { BsChevronBarDown, BsEnvelope, BsHouse, BsSearch, BsStar } from "react-icons/bs";

export const itemsMenuBasic: MenuItem[] = [
    {
        label: 'Home',
        className: "hover:bg-purple-500 hover:text-white"
    },
    {
        label: 'Features',
        className: "hover:bg-purple-500 hover:text-white"
    },
    {
        label: 'Projects',
        className: "hover:bg-purple-500 hover:text-white",
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        className: "hover:bg-purple-500 hover:text-white",
    }
];

const templateMenuBar = (item: MenuItem, option: MenuItemOptions) => {
    return (
        <a className="flex items-center justify-between mr-1 gap-2 py-3 px-3" href="#" >
            <div className="flex items-center gap-2">
                <span>{item.icon()}</span>
                <span>{item.label}</span>
            </div>
            {
                item.items && (
                    <BsChevronBarDown size={16}/>
                )
            }
        </a>
    )
}

export const itemsMenuWithTemplate: MenuItem[] = [
    {
        label: 'Home',
        icon: () => <BsHouse size={22} />,
        className: "hover:bg-purple-500 hover:text-white",
        template: templateMenuBar
    },
    {
        label: 'Features',
        icon: () => <BsStar size={22} />,
        className: "hover:bg-purple-500 hover:text-white",
        template: templateMenuBar
    },
    {
        label: 'Projects',
        icon: () => <BsSearch size={22} />,
        className: "hover:bg-purple-500 hover:text-white",
        template: templateMenuBar,
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: () => <BsEnvelope size={22} />,
        template: templateMenuBar,
        className: "hover:bg-purple-500 hover:text-white"
    }
];