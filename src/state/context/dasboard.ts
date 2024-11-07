import { PropsContextDasboard, TypesContextDasboard } from "./interface";
import { atom } from "jotai";
import React from "react";

export const PropsContextDasboardData = atom<Partial<PropsContextDasboard>>({});

const StateContextDasboard = atom(
    (get) => get(PropsContextDasboardData), 
    (get, set, type: TypesContextDasboard, value: Partial<PropsContextDasboard>) => {

        const payload = get(PropsContextDasboardData);

        switch(type){

            case "side":
                set(PropsContextDasboardData, (args) => {
                    return{
                        ...args,
                        sidebar: value.sidebar
                    }
                });
                break;

            case "theme":
                set(PropsContextDasboardData, (args) => {
                    return{
                        ...args,
                        theme: value.theme
                    }
                });
                break;
        }

    }
);

StateContextDasboard.onMount = function(set){
    set("theme", { theme: "red" })
};

export const ContextDasboard = React.createContext<{
    propsDasboard : Partial<PropsContextDasboard>,
    setDasboard   : (types: TypesContextDasboard, value: Partial<PropsContextDasboard>) => void 
}>({} as any);

export default StateContextDasboard;