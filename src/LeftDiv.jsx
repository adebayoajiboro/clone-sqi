import React from 'react'
import "./LeftDiv.css"
import smalllogo from "./imgages/sqi-logo.jpg"



const LeftDiv = () => {
    return (
        <>
            <div className='LeftDivParant'>
                <div className='logo-text'>
                    <img className='smalllogo' src={smalllogo} alt="" />
                    <div className='SCICT'>
                        <h3>SCICT</h3>
                        <p>Student Portal</p>
                    </div>
                </div>

                <div className='text-div'>
                    <div className='PDC'> 
                        <h3>PDC</h3>
                    </div>
                

                <h3 className='General'>General</h3>

                <div>
                    <div className='Dashboard'>
                        <h3>Dashboard</h3>
                    </div>
                </div>


                <div>
                    <div className='Profile'>
                        <h3>My Profile</h3>
                    </div>

                    <div className='Password'>
                        <h3>Change Password</h3>
                    </div>

                    <div className='Documents'>
                        <h3>Documents</h3>
                    </div>
                </div>

                <h3 className='Academics'>Academics</h3>

                <div>
                    <div className='Course'>
                        <h3>Course Registration</h3>
                    </div>

                    <div className='Resources'>
                        <h3>Resources</h3>
                    </div>

                    <div className='Registation'>
                        <h3>Registation History</h3>
                    </div>
                </div>

            </div>
         </div>
            </>
    )
}

export default LeftDiv