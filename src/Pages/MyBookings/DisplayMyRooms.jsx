import PropTypes from 'prop-types';
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';


const DisplayMyRooms = ({ myRoom, handleDelete }) => {
    const { _id, roomType, img, pricePerNight, checkIn } = myRoom

    const updateRoom = {
        roomType
    }


    return (
        <div className='mx-auto shadow-md  hover:shadow-lg pb-5'>
            <div className='relative'>
                <img className='h-[250px] w-[300px]' src={img} alt="" />
                <div className='flex items-center gap-2 absolute top-3 right-3 bg-blue-500 p-3 text-white rounded-md '>
                    <p className=''>${pricePerNight}</p>
                    <h2>/Per Night</h2>
                </div>
            </div>
            <div className='px-5 space-y-2 mt-4'>
                <h4 className='font-semibold text-sm'>LUXURY ROOM</h4>
                {/* <h2>{checkOut}</h2> */}
                <h2 className='text-2xl font-bold text-[#1e1e1e]'>{roomType}</h2>
                <div className='flex justify-between items-center'>
                    <h2>Check In: {checkIn}</h2>
                </div>
            </div>
            <hr className='w-full border my-3' />
            <div className='mx-5 flex items-center justify-between'>
                <button onClick={() => handleDelete(_id, updateRoom)} className='btn btn-outline  text-xl'><AiTwotoneDelete></AiTwotoneDelete></button>
                <Link to={`/updateBookingDate/${_id}`}><button className='btn btn-outline '>Update</button></Link>
            </div>
        </div>
    );
};

DisplayMyRooms.propTypes = {
    myRoom: PropTypes.object,
    handleDelete: PropTypes.func
};

export default DisplayMyRooms;