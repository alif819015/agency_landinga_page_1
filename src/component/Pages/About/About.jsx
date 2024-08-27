import React, { useEffect, useRef } from "react";
import Container from "../../Ui/Container";
import img from "../../../../public/Image/artificial intelligence.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "0% 50%",
        end: "90% 50%",
        scrub: true,
        // markers: true,
      },
    });
    tl2.to(".about-img", {
      top: "10%",
      right: "10%",
      rotate: 360,
      duration: 2,
    });
    gsap.from(
      ".about-text",
      {
        x: 360,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-text",
          start: "10% 80%", // Adjust start based on when you want the animation to begin
          end: "80% 00%",
          scrub: true,
        },
      },
      "about-section"
    );
  });

  return (
    <div
      className="about-section"
      style={{
        backgroundColor: "#060000",
        boxShadow: "inset -10px 0 10px rgba(0, 0, 0, 0)",
        backgroundImage:
          "linear-gradient(to left, rgba(0, 0, 0, 0) 60%, #6d96fc51 100%)",
      }}
    >
      <Container>
        <div className="grid md:grid-cols-2 pt-[0px] items-center">
          <div className="w-full">
            <img
              className="about-img w-[80%] h-[80%] md:w-full md:h-full"
              src={img}
              alt="beautiful-woman"
            />
          </div>
          <div className="pb-[00px]">
            <h6 className="about-text pt-10 uppercase text-[#6D95FC] text-[21px] tracking-[14.5%]">
              about us
            </h6>
            <h1 className="about-text py-[26px] font-bold max-w-[614px] w-[100%] md:w-auto text-2xl md:text-[48px] leading-[124.5%]">
              We Bring <span className="text-[#6D95FC]">Creative</span> ideas to
              life.
            </h1>
            <hr className="about-text pb-[26px] w-24 border-[#6D95FC]" />
            <h6 className="about-text text-[#6D95FC] text-[17px] tracking-[0.5%]">
              We love Creating
            </h6>

            <p className="about-text pt-[26px] w-[90%] md:w-[480px] md:text-[21px] tracking-[4%] leading-[25px] md:leading-[166.5%]">
              As a team of three, we combined our talents to create this
              website. Every detail reflects our collaborative effort,
              creativity, and dedication to bringing our shared vision to life.
            </p>
            <br />
            <p className=" about-text pb-[26px] md:w-auto w-[90%] md:text-[21px] tracking-[4%] leading-[25px] md:leading-[166%]">
              A testament to our creativity, teamwork, and dedication,
              showcasing our shared vision and innovation.
            </p>

            <button className="about-text px-4 py-2.5 mb-12 md:mb-[79px] text-[17px] border border-[#6D95FC] uppercase tracking-[14.5%]">
              red more
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
