
import React from 'react';
import { BsXCircle, BsXLg } from 'react-icons/bs';
import Button from '../Button';
import { OverlayPanelProps } from './interface';
import { ContextApp } from '@/state/context/app';

const OverlayPanel: React.FC<OverlayPanelProps> = ({ children, isOpen, onChange, item, iconClose }) => {

    const { getApp }      = React.useContext(ContextApp);
    const refClickaHandle = React.useRef<HTMLDivElement>(null);
    const refOverlay      = React.useRef<HTMLDivElement>(null);

    const isDark = getApp.darkMode === "dark";

    const refMouseDown = React.useRef<HTMLDivElement>(null);
    const [isRight, setIsRight] = React.useState<boolean>(false);

    const RenderItem: React.FC<{}> = ({ }) => {

        if (typeof item === "function")
            return item();

        return item || (
            <Button
                label={"Overlay"}
                onClick={onChange}
                className='px-2 py-2' />
        )
    };

    const RenderIconClose: React.FC<{}> = () => {
        if (iconClose) return (
            <div id='closed' className='inline-block cursor-pointer absolute top-1 right-1' onClick={() => onChange(false)}>
                <BsXLg strokeWidth={0.4} className='text-slate-700' size={20} color={isDark ? "white" : "#334155"} />
            </div>
        )
    };

    React.useEffect(() => {

        (async () => {

            const handleMouseDown = async(ev: MouseEvent) => {
                if(refMouseDown.current && !refMouseDown.current.contains(ev.target as Node)){
                    onChange(false)
                }
            };

            if (isOpen && refClickaHandle.current && refOverlay.current) {

                const handleRect  = refClickaHandle.current.getBoundingClientRect();
                const overlatRect = refOverlay.current.getBoundingClientRect();

                if ((handleRect.left + overlatRect.width) > window.innerWidth) {
                    setIsRight(true)
                } else {
                    setIsRight(false)
                }
            };

            document.addEventListener("mousedown", handleMouseDown);
            return() => document.removeEventListener("mousedown", handleMouseDown);

        })();

    }, [isOpen]);

    return (
        <div className="relative inline-block" ref={refMouseDown}>
            <div className='inline-flex' ref={refClickaHandle} onClick={onChange}>
                <RenderItem />
            </div>
            {
                isOpen && (
                    <div ref={refOverlay} className={`absolute z-10 w-auto  h-auto mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg ${isRight ? "right-0" : "left-0"}`}>
                        <div className="relative p-4">
                            <div className={
                                `absolute ${isRight
                                    ? 'right-2 transform -translate-y-1/2  -top-1 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white dark:border-b-slate-400'
                                    : 'left-3  transform -translate-x-1/2  -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white dark:border-b-slate-400'
                                }`
                            } />
                            { children }
                            <RenderIconClose />
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default OverlayPanel;
