import { Link } from "react-router-dom";

const AboutBanner = () => {
    return (
        <div className="hero h-[50vh] lg:h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/k1Cp8YL/pamela-lima-NW56x-UFPQU8-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="">
                    <h1 className="g:mb-5 mb-2 text-3xl lg:text-5xl font-bold">About Us</h1>
                    <p className="lg:mb-5"><Link to={'/'} className="font-bold">HOME</Link> / About</p>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;