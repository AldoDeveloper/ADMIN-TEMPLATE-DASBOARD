import React from "react";
import { PropsFooter } from "./interface";

const Footer: React.FC<PropsFooter> = ({ header, footer, children, ...rest }) => {

    const RenderedHeaderChild: React.FC<{}> = () => {
        if (typeof header === 'function') {
            return header()
        };
        return header;
    };

    const RendererFooterChild: React.FC<{}> = () => {
        if (typeof footer === "function") {
            return footer();
        };
        return footer;
    };

    return (
        <footer className="border-t-0 pt-10 container mx-auto max-lg:px-5 dark:border-t dark:border-t-slate-400 py-0 m-0 min-h-screen bg-slate-100 dark:bg-slate-900 w-full">
            {
                header && (
                    <div id="header" className="text-slate-500 dark:text-slate-200">
                        <RenderedHeaderChild />
                    </div>
                )
            }
            <main  {...rest}>
                <div id="body">
                    {children}
                </div>
                {
                    footer && (
                        <div id="footer">
                            <RendererFooterChild />
                        </div>
                    )
                }
            </main>
        </footer>
    )
};

export default Footer;