import { useState } from 'react';
import CustomToast from './CustomToast';

const DisplayCustomToast = () => {
    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
        setShowToast(true);
    };

    const handleHideToast = () => {
        setShowToast(false);
    };

    return (
        <div className="">
            <button onClick={handleShowToast} className="">
                Custom Toast
            </button>
            {showToast && (
                <CustomToast message="Custom toast" onClose={handleHideToast} />
            )}
        </div>
    );
}

export default DisplayCustomToast;