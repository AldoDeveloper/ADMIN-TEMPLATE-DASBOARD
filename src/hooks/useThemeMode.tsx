import { ContextApp } from "@/state/context/app";
import classNames from "classnames";
import React from "react";

export default function useThemeMode() {

    const { getApp } = React.useContext(ContextApp);
    const isDark : boolean = getApp.darkMode === "dark"

    return{
        themeText : classNames({"text-gray-300" : isDark, "text-gray-600" : !isDark}),
        themeCard : classNames({"bg-slate-800"  : isDark, "bg-white" : !isDark}),
        themeContainer: classNames({"bg-slate-900" : isDark, "bg-slate-100" : !isDark})
    }
}