import React from "react";
import Banner from "../../components/Banner";
import { useFormik } from "formik";
import * as Yup from "yup";
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
      <Banner name="Contact Us" />
      <section>
        <div className="py-8 lg:py-5 px-4 mx-auto max-w-screen-md">
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={formik.handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="name@connectease.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={formik.values.message}
                onChange={formik.handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-gray-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-[#3c7dff]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
