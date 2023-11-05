import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Context from "../../Hooks/Contex";
import Swal from "sweetalert2";

const Login = () => {

    const [see, setSee] = useState(true)

    const { loginUser } = Context()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Login Successful!',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })


    }




    return (
        <div className="hero min-h-screen bg-base-200 bg-center bg-cover bg-[url(https://i.ibb.co/XF74Hc8/jason-briscoe-e-Lf-QTm-Df-Lk-unsplash.jpg)]" >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content w-full flex-col ">
                <div className="card w-[40%]">
                    <h2 className="text-center font-bold text-2xl mb-1 text-white">Please Login?</h2>
                    <p className="text-white">Welcome to our secure login page. Enter your credentials to access your account and enjoy a personalized experience on our platform</p>
                    <form onSubmit={handleLogin} className="card-body shadow-2xl shadow-gray-400">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input name="password" type={see ? "password" : 'text'} placeholder="password" className=" p-4 rounded-md border-b-4" required />
                            {
                                see ? <FaEyeSlash onClick={() => setSee(!see)} className="absolute text-xl text-black bottom-12 right-5"></FaEyeSlash>
                                    : <FaEye onClick={() => setSee(!see)} className="absolute text-xl text-black bottom-12 right-5"></FaEye>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link text-white link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-white">Login</button>
                        </div>
                        <Link to={'/signUP'}><p className="text-white">New here? <span className="font-bold">Sign Up</span></p></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;