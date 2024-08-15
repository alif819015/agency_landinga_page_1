import videoIcon from "../../../../public/Video Icon.png";
const OurService = () => {
  return (
    <div className="bg-[#000000] md:flex gap-[91px] justify-center max-sm:p-4">
      <div className="md:w-[589px] lg:w-[589px] pt-[50px] md:pt-[175px] lg:pt-[175px] md:pb-[145px] lg:pb-[145px]">
        <h2 className="text-[#6D95FC] font-medium text-[21px] tracking-[14.5%] leading-[31.5px]">
          OUR SERVICE
        </h2>
        <h1 className="text-[#FFFFFF] font-bold text-3xl md:text-5xl lg:text-5xl leading-[59.76px] py-8">
          Experience the power of
          <span className="text-[#6D95FC]"> innovation</span>.
        </h1>
        <p className="border-[3px] border-[#6D95FC] w-[97.5px]"></p>
        <p className="text-white font-light text-[21px] tracking-[4%] leading-[34.96px] py-8">
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro elit NeDque porro Neque porro quisquam est qui do
          lorem ipsum quia dolor sit amets ipsum{" "}
        </p>
        <button className="text-white border-[3px] border-[#6D95FC] rounded-[2px] px-[25px] py-[10px] flex items-center font-normal text-[17px]">
          VIEW ALL
        </button>
      </div>
      {/* service name */}
      <div className="grid md:grid-cols-2 pt-[50px] pb-[50px] md:pt-[134px] lg:pt-[134px] md:pb-[133px] lg:pb-[133px]">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(109, 149, 252, 0.35) -346.67%, rgba(21, 21, 21, 0.31) 74.83%)",
          }}
          className="p-8 flex flex-col items-center justify-center w-[300px]"
        >
          <img src={videoIcon} alt="" />
          <h1 className="text-[#6D95FC] font-semibold text-[21px] tracking-[6%] leading-[31.5px] text-center">
            VIDEO MARKETING
          </h1>
          <p className="text-white font-light text-[21px] tracking-[4%] leading-[34.96px] py-8 pt-0 text-center">
            Lorem ipsum Neque do porro quisquam est qui do quam
          </p>
        </div>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(109, 149, 252, 0.35) -346.67%, rgba(21, 21, 21, 0.31) 74.83%)",
          }}
          className="p-8 flex flex-col items-center justify-center w-[300px]"
        >
          <img src={videoIcon} alt="" />
          <h1 className="text-[#6D95FC] font-semibold text-[21px] tracking-[6%] leading-[31.5px] text-center">
            Graphic Design
          </h1>
          <p className="text-white font-light text-[21px] tracking-[4%] leading-[34.96px] py-8 pt-0 text-center">
            Lorem ipsum Neque do porro quisquam est qui do quam
          </p>
        </div>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(109, 149, 252, 0.35) -346.67%, rgba(21, 21, 21, 0.31) 74.83%)",
          }}
          className="p-8 flex flex-col items-center justify-center w-[300px]"
        >
          <img src={videoIcon} alt="" />
          <h1 className="text-[#6D95FC] font-semibold text-[21px] tracking-[6%] leading-[31.5px] text-center">
            ui/ux Design
          </h1>
          <p className="text-white font-light text-[21px] tracking-[4%] leading-[34.96px] py-8 pt-0 text-center">
            Lorem ipsum Neque do porro quisquam est qui do quam
          </p>
        </div>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(109, 149, 252, 0.35) -346.67%, rgba(21, 21, 21, 0.31) 74.83%)",
          }}
          className="p-8 flex flex-col items-center justify-center w-[300px]"
        >
          <img src={videoIcon} alt="" />
          <h1 className="text-[#6D95FC] font-semibold text-[21px] tracking-[6%] leading-[31.5px] text-center">
            WEBSITE DESIGN
          </h1>
          <p className="text-white font-light text-[21px] tracking-[4%] leading-[34.96px] py-8 pt-0 text-center">
            Lorem ipsum Neque do porro quisquam est qui do quam
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
