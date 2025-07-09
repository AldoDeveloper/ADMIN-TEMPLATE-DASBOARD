import React, { useMemo, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

interface PropsSpeedDialCircle {
    data: any[];
    radius?: number; // px jarak dari pusat
    angle?: number; // derajat untuk setiap item
    transitionDelay?: number; // ms delay untuk setiap item,
    severity?: "info" | "success" | "warning" | "error" | "default";
};

const SpeedDialCircle: React.FC<PropsSpeedDialCircle> = (props: PropsSpeedDialCircle) => {

    const refMouseDown = React.useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    let { radius, angle, transitionDelay , severity } = {
        radius  : props.radius || 80,
        angle   : props.angle || -90,
        transitionDelay: props.transitionDelay || 0,
        severity : props.severity || "default"
    }

    const severityBg = classNames({
        "bg-blue-600 hover:bg-blue-700"    : severity === "info",
        "bg-green-600 hover:bg-green-700" : severity === "success",
        "bg-yellow-600 hover:bg-yellow-700": severity === "warning",
        "bg-red-600 hover:bg-red-700"      : severity === "error",
        "bg-slate-600 hover:bg-slate-700"  : severity === "default"
    })

    React.useEffect(() => {
        const handleMouseDown = async (ev: MouseEvent) => {
            if (refMouseDown.current && !refMouseDown.current.contains(ev.target as Node)) {
                setOpen(false)
            }
        };
        document.addEventListener("mousedown", handleMouseDown);
        return () => document.removeEventListener("mousedown", handleMouseDown);

    }, [ open ]);


    return (
        <div ref={refMouseDown}>
            <div className="relative w-14 h-14">
                <AnimatePresence>
                    {open &&
                        props.data.map((action, idx) => {
                            const angleRad = (angle * Math.PI) / 180;
                            const x = Math.cos(angleRad) * radius;
                            const y = Math.sin(angleRad) * radius;
                            angle -= 60; // Increment angle for next button

                            return (
                                <motion.button
                                    key={idx}
                                    initial={{ opacity: 0, x: 0, y: 0 }}
                                    animate={{ opacity: 1, x, y }}
                                    exit={{ opacity: 0, x: 0, y: 0 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    onClick={action?.onHandle || (() => { })}
                                    className="absolute z-50 w-12 h-12 rounded-full bg-white focus:ring-4 focus:ring-blue-200 shadow-md flex items-center justify-center text-slate-800 hover:bg-slate-100">
                                    { action.icon }
                                </motion.button>
                            );
                        }
                    )}
                </AnimatePresence>
                <button
                    onClick={() => setOpen(!open)}
                    className={`bottom-0 right-0 w-14 h-14  ${severityBg} rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center transition-all`}>
                    <BsPlus size={28} className={`${open ? "rotate-45" : ""} transition-transform duration-300`} />
                </button>
            </div>
        </div>
    );
}

export default SpeedDialCircle;
