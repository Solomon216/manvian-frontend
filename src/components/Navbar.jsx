import React, { useState, useEffect } from "react";
import image from "../assets/hoobank.png"

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check screen size and update isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the default breakpoint for 'md'
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/0 backdrop-blur-lg fixed w-full z-50 dark:bg-transparent dark:backdrop-blur-lg py-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <a href="https://flowbite.com/" className="flex items-center rtl:space-x-reverse">
          <img src={image} alt="Flowbite Logo" className="h-10" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMobile && isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <a href="#" className="block py-2 px-3 text-white hover:text-[#33bbcf] md:hover:text-[#33bbcf] md:p-0 dark:text-white md:dark:hover:text-[#33bbcf]">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white hover:text-[#33bbcf] md:hover:text-[#33bbcf] md:p-0 dark:text-white md:dark:hover:text-[#33bbcf]">About us</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white hover:text-[#33bbcf] md:hover:text-[#33bbcf] md:p-0 dark:text-white md:dark:hover:text-[#33bbcf]">Features</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white hover:text-[#33bbcf] md:hover:text-[#33bbcf] md:p-0 dark:text-white md:dark:hover:text-[#33bbcf]">Solution</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
