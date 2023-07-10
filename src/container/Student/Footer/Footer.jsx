import React from 'react'
// import Logo from './assets/hs_2.png'
import "./Footer.css"

const footer = () => {
    return (

        <div className="mainContainer">
            <div className="contentContainer">
                <div className="logoContent">
                    <a href="/">
                        {/* <img src={Logo} alt="HackerSpace"/> */}
                    </a>
                    <div className="socialContent">
                        <div className="contentText">
                            <h3 className="footerTitle">Social Connection</h3>
                            <p className="text">
                                You should connect social area for Any update
                            </p>
                            <ul className="socialLogo">
                                <li>
                                    <a href="/">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="venueContent">
                    <h4 className="date">
                        July, 2023
                    </h4>
                    <address className='address'>
                        Anandapur, Kolkata <br/>
                        West Bengal, India
                    </address>

                </div>
                


            </div>

            <div className="copyContainer">
                <p><span>©</span> 2023 Trex-Learn | Developer <span>Trex</span></p>
            </div>
        </div>


    )
}

export default footer
