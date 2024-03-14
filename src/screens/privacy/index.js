import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Privacy = () => {
  return (
   <>
   <Header/>
   <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center" >Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website [Your Website URL] (the "Site").
      </p>
      <h2 className="text-xl font-bold mb-2">Personal Information We Collect</h2>
      <p className="mb-4">
        We collect Device Information using the following technologies:
        <br />
        - "Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier.
        <br />
        - "Log files" track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
        <br />
        - "Web beacons," "tags," and "pixels" are electronic files used to record information about how you browse the Site.
      </p>
      <h2 className="text-xl font-bold mb-2">How We Use Your Personal Information</h2>
      <p className="mb-4">
        We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
      </p>
      <h2 className="text-xl font-bold mb-2">Sharing Your Personal Information</h2>
      <p className="mb-4">
        We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information <a href="https://www.google.com/intl/en/policies/privacy/" className="text-blue-500">here</a>. You can also opt-out of Google Analytics <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-500">here</a>.
      </p>
      <h2 className="text-xl font-bold mb-2">Changes</h2>
      <p className="mb-4">
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
      </p>
      <h2 className="text-xl font-bold mb-2">Contact Us</h2>
      <p>
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at [Your Contact Email Address].
      </p>
    </div>


   <Footer/>
   </>
  );
};

export default Privacy;
