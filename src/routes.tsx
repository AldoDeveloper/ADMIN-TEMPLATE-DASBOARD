import React from "react";
import { Await, createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading"
import Error from "./components/Error";
import LayoutMain from "./layouts/layout.main";
import LayoutAuth from "./layouts/layout.auth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import LayoutDasboard from "./layouts/layout.dasboard";
import Dasboard from "./pages/Dasboard";
import Analityc from "./pages/Analityc";
import Account from "./pages/Account";
import Product from "./pages/Product";
import Component from "./pages/Component";
import DesignThinkingCanvas from "./components/Canvas";

const HandleAsynElement: React.FC<{}> = () => {
    return (
        <React.Suspense fallback={<Loading />}>
            <Await resolve={
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve({ name: "Aldo Ratmawan", email: "aldo.ratmawan9999@gmail.com" })
                    }, 3000)
                })
            }>
                <LayoutMain />
            </Await>
        </React.Suspense>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <HandleAsynElement />,
        children: [
            {
                index: true,
                element: (
                    <DesignThinkingCanvas/>
                )
            },
            {
                path: 'auth',
                element: <LayoutAuth />,
                children: [
                    {
                        path: "sign-in",
                        element: <Login />
                    },
                    {
                        path: "sign-up",
                        element: <SignUp />
                    },
                    {
                        path: "reset-password",
                        element: <ResetPassword />
                    }
                ]
            },
            {
                path: "dasboard",
                element: <LayoutDasboard />,
                children: [
                    {
                        index: true,
                        element: <Dasboard />
                    },
                    {
                        path: 'analityc',
                        element: <Analityc/>
                    },
                    {
                        path: 'account',
                        element: <Account/>
                    },
                    {
                        path: "product",
                        element: <Product/>
                    },
                    {
                        path: "component",
                        element: <Component/>,
                        children: [
                            {
                                index: true,
                                element: <><h1 className="text-center text-2xl font-semibold">Index Halaman Component</h1></>
                            },
                            {
                                path: "buttons",
                                element: <><h1 className="text-center text-2xl font-semibold my-5">Pages Button</h1></>
                            }
                        ]
                    }
                ]
            }
        ]
    }
])

export const Routes = (): React.ReactNode => <RouterProvider router={router} fallbackElement={<Loading />} />