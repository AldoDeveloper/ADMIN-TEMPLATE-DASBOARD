import React from "react";

export default function useClassCssToValue(classBgColor: string, styleDeclare: keyof CSSStyleDeclaration) : string{

    const [ hexColor, setHexColor ]  = React.useState<string>("");

    React.useEffect(() =>{
        const element = document.querySelector(`.${classBgColor}`);
        if(element){
            const coumputeColor = window.getComputedStyle(element)[`${styleDeclare as string}` as any]
            setHexColor(coumputeColor);
        }
    }, [ hexColor ]);

    return hexColor;
}
