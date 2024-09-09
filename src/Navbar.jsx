import React from 'react'
import "./Navbar.css"
import imgg from "./imgages/sqi-logo.jpg"
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <>
     <div className='parent-navbar'>
     <div className='navbar'>
        <div className='ggg'>
          <img src={imgg} alt="" width="60" />
        </div>

        <div className='about-and-all'>

          <div className='aboutdropdown'>
            <p>About <IoIosArrowDown className='ooo' /> </p>

            <div className='dropdown'>
              <div className='OOC'>
                <h3>Our Story</h3>
                <h3>Our Story</h3>
                <h3 className='ccc'>Campus Info</h3>
              </div>
            </div>
          </div>

          <div className='aboutdropdown2'>
            <p>Programmes  <IoIosArrowDown className='ooo' /></p>

            <div className='dropdown2'>
              <div className='ND'>

                <div className='National-Innovation'>
                  <h3>National Innovation</h3>
                  <h3>Diploma</h3>
                </div>

                <div className='Professional-Diploma'>
                  <h3>Professional Diploma</h3>
                  <h3>Program</h3>
                </div>

                <div className='Executive-Professional'> 
                  <h3>Executive Professional</h3>
                  <h3>Certificate</h3>
                  <h3>Programme</h3>
                </div>

              </div>
            </div>

          </div>



          <p>Admissions  <IoIosArrowDown className='ooo' /></p>
          <p>E-Portal  <IoIosArrowDown className='ooo' /></p>
          <p>SQI Scholarship</p>
          <p>News</p>

        </div>

      </div>
     </div>
    </>
  )
}

export default Navbar