import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faGithub from '@fortawesome/fontawesome-free-solid/'


const Footer = ({ data }) => {
    return (
        data.siteData ?
            <footer className="bck_b_dark">
                <div className="container">
                    <div className="logo">
                        E-Shoes
                </div>
                    <div className="wrapper">
                        <div className="left">
                            <h2>Contact information</h2>
                            <div className="business_nfo">
                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faCompass}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Address</div>
                                        <div>{data.siteData[0].address}</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Phone</div>
                                        <div>{data.siteData[0].phone}</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Working hours</div>
                                        <div>{data.siteData[0].hours}</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Email</div>
                                        <div>{data.siteData[0].email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h2>Contact Me</h2>


                            <div>
                                <div>
                                    My name is Khang, who is currently a software developer. If you like this website.
                                   Please contact me at the information on the left-side and also visit my social links below. Enjoy :)
                            </div>
                                <br />
                                <a href="https://www.linkedin.com/in/khang-nguyen92/">  <i className="fab fa-linkedin fa-3x"></i></a>
                                <a href="https://github.com/KhangNg92">  <i className="fab fa-github fa-3x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            : null
    );
};

export default Footer;