import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavbarAuth from "@/components/Navbar";
import { ContextApp } from "@/state/context/app";
import { Footer } from "@/components/Footer";
import Divider from "@/components/Divider";
import GooglePlayButton from "@/components/Button/GooglePlayButton";
import AppStoreButton from "@/components/Button/AppStoreButton";
import TopScrool from "@/components/TopScrool";
import { InputText } from "@/components/Input";
import Button from "@/components/Button";

export default function LayoutAuth(): React.ReactNode {

    const { getApp, setApp } = React.useContext(ContextApp);
    const isDark = getApp.darkMode === "dark";

    const { pathname }    = useLocation();
    const isResetPassword = pathname.indexOf("reset-password") != -1;
    const navigate        = useNavigate();

    const redirectIsSignIn = pathname.indexOf("sign-in") === -1 || pathname.indexOf("sign-up") === -1

    React.useEffect(() => {
        if(redirectIsSignIn){
            navigate("/auth/sign-in");
            return;
        }
    }, [])

    const toogleChangeTheme = async () => {
        setApp("setDarkMode", { darkMode: isDark ? "light" : "dark" })
    };

    const headerBottom = () => {
        return (
            <>
                <Divider />
                    <div className="py-3 flex max-md:justify-center flex-wrap justify-between items-center">
                        <div className="max-md:text-center">
                            <h2 className="font-semibold text-lg text-slate-700 dark:text-slate-200">Interested to stay up-to-date with Admin Dasboard</h2>
                            <p className="text-slate-700 dark:text-slate-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptatum!</p>
                        </div>
                        <div className="flex gap-3 items-center max-md:mt-5">
                            <InputText type="text" placeholder="Enter Your Email address" sizeType="lg"/>
                            <Button label="Subcribe" className="px-5 font-semibold text-white" size="lg"/>
                        </div>
                    </div>
                <Divider />
                <div className="mt-4 flex max-md:justify-center flex-wrap justify-between items-center py-2">
                    <span className="block text-slate-700 dark:text-slate-200">© 2024 Ar UI. All Rights Reserved.</span>
                    <div className="flex gap-3 max-md:mt-5">
                        <GooglePlayButton />
                        <AppStoreButton />
                    </div>
                </div>
            </>
        )
    }

    return (
        <React.Fragment>
            <div className={`bg-slate-100 dark:bg-slate-900 bg-[url('/public/img/bg_desain.png')] dark:bg-[url("")] bg-no-repeat bg-cover max-md:bg-auto bg-center min-h-screen`}>
                <div className="absolute top-0 inset-x-0 z-10 flex justify-center overflow-hidden pointer-events-none">
                    <div className="w-full flex justify-end">
                        <picture>
                            <source srcSet="/img/test_dd.avif" type="image/avif" />
                            <img src="/img/test_dd.avif" alt="" className="w-[41.45rem] hidden flex-none max-w-none dark:block" />
                        </picture>
                    </div>
                </div>
                <div className="container mx-auto max-lg:px-6">
                    <NavbarAuth toggleTheme={toogleChangeTheme} />
                    <div className="flex justify-center flex-row gap-4 items-center min-h-[85vh]">
                        {
                            !isResetPassword && (
                                <div className="basis-1/2 max-md:hidden">
                                    <div className="flex items-center gap-3">
                                        <img src="/img/circle_purple.png" width={50} height={50} alt="logo-circle" />
                                        <h1 className="text-text-theme-blue text-3xl font-semibold uppercase">Changes Admin</h1>
                                    </div>
                                    <div className={`mt-1 w-[28rem] text-justify text-gray-600 dark:text-gray-300`}>
                                        <span className="text-2xl font-semibold">Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium esse doloremque sequi, neque velit nemo laudantium officia, amet doloribus consectetur. Vitae eos minus sed ea neque tempore est voluptatem suscipit accusamus doloribus adipisci temporibus, explicabo iusto ex nemo maiores?
                                    </div>
                                </div>
                            )
                        }
                        <div className={`basis-[33%] max-md:flex w-full border-1`}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer
                // header={headerFooter}
                footer={headerBottom}>
                <div className="grid grid-cols-1 place-content-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8 text-slate-400 dark:text-slate-100">
                    <div className="col-span-2">
                        <div className="flex justify-start items-center gap-3">
                            <picture>
                                <source srcSet="/img/circle.png" type="image/png" />
                                <img src="/img/circle.png" className="w-[30px]" alt="" />
                            </picture>
                            <h1 className="text-3xl text-slate-400 dark:text-slate-100">Admin Dasboard</h1>
                        </div>
                        <div className="text-slate-400 mt-4 dark:text-slate-100 text-justify">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem obcaecati assumenda asperiores vel, exercitationem natus reiciendis dolor nisi architecto dolorum ab doloribus repellat! Quo doloremque impedit aperiam officiis iure fugit.
                        </div>
                    </div>
                    <div>
                        <ul className="list-none mb-7">
                            <p className="font-bold mb-5 text-slate-700 dark:text-slate-100">Resource</p>
                            {
                                Array.from({ length: 5 }).map((__, idx) => (
                                    <li key={idx} className="mb-4">Lorem Data {idx}</li>
                                ))
                            }
                        </ul>
                        <ul className="list-none">
                            <p className="font-bold mb-5 text-slate-700 dark:text-slate-100">Resource</p>
                            {
                                Array.from({ length: 2 }).map((__, idx) => (
                                    <li key={idx} className="mb-4">Lorem Data {idx}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className="list-none">
                            <p className="font-bold mb-5 text-slate-700 dark:text-slate-100">About</p>
                            {
                                Array.from({ length: 5 }).map((__, idx) => (
                                    <li key={idx} className="mb-4">Lorem Data {idx}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className="list-none">
                            <p className="font-bold mb-5 text-slate-700 dark:text-slate-100">Community</p>
                            {
                                Array.from({ length: 5 }).map((__, idx) => (
                                    <li key={idx} className="mb-4">Lorem Data {idx}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Footer>
            <TopScrool />
        </React.Fragment>
    )
}