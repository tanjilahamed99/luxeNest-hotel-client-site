import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Rooms from "../Pages/Rooms/Rooms";


const Routes = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUP',
                element: <SignUp></SignUp>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            }
        ]
    }

])


export default Routes;