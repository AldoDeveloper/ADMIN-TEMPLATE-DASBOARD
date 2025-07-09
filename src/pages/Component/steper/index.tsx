import Stepper from "@/components/Stepper";
import useIsMobile from "@/hooks/useMobile";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { BsBell, BsChevronBarExpand, BsFileMedical, BsGearFill, BsPerson, BsShield, BsThreeDotsVertical } from "react-icons/bs";

const steps = [
    {
        id: 'personal-info',
        title: 'Personal Info',
        description: 'Provide your basic information',
        icon: <BsPerson size={18} strokeWidth={1} />
    },
    {
        id: 'account-setup',
        title: 'Account Setup',
        description: 'Create login credentials',
        icon: <BsGearFill size={18} strokeWidth={1} />
    },
    {
        id: 'preferences',
        title: 'Preferences',
        description: 'Set your account preferences',
        icon: <BsChevronBarExpand size={18} strokeWidth={1} />
    },
    {
        id: 'security',
        title: 'Security Settings',
        description: 'Set up two-factor authentication and security questions',
        icon: <BsShield size={18} strokeWidth={1} />
    },
    {
        id: 'notifications',
        title: 'Notifications',
        description: 'Choose how you receive updates and alerts',
        icon: <BsBell size={18} strokeWidth={1} />
    },
    {
        id: 'review',
        title: 'Review Details',
        description: 'Verify all information before submission',
        icon: <BsFileMedical size={18} strokeWidth={1} />
    },
    {
        id: 'confirmation',
        title: 'Confirmation',
        description: 'Review and submit',
    }
]


const PageSteper: React.FC = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const isMobile = useIsMobile();

    const headerCard = () => {
        return (
            <div className="flex justify-between items-center px-4 py-4">
                <h1 className="text-xl font-semibold text-gray-500">Steper Horizontal</h1>
                <BsThreeDotsVertical size={18} />
            </div>
        )
    };

    const goToNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const goToPrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="grid grid-cols-1 items-center justify-center my-3">
            <Card header={headerCard} className="w-full">
                <div className="">
                    <Stepper
                        steps={steps}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        activeColor="bg-green-400"
                        inactiveColor="bg-gray-200"
                        lineColor="bg-gray-200"
                    />

                    <div className="mt-7 p-4 border-2 border-dashed rounded-lg min-h-[10rem] flex justify-center items-center">
                        {currentStep === 0 && (
                            <div className="space-y-4">
                                <h1 className="text-xl font-semibold text-center">Form Login</h1>
                                <div className="flex justify-center">
                                    <div>
                                        <div className="space-y-1 mb-5">
                                            <span className="block">Username</span>
                                            <InputText className="w-[22rem]" />
                                        </div>
                                        <div className="space-y-1 mb-5">
                                            <span className="block">Password</span>
                                            <InputText className="w-[22rem]" />
                                        </div>
                                        <Button className="w-[22rem]" label="Submited" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 1 && (
                            <div className="space-y-4">
                                <h1 className="text-xl font-semibold text-center">Account Setup</h1>
                                <div className="flex justify-center">
                                    <div>
                                        <div className="space-y-1 mb-5">
                                            <span className="block">Username</span>
                                            <InputText className="w-[22rem]" />
                                        </div>
                                        <div className="space-y-1 mb-5">
                                            <span className="block">Password</span>
                                            <InputText className="w-[22rem]" />
                                        </div>
                                        <Button className="w-[22rem]" label="Submited" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="space-y-4">
                                <h2 className="text-xl md:text-xl font-semibold">Preferensi</h2>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="space-y-4">
                                <h2 className="text-xl md:text-xl font-semibold">Security Setting</h2>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div className="space-y-4">
                                <h2 className="text-xl md:text-xl font-semibold">Notifications</h2>
                            </div>
                        )}

                        {currentStep === 5 && (
                            <div className="space-y-4">
                                <h2 className="text-xl md:text-xl font-semibold">Review Detail</h2>
                            </div>
                        )}

                        {currentStep === 6 && (
                            <div className="space-y-4">
                                <h2 className="text-xl md:text-xl font-semibold">Confirmation</h2>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            onClick={goToPrevious}
                            disabled={currentStep === 0}
                            className={`px-4 py-2 rounded-md ${currentStep === 0
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-gray-500 text-white hover:bg-gray-600'
                                }`}
                        >
                            Kembali
                        </button>

                        {currentStep < steps.length - 1 ? (
                            <button
                                onClick={goToNext}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Lanjut
                            </button>
                        ) : null}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default PageSteper;