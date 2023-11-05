import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetail from "../Pages/RoomDetail/RoomDetail";


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
            },
            {
                path: '/roomDetail/:id',
                element: <RoomDetail></RoomDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/roomDetail/${params.id}`)
            }
        ]
    }

])


export default Routes;