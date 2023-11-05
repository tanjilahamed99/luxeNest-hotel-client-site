import axios from "axios";
import { useEffect, useState } from "react";
import DisplayRooms from "./DisplayRooms";

const RoomsCard = () => {
    const [rooms, setRooms] = useState([])
    console.log(rooms)

    useEffect(() => {
        axios('http://localhost:5000/rooms')
            .then(res => setRooms(res.data))
    }, [])



    return (
        <div className="my-20">
            <h2 className="mb-2 text-center text-3xl font-semibold">LuxeNest ROOMS & SUITES</h2>
            <p className="mx-96 text-center">Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling</p>
            <div className="grid gap-10 justify-center mx-auto container mt-10 grid-cols-1 md:grid-cols-3 items-center ">
                {
                    rooms.map(room => <DisplayRooms key={room._id} rooms={room}></DisplayRooms>)
                }
            </div>
        </div>
    );
};

export default RoomsCard;