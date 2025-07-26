import classNames from "classnames";
import { MenuItem } from "primereact/menuitem";
import { BsCaretLeftFill, BsCaretRightFill, BsGraphUp, BsSpeedometer2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

type MenuItemCustom = MenuItem & { children?: Array<any> };

const renderHeaderMenu = (theme: string) => {
    const bgImage = classNames({
        "/img/circle_red.png"    : theme === "red",
        "/img/circle_green.png"  : theme === "green",
        "/img/circle_tq_blue.png": theme === "tq-blue",
        "/img/circle_purple.png" : theme === "md-purple"
    });
    return bgImage;
}

const itemRender = (item: MenuItemCustom, option: any) => {

    const isChildren = item.children && item.children.length > 0;

    return (
        <NavLink 
            to={item.url as string} 
            end
            className={"relative flex items-center w-full space-x-3 text-gray-500 px-6 py-3"}>
            {
                ({ isActive }) => (
                    <>
                        <div className="flex w-full justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                            {
                                isChildren && (
                                    <span>
                                        <BsCaretRightFill
                                            size={17}
                                            className={"fill-gray-300"} />
                                    </span>
                                )
                            }

                            {
                                isActive && !isChildren && (
                                    <div className="inline-flex transition-all duration-200 absolute top-0 -right-1 mt-4">
                                        <BsCaretLeftFill size={17} />
                                    </div>
                                )
                            }
                        </div>
                    </>
                )
            }
        </NavLink>
    )
};

export const menuItemSidebar = (theme: string): MenuItemCustom[] => {
    return [
        {
            className: "pointer-events-none",
            url: "#",
            visible: true,
            template(item, options) {
                return (
                    <div className="flex justify-start gap-3 items-center pl-8 py-5">
                        <picture>
                            <source srcSet={renderHeaderMenu(theme)} type="image/png" />
                            <img src={renderHeaderMenu(theme)} className="w-[20px]" alt="" />
                        </picture>
                        <h1 className="text-xl text-slate-600 dark:text-slate-100 font-semibold uppercase">Admin</h1>
                    </div>
                )
            },
        },
        {
            separator: true
        },
        {
            label: "Dashboard",
            url: "/dasboard",
            visible: true,
            className: "relative",
            icon: <BsSpeedometer2 size={16} fill={theme} />,
            template: itemRender
            // children: [
            //     {
            //         label: "Sub Dashboard",
            //         url: "/dashboard",
            //         visible: true,
            //     }
            // ]
        },
        {
            label: "Analitic",
            url: "/dasboard/analityc",
            visible: true,
            // className: "pointer-events-none",
            icon: <BsGraphUp size={16} fill={theme}/>,
            template: itemRender,
            // command(event) {
            //     navigate("/dasboard/analityc")
            // },
        }
    ]
}