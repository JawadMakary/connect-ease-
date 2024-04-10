import React from "react";
import Banner from "../../components/Banner";
import i18n from "../../config/i18n";
import networkTips from "../../constants/NetworkTips.json";
const Guides = () => {
  return (
    <>
      <Banner
        name={i18n.t("wifiOptimization")}
        imgUrl={"https://i.imgur.com/liZJ432.jpeg"}
      />
      <main className="relative min-h-screen flex flex-col justify-center  overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 ">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {networkTips.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white  bg-[#3c7dff] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {index + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">
                          {tip.title}
                        </div>
                      </div>
                      <div className="text-slate-500">{tip.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Guides;
