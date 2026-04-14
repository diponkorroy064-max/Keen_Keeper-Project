import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center px-10 space-y-2.5 py-8'>
            <h2 className='text-3xl font-bold'>Friends to keep close in your life</h2>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            
            <div>
                <button className='btn btn-secondary'>Add a Friend</button>
            </div>
        </div>
    );
};

export default Hero;