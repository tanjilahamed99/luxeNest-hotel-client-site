import { Helmet } from "react-helmet";
import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";
import Sliders from "./Sliders/Sliders";
import SpecialOffer from "./SpecialOfFer/SpecialOffer";
import StunningImages from "./StunningImages/StunningImages";
import Testimonial from "./Testimonial/Testimonial";
import NewsLatter from "./NewsLatter/NewsLatter";
import HomeAbout from "./HomeAbout/HomeAbout";
import Photo from "./Photo/Photo";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home LuxeNest Hotel</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Navbar></Navbar>
            <StunningImages></StunningImages>
            <Sliders></Sliders>
            <Testimonial></Testimonial>
            <HomeAbout></HomeAbout>
            <Photo></Photo>
            {/* <SpecialOffer></SpecialOffer> */}
            {/* <NewsLatter></NewsLatter> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;