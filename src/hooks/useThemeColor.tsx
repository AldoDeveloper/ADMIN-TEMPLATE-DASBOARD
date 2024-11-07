
import { PropsContextDasboard } from "@/state/context/interface";
import classNames from "classnames";

export default function useThemeColorDasboard(propsContextDasboard: Partial<PropsContextDasboard> ,opactiy: string, option: "bg" | "text" = 'bg') : string {

    switch (propsContextDasboard.theme) {

        case "md-purple":
            return classNames({
                [`bg-md-purple-${opactiy}`]: option   === "bg",
                [`text-md-purple-${opactiy}`]: option === 'text'
            });

        case "green":
            return classNames({
                [`bg-green-${opactiy}`]  : option   === "bg",
                [`text-green-${opactiy}`]: option === 'text'
            });

        case "red":
            return classNames({
                [`bg-red-${opactiy}`]  : option === "bg",
                [`text-red-${opactiy}`]: option === 'text'
            });

        default:
            return classNames({
                [`bg-tq-blue-${opactiy}`]   : option === "bg",
                [`text-tq-blue-${opactiy}`] : option === 'text'
            });
    }

}