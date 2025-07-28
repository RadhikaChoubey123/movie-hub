import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="bg-black text-white ">
            <div className="flex justify-between items-center px-10 h-20 relative ">
                <h1 className="text-4xl font-bold">MovieVerse</h1>

                {/* Hamburger button (only on mobile) */}
                <button onClick={handleToggle} className="block md:hidden">
                    {showMenu ? (
                        <IoMdClose className="w-6 h-6 cursor-pointer" />
                    ) : (
                        <GiHamburgerMenu className="w-6 h-6 cursor-pointer" />
                    )}
                </button>
                {/* Nav links */}
                <div className={` ${showMenu ? "block" : "hidden"} absolute right-0 top-14  z-50 
               md:static  w-48  md:w-auto overflow-hidden md:flex flex flex-col md:flex-row justify-end gap-4 md:gap-8 text-lg
               bg-black md:bg-transparent transition-all duration-500 ease-in-out px-10  py-9 text-center md:px-14`} >

                    <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-400 hover:text-blue-600"}> Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-400 hover:text-blue-600"} >About</NavLink>
                    <NavLink to="/movie" className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-400 hover:text-blue-600"}>Movie</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-400 hover:text-blue-600"}>Contact</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
