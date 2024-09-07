import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Switch } from "@nextui-org/react";
// import MoonIcon from "../assets/moonicon.svg";
// import SunIcon from "../assets/sunicon.svg";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

import routerData from "../assets/router.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Ferme le menu après un clic
  };

  return (
    <>
      <header className="flex flex-col lg:flex-row lg:justify-around max-lg:gap-20 items-center p-7">
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
            <NavbarBrand>
              <p className="font-bold text-inherit text-3xl uppercase">Repall.fr</p>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {routerData.map((item) => (
              <NavbarItem key={item.id} className="text-xl">
                <NavLink
                  to={item.route}
                  className={({ isActive }) =>
                    isActive ? "bg-primary px-3 py-2 rounded-xl " : "hover:text-primary duration-500 cursor-pointer px-3 py-2"
                  }
                >
                  {item.name}
                </NavLink>
              </NavbarItem>
            ))}
            {/* <NavbarItem>
              <NavLink
                to="/a-propos"
                className={({ isActive }) =>
                  isActive ? "bg-primary p-2 rounded-xl " : "hover:text-primary duration-500 cursor-pointer p-2"
                }
              >
                À Propos
              </NavLink>
            </NavbarItem> */}
            {/* <NavbarItem>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "bg-primary p-2 rounded-xl " : "hover:text-primary duration-500 cursor-pointer p-2"
                }
              >
                Contact
              </NavLink>
            </NavbarItem> */}
          </NavbarContent>
          {/* <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Switch defaultSelected size="lg" color="primary"  startContent={<MoonIcon />} endContent={<SunIcon />}></Switch>
            </NavbarItem>
          </NavbarContent> */}
          <NavbarMenu className="flex flex-col items-center pt-20 gap-8 w-full font-bold">
            {routerData.map((item) => (
              <NavbarMenuItem key={item}>
                <NavLink
                  to={item.route}
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </NavLink>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </header>
    </>
  );
}
