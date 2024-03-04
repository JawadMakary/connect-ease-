import React from "react";
import StartTour from "../../components/StartTour";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Benefits from "../../components/Benefits";
import HomeService from "../../components/HomeService";
const Home = () => {
  return (
    <div>
      {/* <Header />
    <StartTour/>
    <Footer /> */}
      <Banner name="Home" />

      <About />
      <Benefits />

      <div className=" my-3 bg-gray-300">
        <h2 className="text-3xl text-center font-bold mb-9 pt-3 ">Our Services</h2>
        <div className=" flex justify-center items-center flex-wrap gap-5">
          <HomeService />
          <HomeService />
          <HomeService />
        </div>
      </div>
      {/* Services */}
      {/* testimonials */}
    </div>
  );
};

export default Home;
