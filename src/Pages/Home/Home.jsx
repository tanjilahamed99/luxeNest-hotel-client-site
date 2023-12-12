import { Helmet } from "react-helmet";
import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";
import SimpleMap from "./Map/Map";
import Sliders from "./Sliders/Sliders";
import SpecialOffer from "./SpecialOfFer/SpecialOffer";
import StunningImages from "./StunningImages/StunningImages";
import Testimonial from "./Testimonial/Testimonial";
import NewsLatter from "./NewsLatter/NewsLatter";

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
            <SpecialOffer></SpecialOffer>
            <SimpleMap></SimpleMap>
            <NewsLatter></NewsLatter>
            <Footer></Footer>
        </div>
    );
};

export default Home;