import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown, DropdownFilterOptions } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { BsX } from "react-icons/bs";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const PageAccount: React.FC = () => {

    const [conuntries, setCountries] = useState<Array<any>>([]);
    const [selectCountry, setSelectCountry] = useState(null);
    const [phone, setPhone] = useState("62");

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags")
            .then(async (res) => setCountries(await res.json()))
    }, []);

    const headerCard = () => {
        return (
            <div className="flex justify-between items-center mt-2">
                <h1></h1>
            </div>
        )
    };

    const itemTemplateCountry = (data: any) => {
        return (
            <div className="flex space-x-3 items-center">
                <img src={`${data.flags?.png}`} width={20} />
                <span>{data?.name?.common}</span>
            </div>
        )
    };

    const valueTemplateCountry = (data: any) => {
        if (data) {
            return (
                <div className="flex space-x-4 items-center">
                    <img src={`${data?.flags?.png}`} width={20} />
                    <span>{data?.name?.common}</span>
                </div>
            )
        }
        return <span className="text-gray-500">Select Country</span>
    };

    return (
        <Card header={headerCard}>
            <div className="grid grid-cols-3 max-md:grid-cols-1">
                <div className="col-span-2">
                    <header className="w-full flex justify-between items-center border-b border-b-gray-300 pb-5">
                        <div>
                            <h1 className="font-semibold text-xl">Personal Info</h1>
                            <span className="block text-sm mt-1">Update Personal Your deail</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button
                                label="Cancel"
                                outlined
                                className="min-w-[7rem] py-3 rounded-lg text-lg"
                                severity="success"
                                size="small" />

                            <Button
                                label="Save"
                                className="min-w-[7rem] py-3 rounded-lg text-lg"
                                severity="success"
                                size="small" />
                        </div>
                    </header>

                    <div className="flex flex-col space-y-8 py-5">
                        <div className="flex items-center">
                            <div className="flex-initial w-60 font-semibold text-gray-500">
                                <span>Your Photo</span>
                            </div>
                            <div className="flex-initial">
                                <div className="flex items-center gap-5">
                                    <div>
                                        <Avatar name="Jhon Doe" round size="45" />
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-3">
                                            <label className="bg-white ring-1 text-sm ring-purple-500  text-gray-500 hover:text-white px-3 py-2 rounded-full cursor-pointer hover:bg-purple-500">
                                                Upload Image
                                                <input
                                                    type="file"
                                                    // onChange={handleFileChange}
                                                    className="hidden"
                                                />
                                            </label>
                                            <span className="text-sm text-gray-500">No File Choose</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex-initial w-60 font-semibold text-gray-500">
                                <span>Full Name</span>
                            </div>
                            <div className="flex-initial w-full">
                                <InputText placeholder="Full Name" className="w-full py-3" />
                            </div>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex-initial w-60 font-semibold text-gray-500">
                                <span>Email</span>
                            </div>
                            <div className="flex-initial w-full">
                                <InputText placeholder="Email" className="w-full py-3" />
                            </div>
                        </div>

                        <div className="flex items-center w-full">
                            <div className="flex-initial w-60 font-semibold text-gray-500">
                                <span>Phone Number</span>
                            </div>
                            <PhoneInput
                                containerClass="w-full"
                                onChange={(val) => setPhone(val)}
                                value={phone}
                                inputStyle={{ paddingLeft: 50, paddingBottom: 25, borderRadius: "7px", paddingTop: 25, width: "100%" }} 
                                country={"ID"} />
                        </div>
                         <div className="flex items-center w-full">
                            <div className="flex-initial w-60 font-semibold text-gray-500">
                                 <span>Date Of Birth</span>
                            </div>
                            <div className="flex-initial w-full">
                                <InputText placeholder="Phone Number" className="w-full py-3" />
                            </div>
                        </div>

                        <div className="flex items-center w-full">
                            <div className="flex-initial w-60 font-semibold text-gray-500">
                                <span>Country</span>
                            </div>
                            <Dropdown
                                placeholder="Country"
                                options={conuntries.sort((a, b) => a.name.common.localeCompare(b.name.common))}
                                value={selectCountry}
                                optionLabel="name.common"
                                onChange={(ev) => setSelectCountry(ev.value)}
                                filter
                                filterTemplate={({ filterOptions }) => <InputText placeholder="Search" onChange={(ev) => filterOptions?.filter!(ev as any)} className="w-full" />}
                                showClear
                                itemTemplate={itemTemplateCountry}
                                filterPlaceholder="Search Country"
                                valueTemplate={valueTemplateCountry}
                                className="w-full md:w-full border-gray-200" />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
};

export default PageAccount;