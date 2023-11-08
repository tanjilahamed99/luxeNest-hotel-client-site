import { useEffect, useState } from "react";
import Context from "../../Hooks/Contex";
import Navbar from "../../Shered/Navbar/Navbar";
import MyBookingBanner from "./MyBookingBanner";
import axios from "axios";
import DisplayMyRooms from "./DisplayMyRooms";
import Footer from "../../Shered/Footer/Footer";
import Swal from "sweetalert2";
import moment from "moment";

const MyBookings = () => {

    const { user } = Context()
    const [myRoom, setMyRoom] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/roomBooking?email=${user.email}`, { withCredentials: true })
            .then(res => setMyRoom(res.data))
    }, [user])

    const handleDelete = (id, updateRoom, checkIn) => {


        const today = moment().format('L')
        const checkInNew = new Date(checkIn)
        const todayNow = new Date(today)

        const time = (checkInNew - todayNow)
        const days = Math.ceil(time / (1000 * 60 * 60 * 24))


        if (days >= 2) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/roomBooking/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                axios.put('http://localhost:5000/delateUpdate', updateRoom)
                                    .then((res) => {
                                        Swal.fire(
                                            'Good job!',
                                            'Delete Successful',
                                            'success'
                                        )
                                        console.log(res.data)
                                    })
                            }
                            const remaining = myRoom.filter(room => room._id !== id)
                            setMyRoom(remaining)
                        })
                }
            });
        } else {
            Swal.fire(
                'Sorry!',
                'You are to late to cancel this Booking',
                'error'
            )
        }



    }



    return (
        <div>
            <Navbar></Navbar>
            <MyBookingBanner></MyBookingBanner>
            <h2 className="text-3xl font-bold mt-20 text-center mb-5">My Rooms</h2>
            <div className="grid grid-cols-3 items-center">
                {
                    myRoom.map(room => <DisplayMyRooms key={room._id} myRoom={room}
                        handleDelete={handleDelete}></DisplayMyRooms>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyBookings;