import Banner from "../Banner/Banner";
import About from "../About/About";
import OurService from "../OurService/OurService";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Banner />
      <About />
      <OurService></OurService>
    </div>
  );
};

export default Home;
