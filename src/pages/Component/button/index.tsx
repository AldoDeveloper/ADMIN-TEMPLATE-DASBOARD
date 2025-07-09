import Card from "@/components/Card";
import { Button } from "primereact/button";
import React from "react";
import { BsAlarmFill, BsBank, BsCartDashFill, BsChevronBarRight, BsHouseExclamationFill, BsPersonAdd, BsPersonArmsUp, BsTrash2Fill, BsTrashFill } from "react-icons/bs";
import { Badge } from "primereact/badge";
import { SpeedDialCircle, SpeedDialVertical } from '@/components/SpeedDial'
import { BsEnvelope, BsTelephone, BsGear, BsMenuAppFill, BsHouseExclamation } from "react-icons/bs";
import { toast } from 'react-toastify';
import { SplitButton } from "primereact/splitbutton";
import { MenuItem } from "primereact/menuitem";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

const button_severity = ["info", "success", "danger"];

const ButtonPage: React.FC<{}> = () => {

    const [confirmStatus1, setConfirmStatus1] = React.useState(false);

    const headerBasicButton = () => {
        return (
            <div className="py-2 px-6">
                <h1 className="text-xl font-bold">Basic Button</h1>
            </div>
        )
    };

    const headerSpeedDial = () => {
        return (
            <div className="py-2 px-6">
                <h1 className="text-xl font-bold">Button Speedial</h1>
            </div>
        )
    };

    const headerButtonSpiteButton = () => {
        return (
            <div className="py-2 px-6">
                <h1 className="text-xl font-bold">Splite Button</h1>
            </div>
        )
    };

    const actions = [
        {
            icon: <BsEnvelope size={20} className="fill-blue-500" />,
            onHandle: () => {
                toast("Email clicked", {
                    position: "top-right",
                    autoClose: 1500,
                    type: "info",
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        },
        {
            icon: <BsTelephone size={20} className="fill-blue-500" />,
            onHandle: () => {
                toast("Phone clicked", {
                    position: "top-right",
                    autoClose: 1500,
                    type: "warning",
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        },
        {
            icon: <BsMenuAppFill size={20} className="fill-blue-500" />,
            onHandle: (ev: any) => {
                toast("Menu clicked", {
                    position: "top-right",
                    autoClose: 1500,
                    type: "error",
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        },
        {
            icon: <BsGear size={20} className="fill-blue-500" />,
            onHandle: (ev: any) => {
                toast("Settings clicked", {
                    position: "top-right",
                    autoClose: 1500,
                    type: "warning",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: "bg-orange-500 text-slate-50",
                    bodyClassName: "text-slate-50",
                    progressClassName: "bg-orange-100",
                })
            }
        },
        {
            icon: <BsHouseExclamation size={20} className="fill-blue-500" />,
            onHandle: (ev: any) => {
                toast("House clicked", {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    type: "warning",
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: "bg-cyan-500 text-slate-50",
                    bodyClassName: "text-slate-50",
                    progressClassName: "bg-cyan-100"
                })
            }
        },
        {
            icon: <BsCartDashFill size={20} className="fill-blue-500" />,
            onHandle: (ev: any) => {
                toast("Cart clicked", {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    type: "warning",
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: "bg-teal-500 text-slate-50",
                    bodyClassName: "text-slate-50",
                    progressClassName: "bg-teal-100"
                })
            }
        }
    ];

    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: <BsPersonAdd size={20} className="fill-slate-500" />,
            className: "hover:bg-red-300",
            template(item, options) {
                return (
                    <div className="flex items-center gap-3 px-3 py-2 dark:text-slate-100 hover:dark:bg-slate-800 cursor-pointer">
                        {item?.icon ?? ""}
                        <span className="text-lg">{item.label}</span>
                    </div>
                )
            },
            command: () => {
                confirm1()
                // setConfirmStatus1(true)
            }
        },
        {
            label: 'Delete',
            icon: <BsTrashFill size={20} className="fill-slate-500" />,
            template(item, options) {
                return (
                    <div className="flex items-center gap-3 px-3 py-2 dark:text-slate-100 hover:dark:bg-slate-800 cursor-pointer">
                        {item?.icon ?? ""}
                        <span className="text-lg">{item.label}</span>
                    </div>
                )
            },
            command: () => {
                //
            }
        },
        {
            label: 'React Website',
            icon: <BsAlarmFill size={20} className="fill-slate-500" />,
            template(item, options) {
                return (
                    <div className="flex items-center gap-3 px-3 py-2 dark:text-slate-100 hover:dark:bg-slate-800 cursor-pointer">
                        {item?.icon ?? ""}
                        <span className="text-lg">{item.label}</span>
                    </div>
                )
            },
            command: () => {

            }
        },
        {
            label: 'Upload',
            icon: <BsHouseExclamationFill size={20} className="fill-slate-500" />,
            template(item, options) {
                return (
                    <div className="flex items-center gap-3 px-3 py-2 dark:text-slate-100 hover:dark:bg-slate-800 cursor-pointer">
                        { item?.icon ?? "" }
                        <span className="text-lg">{item.label}</span>
                    </div>
                )
            },
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        console.log("saved")
    };

    const confirm1 = () => {
        confirmDialog({

            group: 'templating',
            
            header: 'Confirmation',

            message: (
                <div className="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border py-2 px-3">
                    <i className="pi pi-exclamation-circle text-6xl text-primary-500"></i>
                    <span>Please confirm to proceed moving forward.</span>
                </div>
            ),

            accept() {
                toast("Update Success", {
                    position: "top-right",
                    autoClose: 1500,
                    type: "success",
                })
            },

            reject() {
                toast("Cancel Success", {
                    position: "top-right",
                    autoClose: 1500,
                    type: "error",
                })
            },
        });
    };

    return (
        <React.Fragment>
            <div className="grid grid-cols-2 max-md:grid-cols-1 max-lg:grid-cols-1 gap-3 mt-3 mb-3 items-start">
                <Card header={headerBasicButton}>
                    <div className="grid grid-cols-1 gap-2">
                        <h1 className="font-semibold">Label Button</h1>
                        <div className="flex gap-2 flex-wrap items-center">
                            <Button label="Basic Button" />
                            <Button rounded icon={() => <BsPersonAdd size={18} />} />
                            <Button iconPos="right">
                                <div className="flex gap-3 items-center">
                                    <BsPersonArmsUp size={16} />
                                    <span>Icon Left</span>
                                </div>
                            </Button>
                            <Button iconPos="right">
                                <div className="flex gap-3 items-center">
                                    <span>Icon Right</span>
                                    <BsPersonArmsUp size={16} />
                                </div>
                            </Button>
                        </div>

                        <h1 className="font-semibold mt-5">Severity Button and Small Button</h1>
                        <div className="flex gap-2 flex-wrap items-center">
                            {
                                button_severity.map((val, idx) => (
                                    <Button
                                        key={idx}
                                        size="small"
                                        severity={val as any}
                                        label={`${val.toUpperCase()}`} />
                                ))
                            }
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-3">
                            <Button label="Small" size="small" />
                            <Button label="Normal" />
                            <Button label="Large" size="large" />
                        </div>

                        <h1 className="font-semibold mt-5">Button Badges</h1>
                        <div className="flex gap-2 flex-wrap items-center">
                            <Button className="relative bg-slate-400 cursor-pointer border-none hover:bg-slate-500">
                                <div className="flex gap-2 items-center">
                                    <Badge value={20} severity={"danger"} />
                                    <label>Badges Left</label>
                                </div>
                            </Button>
                            <Button className="relative bg-orange-400 cursor-pointer active:ring-2 active:ring-orange-700 border-none hover:bg-orange-500">
                                <div className="flex gap-2 items-center">
                                    <label>Right Badges</label>
                                    <Badge value={20} severity={"danger"} />
                                </div>
                            </Button>
                            <Button className="bg-slate-400 cursor-pointer border-none hover:bg-slate-500">
                                <label>Right Badges</label>
                                <div className="absolute inline-block left-0" style={{ top: "-5px" }}>
                                    <Badge value={20} severity={"danger"} className="text-sm" />
                                </div>
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-2 items-center">
                            <div className="mt-5 mb-3">
                                <h1 className="font-semibold mb-2">Button Icon</h1>
                                <div className="flex gap-2 flex-wrap items-center">
                                    <Button
                                        rounded
                                        className="
                                        outline bg-green-500 border-transparent dark:border-2
                                        dark:border-green-300 dark:bg-green-500 
                                        focus:outline-4 focus:outline-green-200"
                                        icon={() =>
                                            <BsPersonAdd
                                                className="dark:fill-slate-50"
                                                size={18} />} />
                                    <Button
                                        rounded
                                        className="outline bg-red-500 border-none focus:outline-4
                                        dark:border-2 dark:border-red-300 dark:bg-red-500
                                         focus:outline-red-200"
                                        icon={() =>
                                            <BsHouseExclamationFill
                                                className="fill-slate-50"
                                                size={18} />} />
                                    <Button
                                        rounded
                                        className="outline bg-orange-500 border-none 
                                        focus:outline-4  
                                        dark:border-2 dark:border-orange-300 dark:bg-orange-500
                                        focus:outline-orange-200"
                                        icon={() =>
                                            <BsPersonAdd
                                                className="fill-white font-semibold"
                                                size={18} />} />
                                    <Button
                                        className="outline bg-blue-500 border-none 
                                        focus:outline-4 
                                        dark:border-2 dark:border-blue-300 dark:bg-blue-500
                                        focus:outline-blue-200"
                                        rounded
                                        icon={() =>
                                            <BsPersonAdd
                                                className="fill-white"
                                                size={18} />} />
                                </div>
                            </div>
                            <div className="mt-5 mb-3">
                                <h1 className="font-semibold mb-2">Button Outline Icon</h1>
                                <div className="flex gap-2 flex-wrap items-center">
                                    <Button
                                        rounded
                                        className="
                                        outline bg-transparent dark:bg-green-100
                                         dark:border-2 focus:outline-2
                                         dark:border-green-500
                                         focus:outline-green-300
                                         ring-green-600/50 border-green-500"
                                        icon={() =>
                                            <BsPersonAdd
                                                className="fill-green-500"
                                                size={18} />} />
                                    <Button
                                        rounded
                                        className="
                                        outline bg-transparent dark:bg-red-100
                                        dark:border-2 dark:border-red-500
                                        focus:outline-2 focus:outline-red-300
                                        border-red-500"
                                        icon={() =>
                                            <BsHouseExclamationFill
                                                className="fill-red-500"
                                                size={18} />} />
                                    <Button
                                        rounded
                                        className="
                                        outline bg-transparent dark:bg-orange-100 focus:outline-2
                                        focus:outline-orange-300 dark:border-2
                                        dark:border-orange-500
                                        border-orange-500"
                                        icon={() =>
                                            <BsBank
                                                className="fill-orange-500"
                                                size={18} />} />
                                    <Button
                                        rounded
                                        className="
                                        outline bg-transparent dark:bg-blue-50 focus:outline-2
                                         focus:outline-blue-300
                                         dark:border-2 dark:border-blue-500
                                         border-blue-500"
                                        icon={() =>
                                            <BsCartDashFill
                                                className="fill-blue-500"
                                                size={18} />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="grid grid-cols-1 gap-3">
                    <Card header={headerSpeedDial}>
                        <div className="grid grid-cols-1 gap-2">

                            <div className="flex items-center flex-wrap justify-evenly gap-2">
                                <div>
                                    <h1 className="text-center font-semibold mb-2">Circle</h1>
                                    <SpeedDialCircle severity={"warning"} data={actions} radius={80} />
                                </div>
                                <div>
                                    <h1 className="text-center font-semibold mb-2">Circle Right</h1>
                                    <SpeedDialCircle
                                        severity="success"
                                        data={actions.slice(0, 3)}
                                        radius={80}
                                        angle={45} />
                                </div>
                                <div>
                                    <h1 className="text-center font-semibold mb-2">Circle Top</h1>
                                    <SpeedDialCircle
                                        severity="info"
                                        data={actions.slice(0, 3)}
                                        radius={80}
                                        angle={-45} />
                                </div>
                            </div>

                            <div className="flex items-center justify-evenly flex-wrap mt-5">
                                <div>
                                    <h1 className="text-center font-semibold mb-2">Top</h1>
                                    <SpeedDialVertical data={actions.slice(0, 3)} position="top" />
                                </div>
                                <div>
                                    <h1 className="text-center font-semibold mb-2">Bottom</h1>
                                    <SpeedDialVertical severity="error" data={actions.slice(0, 4)} position="bottom" />
                                </div>
                                <div>
                                    <h1 className="text-center font-semibold mb-2">Right</h1>
                                    <SpeedDialVertical severity="success" data={actions.slice(0, 3)} position="right" />
                                </div>
                                <div>
                                    <h1 className="text-center font-semibold mb-2">Left</h1>
                                    <SpeedDialVertical severity="warning" data={actions.slice(0, 3)} />
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card header={headerButtonSpiteButton}>
                        <div className="flex items-center flex-wrap gap-2">
                            <SplitButton
                                label="Small"
                                size="small"
                                icon={() => <BsPersonAdd size={20} className="mr-2" />}
                                dropdownIcon={() => <BsChevronBarRight size={14} />}
                                menuClassName="outline-none m-0 p-0 list-none bg-red-400"
                                severity="success"
                                onClick={save} 
                                model={items} />
                            <SplitButton
                                label="Large"
                                size="large"
                                icon={() => <BsPersonAdd size={20} className="mr-2" />}
                                dropdownIcon={() => <BsChevronBarRight size={14} />}
                                menuClassName="outline-none m-0 p-0 list-none bg-red-400"
                                severity="success"
                                onClick={save} model={items} />
                        </div>
                    </Card>
                </div>
            </div>
        <ConfirmDialog 
            maskClassName="rounded-lg" 
            group="templating" 
            acceptClassName="mb-3 bg-green-500 border-none" 
            rejectClassName="mb-3 bg-red-500 border-none" />

        </React.Fragment>
    )
}

export default ButtonPage;