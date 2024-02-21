import { Navigate, Outlet } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import Cookies from "js-cookie";
import Footer from "./Footer";
import Header from "./Header";
// import StartTour from "./StartTour";
import LanguageSelector from "./LanguageSelector";
const PrivateRoutes = () => {
  // const userCredentials = Cookies.get("userCredentials");
  return true ? (
    <>
          <LanguageSelector />

      <div className="dashboard">
        <div className="dashboard__data">
          <Header />
          <Outlet />
        </div>
      </div>
      {/* <StartTour/> */}
      <Footer />
    </>
  ) : (
    <>
      <Navigate to={ROUTES.LOGIN} />
    </>
  );
};

export default PrivateRoutes;
