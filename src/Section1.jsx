import React from 'react'
import "./Section1.css"
import imgg from "./imgages/bg-header-sqi-1.png"
import { Link } from 'react-router-dom'




const Section1 = () => {
  return (
    <>
      <div className='sec1-parent'>
      <Link to="/">E-Portal</Link>
      <Link to="/Dashboard">Dashboard</Link>

        <div className='parent-flex'>

          <div>
            <div className='study'>
              <h1>Study to</h1>
              <h1>become a </h1>
              <h1>global talent</h1>
            </div>

            <div className='learn'>
              <p>Learn new tech skills using a world-class curriculum from</p>
              <p>top industry experts in an accredited institution.</p>
            </div>
            <button className='start'>Start Now</button>

          </div>

          <div className='ppp'>
            <img src={imgg} alt="" width="500" />
          </div>

        </div>

      </div>
    </>
  )
}

export default Section1