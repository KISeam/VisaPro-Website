import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { FaChevronDown } from "react-icons/fa";
import Button from "../Button";

// ✅ Step 1: Create nav items
const navItems = [
  { path: "/", label: "Home" },
  { path: "/hotel", label: "Destination" },
  { path: "/tour", label: "Package" },
  { path: "/flight", label: "Promo" },
  { path: "/flight", label: "About" },
];

const Navbar = () => {
  return (
    <div className="sticky bg-white shadow-lg w-full top-0 z-50 transition-all duration-300">
      <div className="w-11/12 md:w-9/12 container mx-auto">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="w-30 md:w-36 lg:w-40">
            <img src={logo} alt="Logo" className="w-full h-full" />
          </NavLink>

          {/* ✅ Mobile Menu */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-40 py-2 md:py-4">
            <div className="flex justify-around items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex flex-col items-center cursor-pointer py-1.5 md:py-3 w-full ${
                      isActive ? "border-b-2 border-[#EF8C2C]" : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <p
                      className={`text-sm font-medium ${
                        isActive ? "csd" : "text-gray-600"
                      }`}
                    >
                      {item.label}
                    </p>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex flex-col items-center cursor-pointer py-2 px-6 w-full ${
                      isActive ? "" : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <p
                      className={`text-sm font-medium ${
                        isActive ? "csd" : "text-gray-600"
                      }`}
                    >
                      {item.label}
                    </p>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right-side user controls */}
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="size-6">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png"
                  alt="Bangladesh Flag"
                />
              </div>
              <p className="text-gray-600 text-sm">BDT</p>
              <FaChevronDown className="text-gray-600 text-sm" />
            </div>
            <Button text={"Sign in"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
