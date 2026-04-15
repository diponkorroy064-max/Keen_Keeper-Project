import React from 'react';
import { NavLink } from 'react-router';
import { FaHome } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";


const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center flex-wrap gap-2 px-10 py-3 bg-white shadow'>
            <div>
                <h2 className='text-2xl font-semibold text-green-800'><span className='font-extrabold text-black'>Keen</span>keeper</h2>
            </div>

            <div className='flex justify-center items-center flex-wrap gap-2'>
                <NavLink to={'/'} className={({ isActive }) => `w-28 btn ${isActive ? "bg-green-700 text-white" : "shadow"}`}><FaHome /> Home</NavLink>

                <NavLink to={'/timeline'} className={({ isActive }) => `w-28 btn ${isActive ? "bg-green-700 text-white" : "shadow"}`}> <IoTimeOutline /> Timeline</NavLink>

                <NavLink to={'/ststs'} className={({ isActive }) => `w-28 btn ${isActive ? "bg-green-700 text-white" : "shadow"}`}><BsGraphUp /> Stats</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
