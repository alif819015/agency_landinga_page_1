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
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(../../../../../../public/Image/beautiful-woman.png)",
            backgroundPosition:'400px, right',
        }}
      >
        <div className="hero-overlay bg-opacity-60 md:bg-opacity-0"></div>
       
        <Container>
        <div className="flex flex-col items-center md:flex-row">
              <div className="pt-10 pb-12 md:pt-[105px] md:pb-[183px] w-full md:w-[819px] text-center md:text-left">
                <h6 className="pt-10 pb-8 md:pt-20 md:pb-[43px] text-lg md:text-[21px] uppercase text-[#6D95FC] tracking-wider md:tracking-[14.5%]">
                  Welcome to creatic
                </h6>
                <h1 className="pb-8 md:pb-[43px] font-bold text-4xl md:text-[80px] tracking-wide md:tracking-[1.5%] leading-snug md:leading-[111.5%]">
                  WE ARE <span className="text-[#6D95FC]">CREATIVE</span> DESIGN
                  AGENCY
                </h1>
                <hr className="mx-auto md:mx-0 w-16 md:w-24 border-[#6D95FC]" />
                <p className="py-8 md:py-[43px] text-base md:text-[21px] w-[90%] md:w-[697px] mx-auto md:mx-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  porro quisquam est qui dolorem ipsum quia dolor sit amet.
                </p>
                <button className="px-6 py-3 text-sm md:text-[17px] border border-[#6D95FC] tracking-widest md:tracking-[14.5%]">
                  GET IN TOUCH
                </button>
              </div>
            </div>
        </Container>
        
      </div>
       

      {/* <div className="background-image">
        <Container>
          <div className="flex flex-col items-center md:flex-row">
            <div className="pt-10 pb-12 md:pt-[105px] md:pb-[183px] w-full md:w-[819px] text-center md:text-left">
              <h6 className="pt-10 pb-8 md:pt-20 md:pb-[43px] text-lg md:text-[21px] uppercase text-[#6D95FC] tracking-wider md:tracking-[14.5%]">
                Welcome to creatic
              </h6>
              <h1 className="pb-8 md:pb-[43px] font-bold text-4xl md:text-[80px] tracking-wide md:tracking-[1.5%] leading-snug md:leading-[111.5%]">
                WE ARE <span className="text-[#6D95FC]">CREATIVE</span> DESIGN
                AGENCY
              </h1>
              <hr className="mx-auto md:mx-0 w-16 md:w-24 border-[#6D95FC]" />
              <p className="py-8 md:py-[43px] text-base md:text-[21px] w-[90%] md:w-[697px] mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>
              <button className="px-6 py-3 text-sm md:text-[17px] border border-[#6D95FC] tracking-widest md:tracking-[14.5%]">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </Container>
      </div> */}
    </div>
  );
};

export default Banner;
