import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import i18n from "../../config/i18n";
import LanguageSelector from "../../components/LanguageSelector";
import { useFormik } from "formik";
import ErrorMessage from "../../components/ErrorMessage";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { signGoogle,signInWithEmail } from "../../config/firebase";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const user = await signInWithEmail(values.email, values.password);
        console.log("User signed in:", user);
        window.location.href = "/";
      } catch (error) {
        console.error("Error signing in:", error);
        // Handle error
      }
    }
  });
  return (
    <>
      <LanguageSelector />
      <Header />
      <div className="flex flex-col lg:flex-row mt-10 mb-5 ">
        <div className="flex  justify-center flex-col ml-5 ">
          <h2 className="text-4xl font-bold text-gray-800">
            {i18n.t("loginTitle")}
          </h2>
          <span className="text-gray-500 lg:w-96 mt-5 leading-8 ">
            {i18n.t("loginSubTitle")}
          </span>
        </div>

        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5 justify-center">
                <img
                  src="https://i.imgur.com/YED2xsQ.png"
                  alt="connect ease logo"
                  className="w-42 h-12"
                />
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="mt-5">
                  <label
                    className="font-semibold text-sm text-gray-600 pb-1 block"
                    htmlFor="login"
                  >
                    {i18n.t("email")}

                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder={i18n.t("enterYourEmail")}
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    maxLength={50}
                  />
                  <div className="w-full text-right  ">
                    <i
                      className={`${
                        formik.values.email.length == 50 && "text-red-500"
                      } text-right  text-xs relative -top-5 right-2   `}
                    >
                      {formik.values.email.length}/50
                    </i>
                  </div>
                  {formik.touched.email && formik.values.email === "" ? (
                    <ErrorMessage />
                  ) : null}

                  <label
                    className="font-semibold text-sm text-gray-600 pb-1 block"
                    htmlFor="password"
                  >
                    {i18n.t("password")}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder={i18n.t("enterYourPassword")}
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.password && formik.values.password === "" ? (
                  <ErrorMessage topPosition={"-top-5"} />
                ) : null}

                <div className="text-right mb-4">
                  <a
                    className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                    href="#"
                  >
                    {i18n.t("forgotPassword")}
                  </a>
                </div>
                <div className="flex justify-center w-full items-center">
                  <div>
                    <button className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                      <span className="ml-2" onClick={signGoogle}>Sign in with Google</span>
                    </button>
                 
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    type="submit"
                  >
                     {i18n.t("Login")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="mySiteCookie"
        style={{ background: "#f7f7f7", color: "#000" }}
        buttonStyle={{ background: "#3c7dff", color: "#fff", fontSize: "14px" }}
      >
        This website uses cookies to ensure you get the best experience on our
        website. Learn more in our{" "}
        <Link  to={ROUTES.PRIVACY}>
          Privacy Policy .
        </Link>
      </CookieConsent>
      <Footer />
    </>
  );
};

export default Login;
