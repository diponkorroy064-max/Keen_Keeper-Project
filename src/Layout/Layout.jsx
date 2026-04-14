import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;