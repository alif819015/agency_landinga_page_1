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
    <ul className="md:flex gap-[27px] text-[21px] font-medium">
      <li>
        <Link to="home" smooth={true} duration={1000} onClick={handleNavClick}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={1000} onClick={handleNavClick}>
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="services"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="portfolio"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="pages" smooth={true} duration={1000} onClick={handleNavClick}>
          Pages
        </Link>
      </li>
      <li>
        <Link
          to="contact Us"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Contact Us
        </Link>
      </li>
      <li className="flex justify-center items-center text-[#6D95FC]">
        <FaSearch />
      </li>
    </ul>
  );

  return (
    <div className="navbar bg-black text-white">
      <Container>
        <div className="mr-[236px]">
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} distance="sm" />
            {isOpen && (
              <div className="p-2 shadow-purple-200 menu bg-[#da08a2] rounded-box w-full">
                {navMenu}
              </div>
            )}
          </div>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="fontStyle btn-ghost normal-case text-2xl hidden lg:flex"
            onClick={handleNavClick}
          >
            <span className="w-[174px] h-[23px] text-center">
            <span className="uppercase leading-[0px] text-[#6D95FC] tracking-[-2.5%] font-semibold text-[50px]">
              Creatic
            </span>
            <br />
            <span className="tracking-[19%] text-[14px] ">CREATIVE AGENCY</span>
            </span>
          </Link>
        </div>
        <div className=" hidden lg:flex">{navMenu}</div>
      </Container>
    </div>
  );
};

export default Navbar;
