import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetail from "../Pages/RoomDetail/RoomDetail";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";
import UpdateBookingDate from "../Pages/UpdateBookingDate/UpdateBookingDate";
import ErrorPage from "../404Page/ErrorPage";
import About from "../Pages/About/About";
import Faq from "../Pages/Faq/Faq";


const Routes = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/roomDetail/:id',
                element: <RoomDetail></RoomDetail>,
                loader: ({ params }) => fetch(`https://luxe-next-server.vercel.app/roomDetail/${params.id}`)
            },
            {
                path: '/myBookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/updateBookingDate/:id',
                element: <UpdateBookingDate></UpdateBookingDate>,
                loader: ({ params }) => fetch(`https://luxe-next-server.vercel.app/updateDate/${params.id}`)
            }
        ]
    }

])


export default Routes;