import Card from "@/components/Card";
import React from "react"
import { list_toast } from "./data";
import Button from "@/components/Button";
import { toast, ToastContainer } from 'react-toastify';

const colored_toast = ["success", "error", "warning", "info"];

const ToastPage: React.FC<any> = () => {

    const handleToast = (data: any) => {
        toast(data.name, {
            position: data.position,
            autoClose: 3000,
            type: data.type,
            hideProgressBar: false,
        })
    };
    const handleToastColored = (data: any) => {
        toast(data, {
            position: "top-right",
            autoClose: 3000,
            type: data,
            theme: "colored",
            hideProgressBar: false,
        })
    }

    const headerToast = () => {
        return (
            <h1 className="text-xl font-semibold">Component Toast Position</h1>
        )
    };

    const headerToastColored = () => {
        return (
            <h1 className="text-lg font-semibold">Component Toast Colored</h1>
        )
    };

    const headerToastTheme = () => {
        return (
            <h1 className="text-lg font-semibold">Component Toast Theme</h1>
        )
    }

    return (
        <React.Fragment>
            <Card className="my-2" header={headerToast()} headerClassName="px-4 py-2">
                <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 p-4">
                    {
                        list_toast.map((val, idx) => (
                            <Button
                                label={val.name}
                                className="text-white px-3 font-semibold"
                                size="lg"
                                onClick={() => handleToast(val)}
                                bgColor={val.type as any}
                                key={idx} />
                        ))
                    }
                </div>
            </Card>
            <div className="grid grid-cols-2 items-start max-md:grid-cols-1 gap-3">
                <Card header={headerToastColored()} headerClassName="px-4 py-2">
                    <div className="grid grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 items-center gap-4">
                        {
                            colored_toast.map((val, idx) => (
                                <Button
                                    label={`colored ${val}`}
                                    className="text-white px-3 font-semibold"
                                    size="lg"
                                    onClick={() => handleToastColored(val)}
                                    bgColor={val as any}
                                    key={idx} />
                            ))
                        }
                    </div>
                </Card>
                <Card header={headerToastTheme()} headerClassName="px-4 py-2">
                    <div className="flex justify-center items-center gap-4">
                        <Button
                            label={"Theme Dark"}
                            onClick={() => {
                                toast("Toast Theme Dark", {
                                    position: "top-right",
                                    containerId: "A",
                                    type: "success"
                                })
                            }
                            }
                            className="px-3 text-slate-50 font-semibold" />
                        <Button
                            label={"Theme Light"}
                            className="px-3 text-slate-50 font-semibold"
                            onClick={() => {
                                toast("Toast Theme Light", {
                                    position: "top-right",
                                    containerId: "B",
                                    type: "success"
                                })
                            }
                            }
                        />
                    </div>
                </Card>
            </div>
        </React.Fragment>
    )
};

export default ToastPage;