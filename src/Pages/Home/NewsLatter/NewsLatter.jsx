import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const NewsLatter = () => {

    const { register, handleSubmit,reset } = useForm()

    const onSubmit = (data) => {
        const name = data.firstName + ' ' + data.lastName
        const email = data.email
        const contact = data.contact
        const desc = data.desc
        const newsLatterData = {
            name, email, contact, desc
        }
        console.log(newsLatterData)

        axios.post('http://localhost:5000/newLatter', newsLatterData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: "successful",
                        title: "Your Feedback in Successful",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                }
            })

    }




    return (
        <div className="hero bg-fixed min-h-screen my-20" style={{ backgroundImage: 'url(https://i.ibb.co/qBR9Jw2/main-qimg-781bf9a766d8823133c1b5cd1d70abbe-lq.jpg)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center w-full">
                <div className="w-1/2">
                    <h1 className="mb-10 text-5xl font-bold text-white">News Latter</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 items-center gap-10">
                        <input {...register("firstName")} required type="text" placeholder="First Name" className="input bg-transparent border-white text-white input-bordered w-full " />
                        <input {...register("lastName")} required type="text" placeholder="Last Name" className="input bg-transparent border-white text-white input-bordered w-full " />
                        <input {...register("email")} required type="email" placeholder="Email" className="input bg-transparent border-white text-white input-bordered w-full " />
                        <input {...register("contact")} required type="number" placeholder="Contact" className="input bg-transparent border-white text-white input-bordered w-full " />
                        <textarea required {...register("desc")} className="textarea textarea-bordered col-span-2 bg-transparent border-white text-white" placeholder="Support"></textarea>
                        <button type="submit" className="btn col-span-2 btn-outline text-white">Get Started</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;