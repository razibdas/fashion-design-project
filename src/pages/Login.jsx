
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../shared/Navbar/Navbar";

import { FcGoogle } from 'react-icons/fc';



const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        signIn(email, password)
            .then((user) => {
                Swal.fire({
                    title: 'user created successfully.!',
                    icon: 'success',

                })
                console.log(user);
                navigate(location?.state ? location.state : '/')

            })
            .catch((error) => {
                console.error(error);
                setError("Email or password is incorrect. Please try again.");
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });

    }

    return (
        <div className="px-8 mt-8">
            <Navbar></Navbar>
            <h2 className="text-3xl text-center mt-12">Please Login</h2>
            <div className="md:w-1/3 lg:w-1/3 mx-auto">
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        {error}
                    </div>
                )}
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="text-center mt-2">
                        <button onClick={handleGoogleSignIn} className="btn btn-primary text-white"><FcGoogle className="text-2xl"></FcGoogle>Google Login</button>
                    </div>
                </form>

                <p className="text-center">Do not  have an account? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
                {success && <p className='text-green-500'>{success}</p>}

            </div>
        </div>

    );
};

export default Login;
