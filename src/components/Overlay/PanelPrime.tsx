import { OverlayPanel } from 'primereact/overlaypanel';
import React from 'react';
import { PropsOverlayPanelPrime } from './interface';
import Button from '../Button';
import { BsMapFill } from 'react-icons/bs';

const OverlayPanelPrime: React.FC<PropsOverlayPanelPrime> = ({ children, itemSelected, label, className }) => {

    const refOverlay = React.useRef<any>(null);

    const renderItemSelected = () => {

        if (itemSelected && typeof itemSelected === "function")
            return itemSelected(refOverlay.current);

        return itemSelected || (
            <Button size="sm"
                onClick={(ev) => refOverlay.current.toggle(ev)}
                className={`px-2 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-100 ring-1 ring-slate-300 `}
                label={
                    <>
                        <div className="flex gap-2 items-center">
                            <BsMapFill size={15} />
                            <span className="text-xs font-semibold">{label}</span>
                        </div>
                    </>
                }
                bgColor="secondary" />
        )
    };

    return (
        <React.Fragment>
            { renderItemSelected() }
            <OverlayPanel
                unstyled={false}
                ref={refOverlay}
                dismissable={true}
                pt={{
                    root(options) {
                        return {
                            ...options,
                            className: `px-3 py-2 min-w-[8rem] dark:bg-slate-600 bg-white rounded-lg shadow-lg ${className}`
                        }
                    },
                }}>
                { children }

            </OverlayPanel>
        </React.Fragment>
    )
};

export default OverlayPanelPrime