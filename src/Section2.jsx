import React from 'react'
import "./Section2.css"
import threePeople from "./imgages/3people+lap.jpg"
import girl from "./imgages/a-girl.jpg"
import guy from "./imgages/a-guy.jpg"


const Section2 = () => {
    return (
        <>
            <div className='section2Parent'>
                <h1 className='starthere'>Start here. Change the world.</h1>

                <div className='parent'>
                    <div className='one'>
                        <img className='threePeople' src={threePeople} alt="" />

                       <div className='allh2tag'>
                       <h2>National Innovative Diploma</h2>
                       <h2>(NID)</h2>
                       </div>
                       
                        <div className='allPtag'>
                            <p> The National Innovation Diploma (NID) </p>
                            <p>offered at SQI College of ICT is a 2 year </p>
                            <p>approved academic program of the </p>
                            <p>National Board for Technical Education </p>
                            <p> (NBTE).</p>
                        </div>

                        <div className='alllearnmore'>
                            <a href="">Learn More</a>
                            <p>__________</p>
                        </div>
                    </div>

                    <div className='two'>
                        <img className='guy' src={guy} alt="" />

                       <div className='allh2tag'>
                       <h2>Professional Diploma</h2>
                       <h2>Certificate</h2>
                       </div>

                        <div className='allPtag'>
                            <p> The Professional Certificate Program is 1</p>
                            <p>year practical training with wide range of</p>
                            <p>edge-cutting IT certification courses </p>
                            <p>offered in SQI College of ICT to people who</p>
                            <p>want to advance their career.</p>
                        </div>

                        <div className='alllearnmore'>
                            <a href="">Learn More</a>
                            <p>__________</p>
                        </div>

                    </div>

                    <div className='three'>
                        <img className='girl' src={girl} alt="" />
                        <h2 className='allh2tag'>Certificate Program</h2>

                        <div className='allPtag'>
                            <p>The Certificate Program is a short-term</p>
                            <p>training, 2 weeks to 6 months with a wide</p>
                            <p>range of edge-cutting IT certification</p>
                            <p>courses offered in SQI College of ICT to</p>
                            <p>people who want to advance their</p>
                            <p>careers.</p>
                        </div>

                        <div className='alllearnmore2'>
                            <a href="">Learn More</a>
                            <p>__________</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Section2