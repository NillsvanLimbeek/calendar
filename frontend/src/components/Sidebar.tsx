import React, { useState } from 'react';

export const Sidebar = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <nav
            className={
                open
                    ? 'h-full w-1/5 flex-none transition-all ease-in-out duration-300 flex flex-col'
                    : 'h-full w-20 flex-none transition-all ease-in-out duration-300 flex flex-col'
            }
        >
            <div className="border-grey-400 rounded p-3 mr-5 bg-white shadow-md mb-5 h-full">
                <button onClick={toggle}>Toggle</button>
            </div>

            <div className="border-grey-400 rounded p-3 mr-5 bg-white shadow-md h-full"></div>
        </nav>
    );
};
