import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Hero from './Hero';
import Tabs from './Tabs';
import AllFriends from './AllFriends';


const Home = () => {
    return (
        <div className='max-w-300 m-auto'>
            <Hero></Hero>
            <Tabs></Tabs>
            <AllFriends></AllFriends>
        </div>
    );
};

export default Home;