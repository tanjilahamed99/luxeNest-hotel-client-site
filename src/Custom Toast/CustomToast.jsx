import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
const CustomToast = ({ message, toastClose }) => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
            toastClose();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [toastClose])


    return (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-64 bg-black text-white p-3 rounded shadow-lg transition-opacity ${visible ? 'opacity-100' : 'opacity-0 hidden'}`}>
            {message}
        </div>
    );
};

CustomToast.propTypes = {
    message: PropTypes.string,
    toastClose: PropTypes.number,
};

export default CustomToast;