import Button from "@/components/Button";
import Card from "@/components/Card";
import Divider from "@/components/Divider";
import { InputText } from "@/components/Input";
import SocialMediaAuth from "@/components/SocialMediaAuth";
import React from "react";

const ResetPassword: React.FC<{}> = () => {

    const headerCard = () => {
        return (
            <h1 className="pt-4 text-center font-semibold text-3xl text-slate-500 dark:text-slate-100">Reset Password</h1>
        )
    };
    return (
        <Card className="min-h-64 w-[24rem]" header={headerCard}>
            <form action="">
                <InputText 
                    type="text" 
                    placeholder="Enter Your Email or Password"
                    sizeType="lg" />
                 <Button label="Submit" type="submit" className="w-full rounded-full text-white mt-4 px-1 py-[0.45rem]" />
                <Divider text="Or"/>
            </form>
            <SocialMediaAuth/>
        </Card>
    )
};

export default ResetPassword;