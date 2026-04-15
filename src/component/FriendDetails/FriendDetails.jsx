import React from 'react';
import useFriends from '../../useFriends/UseFriends';
import { useParams } from 'react-router';
import { HashLoader } from 'react-spinners';

const FriendDetails = () => {
    const { id } = useParams();
    // console.log('friendsId', id);

    const { friends , loading} = useFriends();
    // console.log(friends);

    const expectedFrnd = friends?.find((frnd) => frnd.id == id);
    console.log(expectedFrnd);

    if (loading) {
        return <h1 className='flex justify-center items-center py-15'><HashLoader /></h1>
    }
    
    return (
        <div className='max-w-300 m-auto grid grid-cols-5 px-10 my-8 gap-5'>

            <div className='bg-amber-100 px-2.5 py-6 text-center space-y-3 shadow rounded-2xl col-span-2'>
                <img className='w-20 m-auto rounded-full' src={expectedFrnd?.picture} alt="" />

                <h2 className='text-2xl font-bold'>{expectedFrnd?.name}</h2>

                <p className='text-gray-500 text-[13px]'>{expectedFrnd?.days_since_contact}d ago</p>

                <p className='flex justify-center gap-2'>
                    {
                        expectedFrnd?.tags.map((itm, ind) => <span className='badge badge-primary' key={ind}>{itm}</span>)
                    }
                </p>

                <p className='badge badge-success'>{expectedFrnd?.status}</p>
            </div>

            <div className='col-span-3 flex flex-col justify-start items-center'>
                <div className='flex gap-4 text-center'>
                    <div className='bg-gray-200 p-2'>
                        <h2>62</h2>
                        <p>Days Since Contact</p>
                    </div>

                    <div className='bg-gray-200 p-2'>
                        <h2>62</h2>
                        <p>Days Since Contact</p>
                    </div>

                    <div className='bg-gray-200 p-2'>
                        <h2>62</h2>
                        <p>Days Since Contact</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;