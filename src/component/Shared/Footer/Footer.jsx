import React from "react";
import Container from "../../Ui/Container";

const Footer = () => {
  return (
    <div className="bg-black text-white">
        <Container>
      <div className="text-center pt-32">
        <h1 className="text-[#6D95FC] uppercase font-semibold text-5xl">Creatic</h1>
        <p className="pb-4">CREATIVE AGENCY</p>
        <hr className="mx-auto pb-4 w-[87px] border-[#6D95FC]" />
        <div className="flex gap-5 justify-center text-[#6D95FC] pb-4">
          <p>Categories</p>
          <p>About</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>Pages</p>
          <p>Support</p>
        </div>
        <p className="pb-10">
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro elit NeDque{" "}
        </p>
      </div>
    </Container>
    </div>
  );
};

export default Footer;
