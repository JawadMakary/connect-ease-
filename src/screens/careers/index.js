import React from 'react'
import Banner from '../../components/Banner'
import i18n from '../../config/i18n'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const Careers = () => {
  return (
    <div>
      <Header/>
      <Banner name={i18n.t("Careers")}/>
      <div className="min-h-16 flex flex-col   my-12 mx-4">
        <span>
    {i18n.t("CareersTitle")}
        </span>
        <span className="mt-3">
      {i18n.t("CareersText")}
      </span>
      </div>
      <Footer/>
    </div>
  )
}

export default Careers