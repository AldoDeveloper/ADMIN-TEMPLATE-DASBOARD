import React from "react";
import { BsCheck } from "react-icons/bs";

type PropsCheckbox = {
    checked  : boolean;
    disabled ?: boolean;
    onChange : (checked : any) => void;
}

const CheckBox: React.FC<PropsCheckbox> = ({ checked, disabled, onChange }) => {
    return(
        <label className="inline-flex">
            <input 
                type="checkbox" 
                disabled={disabled === undefined ? false : disabled}
                checked={checked} 
                className="peer hidden"
                onChange={onChange}/>
                <span className="inline-flex cursor-pointer justify-center items-center w-5 h-5 border-[1.5px] border-sky-200 rounded-md peer-checked:bg-sky-400">
                    {
                        checked && (
                            <BsCheck color="white" size={20}/>
                        )
                    }
                </span>
        </label>
    )
}

export default CheckBox;