import React from 'react';
import { NavLink } from 'react-router';


const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center flex-wrap gap-2 px-10 py-3 bg-gray-200'>
            <div>
                <h2 className='text-2xl font-semibold'><span className='font-extrabold'>Keen</span>keeper</h2>
            </div>

            <div className='flex gap-5'>
                <NavLink to={'/'} className={({isActive})=> isActive ? " btn btn-primary":"btn"}>Home</NavLink>
                <NavLink to={'/timeline'} className={({isActive})=> isActive ? " btn btn-primary":"btn"}>Timeline</NavLink>
                <NavLink to={'/ststs'} className={({isActive})=> isActive ? " btn btn-primary":"btn"}>Stats</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
