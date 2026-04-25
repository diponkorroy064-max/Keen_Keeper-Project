import React from 'react';
import FriendsCard from './FriendsCard';
import useFriends from '../../Hooks/UseFriends';
import { HashLoader } from 'react-spinners';


const AllFriends = () => {
    const { friends, loading } = useFriends();
    // console.log(friends);
    if (loading) {
        return <h1 className='flex justify-center items-center py-15'><HashLoader /></h1>

    }

    return (
        <div className='px-10 py-10'>
            <div className='mb-4'>
                <h1 className='text-2xl font-extrabold'>Your Friends</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    friends?.map(frndObj => <FriendsCard key={frndObj.id} frndObj={frndObj}></FriendsCard>)
                }
            </div>
        </div>
    );
};

export default AllFriends;
