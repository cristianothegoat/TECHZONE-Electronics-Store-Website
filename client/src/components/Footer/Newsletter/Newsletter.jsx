import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <a href="https://www.linkedin.com/  " target="blak">
                            <FaLinkedinIn size={14} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.facebook.com/" target="blank">
                            <FaFacebookF size={14} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://x.com/" target="blank">
                            <FaTwitter size={14} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.instagram.com/" target="blank">
                            <FaInstagram size={14} />
                        </a>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
