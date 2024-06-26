import React from "react";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Benefits from "../../components/Benefits";
import HomeService from "../../components/HomeService";
import i18n from "../../config/i18n";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <>
    <Header/>
    <Banner name={i18n.t("Home")} imgUrl={"https://i.imgur.com/Z1UKhV3.png"} isHome />
      <About />
      <Benefits />

      <div className=" my-3 bg-gray-300">
        <h2 className="text-3xl text-center font-bold mb-9 pt-3 ">
          {i18n.t("servicesMainTitle")}
        </h2>
        <div className=" flex justify-center items-center flex-wrap gap-5">
          <HomeService
            title={i18n.t("1stServiceTitle")}
            description={i18n.t("1stServiceText")}
          />
          <HomeService
            title={i18n.t("2ndServiceTitle")}
            description={i18n.t("2ndServiceText")}
          />
       
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
