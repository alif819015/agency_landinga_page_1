import img from "../../../../public/Image/beautiful-woman_processed.png";
import Container from "../../Ui/Container";

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
      <Container>
        <div className="grid grid-cols-2 pt-[105px]">
          <div className="pb-[150px]">
            <h6 className="pt-20 pb-[43px] text-[21px] uppercase text-[#6D95FC]">
              Welcome to creatic
            </h6>
            <h1 className="pb-[43px] font-bold text-[60px]">
              WE ARE <span className="text-[#6D95FC]">CREATIVE</span> DESIGN
              AGENCY
            </h1>
            <hr className="w-24 border-[#6D95FC]" />
            <p className="py-[43px] text-[21px] w-[480px]">
              Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit Neque porro elit Neque porro
              quis ipsum
            </p>
            <button className="px-4 py-2.5 text-[17px] border border-[#6D95FC]">
              GET IN TOUCH
            </button>
          </div>
          <div className="w-full">
            <img
              className="w-full h-full bg-transparent"
              src={img}
              alt="beautiful-woman"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
