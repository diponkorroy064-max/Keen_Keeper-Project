import React from 'react';
import useFriends from '../../Hooks/UseFriends';

const Tabs = () => {
    const { friends } = useFriends();
    // console.log(friends);

    return (
        <div className='flex justify-center items-center p-10 gap-5 border-b-2 border-gray-200 flex-wrap mx-10'>

            <div className='bg-white p-2 text-center rounded-md shadow w-50'>
                <h1 className='text-2xl font-bold'>{friends?.length}</h1>
                <p>Total Friends</p>
            </div>

            <div className='bg-white p-2 text-center rounded-md shadow w-50'>
                <h1 className='text-2xl font-bold'>6</h1>
                <p>On Track</p>
            </div>

            <div className='bg-white p-2 text-center rounded-md shadow w-50'>
                <h1 className='text-2xl font-bold'>6</h1>
                <p>Need Attentation</p>
            </div>

            <div className='bg-white p-2 text-center rounded-md shadow w-50'>
                <h1 className='text-2xl font-bold'>6</h1>
                <p>Interactions This Month</p>
            </div>

        </div>
    );
};

export default Tabs;