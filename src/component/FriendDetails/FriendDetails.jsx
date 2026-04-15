import React from 'react';
import useFriends from '../../useFriends/UseFriends';
import { useParams } from 'react-router';
import { HashLoader } from 'react-spinners';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'


const FriendDetails = () => {
    const { id } = useParams();
    // console.log('friendsId', id);

    const { friends, loading } = useFriends();
    // console.log(friends);

    const expectedFrnd = friends?.find((frnd) => frnd.id == id);
    console.log(expectedFrnd);

    if (loading) {
        return <h1 className='flex justify-center items-center py-15'><HashLoader /></h1>
    }

    return (
        <div className='container m-auto px-10 my-8 grid grid-cols-3 gap-5'>

            <div className='col-span-1 text-center space-y-4'>
                <div className='bg-amber-100 px-2.5 py-6 space-y-3 shadow rounded-2xl'>
                    <img className='w-20 m-auto rounded-full' src={expectedFrnd?.picture} alt="" />

                    <h2 className='text-2xl font-bold'>{expectedFrnd?.name}</h2>

                    <p className='badge badge-success'>{expectedFrnd?.status}</p>

                    <p className='flex justify-center flex-wrap gap-2'>
                        {
                            expectedFrnd?.tags.map((itm, ind) => <span className='badge badge-primary' key={ind}>{itm}</span>)
                        }
                    </p>

                    <p className='text-[12px] italic'>"{expectedFrnd?.bio}"</p>

                    <p className='font-semibold'>Prefered: Email</p>
                </div>

                <div className='bg-gray-200 py-4'>
                    <h2>Snooze 2 weeks</h2>
                </div>

                <div className='bg-gray-200 py-4'>
                    <h2>Archive</h2>
                </div>

                <div className='bg-gray-200 py-4'>
                    <h2>Delete</h2>
                </div>
            </div>

            <div className='space-y-5 col-span-2'>
                <div className='flex justify-between gap-2 text-center bg-amber-300 p-2'>
                    <div className='bg-white px-2 md:px-12 py-2'>
                        <h2>62</h2>
                        <p>Days Since Contact</p>
                    </div>

                    <div className='bg-white px-2 md:px-12 py-2'>
                        <h2>62</h2>
                        <p>Days Since Contact</p>
                    </div>

                    <div className='bg-white px-2 md:px-12 py-2'>
                        <h2>62</h2>
                        <p>Days Since Contact</p>
                    </div>
                </div>

                <div className='bg-gray-200 px-10'>
                    <div className='flex justify-between items-center'>
                        <h2>Relationship Goal</h2>
                        <h2 className='btn'>Edit</h2>
                    </div>
                    <h2>Connect every <span>30 days</span></h2>
                </div>

                <div className='bg-gray-200 px-10'>
                    <h2>Quick Check-In</h2>

                    <div className='flex gap-5'>
                        <button className='bg-amber-200 px-10'>
                            <img src={callImg} alt="" />
                            <p>Call</p>
                        </button>

                        <button className='bg-amber-200 px-10'>
                            <img src={textImg} alt="" />
                            <p>Text</p>
                        </button>

                        <button className='bg-amber-200 px-10'>
                            <img src={videoImg} alt="" />
                            <p>Video</p>
                        </button>
                    </div>
                </div>

                <div className='bg-gray-200 p-2.5 space-y-3'>
                    <div className='flex justify-between items-center'>
                        <h2>Recent Interactions</h2>
                        <h2 className='bg-gray-50 px-3 py-2'>Full History</h2>
                    </div>

                    <div className='flex justify-between items-center bg-white shadow py-2 px-2'>
                        <div className='flex justify-start items-center'>
                            <div><img src={textImg} alt="" /></div>
                            <div>
                                <h3>Text</h3>
                                <p>Asked for career advice</p>
                            </div>
                        </div>
                        <div>jan 26, 2026</div>
                    </div>

                    <div className='flex justify-between items-center bg-white shadow py-2 px-2'>
                        <div className='flex justify-start items-center'>
                            <div><img src={callImg} alt="" /></div>
                            <div>
                                <h3>Meetup</h3>
                                <p>Industry conference meetup</p>
                            </div>
                        </div>
                        <div>jan 26, 2026</div>
                    </div>

                    <div className='flex justify-between items-center bg-white shadow py-2 px-2'>
                        <div className='flex justify-start items-center'>
                            <div><img src={videoImg} alt="" /></div>
                            <div>
                                <h3>Video</h3>
                                <p>Asked for career advice</p>
                            </div>
                        </div>
                        <div>jan 26, 2026</div>
                    </div>

                    <div className='flex justify-between items-center bg-white shadow py-2 px-2'>
                        <div className='flex justify-start items-center'>
                            <div><img src={textImg} alt="" /></div>
                            <div>
                                <h3>Text</h3>
                                <p>Asked for career advice</p>
                            </div>
                        </div>
                        <div>jan 26, 2026</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;