import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import * as ROUTES from "../constants/routes";
import i18n from "../config/i18n";
const Footer = () => {
  return (
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">{i18n.t("Features")}</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a className="border-b border-solid border-transparent hover:border-[#3c7dff] hover:text-[#3c7dff]">
                  {i18n.t("1stServiceTitle")}
                </a>
              </li>
              <li className="mb-2">
                <a className="border-b border-solid border-transparent hover:border-[#3c7dff] hover:text-[#3c7dff]">
                  {i18n.t("2ndServiceTitle")}
                </a>
              </li>
            </ul>
          </div>

          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6"> {i18n.t("aboutUs")}</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href={ROUTES.ABOUTUS}
                  className="border-b border-solid border-transparent hover:border-[#3c7dff] hover:text-[#3c7dff]"
                >
                  {i18n.t("aboutUs")}
                </a>
              </li>

              <li className="mb-2">
                <a
                  href={ROUTES.PRIVACY}
                  className="border-b border-solid border-transparent hover:border-[#3c7dff] hover:text-[#3c7dff]"
                >
                  {i18n.t("Privacy")}
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">{i18n.t("Help")}</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href={ROUTES.FAQ}
                  className="border-b border-solid border-transparent hover:border-[#3c7dff] hover:text-[#3c7dff]"
                >
                  {i18n.t("FAQ")}
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
             {i18n.t("StayConnected")}
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <a
                href=""
                className="w-8 h-8 p-4 flex items-center justify-center  border-2 border-gray-400 rounded-full text-center  text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <FacebookIcon />
              </a>
              <a
                href=""
                className="w-8 h-8 p-4 flex items-center justify-center  border-2 border-gray-400 rounded-full text-center  ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <InstagramIcon />
              </a>
              <a
                href=""
                className="w-8 h-8 p-4 flex items-center justify-center  border-2 border-gray-400 rounded-full text-center  ml-2 text-gray-600 hover:text-white hover:bg-gray-600 hover:border-gray-600"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div className="sm:w-full px-4 md:w-1/6">
            <img
              // onClick={() => navigate(ROUTES.HOME)}
              src="https://i.imgur.com/YED2xsQ.png"
              alt="connect ease logo"
            />
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Address</h6>
            <address className="not-italic mb-4 text-sm">
              Zgharta , North Lebanon
              <br />
              Lebanon
            </address>
          </div>

          <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button className="px-4 py-2 bg-[#3c7dff] hover:bg-[#304a7c] rounded text-white">
           <a href={ROUTES.LOGIN}>
            {i18n.t("Login")}
           </a>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
