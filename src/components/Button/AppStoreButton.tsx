import React from "react";
import Button from ".";
import { BsApple } from "react-icons/bs";

const AppStoreButton : React.FC<{}> = () => {

    const LabelIconAppStore : React.FC<{}> = () => {
        return(
            <React.Fragment>
                <span className="absolute top-0 left-12 text-xs">Download on the</span>
                <span className="ml-5 text-lg font-semibold">App Store</span>
            </React.Fragment>
        )
    };

    return(
        <Button
            size="sm"
            icon={<BsApple size={25}/>}
            label={<LabelIconAppStore/>}
            className={`w-[10rem] text-white bg-slate-700 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-700`}
        />
    )
};
export default AppStoreButton;