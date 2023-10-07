import React from 'react';
import { BiUserCircle } from 'react-icons/bi'
const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg '>
            <div className="navbar lg:flex">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content text-white font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>About</a></li>
                            <li><a>Career</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl">AnimeCon</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-white font-semibold px-1">
                        <li><a>About</a></li>
                        <li><a>Career</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=" rounded-full flex gap-3">
                        <p><BiUserCircle className='bg-white hover:bg-red-600 text-red-600 hover:text-white rounded-full'></BiUserCircle></p>
                        <button className='text-sm font-bold bg-slate-900 hover:bg-white  rounded-lg text-white hover:text-slate-900 px-2'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;