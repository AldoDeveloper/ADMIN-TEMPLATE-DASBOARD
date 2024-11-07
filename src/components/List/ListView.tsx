import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListViewProps } from './interface';

const ListView: React.FC<ListViewProps> = ({ items, itemTemplate }) => {

    const renderItemTemplate = (item: any) => {
        if (typeof itemTemplate === "function")
            return itemTemplate(item);
        return itemTemplate;
    };

    return (
        <ul className="list-none divide-y divide-gray-300">
            {items.map((item, index) => (
                <li key={index} className="p-2 px-2 hover:bg-slate-200 dark:hover:bg-slate-500">
                    <NavLink to={"#"} className={"inline-block"}>
                        { renderItemTemplate(item) }
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default ListView;