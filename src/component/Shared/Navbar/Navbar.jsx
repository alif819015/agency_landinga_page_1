/* eslint-disable no-unused-vars */
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.css";
import Container from "../../Ui/Container";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  const navMenu = (
    <ul className=" md:flex gap-6 lg:gap-[27px] text-base md:text-lg lg:text-[21px] font-medium">
      <li className="py-2 md:py-0">
        <Link to="home" smooth={true} duration={1000} onClick={handleNavClick}>
          Home
        </Link>
      </li>
      <li className="py-2 md:py-0">
        <Link to="contact-us" smooth={true} duration={1000} onClick={handleNavClick}>
          About Us
        </Link>
      </li>
      <li className="py-2 md:py-0">
        <Link
          to="services"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Services
        </Link>
      </li>
      <li className="py-2 md:py-0">
        <Link
          to="portfolio"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Portfolio
        </Link>
      </li>
      <li className="py-2 md:py-0">
        <Link to="pages" smooth={true} duration={1000} onClick={handleNavClick}>
          Pages
        </Link>
      </li>
      <li className="py-2 md:py-0">
        <Link
          to="contact Us"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Contact Us
        </Link>
      </li>
      <li className="flex justify-center items-center text-[#6D95FC] py-2 md:py-0">
        <FaSearch />
      </li>
    </ul>
  );

  return (
    <div className="navbar h-[60px] md:h-[80px] lg:h-[120px] bg-black text-white">
      <Container>
        <div className="w-full flex items-center justify-between lg:justify-start">
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} distance="sm" />
            {isOpen && (
              <div className="p-4 shadow-lg menu bg-[#da08a2] rounded-lg mt-2">
                {navMenu}
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="w-full flex  justify-center items-center content-between">
            <div className="flex flex-col text-center mr-[112px]">
                <span className="uppercase text-[#6D95FC] tracking-[-2.5%] font-semibold text-[20px] md:text-[40px] lg:text-[50px]">
                  Creatic
                </span>
                <p className="tracking-widest lg:tracking-[19%] text-[7px] md:text-[12px] lg:text-[14px]">
                  CREATIVE AGENCY
                </p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex ml-auto shrink-0">{navMenu}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
