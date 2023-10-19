

import { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import Navbar from '../shared/Navbar/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import Footer from './Footer';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate()

    const { createUser } = useContext(AuthContext);

     

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        // Reset error and success messages
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            Swal.fire({
                title: 'Password should be at least 6 characters long.!',
                icon: 'error',
              })
            return;
        }

        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                title: 'Password should contain at least one uppercase character.!',
                icon: 'error',
              })
            return;
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            Swal.fire({
                title: 'Password should contain at least one special character.!',
                icon: 'error',
              })
            return;
        }

        
        createUser(email, password)
                    .then(result =>{
                        console.log(result.user);
                        Swal.fire({
                            title: 'user created successfully.!',
                            icon: 'success',
                           
                          })
                          navigate('/login')

                       
                    })
                    .catch(error =>{
                        console.error(error);
                        setRegisterError(error)
                    })
        
    };

    return (
        <div>
            <div className="px-8 mt-8">
                <Navbar></Navbar>
                <h2 className="text-3xl text-center mt-12">Please Register</h2>
                <div className="md:w-1/3 lg:w-1/3 mx-auto">
                    <form onSubmit={handleRegister}>
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    
                     { registerError && <p className="text-center">Already  have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>}
                    {success && <p className='text-green-500'>{success}</p>}
                    
                </div>
            </div>
            <div className="pt-56">
                <Footer></Footer>

            </div>
        </div>
    );
};

export default Register;




