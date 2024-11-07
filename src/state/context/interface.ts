
export type TypeContexApp = "lang" | "setDarkMode";
export type TypesContextDasboard   = "side" | "theme";
export type TypePropsThemeDasboard = "tq-blue" | "md-purple" | "red" | "green";

export interface PropsContextApp{
    language : "id"   | "en";
    darkMode : "dark" | "light";
};

export interface PropsContextDasboard{
    sidebar : boolean;
    theme  ?: TypePropsThemeDasboard
};