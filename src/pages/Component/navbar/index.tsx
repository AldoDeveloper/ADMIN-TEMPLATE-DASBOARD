import { Card } from "primereact/card";
import { Menubar } from "primereact/menubar";
import React from "react";
import { BsBellFill, BsEnvelope, BsThreeDotsVertical } from "react-icons/bs";
import { itemsMenuBasic, itemsMenuWithTemplate } from "./data";
import { InputText } from "primereact/inputtext";
import Avatar from "react-avatar";

const PageNavbar: React.FC = () => {

    const titleCardTemplate = () => {
        return (
            <div className="flex justify-between items-center">
                <h1 className="text-gray-500">Navbar Basic Component</h1>
                <span>
                    <BsThreeDotsVertical size={22} />
                </span>
            </div>
        )
    };

    const titleCardTemplateNavbar = () => {
        return (
            <div className="flex justify-between items-center">
                <h1 className="text-gray-500">Navbar Template with icon</h1>
                <span>
                    <BsThreeDotsVertical size={22} />
                </span>
            </div>
        )
    }

     const titleCardTemplateNavbar2 = () => {
        return (
            <div className="flex justify-between items-center">
                <h1 className="text-gray-500">Navbar Template Custom</h1>
                <span>
                    <BsThreeDotsVertical size={22} />
                </span>
            </div>
        )
    };

    const start =(
        <div className="flex items-center gap-2">
            <img src="/img/circle_purple.png" width={35} className="mr-3"/>
            <span className="font-semibold text-lg">Admin</span>
        </div>
    )
    const end = () => {
        return(
            <div className="flex items-center gap-5">
                <BsEnvelope size={22}/>
                <BsBellFill size={22}/>
                <Avatar 
                    round
                    className="bg-purple-500 w-10" 
                    size="35" 
                    name="Aldo Ratmaawan"/>
                
            </div>
        )
    }
    return (
        <div className="grid grid-cols-1">
            <Card title={titleCardTemplate} className="my-2">
                <div className="grid grid-cols-3 max-md:grid-cols-1 text-gray-500">
                    <div className="col-span-2">
                        <Menubar
                            className="bg-slate-100 border-none shadow-md"
                            model={itemsMenuBasic} />
                    </div>
                </div>
            </Card>
            <Card title={titleCardTemplateNavbar} className="my-2">
                <div className="grid grid-cols-3 max-md:grid-cols-1 text-gray-500">
                    <div className="col-span-2">
                        <Menubar
                            className="bg-slate-100 border-none shadow-md"
                            model={itemsMenuWithTemplate} />
                    </div>
                </div>
            </Card>
            <Card title={titleCardTemplateNavbar2} className="my-2">
                <div className="grid grid-cols-3 max-md:grid-cols-1 text-gray-500">
                    <div className="col-span-3">
                        <Menubar
                            start={start}
                            end={end}
                            className="bg-slate-100 flex justify-between items-center border-none shadow-md"
                            model={itemsMenuWithTemplate} />
                    </div>
                </div>
            </Card>
        </div>
    )
};

export default PageNavbar;