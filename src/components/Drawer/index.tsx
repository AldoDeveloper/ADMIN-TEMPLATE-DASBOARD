import React, { useMemo } from "react";

type SidebarPosition = 'left' | 'right';

interface DrawerProp {
    isOpen: boolean;
    onClose: () => void;
    position?: SidebarPosition;
    width?: string;
    children?: JSX.Element | JSX.Element[];
    overlayClass?: string;
    sidebarClass?: string;
}

const Drawer: React.FC<DrawerProp> = (props) => {
    const {
        position = 'left',
        width = 'w-64',
        overlayClass = 'bg-black bg-opacity-50',
        sidebarClass = 'bg-white shadow-lg',
        onClose,
        isOpen,
        children
    } = useMemo(() => ({ ...props }), [props]);

    const handleOverlayClick = (e: any) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    const positionClasses = {
        left: 'left-0',
        right: 'right-0',
    };

    const transformClasses = {
        left: '-translate-x-full',
        right: 'translate-x-full',
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Overlay */}
            <div
                className={`fixed inset-0 transition-opacity ${overlayClass}`}
                onClick={handleOverlayClick}>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 h-full ${positionClasses[position]} ${width} transform ${isOpen ? 'translate-x-0' : transformClasses[position]
                    } transition-all duration-300 ease-in-out ${sidebarClass}`}>
                <div className="h-full overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Drawer;