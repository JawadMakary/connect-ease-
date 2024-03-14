import React from "react";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Mission from "../../components/Mission";
import Team from "../../components/Team";
import i18n from "../../config/i18n";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const AboutUs = () => {
  return (
    <div>
      <Header/>
      <Banner name={i18n.t("aboutUs")} />
      <About />
      <Mission />
      <Team />
      <Footer/>
    </div>
  );
};

export default AboutUs;
