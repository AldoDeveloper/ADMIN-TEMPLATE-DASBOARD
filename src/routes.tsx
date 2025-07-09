import React from "react";
import { Await, createBrowserRouter, RouterProvider } from "react-router-dom";
import PageModal from "./pages/Component/modal";
import { IndexPage } from "./pages";
import LoadingV2 from "./components/Loading/loadingv2";

const HandleAsynElement: React.FC<{}> = () => {
    return (
        <React.Suspense fallback={<LoadingV2/>}>
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
};

const LoadingLazy    = React.lazy(() => import("./components/Loading"));
const ErrorLazy      = React.lazy(() => import("./components/Error"));
const LayoutMainLazy = React.lazy(() => import("./layouts/layout.main"));
const LayoutAuthLazy = React.lazy(() => import("./layouts/layout.auth"));
const LoginLazy            = React.lazy(() => import("./pages/Login"));
const SignUpLazy           = React.lazy(() => import("./pages/SignUp"));
const ResetPasswordLazy    = React.lazy(() => import("./pages/ResetPassword"));
const LayoutDasboardLazy   = React.lazy(() => import("./layouts/layout.dasboard"));
const DasboardLazy   = React.lazy(() => import("./pages/Dasboard"));
const AnalitycLazy   = React.lazy(() => import("./pages/Analityc"));
const AccountLazy    = React.lazy(() => import("./pages/Account"));
const ProductLazy    = React.lazy(() => import("./pages/Product"));
const ComponentLazy  = React.lazy(() => import("./pages/Component"));
const ButtonPageLazy = React.lazy(() => import("./pages/Component/button"));
const DropdownsPageLazy = React.lazy(() => import("./pages/Component/dropdowns"));
const ToastPageLazy  = React.lazy(() => import("./pages/Component/toast"));
const TablePageLazy  = React.lazy(() => import("./pages/Table"));
const BreadcrumbsPageLazy = React.lazy(() => import("./pages/Breadcrumb"));
const CardPageLazy   = React.lazy(() => import("./pages/Component/card"));
const NavbarPageLazy = React.lazy(() => import("./pages/Component/navbar"));
const TreePageLazy   = React.lazy(() => import("./pages/Component/tree"));
const InputTextLazy  = React.lazy(() => import('./pages/Component/inputtext'));
const TimeLineLazy   = React.lazy(() => import('./pages/Component/Timeline'));
const SteperLazy     = React.lazy(() => import("./pages/Component/steper"));

const Loading        = () => <LoadingLazy />;
const Error          = () => <ErrorLazy />;
const LayoutMain     = () => <LayoutMainLazy />;
const LayoutAuth     = () => <LayoutAuthLazy />;
const Login          = () => <LoginLazy />;
const SignUp         = () => <SignUpLazy />;
const ResetPassword  = () => <ResetPasswordLazy />;
const LayoutDasboard = () => <LayoutDasboardLazy />;
const Dasboard       = () => <DasboardLazy />;
const Analityc       = () => <AnalitycLazy />;
const Account        = () => <AccountLazy />;
const Product        = () => <ProductLazy />;
const Component      = () => <ComponentLazy />;
const ButtonPage     = () => <ButtonPageLazy />;
const DropdownsPage  = () => <DropdownsPageLazy />;
const ToastPage      = () => <ToastPageLazy />;
const TablePage      = () => <TablePageLazy />;
const BreadcrumbsPage = () => <BreadcrumbsPageLazy />;
const CardPage       = () => <CardPageLazy/>;
const NavbarPage     = () => <NavbarPageLazy/>;
const TreePage       = () => <TreePageLazy/>;
const InputTextPage  = () => <InputTextLazy/>;
const TimeLinePage   = () => <TimeLineLazy/>;
const SteperPage     = () => <SteperLazy/>;

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <HandleAsynElement />,
        children: [
            {
                index: true,
                element: (
                    <IndexPage/>
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
                        element: <Analityc />,
                    },
                    {
                        path: 'account',
                        element: <Account />
                    },
                    {
                        path: "product",
                        element: <Product />
                    },
                    {
                        path: "component",
                        element: <Component />,
                        errorElement: <Error />,
                        children: [
                            {
                                index: true,
                                element: <><h1 className="text-center text-2xl font-semibold">Index Halaman Component</h1></>
                            },
                            {
                                path: "buttons",
                                element: <ButtonPage />
                            },
                            {
                                path: "dropdowns",
                                element: <DropdownsPage/>
                            },
                            {
                                path: "toast",
                                element: <ToastPage/>
                            },
                            {
                                path: "table",
                                element: <TablePage/>
                            },
                            {
                                path: "breadcrumbs",
                                element: <BreadcrumbsPage/>
                            },
                            {
                                path: "card",
                                element: <CardPage/>
                            },
                            {
                                path: "navbar",
                                element: <NavbarPage/>
                            },
                            {
                                path: "modal",
                                element: <PageModal/>
                            },
                            {
                                path: "tree",
                                element: <TreePage/>
                            },
                            {
                                path: "inputtext",
                                element: <InputTextPage/>
                            },
                            {
                                path: "timeline",
                                element: <TimeLinePage/>
                            },
                            {
                                path: "steper",
                                element: <SteperPage/>
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);

export const Routes : React.FC<{}> = ()  => <RouterProvider router={router} fallbackElement={<LoadingV2 />} />