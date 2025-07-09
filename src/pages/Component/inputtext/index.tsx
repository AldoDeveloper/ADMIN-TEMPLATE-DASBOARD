import { Card } from "primereact/card";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import React from "react";
import { BsEnvelope, BsLock } from "react-icons/bs";

const PageInputtext: React.FC = () => {

    const headerCard = () => {
        return (
            <h1 className="px-4 py-4 text-lg font-semibold text-gray-500">Input Text Basic</h1>
        )
    };

    const headerCard2 = () => {
        return (
            <h1 className="px-4 py-4 text-lg font-semibold text-gray-500">Input Validation and Icon</h1>
        )
    };

    const headeCard3 = () => {
        return (
            <h1 className="px-4 py-4 text-lg font-semibold text-gray-500">Input Group</h1>
        )
    }

    return (
        <div className="grid grid-cols-1 gap-3 mt-3">
            <Card header={headerCard}>
                <div className="flex justify-center flex-wrap gap-3 items-center">
                    <div>
                        <span className="block my-1">Input Text Basic</span>
                        <InputText
                            placeholder="Input Basic"
                            className="min-w-[20rem] focus:border-purple-500 focus:shadow-purple-300 hover:border-purple-500" />
                    </div>
                    <div>
                        <span className="block my-1">Input Integer KeyFilter</span>
                        <InputText
                            placeholder="Input Number"
                            keyfilter={"int"}
                            className="min-w-[20rem] focus:shadow-purple-300 focus:border-purple-500 hover:border-purple-500" />
                    </div>
                </div>

                <div className="mt-5 flex justify-center">
                    <div className="flex flex-col gap-3 items-center">
                        <InputText className="py-2 hover:border-purple-500 focus:shadow-purple-300 focus:border-purple-500" placeholder="Small" />
                        <InputText className="py-3 hover:border-purple-500 min-w-[20rem] focus:shadow-purple-300 focus:border-purple-500" placeholder="Normal" />
                        <InputText className="py-5 hover:border-purple-500 focus:shadow-purple-300 focus:border-purple-500 min-w-[25rem]" placeholder="Large" />
                    </div>
                </div>
            </Card>
            <Card header={headerCard2}>
                <div className="flex justify-center flex-col items-center gap-4">
                    <div className="flex gap-4 flex-wrap justify-center items-center">
                        <div>
                            <span className="block mb-2 text-red-500">
                                Username
                            </span>
                            <InputText
                                className="min-w-[22rem] text-red-400 dark:border-red-500 dark:hover:border-red-500 dark:focus:shadow-red-300 dark:text-red-400 hover:border-red-500 border-red-500 focus:border-red-500 focus:shadow-red-300"
                                placeholder="email or username..." />
                            <span className="block text-xs text-red-500 mt-2">
                                Input Username invalid!
                            </span>
                        </div>
                        <div>
                            <span className="block mb-2 text-red-500">
                                Password
                            </span>
                            <InputText
                                className="min-w-[22rem] text-red-400 dark:border-red-500 dark:hover:border-red-500 dark:focus:shadow-red-300 dark:text-red-400 hover:border-red-500 border-red-500 focus:border-red-500 focus:shadow-red-300"
                                placeholder="Password..." />
                            <span className="block text-xs text-red-500 mt-2">
                                Input Password invalid!
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="block mb-2">
                            Email
                        </span>
                        <IconField iconPosition="left">
                            <InputIcon>
                                <BsEnvelope size={20} />
                            </InputIcon>
                            <InputText placeholder="Email Input Icon..." className="min-w-[22rem] pl-12" />
                        </IconField>
                    </div>
                </div>
            </Card>
            <Card header={headeCard3}>
                <div className="flex justify-center gap-3 flex-wrap">
                    <div>
                        <span className="block mb-2">
                            Email
                        </span>
                        <div className="flex">
                            <div className="min-w-12 bg-gray-300 dark:bg-gray-700 rounded-bl-md flex justify-center items-center rounded-tl-md">
                                <BsEnvelope />
                            </div>
                            <InputText placeholder="Input Group" className="rounded-tl-none min-w-[18rem] rounded-bl-none focus:shadow-none" />
                        </div>
                    </div>
                    <div>
                        <span className="block mb-2">
                            Password
                        </span>
                        <div className="flex">
                            <InputText placeholder="Input Group" className="rounded-tr-none min-w-[18rem] rounded-br-none focus:shadow-none" />
                            <div className="min-w-12 bg-gray-300 dark:bg-gray-700 flex justify-center items-center rounded-tr-md rounded-br-md rounded-bl-none">
                                <BsLock />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
};

export default PageInputtext