import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Navbar from '../shared/Navbar/Navbar';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('username');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        createUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-5xl font-bold -mb-20">Register Now.</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister}>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='username' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <Link to={'/login'}>
                                    <a href="#" className="label-text-alt link link-hover">Already Registered?</a>
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control  mt-3">
                                <button className="btn bg-black text-white hover:text-black ">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;