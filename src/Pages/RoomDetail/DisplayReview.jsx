import PropTypes from 'prop-types';

const DisplayReview = ({ info }) => {

    const { userName, reviewRating, comment, roomType, time } = info

    return (
        <div>
            <h2>{userName}</h2>
        </div>
    );
};

DisplayReview.propTypes = {
    info: PropTypes.object
};

export default DisplayReview;