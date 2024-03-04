import React from "react";
import i18n from "../config/i18n";
const Team = () => {
  return (
    <div className="my-10 bg-slate-500 h-96 lg:h-52 w-full flex flex-col items-center  ">
      <h2 className="text-3xl text-white text-center font-bold p-5">
       {i18n.t("ourTeamTitle")}
      </h2>
      <span className="text-white text-cente w-8/12 text-center">
     {i18n.t("ourTeamText")}
      </span>
    </div>
  );
};

export default Team;
