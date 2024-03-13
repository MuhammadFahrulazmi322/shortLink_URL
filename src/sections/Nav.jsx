import React, { useState } from "react";
import { iconHumburger } from "../assets/images/index";
import { LogoBrand } from "../assets/images/LogoBrand";
import Button from "../components/Buttons";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="px-4 lg:px-12 py-8">
      <nav className="flex flex-row items-center justify-between ">
        <div className="flex flex-row gap-10 items-center">
          <LogoBrand />
          <ul className="flex-1 flex justify-end items-center gap-6 max-lg:hidden ">
            <li>
              <a href="#" className="text-sm text-grayishViolet font-bold">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-grayishViolet font-bold">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-grayishViolet font-bold">
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-10 items-center max-md:hidden">
          <a href="" className="text-grayishViolet font-bold text-sm">
            Login
          </a>
          <Button label={"Sign Up"} border={"text-white py-2 px-8"} />
        </div>
        <div className="lg:hidden md:block">
          <img
            src={iconHumburger}
            alt="ic_humburger"
            width={24}
            onClick={handleToggleMobileMenu}
          />
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20"
          onClick={handleToggleMobileMenu}
        >
          <div className="flex items-center justify-center">
            <ul
              id="mobileMenu"
              className=" mt-20 w-[80%] bg-darkViolet px-4 py-4 flex flex-col gap-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col gap-6 border-b-2 border-gray py-4 px-4 items-center text-white">
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
              </div>
              <div className="flex flex-col gap-6  pb-4 px-4 items-center text-white">
                <a href="">Login</a>
                <Button label={"Sign Up"} border={"w-full"} />
              </div>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
