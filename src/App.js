import React, { lazy, Suspense } from "react";
import "./App.css";
import * as ROUTES from "./constants/routes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const Home = lazy(() => import("./screens/home/index"));
  const Login = lazy(() => import("./screens/login/index"));
  const About = lazy(() => import("./screens/about/index"));
  const Faq = lazy(() => import("./screens/faq/index"));
  const Contact = lazy(() => import("./screens/contact/index"));
  const Careers = lazy(() => import("./screens/careers/index"));

  const loading = <p>Loading ...</p>;
  return (
    <div className="app">
      <ToastContainer />
      <Router>
        <Suspense fallback={loading}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.ABOUTUS} element={<About />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.CONTACT} element={<Contact />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.FAQ} element={<Faq />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.CAREERS} element={<Careers />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
