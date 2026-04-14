import React from 'react';
import { useLoaderData } from 'react-router';

const FriendDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            this is friendDetails
        </div>
    );
};

export default FriendDetails;