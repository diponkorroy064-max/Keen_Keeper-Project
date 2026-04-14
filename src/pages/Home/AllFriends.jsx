import React from 'react';
import FriendsCard from './FriendsCard';
import useFriends from '../../useFriends/UseFriends';

const AllFriends = () => {
    const { friends } = useFriends();
    console.log(friends);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-10'>
            {
                friends?.map(frndObj => <FriendsCard key={frndObj.id} frndObj={frndObj}></FriendsCard>)
            }
        </div>
    );
};

export default AllFriends;
