import React, { useContext } from 'react';
import useFriends from '../../Hooks/UseFriends';
import { FriendsContext } from '../../Context/FriendsContext';

const Tabs = () => {
    const { friends } = useFriends();
    // console.log(friends);
    const { timeline } = useContext(FriendsContext);
    // console.log(timeline);

    return (
        <div className='flex justify-center items-center p-10 gap-5 border-b-2 border-gray-200 flex-wrap mx-5'>

            <div className='bg-white p-2 text-center rounded-md shadow w-full sm:w-50'>
                <h1 className='text-2xl font-bold'>{friends?.length}</h1>
                <p>Total Friends</p>
            </div>

            <div className='bg-white p-2 text-center rounded-md shadow w-full sm:w-50'>
                <h1 className='text-2xl font-bold'>2</h1>
                <p>On Track</p>
            </div>

            <div className='bg-white p-2 text-center rounded-md shadow w-full sm:w-50'>
                <h1 className='text-2xl font-bold'>2</h1>
                <p>Need Attentation</p>
            </div>

            <div className='bg-white p-2 text-center rounded-md shadow w-full sm:w-50'>
                <h1 className='text-2xl font-bold'>{timeline?.length}</h1>
                <p>Interactions This Month</p>
            </div>

        </div>
    );
};

export default Tabs;