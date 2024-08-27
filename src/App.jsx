import gsap from "gsap";
import Home from "./component/Pages/Home/Home";
import Footer from "./component/Shared/Footer/Footer";
import NavBar from "./component/Shared/Navbar/Navbar";
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useLayoutEffect } from "react";

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  

  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
