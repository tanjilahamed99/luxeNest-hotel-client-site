import { useLoaderData } from "react-router-dom";
import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateBookingDate = () => {
    const updateLoaderData = useLoaderData()
    const [updateDate, setUpdateData] = useState()
    useEffect(() => {
        updateLoaderData?.map(data => setUpdateData(data))
    }, [updateLoaderData])

    const { _id, img, pricePerNight, checkIn, checkOut, roomType } = updateDate || {}

    const handleUpdateDate = e => {

        e.preventDefault()
        const form = e.target
        const checkIn = form.checkIn.value
        const checkOut = form.checkOut.value

        const newDate = {
            checkIn,
            checkOut,
            _id
        }

        axios.post('https://luxe-next-server.vercel.app/updateDate', newDate)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire(
                        'Good job!',
                        'Update Successful',
                        'success'
                    )
                }
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero my-10 w-full">
                <div className="hero-content flex-col lg:flex-row w-full gap-5">
                    <div className="lg:w-[60%] w-[80%] mx-auto">
                        <img src={img} className=" h-[500px] w-full rounded-lg shadow-2xl" />
                    </div>
                    <div className="lg:w-[40%] w-[80%]" >
                        <form onSubmit={handleUpdateDate} className="card-body w-full bg-[#f8f6f3]">
                            <div>
                                <h2 className="bg-white p-4 font-semibold text-lg">Room : <span className="text-[#c19d68]">{roomType}</span></h2>
                            </div>
                            <div>
                                <h2 className="bg-white p-4 font-semibold text-lg">Price  : <span className="text-[#c19d68]">{pricePerNight}$ per Night</span></h2>
                            </div>
                            <div>
                                <h2 className="bg-white p-4 font-semibold text-lg">Check in : <input type="date" defaultValue={checkIn} name="checkIn" id="" required /></h2>
                            </div>
                            <div>
                                <h2 className="bg-white p-4 font-semibold text-lg">Check Out : <input type="date" defaultValue={checkOut} name="checkOut" id="" required /></h2>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline w-fit">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default UpdateBookingDate;