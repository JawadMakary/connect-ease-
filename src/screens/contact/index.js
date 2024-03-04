import React from "react";
import Banner from "../../components/Banner";
import { useFormik } from "formik";
import * as Yup from "yup";
import i18n from "../../config/i18n";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <Banner name={i18n.t("ContactUs")} />
      <section>
        <div className="py-8 lg:py-5 px-4 mx-auto max-w-screen-md">
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500">
            {i18n.t("ContactUsTitle")}
          </p>
          <form onSubmit={formik.handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {i18n.t("email")}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="name@connectease.com"
                required
                maxLength={50}
              />
              <div className="flex justify-between items-center">
                <i className="text-xs text-gray-500">
                  {i18n.t("emailDescription")}
                </i>

                <i className="text-xs text-gray-500">
                  {formik.values.email.length}/50
                </i>
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {i18n.t("Subject")}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Subject"
                required
                maxLength={50}
              />
              <div className="flex justify-end items-center">
                <i className="text-xs text-gray-500">
                  {formik.values.subject.length}/50
                </i>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {i18n.t("Message")}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="6"
                value={formik.values.message}
                onChange={formik.handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Message"
                maxLength={400}
                required
              ></textarea>
              <div className="flex justify-end items-center">
                <i className="text-xs text-gray-500">
                  {formik.values.message.length}/400
                </i>
              </div>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-gray-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-[#3c7dff]"
            >
              {i18n.t("SendMessage")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
