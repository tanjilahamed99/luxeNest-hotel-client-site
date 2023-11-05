import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";
import SimpleMap from "./Map/Map";
import Sliders from "./Sliders/Sliders";
import SpecialOffer from "./SpecialOfFer/SpecialOffer";
import StunningImages from "./StunningImages/StunningImages";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StunningImages></StunningImages>
            <Sliders></Sliders>
            <Testimonial></Testimonial>
            <SpecialOffer></SpecialOffer>
            <SimpleMap></SimpleMap>
            <Footer></Footer>
        </div>
    );
};

export default Home;