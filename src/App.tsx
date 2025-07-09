import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import { Routes } from './routes'
import { useAtom } from 'jotai';
import { StateContextApp } from './state/context';
import { ContextApp } from './state/context/app';
import useThemaSystem from './hooks/useThema';
import { PropsContextApp } from './state/context/interface';
import { ToastContainerData } from '@component/container';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import { bounceAnimationToast } from './components/container/ToastContainer';
import TailwindCalender from './tailwinds/tailwind.calender';
import TailwindNavbar from './tailwinds/tailwind.navbar';
import TailwindDialog from './tailwinds/tailwind.dialog';
import TailwindDropdown from './tailwinds/tailwind.dropdown';
import TailwindTimeline from './tailwinds/tailwind.timeline';

export default function App() {

  const themeApp = useThemaSystem();
  const [getApp, setApp] = useAtom(StateContextApp);

  React.useEffect(() => {

    const root = window.document.documentElement;
    const storageData: Partial<PropsContextApp> = JSON.parse(localStorage.getItem("app") as string);

    if (storageData) {
      root.classList.toggle("dark", storageData.darkMode === "dark");
      setApp("setDarkMode", { darkMode: storageData.darkMode });
      return;
    };

    root.classList.toggle("dark", themeApp === "dark");
    setApp("setDarkMode", { darkMode: themeApp });

  }, [themeApp]);

  return (
    <PrimeReactProvider
      value={{
        unstyled: true,
        pt: {
          ...Tailwind,
          splitbutton: { ...Tailwind.splitbutton, menuList: { className: "bg-red-400" } },
          calendar: { ...TailwindCalender.calendar },
          menubar: { ...TailwindNavbar.menubar as any },
          dialog: { ...TailwindDialog.dialog as any},
          timeline: { ...TailwindTimeline.timeline as any}
          // tree: TailwindTree.tree as any,
        }
      }}>
      <ContextApp.Provider value={{ getApp, setApp }}>
        <Helmet>
          <title>{import.meta.env.VITE_APP_TITLE ?? "Dashboard"}</title>
        </Helmet>
        <Routes />
        <ToastContainerData />
        <ToastContainer
          containerId={"A"}
          autoClose={3000}
          transition={bounceAnimationToast}
          draggable
          pauseOnHover
          rtl={false}
          closeButton
          closeOnClick
          hideProgressBar={false}
          toastClassName={`bg-gray-700 text-slate-50`}
        />
        <ToastContainer
          containerId={"B"}
          autoClose={3000}
          transition={bounceAnimationToast}
          draggable
          pauseOnHover
          rtl={false}
          closeButton
          closeOnClick
          hideProgressBar={false}
          toastClassName={`bg-white text-slate-700`}
        />
      </ContextApp.Provider>
    </PrimeReactProvider>
  )
};

