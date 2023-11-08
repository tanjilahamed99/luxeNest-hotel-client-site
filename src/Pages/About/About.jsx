import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";
import AboutBanner from "./AboutBanner";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import MeetEmploys from "./MeetEmploys";

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AboutBanner></AboutBanner>
            <AboutUs></AboutUs>
            <Facilities></Facilities>
            <MeetEmploys></MeetEmploys>
            <Footer></Footer>
        </div>
    );
};

export default About;