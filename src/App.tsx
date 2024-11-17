import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import { Routes } from './routes'
import { useAtom } from 'jotai';
import { StateContextApp } from './state/context';
import { ContextApp } from './state/context/app';
import useThemaSystem from './hooks/useThema';
import { PropsContextApp } from './state/context/interface';
import { ToastContainerData } from '@component/container';

export default function App() {

  const themeApp = useThemaSystem();
  const [getApp, setApp] = useAtom(StateContextApp);

  React.useEffect(() => {

    const root = window.document.documentElement;
    const storageData: Partial<PropsContextApp> = JSON.parse(localStorage.getItem("app") as string);

    if (storageData) {
      root.classList.toggle("dark", storageData.darkMode === "dark");
      setApp("setDarkMode", { darkMode: storageData.darkMode });
    };

    root.classList.toggle("dark", themeApp === "dark");
    setApp("setDarkMode", { darkMode: themeApp });

  }, [ themeApp ]);

  return (
    <ContextApp.Provider value={{ getApp, setApp }}>
      <Routes />
      <ToastContainerData/>
    </ContextApp.Provider>
  )
};

