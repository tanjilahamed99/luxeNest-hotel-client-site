import PropTypes from 'prop-types';
import { AiTwotoneDelete } from "react-icons/ai";


const DisplayMyRooms = ({ myRoom, handleDelete }) => {
    const { _id, roomType, img, pricePerNight, roomSize, available } = myRoom

    const updateRoom = {
        roomType
    }

    // const handleDelete = () => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:5000/roomBooking/${_id}`, {
    //                 method: "DELETE"
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount) {
    //                         axios.put('http://localhost:5000/delateUpdate', updateRoom)
    //                             .then((res) => {
    //                                 Swal.fire(
    //                                     'Good job!',
    //                                     'Delete Successful',
    //                                     'success'
    //                                 )
    //                                 console.log(res.data)
    //                             })
    //                     }
    //                 })
    //         }
    //     });

    // }


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
                <h2 className='text-2xl font-bold text-[#1e1e1e]'>{roomType}</h2>
                <div className='flex justify-between items-center'>
                    <p className='font-medium text-sm text-[#616161]'>{roomSize}/Rooms</p>
                    <p className='font-medium'>{available ? 'Available' : 'Already booked'}</p>
                </div>
            </div>
            <hr className='w-full border my-3' />
            <div className='mx-5 flex items-center justify-between'>
                <button onClick={() => handleDelete(_id,updateRoom)} className='btn btn-outline w-full text-2xl'><AiTwotoneDelete></AiTwotoneDelete></button>

            </div>
        </div>
    );
};

DisplayMyRooms.propTypes = {
    myRoom: PropTypes.object,
    handleDelete: PropTypes.func
};

export default DisplayMyRooms;