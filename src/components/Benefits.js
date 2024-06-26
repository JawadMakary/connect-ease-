import React from "react";
import i18n from "../config/i18n";
const Benefits = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-around">
      <div>
        <img
          src="https://i.imgur.com/3rHx10P.png"
          alt="connect ease logo"
          className="w-96 h-96 p-2 lg:p-0 object-cover"
        />
      </div>
      <div className=" w-full p-2 lg:p-0 lg:w-2/4 ">
        <h2 className="text-3xl font-bold mb-3">
          {i18n.t("whatWillYouGain")}
           </h2>
        <span className="text-gray-500 lg:w-96 mt-5 leading-8">
          {i18n.t("whatWillYouGainText")}
        </span>
      </div>
    </div>
  );
};

export default Benefits;
