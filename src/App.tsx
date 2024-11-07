import React, { useReducer } from 'react'
import { Routes } from './routes'
import { useAtom } from 'jotai';
import { StateContextApp } from './state/context';
import { ContextApp } from './state/context/app';
import useThemaSystem from './hooks/useThema';
import { PropsContextApp } from './state/context/interface';

type StateReducer  = { count : number }
type ActionRedicer = | { type: "inc", payload: number } | { type: "dsc", payload: number } | { type: "reset" }

const initialCount: StateReducer = { count: 0 };

function handleReducer(state: StateReducer, action: ActionRedicer) : StateReducer{
  return{
    count: state.count + 1
  }
};

function App() {

  const themeApp = useThemaSystem();
  const [getApp, setApp] = useAtom(StateContextApp);
  const [data, dispatch] = useReducer(handleReducer, initialCount);

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
    </ContextApp.Provider>
  )
};

export default App;

