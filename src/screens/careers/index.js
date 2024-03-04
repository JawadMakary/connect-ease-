import React from 'react'
import Banner from '../../components/Banner'

const Careers = () => {
  return (
    <div>
      <Banner name="Careers" />
      <div className="min-h-16 flex flex-col   my-12 mx-4">
        <span>
          Kindly review the following selection of currently available job
          openings listed below.
        </span>
        <span className="mt-3">
        There are currently no job openings. Please check back later.
      </span>
      </div>
    </div>
  )
}

export default Careers