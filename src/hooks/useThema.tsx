import React from "react";

type Theme = "dark" | "light";

export default function useThemaSystem() : Theme{

    const[thema, setThema] = React.useState<Theme>("light");

    React.useEffect(() => {
        if(window.matchMedia("(prefers-color-scheme)").media != "not all"){
            const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setThema(darkMode ? "dark" : "light")
        }
    }, [ thema ]);

    return thema;
}