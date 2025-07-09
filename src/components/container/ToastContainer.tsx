import React from "react";
import { ToastContainer, cssTransition } from 'react-toastify';

export const bounceAnimationToast = cssTransition({
    enter: "fade-in-bottom-right-toast",
    exit : "fade-out-bottom-right-toast"
});

export default function ToastContainerData(): React.ReactNode {
    return (
        <ToastContainer
            autoClose={5000}
            transition={bounceAnimationToast}
            draggable
            pauseOnHover
            rtl={false}
            closeButton
            closeOnClick
            hideProgressBar={false}
            toastClassName={`bg-slate-50 dark:bg-slate-700 shadow-lg text-slate-700 dark:text-slate-50`}
        />
    )
}