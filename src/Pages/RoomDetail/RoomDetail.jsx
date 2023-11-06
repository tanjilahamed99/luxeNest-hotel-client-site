import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shered/Navbar/Navbar";
import DetailBanner from "./DetailBanner";
import { FaArrowAltCircleLeft, FaArrowCircleRight, FaCheck, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Footer from "../../Shered/Footer/Footer";
import Rating from "react-rating";
import axios from "axios";
import Swal from "sweetalert2";
import Context from "../../Hooks/Contex";


const RoomDetail = () => {

    const { user } = Context()

    const { _id, roomType, pricePerNight, description, amenities, available, img, roomSize, rating, beds } = useLoaderData()


    const handleRoomBooking = e => {
        e.preventDefault()
        const form = e.target
        const checkIn = form.checkIn.value
        const checkOut = form.checkOut.value

        const newBooking = {
            roomType, pricePerNight, description, amenities, available, img, roomSize, rating, beds, checkIn, checkOut, email: user.email
        }

        const updateRoom = {
            available: false,
            _id
        }

        if (available) {
            axios.post(`http://localhost:5000/roomBooking`, newBooking)
                .then(res => {
                    if (res.data.acknowledged) {
                        axios.put('http://localhost:5000/updateRoom', updateRoom)
                            .then((res) => {
                                Swal.fire(
                                    'Good job!',
                                    'Booking Successful',
                                    'success'
                                )
                                console.log(res.data)
                            })
                    }
                })
        } else {
            Swal.fire({
                title: 'already booked',
                text: 'see another',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }

    }


    return (
        <div>
            <Navbar></Navbar>
            <DetailBanner></DetailBanner>
            <div className="my-20">
                <div className="hero my-10 w-full">
                    <div className="hero-content flex-col lg:flex-row w-full gap-5">
                        <div className="w-[60%]">
                            <img src={img} className=" h-[550px] w-full rounded-lg shadow-2xl" />
                        </div>
                        <div className="w-[40%]">
                            <form onSubmit={handleRoomBooking} className="card-body w-full bg-[#f8f6f3]">
                                <div>
                                    <h2 className="bg-white p-4 font-semibold text-lg">Room : <span className="text-[#c19d68]">{roomType}</span></h2>
                                </div>
                                <div>
                                    <h2 className="bg-white p-4 font-semibold text-lg">Price  : <span className="text-[#c19d68]">{pricePerNight}$ per Night</span></h2>
                                </div>
                                <div>
                                    <h2 className="bg-white p-4 font-semibold text-lg">Available  : <span className="text-[#c19d68]">{available ? 'Available' : 'Already booking'}</span></h2>
                                </div>
                                <div>
                                    <h2 className="bg-white p-4 font-semibold text-lg">Beds : <span className="text-[#c19d68]">{beds}</span></h2>
                                </div>
                                <div>
                                    <h2 className="bg-white p-4 font-semibold text-lg">Check in : <input type="date" name="checkIn" id="" required /></h2>
                                </div>
                                <div>
                                    <h2 className="bg-white p-4 font-semibold text-lg">Check Out : <input type="date" name="checkOut" id="" required /></h2>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline w-fit">Booking Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-5 px-12 flex gap-20">
                    <div className="w-[60%]">
                        <h2 className="font-semibold ">LUXURY ROOM</h2>
                        <h1 className="font-bold text-3xl  my-3">{roomType}</h1>
                        <p>{description}</p>
                        <div className="my-10 flex items-center gap-5 justify-between">
                            <h2 className="font-semibold text-lg">Room size: {roomSize}</h2>
                            <div>
                                <Rating className="text-2xl"
                                    placeholderRating={rating}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-10 gap-10">

                            <div className="space-y-3">
                                <h2 className="flex gap-2 items-center text-2xl"><FaArrowAltCircleLeft className="text-2xl text-[#616161]"></FaArrowAltCircleLeft>Check In</h2>
                                <p className="flex gap-2 items-center  text-[#616161]"><FaCheck className="text-[#c19d68]"></FaCheck> Check-in from 9:00 AM - anytime</p>
                                <p className="flex gap-2 items-center text-[#616161]"><FaCheck className="text-[#c19d68]"></FaCheck> Early check-in subject to availability</p>
                            </div>
                            <div className="space-y-3">
                                <h2 className="flex gap-2 items-center text-2xl"><FaArrowCircleRight className="text-2xl text-[#616161]"></FaArrowCircleRight>Check Out</h2>
                                <p className="flex gap-2 items-center text-[#616161]"><FaCheck className="text-[#c19d68]"></FaCheck> Check-out before noon</p>
                                <p className="flex gap-2 items-center text-[#616161]"><FaCheck className="text-[#c19d68]"></FaCheck> Check-out from 9:00 AM - anytime</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <h2 className="font-semibold text-3xl">Amenities</h2>
                        <div className="mt-4 space-y-3">
                            <p className="text-lg font-semibold">{amenities[0]}</p>
                            <hr />
                            <p className="text-lg font-semibold">{amenities[1]}</p>
                            <hr />
                            <p className="text-lg font-semibold">{amenities[2]}</p>
                            <hr />
                            <p className="text-lg font-semibold">{amenities[3]}</p>
                        </div>
                    </div>
                </div>
                {/* review */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RoomDetail;