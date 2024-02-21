import React, { useState } from "react";
import * as ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const onMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className=" sticky top-0 z-50 bg-white  shadow-lg px-3 py-2">
        <nav className="flex justify-between">
          <div className="w-[130px] md:w-[200px] cursor-pointer flex items-center">
            <img

              onClick={() => navigate(ROUTES.HOME)}
              src="https://i.imgur.com/YED2xsQ.png"
              alt="LOGO"
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
                  <a href={ROUTES.ABOUTUS}>About Us </a>
                </li>
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#3c7dff] to-[#f0f0f0]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href={ROUTES.FAQ}>FAQ</a>
                </li>
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#3c7dff] to-[#f0f0f0]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href={ROUTES.CAREERS}>Careers</a>
                </li>
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#3c7dff] to-[#f0f0f0]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href={ROUTES.CONTACT}>Contact us</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate(ROUTES.LOGIN)}
                type="button"
                className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#3c7dff] to-[#f0f0f0] border-solid border-2 border-[#3368d1]  font-bold text-white px-5 py-2 rounded-full"
              >
                Login
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
