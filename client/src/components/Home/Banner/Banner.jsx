import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Looking for the best deals on top-quality electronics? Look no further! Our website offers an unbeatable selection of the latest gadgets, from smartphones and laptops to smart home devices and accessories—all at prices you won’t find anywhere else. 
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
