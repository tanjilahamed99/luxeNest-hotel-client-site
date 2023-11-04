import Navbar from "../../Shered/Navbar/Navbar";
import SimpleMap from "./Map/Map";
import Sliders from "./Sliders/Sliders";
import StunningImages from "./StunningImages/StunningImages";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StunningImages></StunningImages>
            <Sliders></Sliders>
            <SimpleMap></SimpleMap>
        </div>
    );
};

export default Home;