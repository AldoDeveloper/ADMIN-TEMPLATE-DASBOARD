import React from "react";
import Button  from "@component/Button"
import { BsGoogle, BsFacebook, BsTiktok } from "react-icons/bs";

export default function SocialMediaAuth(): React.ReactNode {

    return (
        <React.Fragment>
            <div className="flex justify-center items-center gap-5">
                <Button
                    rounded
                    label={
                        <span className="flex justify-center w-full">
                            <BsGoogle color="red" size={18} />
                        </span>
                    }
                    className="bg-white dark:bg-slate-500 dark:outline-slate-400 w-10 h-10 hover:bg-red-400 outline outline-red-200 focus:ring-red-300 rounded-full" />
                <Button
                    rounded
                    label={
                        <span className="flex justify-center w-full">
                            <BsFacebook color="blue" size={18} />
                        </span>
                    }
                    className="bg-white dark:bg-slate-500 dark:outline-slate-400   w-10 focus:ring-blue-300 hover:bg-blue-400 outline outline-blue-200 h-10 rounded-full" />
                <Button
                    rounded
                    label={
                        <span className="flex justify-center w-full">
                            <BsTiktok color="black" size={18} />
                        </span>
                    }
                    className="bg-white dark:bg-slate-500 dark:outline-slate-400  w-10 focus:ring-gray-300 hover:bg-gray-400 outline outline-gray-400 h-10 rounded-full" />
            </div>
        </React.Fragment>
    )
}