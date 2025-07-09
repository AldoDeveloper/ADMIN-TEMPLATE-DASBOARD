import React from "react";


const FooterDashboard: React.FC = () => {
    return (
        <footer className="dark:bg-gray-900 flex justify-between items-center bg-white mt-4 w-full rounded-lg shadow-xl px-4 py-4">
            <span className="italic text-sm">My Company @ Lorem ipsum dolor sit.</span>
            <span className="text-sm">
                <a href="#" className="italic text-nowrap text-blue-500">@ Lorem ipsum dolor sit amet.</a>
            </span>
        </footer>
    )
};

export default FooterDashboard;