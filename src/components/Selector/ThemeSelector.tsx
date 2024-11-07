import { ContextDasboard } from '@/state/context/dasboard';
import React, { useState } from 'react';

const themes = [
    { id: 1, name: "md-purple",  colors: ['bg-md-purple-200', 'bg-md-purple-500'] },
    { id: 2, name: "red",        colors: ['bg-red-200', 'bg-red-500'] },
    { id: 3, name: "green",      colors: ['bg-green-200', 'bg-green-500'] },
    { id: 4, name: "tq-blue",    colors: ['bg-tq-blue-200', 'bg-tq-blue-500'] },
];

const ThemeSelector: React.FC = () => {

    const { propsDasboard, setDasboard } = React.useContext(ContextDasboard);
    const themeApp = propsDasboard.theme;

    return (
        <div className="p-6">
            <p className="text-slate-700 dark:text-slate-200 text-xl mb-7">Choose a theme:</p>
            <div className="flex space-x-3">
                {themes.map((theme) => (
                    <div
                        key={theme.id}
                        className={`relative flex items-center justify-center p-2 rounded-md cursor-pointer transition-colors duration-200 
                        ${themeApp === theme.name ? 'ring-2 ring-blue-400' : ''}`}
                        onClick={() => setDasboard("theme", { theme: theme.name as any })}>
                        <span className={`absolute -top-2 -left-1 w-6 h-6 rounded-full ${theme.colors[0]}`}></span>
                        <span className={`w-6 h-6 rounded-full ${theme.colors[1]}`}></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThemeSelector;
