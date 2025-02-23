import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../Button";

export default function Error(): React.ReactNode | React.ReactElement {

    const error    = useRouteError();
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/dasboard")
    };

    return (
        <React.Fragment>
            <section className="w-full dark:bg-slate-800 bg-slate-100 flex justify-center min-h-[100vh] items-center">
               <div className="flex space-x-20 justify-center items-center flex-row">
                    <div className="basis-2/5">
                        <h1 className="text-[10rem] font-bold text-orange-600 text-center animate-pulse">404</h1>
                        <p className="text-center m-0 p-0 text-xl text-slate-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, ex!</p>
                    </div>
                    <div className="flex flex-col space-y-10">
                        <div className="w-[20rem] shadow-md h-[20rem] rounded-full bg-slate-200">
                            <img src="/avatar/error_page.svg"/>
                        </div>
                        <Button onClick={navigateToHome} label={"Back To Home!"}/>
                    </div>
               </div>
            </section>
        </React.Fragment>
    )
}