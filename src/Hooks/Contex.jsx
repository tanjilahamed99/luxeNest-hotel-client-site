import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Context = () => {

    const useHookContext = useContext(AuthContext)

    return useHookContext
};

export default Context;