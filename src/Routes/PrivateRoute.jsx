import PropTypes from 'prop-types';
import Context from '../Hooks/Contex';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()
    const { user, loading } = Context()
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children
    }
    else {
        navigate('/login')
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;