import React from "react";
import "./experiance.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Container from "../../Ui/Container";

const Experiance = () => {
  useGSAP(() => {
    gsap.from(
      ".experiance-text",
      {
        // left: "10%",
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".experiance-text",
          start: "10% 90%", // Adjust start based on when you want the animation to begin
          end: "20% 5%",
          scrub: true,
        },
      },
      ".experiance-section"
    );
  });

  return (
    <Container>
      <div className="main-container experiance-section bg-slate-950 md:pb-[261px] max-sm:pb-[100px] pt-[111px] tracking-widest">
        <div className="experiance-content md:flex md:flex-row text-left">
          <div className="left md:w-7/12 w-full bg-slate-950 pr-14">
            <p className="experiance-text poppins-regular md:text-[21px]">
              why us?
            </p>
            <hr className="experiance-text text-main-blue w-[100px] h-[3px]" />
            <h2 className="experiance-text poppins-bold text-lg md:text-[55px] uppercase pb-[45px] pt-[24.56px] leading-[23px] md:leading-[109.5%] tracking-wider">
              25 years of <span className="text-main-blue">experience</span> as
              a creative agency
            </h2>
            <button className="experiance-text border-[3px] border-main-blue py-[10px] px-[30.5px] max-sm:mb-5">
              Read more
            </button>
          </div>
          <div className="right md:w-5/12 w-full poppins-light md:text-[21px] content-end">
            <p className="experiance-text">
             Crafting impactful brand experiences with 25 years of creative excellence, driving innovation and delivering results that stand the test of time
            </p>
            <ul className="pt-8">
              <li className="flex experiance-text">
                <img className="pr-3" src="/icons/correct.svg" alt="" />
                Happy Customer
              </li>
              <li className="flex py-1 experiance-text">
                <img className="pr-3" src="/icons/correct.svg" alt="" />
                Experienced Team
              </li>
              <li className="flex experiance-text">
                <img className="pr-3" src="/icons/correct.svg" alt="" />
                Modern Technology
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experiance;
