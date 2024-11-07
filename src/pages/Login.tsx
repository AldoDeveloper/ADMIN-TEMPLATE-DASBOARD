import { InputText } from "@/components/Input";
import Card from "@/components/Card";
import React from "react";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import SocialMediaAuth from "@component/SocialMediaAuth"
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { ILogin } from "@/interfaces/auth.interface";
import { joiResolver } from '@hookform/resolvers/joi';
import ValidationLogin from "@/validation/login.validation";
import { useNavigate } from "react-router-dom";
import { BsHouseExclamation } from "react-icons/bs";

export default function Login() : React.ReactNode {

    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, watch } = useForm<ILogin>({
        resolver: joiResolver(ValidationLogin(t))
    });

    const navigate = useNavigate();

    const submitted = async (body: ILogin) => {
        console.log(body);
    };

    const clickNavigateResetPassword = async() => {
        navigate("/auth/reset-password");
    };

    return (
        <React.Fragment>
            <Card className="min-h-64 max-md:min-w-[22rem] max-sm:w-max">
                <form onSubmit={handleSubmit(submitted)}>
                    <InputText
                        register={register("username", { required: true })}
                        type="text"
                        label="Email"
                        sizeType="lg"
                        classNameLabel="font-semibold text-slate-400 text-[1rem]"
                        className="mt-3"
                        invalid={errors.username ? true : false}
                        placeholder="Enter Username" />
                        <span className={`block transition transform duration-300 ease translate-y-0 ${errors.username ? "translate-y-1" : ""} text-red-400 text-xs mt-1`}>
                            {errors.username?.message}
                        </span>
                    <InputText
                        label="Password"
                        type="password"
                        sizeType="lg"
                        register={register("password", { required: "true" })}
                        invalid={errors.password ? true : false}
                        classNameLabel="font-semibold text-slate-400 text-[1rem] mt-3"
                        className="mt-3 text-gray-500"
                        placeholder="Enter Password" />
                        <span className={`block transition ease-in-out transform opacity-0 duration-300 translate-y-0 ${errors.password ? "opacity-100 translate-y-1" : ""} text-red-400 text-xs mt-1`}>
                            {errors.password?.message}
                        </span>
                    <span className="block cursor-pointer hover:text-blue-400 float-end text-xs mt-1 text-slate-400 dark:text-slate-100" onClick={clickNavigateResetPassword}>Lupa password?</span>
                    <Button 
                        size="sm" 
                        label="Submit" 
                        rounded type="submit" 
                        iconPosition="left"
                        disabled={false}
                        icon={<BsHouseExclamation size={20}/>}
                        className="w-full text-white mt-3 px-1" />
                    <Divider text="Or" />
                </form>
                <SocialMediaAuth />
            </Card>
        </React.Fragment>
    )
}