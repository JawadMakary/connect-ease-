import React, { lazy, Suspense } from "react";
import "./App.css";
import * as ROUTES from "./constants/routes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import { withTranslation } from "react-i18next";

function App() {
  const Home = lazy(() => import("./screens/home/index"));
  const Login = lazy(() => import("./screens/login/index"));
  const About = lazy(() => import("./screens/about/index"));
  const Faq = lazy(() => import("./screens/faq/index"));
  const Contact = lazy(() => import("./screens/contact/index"));
  const Careers = lazy(() => import("./screens/careers/index"));
  const Privacy = lazy(() => import("./screens/privacy/index"));
  const Guides = lazy(() => import("./screens/guides/index"));
  const loading = <div class="relative h-[100vh] flex justify-center items-center">
  <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
  <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"  class="rounded-full h-28 w-28"/>
</div>
  return (
    <div className="app">
      <ToastContainer />
      <Router>
        <Suspense fallback={loading}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.PRIVACY} element={<Privacy />} />
            <Route path={ROUTES.HOME} element={<Home />} />

            <Route path={ROUTES.ABOUTUS} element={<About />} />

            <Route path={ROUTES.CONTACT} element={<Contact />} />

            <Route path={ROUTES.FAQ} element={<Faq />} />

            <Route path={ROUTES.CAREERS} element={<Careers />} />

            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path={ROUTES.GUIDES} element={<Guides />} />
            </Route>

          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default withTranslation()(App);
