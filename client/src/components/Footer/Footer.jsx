import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quibusdam quidem nostrum voluptatum porro eveniet, eligendi quas enim. Harum, provident?</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            181, Anand Vihar, Pitampura,Delhi, 110088
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: +91 9998887776
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: custhelp@ostore.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Headphones</div>
                    <div className="text">Smart Watches</div>
                    <div className="text">Bluetooth Speakers</div>
                    <div className="text">Wireless Earbuds</div>
                    <div className="text">Home Theatre</div>
                    <div className="text">Projectors</div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Returns</div>
                    <div className="text">Terms & Conditions</div>
                    <div className="text">Contact Us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        OSTORE 2023 CREATED BY HG DEV. PREMIUM E-COMMERCE SOLUTIONS
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
