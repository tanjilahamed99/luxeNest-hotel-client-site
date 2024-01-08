import PropTypes from 'prop-types';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const DisplayReview = ({ info }) => {

    const { userName, reviewRating, comment, time, img } = info

    return (
        <div className='mx-auto my-10'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex items-center gap-5'>
                        <img className='w-16 h-16 rounded-full' src={img} alt="" />
                        <div>
                            <h2 className="text-2xl font-semibold">{userName}</h2>
                            <h2>{time}</h2>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                    <Rating className="text-2xl text-yellow-500"
                        placeholderRating={reviewRating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    </div>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
};

DisplayReview.propTypes = {
    info: PropTypes.object
};

export default DisplayReview;