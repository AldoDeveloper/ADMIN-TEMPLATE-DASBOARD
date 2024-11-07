import React from "react";

export default function useMouseDown<T>(ref : React.RefObject<T | any>, handleToogle: (bool: boolean) => void) : void {
    
    return React.useEffect(() => {
        const handleClickDropdown = (ev: MouseEvent) => {
            if (ref.current && !ref.current.contains(ev.target as Node)) {
                handleToogle(false);
            };
        };
        document.addEventListener("mousedown", handleClickDropdown);
        return () => document.removeEventListener("mousedown", handleClickDropdown);
        
    }, [ref]);

}