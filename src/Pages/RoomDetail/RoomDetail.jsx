import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shered/Navbar/Navbar";
import DetailBanner from "./DetailBanner";
import { FaArrowAltCircleLeft, FaArrowCircleRight, FaCheck, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Footer from "../../Shered/Footer/Footer";
import Rating from "react-rating";
import axios from "axios";
import Swal from "sweetalert2";
import Context from "../../Hooks/Contex";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import DisplayReview from "./DisplayReview";


const RoomDetail = () => {

    const { user } = Context()
    const [review, setReview] = useState([])
    const [seeReview, setSeeReview] = useState(false)

    const { _id, roomType, pricePerNight, description, amenities, available, img, roomSize, rating, beds } = useLoaderData()


    useEffect(() => {

        axios(`http://localhost:5000/review?roomType=${roomType}`)
            .then(res => setReview(res?.data))
    }, [roomType])

    console.log()


    const handleRoomBooking = e => {
        e.preventDefault()
        const form = e.target
        const checkIn = form.checkIn.value
        const checkOut = form.checkOut.value

        const newBooking = {
            roomType, pricePerNight, description, amenities, available, img, roomSize, rating, beds, checkIn, checkOut, email: user?.email
        }

        const updateRoom = {
            available: false,
            _id
        }

        if (user) {
            if (available) {
                axios.post(`http://localhost:5000/roomBooking`, newBooking)
                    .then(res => {
                        if (res.data.acknowledged) {
                            axios.put('http://localhost:5000/updateRoom', updateRoom)
                                .then(() => {
                                    Swal.fire(
                                        'Good job!',
                                        'Booking Successful',
                                        'success'
                                    )
                                    setSeeReview(true)
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
        } else {
            Swal.fire({
                title: 'Login first',
                text: 'see another',
                icon: 'error',
                confirmButtonText: 'error'
            })
        }


    }

    const time = moment().format('LT')

    const handleReview = e => {
        e.preventDefault()
        const form = e.target
        const userName = form.userName.value
        const reviewRating = form.rating.value
        const comment = form.comment.value

        const reviewData = {
            userName, reviewRating, comment, roomType, time, img: user.photoURL
        }

        axios.post('http://localhost:5000/review', reviewData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Review posted',
                        'success'
                    )
                }
            })

    }



    return (
        <div>
            <Navbar></Navbar>
            <DetailBanner></DetailBanner>
            <div className="my-20">
                <div className="hero my-10 w-full">
                    <div className="hero-content flex-col lg:flex-row w-full gap-5">
                        <div className="lg:w-[60%] w-full">
                            <img src={img} className=" h-[550px] w-full rounded-lg shadow-2xl" />
                        </div>
                        <div className="lg:w-[40%] w-full">
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
                <div className="mt-5 px-12 flex md:flex-row flex-col gap-20">
                    <div className="lg:w-[60%]">
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
                        <div className="flex md:flex-row flex-col items-center mt-10 gap-10">

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
                    <div className="md:w-[40%]">
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
                <div className="px-12  my-10">
                    <h2 className="text-2xl font-semibold">Room Reviews</h2>

                    <div className="grid grid-cols-1 justify-center md:grid-cols-2 items-center gap-10">

                        {
                            review?.map(info => <DisplayReview key={info._id} info={info}></DisplayReview>)
                        }


                    </div>

                    {
                        seeReview && <div className="my-20">
                            <h2 className="text-center text-2xl font-semibold">Set Your own Review</h2>
                            <p className="text-center xl:mx-72 mx-10 font-medium my-2"> A hotel room is a carefully crafted and welcoming space within a hotel that serves as a travelers home away from home. Designed for comfort and relaxation </p>
                            <form onSubmit={handleReview} className="card-body mx-auto grid grid-cols-2 gap-5 justify-center items-center w-[60%]">
                                <div className="form-control mx-auto w-full">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input name="userName" required type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control mx-auto w-full">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <select name="rating" required className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Rating</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-control  col-span-2">
                                    <label className="label">
                                        <span className="label-text">Comment</span>
                                    </label>
                                    <textarea name="comment" required className="textarea textarea-bordered" placeholder="comment"></textarea>
                                </div>
                                <input className="btn btn-outline col-span-2" type="submit" value="Submit" />
                            </form>
                        </div>

                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RoomDetail;