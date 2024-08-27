import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Carousel.css";
import img1 from "../../../../../public/Image/pexels-1.png";
import img2 from "../../../../../public/Image/pexels-2.png";
import img3 from "../../../../../public/Image/pexels-3.jpg";
import img4 from "../../../../../public/Image/pexels-4.jpg";
import img5 from "../../../../../public/Image/pexels-5.png";
import img6 from "../../../../../public/Image/pexels-6.jpg";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function App() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 ">
            <img className="w-full h-[350px]" src={img1} alt="" />
          </div>
          <div className="carousel__cell number-slide2">
            <img className="w-full h-[350px]" src={img2} alt="" />
          </div>
          <div className="carousel__cell number-slide3">
            <img className="w-full h-[350px]" src={img3} alt="" />
          </div>
          <div className="carousel__cell number-slide4">
            <img className="w-full h-[350px]" src={img4} alt="" />
          </div>
          <div className="carousel__cell number-slide5">
            <img className="w-full h-[350px]" src={img5} alt="" />
          </div>
          <div className="carousel__cell number-slide6">
            <img className="w-full h-[350px]" src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
