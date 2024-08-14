import Banner from "../Banner/Banner";
import About from "../About/About";
import OurService from "../OurService/OurService";
import LatestProject from "../LatestProject/LatestProject";
import Details from "../Details/Details";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Banner />
      <About />
      <OurService />
      <Details></Details>
      <LatestProject></LatestProject>
    </div>
  );
};

export default Home;
