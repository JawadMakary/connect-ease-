import { Navigate, Outlet } from "react-router-dom";

import Cookies from "js-cookie";
// import StartTour from "./StartTour";
const PrivateRoutes = () => {
  const userCredentials = Cookies.get("userCredentials");
  return userCredentials ? (
    <>
      <div className="dashboard">
        <div className="dashboard__sidebar">
          {/* <Sidebar /> */}
        </div>
        <div className="dashboard__data">
          {/* <Navbar />
          <Outlet /> */}
        </div>
    
      </div>
      {/* <StartTour/> */}
      <Footer />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoutes;
