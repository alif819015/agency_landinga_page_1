import React from "react";
import "./Review.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Container from "../../Ui/Container";

const ReviewSection = () => {
  useGSAP(() => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".review-section",
        start: "0% 50%",
        end: "90% 50%",
        scrub: true,
      },
    });
    tl2.from(
      ".review-img1",
      {
        x: "-100%",
        y: "100%",
        //   rotate: 360,
        duration: 2,
      },
      "same"
    );
    tl2.from(
      ".review-img2",
      {
        x: "100%",
        y: "100%",
        //   rotate: 360,
        duration: 2,
      },
      "same"
    );
    gsap.from(
      ".review-text",
      {
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".review-text",
          start: "10% 80%", // Adjust start based on when you want the animation to begin
          end: "80% 00%",
          scrub: true,
        },
      },
      ".review-section"
    );
    gsap.from(
      ".review-card",
      {
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".review-card",
          start: "10% 80%", // Adjust start based on when you want the animation to begin
          end: "80% 00%",
          scrub: true,
        },
      },
      ".review-section"
    );
  });

  return (
    <div className="md:w-full w-[90%] review-section md:flex md:flex-row">
      <div className="img review-img1">
        <img src="/img/image.png" alt="" />
      </div>
      <div className="review flex flex-col items-center justify-center md:px-[96px]">
        <h2 className="review-text poppins-bold text-[40px] md:text-[55px] uppercase pt-[24.56px] pb-[12px] leading-[109.5%] tracking-wider text-center">
          What <span className="text-main-blue">our</span> <br /> Clients say?
        </h2>
        <hr className="review-text text-main-blue w-[100px] h-[3px] " />
        <p className="review-text poppins-regular text-[21px] uppercase pt-[12px]">
          TESTIMONIALS
        </p>
        <div className="review-card ">
          <p>
            Discover what our clients have to say about their successful
            experiences and how we’ve made an impact{" "}
          </p>
          <div className="clent-wrapper flex flex-row items-center justify-between pt-[36px]">
            <div className="client-card flex flex-row items-center gap-[10px]">
              <img src="/img/client-img.png" alt="" />
              <div className="name-email">
                <h3>Carol Chaves</h3>
                <p>@caroles.gmail.com</p>
              </div>
            </div>
            <img className="w-[50px]" src="/icons/comas.svg" alt="" />
          </div>
        </div>
        <button className="review-text border-[3px] border-main-blue py-[10px] md:px-[30.5px] px-2 mb-10">
          VIEW ALL TESTIMONIALS{" "}
        </button>
      </div>
      <div className="img review-img2">
        <img src="/img/image1.png" alt="" />
      </div>
    </div>
  );
  tl2.from(
    ".review-img2",
    {
      x: "100%",
      y: "100%",
      //   rotate: 360,
      duration: 2,
    },
    "same"
  );
  gsap.from(
    ".review-text",
    {
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".review-text",
        start: "10% 80%", // Adjust start based on when you want the animation to begin
        end: "80% 00%",
        scrub: true,
      },
    },
    ".review-section"
  );
  gsap.from(
    ".review-card",
    {
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".review-card",
        start: "10% 80%", // Adjust start based on when you want the animation to begin
        end: "80% 00%",
        scrub: true,
      },
    },
    ".review-section"
  );

return (
  <Container>
    <div className="md:w-full w-[90%] review-section md:flex md:flex-row">
      <div className="img review-img1">
        <img src="/img/image.png" alt="" />
      </div>
      <div className="review flex flex-col items-center justify-center md:px-[96px]">
        <h2 className="review-text poppins-bold text-[40px] md:text-[55px] uppercase pt-[24.56px] pb-[12px] leading-[109.5%] tracking-wider text-center">
          What <span className="text-main-blue">our</span> <br /> Clients say?
        </h2>
        <hr className="review-text text-main-blue w-[100px] h-[3px] " />
        <p className="review-text poppins-regular text-[21px] uppercase pt-[12px]">
          TESTIMONIALS
        </p>
        <div className="review-card ">
          <p>
            Discover what our clients have to say about their successful
            experiences and how we’ve made an impact
          </p>
          <div className="clent-wrapper flex flex-row items-center justify-between pt-[36px]">
            <div className="client-card flex flex-row items-center gap-[10px]">
              <img
                className="w-14 md:w-full"
                src="/img/client-img.png"
                alt=""
              />
              <div className="name-email">
                <h3>Carol Chaves</h3>
                <p>@caroles.gmail.com</p>
              </div>
            </div>
            <img className="w-[50px]" src="/icons/comas.svg" alt="" />
          </div>
        </div>
        <button className="review-text border-[3px] border-main-blue py-[10px] md:px-[30.5px] px-2 mb-10">
          VIEW ALL TESTIMONIALS{" "}
        </button>
      </div>
      <div className="img review-img2">
        <img src="/img/image1.png" alt="" />
      </div>
    </div>
  </Container>
);
};
export default ReviewSection;
