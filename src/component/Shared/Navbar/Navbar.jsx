import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import Container from "../../Ui/Container";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  const navMenu = (
    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-40 pb-2 md:pb-0">
      <ul className=" md:flex gap-4 md:gap-[27px] lg:gap-[27px] text-base md:text-lg lg:text-[21px] font-medium items-center">
        <li className="md:font-medium text-[14px] md:text-[21px] md:leading-[13.5px]">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Home
          </Link>
        </li>
        <li className="md:font-medium text-[14px] md:text-[21px] md:leading-[13.5px]">
          <Link
            to="about-us"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            About Us
          </Link>
        </li>
        <li className="md:font-medium text-[14px] md:text-[21px] md:leading-[13.5px]">
          <Link
            to="services"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Services
          </Link>
        </li>
        <li className="md:font-medium text-[14px] md:text-[21px] md:leading-[13.5px]">
          <Link
            to="portfolio"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Portfolio
          </Link>
        </li>
        <li className="md:font-medium text-[14px] md:text-[21px] md:leading-[13.5px]">
          <Link
            to="pages"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Pages
          </Link>
        </li>
        <li className="md:font-medium text-[14px] md:text-[21px] md:leading-[13.5px]">
          <Link
            to="pages"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Contact Us
          </Link>
        </li>
        <li className="flex justify-center items-center text-5xl md:text-[29px] md:ml-5 text-[#fcfbfb] md:text-[#6D95FC] animate-pulse md:animate-none md:py-0">
          <FaSearch />
        </li>
      </ul>
    </div>
  );

  return (
    <div className="navbar h-[60px] md:h-[80px] lg:h-[120px] text-white">
      <Container>
        <div className="w-full flex items-center justify-between lg:justify-start">
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden relative">
            <Hamburger toggled={isOpen} toggle={setOpen} distance="sm" />
            {isOpen && (
              <div className="absolute w-[130px] py-2 z-50 menu shadow-green-light bg-gradient-to-r from-[#6D95FC] to-[#2d4071fc] shadow-md rounded-lg mt-2">
                {navMenu}
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="w-full flex  justify-center items-center content-between">
            <div className="flex flex-col text-center md:mr-[112px] lg:mr-[112px]">
              <span className="uppercase text-[#6D95FC] tracking-[-2.5%] font-semibold text-[20px] md:text-[40px] lg:text-[50px]">
                Creatic
              </span>
              <p className="tracking-widest lg:tracking-[19%] text-[7px] md:text-[12px] lg:text-[14px]">
                EATIVE AGENCY
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
