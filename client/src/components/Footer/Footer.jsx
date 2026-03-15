import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Welcome to Techzone, your one-stop destination for the latest and greatest in electronics! Whether you're looking for cutting-edge smartphones, high-performance laptops, innovative smart home devices, or accessories to enhance your tech setup, we have it all. 
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            <a href="https://maps.app.goo.gl/sa7FsexahnzASKkA9" >
                            Shop No.22/35, Kartar Mansion-2, Thribhuvan Road, Lamington Rd, Shapur Baug, Grant Road, Mumbai, Maharashtra 400004
                            </a>
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91 79471 39304</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text"><a href="https://mail.google.com/mail/u/0/?ogbl#inbox/FMfcgzQXKWpRrCNjZtpMfGzgbmVzGtMQ?compose=GTvVlcRzBlSNxdTpwNDQtwWDJVBGfNxQbDBxxLgtZnMkGqSHzTsthGVqRSlJHfrGWSgTzVLgfgRQW">Email: darshanvohra205@gmail.com</a></div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    © 2024 Techzone. All Rights Reserved
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
