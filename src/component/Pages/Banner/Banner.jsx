import img from "../../../../public/Image/beautiful-woman.png";
import Container from "../../Ui/Container";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: "#060000",
        boxShadow: "inset -10px 0 10px rgba(0, 0, 0, 0)",
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 60%, #6d96fc51 100%)",
      }}
    >
      {/* <div className="background-image"> */}
      <Container>
        <div className="relative pt-[105px] pb-[183px] w-[819px]">
          <h6 className="pt-20 pb-[43px] text-[21px] uppercase text-[#6D95FC] tracking-[14.5%]">
            Welcome to creatic
          </h6>
          <h1 className="pb-[43px] font-bold text-[80px] tracking-[1.5%] leading-[111.5%]">
            WE ARE <span className="text-[#6D95FC]">CREATIVE</span> DESIGN
            AGENCY
          </h1>
          <hr className="w-24 border-[#6D95FC]" />
          <p className="py-[43px] text-[21px] w-[697px]">
            Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit Neque porro elit Neque porro quis
            ipsum
          </p>
          <button className="px-4 py-2.5 text-[17px] border border-[#6D95FC] tracking-[14.5%]">
            GET IN TOUCH
          </button>
          <img
            className="absolute w-full h-[90%] z-10 bottom-0 left-[500px]"
            src={img}
            alt=""
          />
        </div>
      </Container>
    </div>
    // </div>
  );
};

export default Banner;
