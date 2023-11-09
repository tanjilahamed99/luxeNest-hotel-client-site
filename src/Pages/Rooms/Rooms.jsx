import { Helmet } from "react-helmet";
import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";
import RoomBanner from "./Roombaner/RoomBanner";
import RoomsCard from "./RoomsCard/RoomsCard";

const Rooms = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rooms LuxeNest Hotel</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Navbar></Navbar>
            <RoomBanner></RoomBanner>
            <RoomsCard></RoomsCard>
            <Footer></Footer>
        </div>
    );
};

export default Rooms;