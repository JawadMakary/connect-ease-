import React from "react";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Mission from "../../components/Mission";
import Team from "../../components/Team";
import i18n from "../../config/i18n";
const AboutUs = () => {
  return (
    <div>
      <Banner name={i18n.t("aboutUs")} />
      <About />
      <Mission />
      <Team />
    </div>
  );
};

export default AboutUs;
