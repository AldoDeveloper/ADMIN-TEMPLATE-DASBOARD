import Button  from "@/components/Button";
import Card from "@/components/Card";
import Divider from "@/components/Divider";
import { InputText } from "@/components/Input";
import SocialMediaAuth from "@/components/SocialMediaAuth";
import React from "react";

export default function SignUp(): React.ReactNode {
    return (
        <React.Fragment>
            <Card className="min-h-64 max-md:min-w-[22rem] max-sm:w-max">
                <form>
                    <InputText
                        type="text"
                        sizeType="lg"
                        label="Email Or Number Phone"
                        classNameLabel="text-[1rem] font-semibold"
                        className="mt-3"
                        placeholder="Enter Email or Phone Number"
                    />
                    <span className="block float-end text-xs mt-1 text-slate-400 dark:text-slate-100">Lupa password?</span>
                    <Button rounded label="Sign Up" type="submit" className="w-full rounded-full text-white mt-3 px-1 py-[0.45rem]" />
                    <Divider text="Or" />
                </form>
                <SocialMediaAuth/>
            </Card>
        </React.Fragment>
    )
}