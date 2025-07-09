
import { ThemeStrokeColor } from "@/data/dasboard";
import { ContextDasboard } from "@/state/context/dasboard";
import { useContext } from "react";

export default function useThemeColorDasboard(opactiy: string = "500"){

    const dasboardPath = window.location.pathname.indexOf('/dasboard') !== -1;  

    if(dasboardPath){
        const { propsDasboard } = useContext(ContextDasboard);

        const textClass = `text-${propsDasboard?.theme}-${opactiy}`;
        const bgClass   = `bg-${propsDasboard?.theme}-${opactiy}`;
        const hexColor  = ThemeStrokeColor[`${propsDasboard?.theme}-${opactiy}`];
    
        return { textClass, bgClass, hexColor  }
    }

    return null


    // switch (propsDasboard.theme) {

    //     case "md-purple":
    //         return classNames({
    //             [`bg-md-purple-${opactiy}`]  : option === "bg",
    //             [`text-md-purple-${opactiy}`]: option === 'text'
    //         });

    //     case "green":
    //         return classNames({
    //             [`bg-green-${opactiy}`]  : option === "bg",
    //             [`text-green-${opactiy}`]: option === 'text'
    //         });

    //     case "red":
    //         return classNames({
    //             [`bg-red-${opactiy}`]  : option === "bg",
    //             [`text-red-${opactiy}`]: option === 'text'
    //         });

    //     default:
    //         return classNames({
    //             [`bg-tq-blue-${opactiy}`]   : option === "bg",
    //             [`text-tq-blue-${opactiy}`] : option === 'text'
    //         });
    // }

}