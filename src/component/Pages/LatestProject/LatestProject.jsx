import Carousel from "./Carousel/Carousel";

const LatestProject = () => {
  return (
    <div className="bg-[#000000] pb-[50px]">
      <h1 className="text-white font-bold text-[30px] md:text-[48px] tracking-[6%] leading-[65.52px] text-center pt-[110px]">
        ENJOY OUR <span className="text-[#6D95FC]">LATEST</span> <br /> PROJECTS
      </h1>
      <div className="flex items-center justify-center gap-[14.5px] pt-[20px] pb-[60px] md:py-[50px]">
        <p className="border-[3px] border-white rounded w-[80.5px] md:w-[97.5px]"></p>
        <h1 className="text-[#6D95FC] font-medium text-[16px] md:text-[21px] tracking-[14.5%] leading-[31.5px]">
          OUR WORK
        </h1>
        <p className="border-[3px] border-white rounded w-[80.5px] md:w-[97.5px]"></p>
      </div>
      <Carousel></Carousel>
    </div>
  );
};

export default LatestProject;
