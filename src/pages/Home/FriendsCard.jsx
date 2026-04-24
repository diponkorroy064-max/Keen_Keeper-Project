import React from 'react';
import { Link } from 'react-router';


const FriendsCard = ({ frndObj }) => {
    // console.log(frndObj);
    return (
        <Link to={`/friendDetails/${frndObj.id}`} className='bg-white px-2.5 py-6 text-center space-y-3 shadow rounded-2xl'>
            <img className='w-20 m-auto rounded-full border border-gray-300' src={frndObj.picture} alt="" />

            <h2 className='text-2xl font-bold'>{frndObj.name}</h2>

            <p className='text-gray-500 text-[13px]'>{frndObj.days_since_contact}d ago</p>

            <p className='flex justify-center gap-2'>
                {
                    frndObj.tags.map((itm, ind) => <span className='badge bg-green-300 rounded-2xl font-semibold' key={ind}>{itm}</span>)
                }
            </p>

            <p className={`badge text-white font-semibold rounded-2xl ${frndObj.status == "Overdue" ? 'bg-red-500' : frndObj.status == "Almostdue" ?'bg-yellow-400':'bg-green-500'}`}>{frndObj.status}</p>
        </Link>
    );
};

export default FriendsCard;
