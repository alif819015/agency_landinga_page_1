import React from "react";
import Container from "../../Ui/Container";
import img from "../../../../public/Image/artificial intelligence.png";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#060000",
        boxShadow: "inset -10px 0 10px rgba(0, 0, 0, 0)",
        backgroundImage:
          "linear-gradient(to left, rgba(0, 0, 0, 0) 60%, #6d96fc51 100%)",
      }}
    >
      <Container>
        <div className="grid grid-cols-2 pt-[105px]">
          <div className="w-full">
            <img className="w-full h-full" src={img} alt="beautiful-woman" />
          </div>
          <div className="pb-[150px]">
            <h6 className="pt-20 uppercase text-[#6D95FC] text-[21px]">
              about us
            </h6>
            <h1 className="py-[26px] font-bold text-[48px]">
              We Bring <span className="text-[#6D95FC]">Creative</span> ideas to
              life.
            </h1>
            <hr className="py-[26px] w-24 border-[#6D95FC]" />
            <h6 className="text-[#6D95FC] text-[17px]">We love Creating</h6>
            <p className="pt-[26px] w-[480px] text-[21px]">
              Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit NeDque porro Lorem ipsum Neque porro
              Neque porro
            </p>
            <br />
            <p className="pb-[26px] text-[21px]">
              Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,
              Lorem ipsum Neque quis ipsum
            </p>
            <h1>to do</h1>

            <button className="px-4 py-2.5 text-[17px] border border-[#6D95FC] uppercase">
              red more
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
