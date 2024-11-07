import { atom } from "jotai";
import { PropsContextApp, TypeContexApp } from "./interface";
import React from "react";
import { atomWithStorage } from "jotai/utils";

export const PropsContextAppData = atomWithStorage<Partial<PropsContextApp>>("app", {});

 const StateContextApp = atom(
    (get) => get(PropsContextAppData),
    (get, set, type: TypeContexApp, value: Partial<PropsContextApp>) => {
        const payload = get(PropsContextAppData);
        switch(type){
            case "lang":
                set(PropsContextAppData, (args) => {
                    return { ...args, language: value.language }
                });
                break;

            case 'setDarkMode':
                set(PropsContextAppData, (args) => {
                    return {...args, darkMode: value.darkMode }
                });
                break;
        }
    }
);

StateContextApp.onMount = (set) =>{
    set("lang", { language: "en" });
};

export const ContextApp = React.createContext<{ getApp: Partial<PropsContextApp>, setApp: (type: TypeContexApp, value: Partial<PropsContextApp>) => void }>({} as any);
export default StateContextApp;