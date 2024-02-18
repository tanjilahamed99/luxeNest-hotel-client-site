import { Helmet } from "react-helmet";
import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";
import AboutBanner from "./AboutBanner";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import MeetEmploys from "./MeetEmploys";

const About = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About LuxeNest Hotel</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Navbar></Navbar>
            <AboutBanner></AboutBanner>
            <AboutUs></AboutUs>
            <Facrilities></Facilities>
            <MeetEmploys></MeetEmploys>
            <Footer></Footer>
        </div>
    );
};

export default About;