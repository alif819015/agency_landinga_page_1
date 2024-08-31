import React from "react";
import Container from "../../Ui/Container";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Container>
        <div className="text-center mt-16 md:mt-0 pt-02">
          <h1 className="text-[#6D95FC] uppercase font-semibold text-5xl tracking-[1.5%]">
            Creatic
          </h1>
          <p className="pb-4 tracking-[19%] text-xs md:text-sm">
            CREATIVE AGENCY
          </p>
          <hr className="mx-auto pb-4 w-[87px] border-[#6D95FC]" />
          <div className="flex md:flex flex-wrap gap-5 text-sm md:text-[21px] justify-center text-[#6D95FC] pb-4 tracking-[-2.5%]">
            <p>Categories</p>
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Pages</p>
            <p>Support</p>
          </div>
          <p className="pb-10 tracking-[4%] text-sm md:text-[21px] leading-[166.5%]">
            Insights from our clients showcasing the transformative impact of
            our agency's solutions and services
          </p>
          <div className="flex gap-4 justify-center text-[#6D95FC] pb-[20px]">
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
            <FaLinkedin />
            <FaTwitter />
          </div>
          <footer className="footer footer-center text-white p-4">
            <aside>
              <p>
                Copyright © {new Date().getFullYear()} Creatic Agency All rights
                reserved.
              </p>
            </aside>
          </footer>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
