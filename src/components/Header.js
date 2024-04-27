import React, { useState } from "react";
import * as ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import i18n from "../config/i18n";
import { LightTooltip } from "./LightTooltip";
import { LogoutFct } from "../config/firebase";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const onMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 
  // get user from local storage
  const user = JSON.parse(localStorage.getItem("userGoogle")) ;
  const userMail = JSON.parse(localStorage.getItem("userMail")) ;

  // remove '' from photoURL
  let photoURL = "";
if(user){
   photoURL = user.photoURL.replace(/['"]+/g, "");

}

console.log(user)
console.log(userMail)
console.log(!user && !userMail)
  return (
    <>
      <header className=" sticky top-0 z-50 bg-white  shadow-lg px-3 py-2">
        <nav className="flex justify-between">
          <div className="w-[130px] md:w-[200px] cursor-pointer flex items-center">
            <img
              onClick={() => navigate(ROUTES.HOME)}
              src="https://i.imgur.com/YED2xsQ.png"
              alt="connect ease logo"
            />
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] ${
                isMenuOpen ? "left-0" : "left-[100%]"
              } px-5 md:py-0 py-5`}
            >
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#3c7dff] to-[#f0f0f0]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href={ROUTES.ABOUTUS}> {i18n.t("aboutUs")} </a>
                </li>
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#3c7dff] to-[#f0f0f0]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href={ROUTES.FAQ}>{i18n.t("FAQ")}</a>
                </li>
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#3c7dff] to-[#f0f0f0]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href={ROUTES.CAREERS}>{i18n.t("Careers")}</a>
                </li>
                {
                  user || userMail && (
                   <>
                    <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#3c7dff] to-[#f0f0f0]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                      <a href={ROUTES.GUIDES}>{i18n.t("Guides")}</a>
                    </li>
                    <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#3c7dff] to-[#f0f0f0]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                      <a href={ROUTES.VIDEOTIPS}>{i18n.t("Video Tips")}</a>
                    </li>
                   </>
                    
                  )
                }
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#3c7dff] to-[#f0f0f0]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href={ROUTES.CONTACT}>{i18n.t("ContactUs")}</a>
                </li>
              
              </ul>
            </div>
            <div className="flex items-center gap-2">
              {user && (
                <LightTooltip title={user.displayName} placement="bottom">
                  <div className="flex items-center gap-2">
                    <img
                      src={photoURL}
                      alt="user profile"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                </LightTooltip>
              )}

              <button
                onClick={() => {
                  if (user || userMail) {
                    LogoutFct()

                    window.location.href = "/login";
                  } else {
                    window.location.href = "/login";
                  }
                }}
                type="button"
                className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#3c7dff] to-[#f0f0f0] border-solid border-2 border-[#3368d1]  font-bold text-white px-5 py-2 rounded-full"
              >
               {
                !user && !userMail ? i18n.t("login") : i18n.t("logout")
               }
              </button>

              <div className="block md:hidden">
                {isMenuOpen ? (
                  <CloseIcon onClick={onMenuToggle} />
                ) : (
                  <MenuIcon onClick={onMenuToggle} />
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
