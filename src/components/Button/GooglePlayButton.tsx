import React from "react";
import Button from ".";
import { BsGooglePlay } from "react-icons/bs";

const GooglePlayButton: React.FC<{}> = () => {

    const LabelButtonGoolgePlay: React.FC<{}> = () => {
        return (
            <React.Fragment>
                <span className="absolute top-0 left-12 text-[0.65rem]">GET IN ON</span>
                <span className="ml-7 block text-lg p-0 m-0 font-semibold">Google Play</span>
            </React.Fragment>
        )
    };

    return (
        <Button
            size="sm"
            icon={<BsGooglePlay size={25} />}
            label={<LabelButtonGoolgePlay />}
            className="w-[10rem] text-white bg-slate-700 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-700" />
    )
};

export default GooglePlayButton;