import Banner from "../Banner/Banner";
import About from "../About/About";
import Experiance from "../Experiance/Experiance";
import ReviewSection from "../ReviewSection/ReviewSection";
import GetInTouch from "../GetInTouch/GetInTouch";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Banner/>
      <About/>
      <Experiance></Experiance>
      <ReviewSection></ReviewSection>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
