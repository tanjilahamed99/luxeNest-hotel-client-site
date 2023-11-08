import PropTypes from 'prop-types';
import { FaBed, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const DisplayRooms = ({ room }) => {
    const { _id, roomType, img, pricePerNight, roomSize, rating, beds, available } = room


    return (
        <Link to={`/roomDetail/${_id}`} className=' shadow-md mx-auto  hover:shadow-lg pb-5'>
            <div className='relative '>
                <img className='h-[250px] w-[300px] mx-auto' src={img} alt="" />
                <div className='flex items-center gap-2 absolute top-3 right-3 bg-blue-500 p-3 text-white rounded-md '>
                    <p className=''>${pricePerNight}</p>
                    <h2>/Per Night</h2>
                </div>
            </div>
            <div className='px-5 space-y-2 mt-4'>
                <h4 className='font-semibold text-sm'>LUXURY ROOM</h4>
                <h2 className='text-2xl font-bold text-[#1e1e1e]'>{roomType}</h2>
                <div className='flex justify-between items-center'>
                    <p className='font-medium text-sm text-[#616161]'>{roomSize}/Rooms</p>
                    <p className='font-medium'>{available ? 'Available' : 'Already booked'}</p>
                </div>
            </div>
            <hr className='w-full border my-3' />
            <div className='mx-5 flex items-center justify-between'>
                <div className=''>
                    <h2 className='flex gap-2 items-center text-[#616161]'><FaBed className='text-2xl'></FaBed><span className='text-lg'>{beds} King Beds</span></h2>
                </div>
                <div>
                    <Rating className="text-2xl"
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                </div>
            </div>
        </Link>
    );
};

DisplayRooms.propTypes = {
    room: PropTypes.object
};

export default DisplayRooms;