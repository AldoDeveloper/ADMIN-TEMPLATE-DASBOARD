import React, { useMemo, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

interface PropsSpeedDialVertical {
    data: any[];
    position?: "left" | "right" | "bottom" | "top" // default right;
    radius?: number; // px jarak dari pusat,
    size?: "small" | "medium" | "large" | "normal" // default medium;
    children?: React.ReactNode;
    severity?: "info" | "success" | "warning" | "error" | "default";
}

const SpeedDialVertical: React.FC<PropsSpeedDialVertical> = (props: PropsSpeedDialVertical) => {

    const [open, setOpen] = useState(false);

    const refMouseDown = React.useRef<HTMLDivElement>(null);

    const { position, radius, size, severity } = useMemo(() => (
        {
            data: props.data || [],
            position: props?.position || "left",
            radius: props?.radius || 65,
            size: props?.size || "normal",
            severity: props?.severity || "info"

        }), [props]);
    
    const sizeClassName = classNames({
        "w-10 h-10" : size === "small",
        "w-12 h-12" : size === "medium",
        "w-14 h-14" : size === "normal",
        "w-16 h-16" : size === "large",
        "w-20 h-20" : size === "large" || props.size === "normal",
    });

    const severityBg = classNames({
        "bg-blue-600 hover:bg-blue-700"    : severity === "info",
        "bg-green-600 hover:bg-green-700"  : severity === "success",
        "bg-yellow-600 hover:bg-yellow-700": severity === "warning",
        "bg-red-600 hover:bg-red-700"      : severity === "error",
        "bg-slate-600 hover:bg-slate-700"  : severity === "default"
    });

    const mapItemMotion = (idx: number) => ({

        left: {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: -((idx + 1) * radius), y: 0 }
        },

        right: {
            initial: { opacity: 0, x: radius },
            animate: { opacity: 1, x: ((idx + 1) * radius), y: 0 }
        },

        top: {
            initial: { opacity: 0, y: -radius },
            animate: { opacity: 1, x: 0, y: -((idx + 1) * radius) }
        },

        bottom: {
            initial: { opacity: 0, y: radius },
            animate: { opacity: 1, x: 0, y: ((idx + 1) * radius) }
        }
    });

    React.useEffect(() => {
        const handleMouseDown = async (ev: MouseEvent) => {
            if (refMouseDown.current && !refMouseDown.current.contains(ev.target as Node)) {
                setOpen(false)
            }
        };
        document.addEventListener("mousedown", handleMouseDown);
        return () => document.removeEventListener("mousedown", handleMouseDown);

    }, [open])

    return (
        <div ref={refMouseDown}>
            <div className="relative">
                <AnimatePresence>
                    {
                        open &&
                        props.data.map((action, idx) => (
                            <motion.button
                                key={idx}
                                initial={{ ...mapItemMotion(idx)[position].initial }}
                                animate={{ ...mapItemMotion(idx)[position].animate }}
                                exit={{ ...mapItemMotion(idx)[position].initial }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                onClick={action?.onHandle || (() => { })}
                                className="absolute z-50 right-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 shadow-lg text-slate-800 hover:bg-slate-300">
                                {action.icon}
                            </motion.button>
                        ))
                    }
                </AnimatePresence>

                <button
                    onClick={() => setOpen(!open)}
                    className={`${sizeClassName} rounded-full ${severityBg} text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all`}>
                    <BsPlus
                        size={28}
                        className={`${open ? "rotate-45" : ""} transition-transform duration-300`}
                    />
                </button>

            </div>
        </div>
    );
};

export default SpeedDialVertical;
