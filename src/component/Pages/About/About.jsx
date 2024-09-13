import React, { useEffect, useRef } from "react";
// import Container from "../../Ui/Container";
import img from "../../../../public/Image/artificial intelligence.png";
import Container from "../../Ui/Container";

const About = () => {
//   useGSAP(() => {
//     var tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".about-section",
//         start: "0% 50%",
//         end: "90% 50%",
//         scrub: true,
//         // markers: true,
//       },
//     });
//     tl2.to(".about-img", {
//       top: "10%",
//       right: "10%",
//       rotate: 360,
//       duration: 2,
//     });
//     gsap.from(
//       ".",
//       {
//         x: 360,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: ".",
//           start: "10% 80%", // Adjust start based on when you want the animation to begin
//           end: "80% 00%",
//           scrub: true,
//         },
//       },
//       "about-section"
//     );
//   });

  return (
      <Container>
        <div className="grid md:grid-cols-2 pt-[0px] items-center">
          <div className="w-full">
            <img
              className="w-full md:w-full md:h-full"
              src={img}
              alt="beautiful-woman"
            />
          </div>
          <div className="pb-[00px]">
            <h6 className=" pt-10 uppercase text-[#6D95FC] text-[21px] tracking-[14.5%]">
              about us
            </h6>
            <h1 className=" py-[26px] font-bold max-w-[614px] w-[100%] md:w-auto text-2xl md:text-[48px] leading-[124.5%]">
              We Bring <span className="text-[#6D95FC]">Creative</span> ideas to
              life.
            </h1>
            <hr className=" pb-[26px] w-24 border-[#6D95FC]" />
            <h6 className=" text-[#6D95FC] text-[17px] tracking-[0.5%]">
              We love Creating
            </h6>

            <p className=" pt-[26px] w-[90%] md:w-[480px] md:text-[21px] tracking-[4%] leading-[25px] md:leading-[166.5%]">
              As a team of three, we combined our talents to create this
              website. Every detail reflects our collaborative effort,
              creativity, and dedication to bringing our shared vision to life.
            </p>
            <br />
            <p className="  pb-[26px] md:w-auto w-[90%] md:text-[21px] tracking-[4%] leading-[25px] md:leading-[166%]">
              A testament to our creativity, teamwork, and dedication,
              showcasing our shared vision and innovation.
            </p>

            <button className=" px-4 py-2.5 mb-12 md:mb-[79px] text-[17px] border border-[#6D95FC] uppercase tracking-[14.5%]">
              red more
            </button>
          </div>
        </div>
      </Container> 
  );
};
export default About;
