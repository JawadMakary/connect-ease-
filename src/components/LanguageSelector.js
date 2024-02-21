import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Re-render the component when the language changes
  }, [i18n.language]);

  const changeLanguage = async (lng) => {
    setActiveLanguage(lng);
    setLoading(true);
    await i18n.changeLanguage(lng);
    setLoading(false);
  };
  const [activeLanguage, setActiveLanguage] = useState("en");

  return (
    <div className=" bottom-10 right-10 fixed bg-gray-200 p-2 text-center rounded-md ">
      <button
        className={`mr-3 ${activeLanguage === "en" && "font-bold"} `}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={`mr-3 ${activeLanguage === "ar" && "font-bold"} `}
        onClick={() => changeLanguage("ar")}
      >
        AR
      </button>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default LanguageSelector;
