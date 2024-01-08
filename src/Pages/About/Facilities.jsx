import { FaBed, FaKey, FaRss } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { MdPool } from "react-icons/md";
const Facilities = () => {
    return (
        <div className="my-20 bg-[#f8f6f3] py-40 ">
            <h2 className="text-center text-3xl font-semibold">HOTEL’S FACILITIES</h2>
            <p className="xl:mx-96 md:mx-20 text-center mt-3">Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling</p>

            <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="grid grid-cols-1 mt-10 justify-center items-center gap-10 md:grid-cols-2 lg:grid-cols-5">
                <div className="bg-white text-[#c19d68] text-center h-[200px] w-[200px] p-10 mx-auto rounded-lg hover:bg-[#c19d68] hover:text-white">
                    <FaBed className="text-5xl text-center mx-auto mt-5"></FaBed>
                    <h2 className="font-bold text-lg mt-3">Room Service</h2>
                </div>
                <div className="bg-white h-[200px] w-[200px] text-center p-10 text-[#c19d68] mx-auto rounded-lg hover:bg-[#c19d68] hover:text-white">
                    <FaRss className="text-5xl text-center mx-auto mt-5"></FaRss>
                    <h2 className="font-bold text-lg mt-3">Wifi Internet</h2>
                </div>
                <div className="bg-white h-[200px] w-[200px] text-center p-10 text-[#c19d68] mx-auto rounded-lg hover:bg-[#c19d68] hover:text-white">
                    <FaKey className="text-5xl text-center mx-auto mt-5"></FaKey>
                    <h2 className="font-bold text-lg mt-3">Smart key</h2>
                </div>
                <div className="bg-white h-[200px] w-[200px] text-center p-10 text-[#c19d68] mx-auto rounded-lg hover:bg-[#c19d68] hover:text-white">
                    <FaBowlFood className="text-5xl text-center mx-auto mt-5"></FaBowlFood>
                    <h2 className="font-bold text-lg mt-3">Breakfast</h2>
                </div>
                <div className="bg-white h-[200px] w-[200px] text-center p-10 text-[#c19d68] mx-auto rounded-lg hover:bg-[#c19d68] hover:text-white">
                    <MdPool className="text-5xl text-center mx-auto mt-5"></MdPool>
                    <h2 className="font-bold text-lg mt-3">Swimming</h2>
                </div>
            </div>

        </div>
    );
};

export default Facilities;