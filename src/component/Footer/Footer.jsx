import React from 'react';
import { Link } from 'react-router';
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='container mx-auto bg-green-900 text-[#FFFFFF] text-center px-10 pt-12 space-y-5'>

            <h1 className='text-5xl font-extrabold'>KeenKeeper</h1>

            <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            <div>
                <h3 className='text-2xl font-bold mb-2.5'>Social Links</h3>

                <div className='flex justify-center items-center gap-2.5'>
                    <Link className='bg-white p-2 rounded-full'><RiInstagramFill className='text-2xl text-black' /></Link>
                    <Link className='bg-white p-2 rounded-full'><FaFacebookSquare className='text-2xl text-black'/></Link>
                    <Link className='bg-white p-2 rounded-full'><BsTwitterX className='text-2xl text-black'/></Link>
                </div>
            </div>
            
            <div className='flex justify-around items-center flex-wrap gap-2.5 border-t border-gray-400 py-4'>
                <div>
                    <h2 className='text-gray-400'>© 2026 KeenKeeper. All rights reserved.</h2>
                </div>

                <div className='flex gap-5 text-gray-400'>
                    <h3>Privacy Policy</h3>
                    <h3>Terms of Service </h3>          <h3>Cookies</h3>
                </div>
            </div>

        </div>
    );
};

export default Footer;