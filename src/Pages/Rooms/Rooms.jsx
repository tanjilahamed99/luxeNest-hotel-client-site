import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";
import RoomBanner from "./Roombaner/RoomBanner";
import RoomsCard from "./RoomsCard/RoomsCard";

const Rooms = () => {
    return (
        <div>
            <Navbar></Navbar>
            <RoomBanner></RoomBanner>
            <RoomsCard></RoomsCard>
            <Footer></Footer>
        </div>
    );
};

export default Rooms;