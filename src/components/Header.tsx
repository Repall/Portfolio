import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import routerData from "../assets/router.json";

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <nav
          className={`transition-all duration-300 ease-in-out fixed top-0 left-1/2 transform -translate-x-1/2 z-40 text-black bg-white flex flex-row justify-around max-lg:gap-12 items-center p-7 ${
            isScrolled ? "mt-7 w-5/6 rounded-full shadow-lg" : "w-full rounded-b-full"
          }`}
        >
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden text-3xl focus:outline-none">
            ☰
          </button>
          <NavLink to="/" className="font-bold text-inherit text-3xl uppercase">
            Repall.fr
          </NavLink>
          {/* Desktop */}
          <div className="hidden sm:flex text-xl space-x-6 font-bold">
            {routerData.map((item) => (
              <NavLink
                key={item.route}
                to={item.route}
                className={({ isActive }) =>
                  isActive ? "bg-primary px-3 py-2 rounded-xl" : "hover:text-primary duration-500 cursor-pointer px-3 py-2"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
        {/* Sidebar menu mobile */}
        <div
          className={`fixed top-0 left-0 h-screen w-2/5 bg-black text-white transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-[150%]"
          }`}
        >
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5 text-3xl focus:outline-none text-white">
            ×
          </button>

          <div className="flex flex-col text-xl items-center space-y-6 mt-20 font-bold">
            {routerData.map((item) => (
              <NavLink
                key={item.route}
                to={item.route}
                className={({ isActive }) =>
                  isActive ? "bg-primary px-5 py-3 rounded-xl block" : "hover:text-primary duration-500 cursor-pointer px-5 py-3 block"
                }
                onClick={() => setIsMenuOpen(false)} 
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
