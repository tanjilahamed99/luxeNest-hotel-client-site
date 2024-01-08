import { Link } from "react-router-dom";

const MenuBanner = () => {
    return (
        <div className="hero h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/k1Cp8YL/pamela-lima-NW56x-UFPQU8-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Our Menu</h1>
                    <p className="mb-5"><Link to={'/'} className="font-bold">HOME</Link> / Menu</p>
                </div>
            </div>
        </div>
    );
};

export default MenuBanner;