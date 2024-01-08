import { Helmet } from "react-helmet";
import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";
import Sliders from "./Sliders/Sliders";
import StunningImages from "./StunningImages/StunningImages";
import Testimonial from "./Testimonial/Testimonial";
import HomeAbout from "./HomeAbout/HomeAbout";
import Photo from "./Photo/Photo";
import Event from "./Event/Event";
import HomeContact from "./HomeContact/HomeContact";
import Restaurant from "./Restaurant/Resturant";
import Food from "./Food/Food";
import Spa from "./Spa/Spa";

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
            <Event></Event>
            <Restaurant></Restaurant>
            <Spa></Spa>
            <Food></Food>
            <HomeContact></HomeContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;