import Card from "@/components/Card"
import classNames from "classnames";
import { BreadCrumb } from "primereact/breadcrumb";
import { MenuItem, MenuItemOptions } from "primereact/menuitem";
import React from "react"
import { BsEjectFill, BsFillBasketFill, BsFillKeyboardFill, BsFillModemFill, BsHouse, BsLaptop } from "react-icons/bs";

const PageBreadcrumb: React.FC<{}> = () => {

    const items1: MenuItem[] = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }];

    
    const templateIcon = (item: MenuItem, options: MenuItemOptions) => {

        const activeClassName = classNames({
            "text-blue-500" : item.label === "Keyboard"
        });

        return (
            <a href={item.url ?? "#"} className={`${activeClassName}`}>
                <span className="flex items-center gap-2">
                    { item.icon() }
                    <span>{item?.label}</span>
                </span>
            </a>
        )
    };

    const items2: MenuItem[] = [
        { 
            label: 'Electronics' , 
            icon: () => <BsEjectFill size={20}/>, 
            template: templateIcon
        },
        { 
            label: 'Computer', 
            icon: () => <BsLaptop size={20}/>,
            template: templateIcon
        },
        { 
            label: 'Accessories', 
            icon: () => <BsFillBasketFill size={20}/>,
            template: templateIcon
        },
        { 
            label: 'Keyboard', 
            icon: () => <BsFillKeyboardFill size={20}/>,
            template: templateIcon
        },
        {
            label: 'Wireless', 
            icon: () => <BsFillModemFill size={20}/>, 
            template: templateIcon
        }
    ];

    const headerBreadcrumb = () => {
        return (
            <h1 className="px-4 py-4 text-xl">Breadcrumb Component</h1>
        )
    };

    const home1 = {
        icon: () => <BsHouse size={20} className="text-gray-500" />
    };

    return (
        <React.Fragment>
            <Card
                header={headerBreadcrumb}
                className="my-2">
                <div className="grid grid-cols-1 gap-3">
                    <div className="w-[60%]">
                        <h1 className="my-3 text-lg font-semibold">Basic Breadcrumb</h1>
                        <BreadCrumb
                            model={items1}
                            home={home1} />
                    </div>
                    <div className="w-[60%]">
                        <h1 className="my-3 text-lg font-semibold">Icon Template Breadcrumb</h1>
                        <BreadCrumb
                            model={items2}
                            home={home1} />
                    </div>
                </div>
            </Card>
        </React.Fragment>
    )
}

export default PageBreadcrumb