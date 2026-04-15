import React from 'react';

const Tabs = () => {
    return (
        <div className='flex justify-center items-center gap-5 p-10 border-b-2 border-gray-200 flex-wrap'>
            <div className='bg-gray-200 p-2 text-center rounded-md shadow w-50'>
                <h1>6</h1>
                <p>Total Friends</p>
            </div>

            <div className='bg-gray-200 p-2 text-center rounded-md shadow w-50'>
                <h1>6</h1>
                <p>On Track</p>
            </div>

            <div className='bg-gray-200 p-2 text-center rounded-md shadow w-50'>
                <h1>6</h1>
                <p>Need Attentation</p>
            </div>

            <div className='bg-gray-200 p-2 text-center rounded-md shadow w-50'>
                <h1>6</h1>
                <p>Interactions This Month</p>
            </div>
            
        </div>
    );
};

export default Tabs;