import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaHome } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center flex-wrap gap-2 px-5 md:px-10 py-3 bg-white shadow-2xs border-b border-gray-300'>
            <div>
                <h2 className='text-2xl font-semibold text-green-800'><span className='font-extrabold text-black'>Keen</span>keeper</h2>
            </div>

            <div className='hidden md:flex justify-center items-center flex-wrap gap-2'>
                <NavLink to={'/'} className={({ isActive }) => `btn ${isActive ? "bg-green-900 text-white" : "shadow"}`}><FaHome /> Home</NavLink>

                <NavLink to={'/timeline'} className={({ isActive }) => `btn ${isActive ? "bg-green-900 text-white" : "shadow"}`}> <IoTimeOutline /> Timeline</NavLink>

                <NavLink to={'/stats'} className={({ isActive }) => `btn ${isActive ? "bg-green-900 text-white" : "shadow"}`}><BsGraphUp /> Stats</NavLink>
            </div>

            <div className="dropdown dropdown-left md:hidden relative">
                <div tabIndex={0} className=''>
                    <GiHamburgerMenu className='btn bg-transparent border-0'/>
                </div>
                <div tabIndex="-1" className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-35 p-2 shadow">

                    <Link className='btn btn-soft border border-gray-300 hover:btn-secondary' to={'/'}><FaHome /> Home</Link>
                    <Link className='btn btn-soft border border-gray-300 hover:btn-secondary' to={'/timeline'}><IoTimeOutline /> Timeline</Link>
                    <Link className='btn btn-soft border border-gray-300 hover:btn-secondary' to={'/stats'}><BsGraphUp /> Stats</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
