import { useState, useEffect, useRef } from "react";
import perfumeLogo from "./perfume-logo.png";
import hamburgerIcon from "./hamburgerIcon.svg";
// import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed w-full items-center bg-custom-nav-color z-10 py-1 px-2 rounded-[20px] mt-2">
      {/* Logo Section */}
      <div className="flex  items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-16 h-10 rounded-[15px]"
            src={perfumeLogo}
            alt="Perfume Logo"
          />
          <h1 className="ml-2 lg:text-2xl font-bold  Ftext-lg cursor-pointer">
            Perfume
          </h1>
        </div>

        {/*Hambueger Menu button */}
        <button className="lg:hidden p-2 " onClick={() => setIsOpen(!isOpen)}>
          <img className="w-8 h-8" src={hamburgerIcon} alt="Hamburger Icon" />
        </button>

        <ul className="hidden lg:flex gap-8 justify-center m-auto">
          <li>
            <a
              className="no-underline text-2xl transition-all p-1 duration-300 ease-linear hover:bg-animation-color hover:rounded-lg hover:p-1"
              href="#">
              Home
            </a>
          </li>
          <li>
            <a
              className="no-underline text-2xl transition-all p-1 duration-300 ease-linear hover:bg-animation-color hover:rounded-lg hover:p-1"
              href="#">
              Shop
            </a>
          </li>
          <li>
            <a
              className="no-underline text-2xl transition-all p-1 duration-300 ease-linear hover:bg-animation-color hover:rounded-lg hover:p-1"
              href="#">
              About
            </a>
          </li>
        </ul>

        <button className="ml-auto hidden lg:block bg-contact-custom-color p-2 rounded-[20px] font-bold text-xl transition-all duration-200 ease-in-out hover:bg-contact-hover-color ">
          Contact Us
        </button>
      </div>
      {isOpen && (
        <div className="block w-full">
          <ul className="flex flex-col">
            <li className="no-underline text-2xl transition-all  p-2 duration-300 ease-linear hover:bg-animation-color hover:rounded-lg hover:p-1">
              <a href="#">Home</a>
            </li>
            <li className="no-underline text-2xl transition-all  p-2 duration-300 ease-linear hover:bg-animation-color hover:rounded-lg hover:p-1">
              <a href="#">Shop</a>
            </li>
            <li className="no-underline text-2xl transition-all p-2 duration-300 ease-linear hover:bg-animation-color hover:rounded-lg hover:p-1">
              <a href="#">About</a>
            </li>
            <li className="no-underline text-2xl mb-1 transition-all  p-2 duration-300 ease-linear hover:bg-animation-color hover:rounded-lg hover:p-1 hover:mb-1">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
