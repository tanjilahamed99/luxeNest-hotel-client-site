import axios from "axios";
import { useEffect, useState } from "react";
import DisplayRooms from "./DisplayRooms";

const RoomsCard = () => {
    const [rooms, setRooms] = useState([])
    const [shortOrder, setShortOrder] = useState()
    const [shortFlied, setShortFlied] = useState()


    useEffect(() => {
        axios(`https://luxe-next-server.vercel.app/rooms?shortFlied=${shortFlied}&shortOrder=${shortOrder}`)
            .then(res => setRooms(res.data))
    }, [shortOrder, shortFlied])

    return (
        <div className="my-20">
            <h2 className="mb-2 text-center text-3xl font-semibold">LuxeNest ROOMS & SUITES</h2>
            <p className="xl:mx-96 md:mx-10 lg:mx-20 text-center">Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling</p>
            <div>
                <details className="dropdown container pl-20 " >
                    <summary className="m-1 btn btn-outline">Short By price</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => setShortFlied('pricePerNight')}><a onClick={() => setShortOrder('asc')}>Lowest Price</a></li>
                        <li onClick={() => setShortFlied('pricePerNight')}><a onClick={() => setShortOrder('desc')}>Hightest Price</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid gap-10 container mx-auto   justify-center  md:grid-cols-2 mt-10 grid-cols-1 lg:grid-cols-3 items-center ">
                {
                    rooms.map(room => <DisplayRooms key={room._id} room={room}></DisplayRooms>)
                }
            </div>

        </div>
    );
};

export default RoomsCard;