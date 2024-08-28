import { useGSAP } from "@gsap/react";
import videoIcon from "../../../../public/Video Icon.png";
import graphic from "../../../../public/icons/graphic icon.svg";
import ux from "../../../../public/ux.svg";
import Web from "../../../../public/Web icon.svg";
import gsap from "gsap";
import "./OurService.css";
import Container from "../../Ui/Container";

const OurService = () => {
  useGSAP(() => {
    gsap.from(
      ".service-text",
      {
        x: -360,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".service-text",
          start: "10% 90%", // Adjust start based on when you want the animation to begin
          end: "20% 5%",
          scrub: true,
        },
      },
      ".service-section"
    );
  });

  return (
    <Container>
      <div className="service-section bg-[#000000] md:flex gap-[91px] justify-center max-sm:py-4">
        <div className="md:w-[589px] lg:w-[589px] pt-[50px] md:pt-[175px] lg:pt-[175px] md:pb-[145px] lg:pb-[145px]">
          <h2 className="service-text text-[#6D95FC] font-medium text-[21px] tracking-[14.5%] leading-[31.5px]">
            OUR SERVICE
          </h2>
          <h1 className="service-text text-[#FFFFFF] font-bold text-3xl md:text-5xl lg:text-5xl md:leading-[59.76px] py-8">
            Experience the power of
            <span className="service-text text-[#6D95FC]"> Innovation</span>.
          </h1>
          <p className="service-text border-[3px] border-[#6D95FC] w-[97.5px]"></p>
          <p className="service-text text-[#FFFFFF] font-light md:text-[21px] tracking-[4%] leading-[25px] md:leading-[34.96px] py-8">
          Empowering businesses to stay ahead of the curve with cutting-edge strategies and innovative solutions, driving success in a rapidly evolving digital landscape where the future is shaped by today's bold ideas
          </p>
          <button className="service-text text-[#FFFFFF] border-[3px] border-[#6D95FC] rounded-[2px] px-[25px] py-[10px] flex items-center font-normal text-[17px]">
            VIEW ALL
          </button>
        </div>
        {/* service name */}
        <div className="grid justify-center gap-2 md:grid-cols-2 pt-[50px] pb-[50px] md:pt-[134px] lg:pt-[134px] md:pb-[133px] lg:pb-[133px]">
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(109, 149, 252, 0.35) -346.67%, rgba(21, 21, 21, 0.31) 74.83%)",
            }}
            className="hover-element p-8 flex flex-col items-center justify-center w-[300px]"
          >
            <img src={videoIcon} alt="" />
            <h1 className="text-[#6D95FC] font-semibold text-[21px] tracking-[6%] leading-[31.5px] text-center">
              VIDEO MARKETING
            </h1>
            <p className="text-[#FFFFFF] font-light md:text-[21px] tracking-[4%] leading-[25px] md:leading-[34.96px] py-8 pt-0 text-center">
            Building websites that captivate, engage, and convert
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(109, 149, 252, 0.35) -346.67%, rgba(21, 21, 21, 0.31) 74.83%)",
            }}
            className=" hover-element p-8 flex flex-col items-center justify-center w-[300px]"
          >
            <img src={ graphic} alt="" />
            <h1 className="text-[#6D95FC] font-semibold text-[21px] tracking-[6%] leading-[31.5px] text-center">
              Graphic Design
            </h1>
            <p className="text-[#FFFFFF] font-light md:text-[21px] tracking-[4%] leading-[25px] md:leading-[34.96px] py-8 pt-0 text-center">
            Transforming ideas into visually stunning graphic designs
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(109, 149, 252, 0.35) -346.67%, rgba(21, 21, 21, 0.31) 74.83%)",
            }}
            className="hover-element p-8 flex flex-col items-center justify-center w-[300px]"
          >
            <img src={ux} alt="" />
            <h1 className="text-[#6D95FC] font-semibold text-[21px] tracking-[6%] leading-[31.5px] text-center">
              ui/ux Design
            </h1>
            <p className="text-[#FFFFFF] font-light md:text-[21px] tracking-[4%] leading-[25px] md:leading-[34.96px] py-8 pt-0 text-center">
            Crafting seamless UI/UX that enhances user satisfaction
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(109, 149, 252, 0.35) -346.67%, rgba(21, 21, 21, 0.31) 74.83%)",
            }}
            className="hover-element p-8 flex flex-col items-center justify-center w-[300px]"
          >
            <img src={Web} alt="" />
            <h1 className="text-[#6D95FC] font-semibold text-[21px] tracking-[6%] leading-[31.5px] text-center">
              WEBSITE DESIGN
            </h1>
            <p className="text-[#FFFFFF] font-light md:text-[21px] tracking-[4%] leading-[25px] md:leading-[34.96px] py-8 pt-0 text-center">
            Creating stunning websites that engage and convert visitors
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurService;
