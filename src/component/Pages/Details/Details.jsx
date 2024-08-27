
import { useGSAP } from "@gsap/react";
import teamMembers from "../../../../public/Group.svg";
import Container from "../../Ui/Container";
import gsap from "gsap";


const Details = () => {

  useGSAP(()=>{
    
    gsap.from(".details-box", {
      duration: 1,
      opacity: 0,
      y: -100,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".details-box",
        start: "10% 90%", // Adjust start based on when you want the animation to begin
        end: "80% 5%",
        scrub: true,
      },
    },".details-section");

    
  })

  return (
    
    <div className="details-section"
      style={{
        background: "linear-gradient(90deg, #000000, rgba(3, 47, 82, 0.758))",
      }}
    >
      <Container>
        <div className="py-16 md:py-20 lg:py-20 md:flex lg:flex justify-around">
          <div className="details-box flex flex-col items-center justify-center max-sm:pb-10">
            <img src={teamMembers} alt="" />
            <h1 className="text-white font-extrabold text-[64px]">50+</h1>
            <p
              style={{ color: "rgba(109, 149, 252, 1)" }}
              className="font-normal text-lg md:text-[21px] tracking-[4%] leading-[25.73px] text-center pt-[3px]"
            >
              Team members
            </p>
          </div>
          <div className="details-box flex flex-col items-center justify-center max-sm:pb-10">
            <img src={teamMembers} alt="" />
            <h1 className="text-white font-extrabold text-[64px]">200+</h1>
            <p
              style={{ color: "rgba(109, 149, 252, 1)" }}
              className="font-normal text-lg md:text-[21px] tracking-[4%] leading-[25.73px] text-center pt-[3px]"
            >
              Project done
            </p>
          </div>
          <div className="details-box flex flex-col items-center justify-center max-sm:pb-10">
            <img src={teamMembers} alt="" />
            <h1 className="text-white font-extrabold text-[64px]">500+</h1>
            <p
              style={{ color: "rgba(109, 149, 252, 1)" }}
              className="font-normal text-lg md:text-[21px] tracking-[4%] leading-[25.73px] text-center pt-[3px]"
            >
              Happy customers
            </p>
          </div>
          <div className="details-box flex flex-col items-center justify-center">
            <img src={teamMembers} alt="" />
            <h1 className="text-white font-extrabold text-[64px]">75+</h1>
            <p
              style={{ color: "rgba(109, 149, 252, 1)" }}
              className="font-normal text-lg md:text-[21px] tracking-[4%] leading-[25.73px] text-center pt-[3px]"
            >
              Award Winning
            </p>
          </div>
        </div>
      
      </Container>
    </div>
    
  );
};

export default Details;
