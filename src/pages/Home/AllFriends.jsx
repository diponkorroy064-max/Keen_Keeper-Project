import React from 'react';
import FriendsCard from './FriendsCard';
import useFriends from '../../useFriends/UseFriends';
import { HashLoader } from 'react-spinners';

const AllFriends = () => {
    const { friends,  loading } = useFriends();
    // console.log(friends);
    if (loading) {
        return <h1 className='flex justify-center items-center py-15'><HashLoader /></h1>

    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-10'>
            {
                friends?.map(frndObj => <FriendsCard key={frndObj.id} frndObj={frndObj}></FriendsCard>)
            }
        </div>
    );
};

export default AllFriends;
