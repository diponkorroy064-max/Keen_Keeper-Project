import React, { useContext } from 'react';
import useFriends from '../../Hooks/UseFriends';
import { Link, useParams } from 'react-router';
import { HashLoader } from 'react-spinners';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiNotepad } from "react-icons/bi";
import { MdNotificationsPaused } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FriendsContext } from '../../Context/FriendsContext';
import { toast } from 'react-toastify';


const FriendDetails = () => {
    const { id } = useParams();
    // console.log('friendsId', id);

    const { friends, loading } = useFriends();
    // console.log(friends);

    const expectedFrnd = friends?.find((frnd) => frnd.id == id);
    // console.log(expectedFrnd);

    const { timeline, setTimeline } = useContext(FriendsContext);

    const handleTimeline = (type) => {
        const info = { ...expectedFrnd, type };

        setTimeline([...timeline, info]);
        toast.success(`${type} with ${expectedFrnd.name}`);
    }
    // console.log(timeline);


    if (loading) {
        return <h1 className='flex justify-center items-center py-15'><HashLoader /></h1>
    }

    return (
        <div className='container m-auto px-30 py-10 grid grid-cols-1 md:grid-cols-3 gap-5 bg-[#F8FAFC]'>

            <div className='col-span-1 text-center space-y-4'>
                <div className='bg-white px-2.5 py-6 space-y-3 shadow rounded-md'>
                    <img className='w-20 m-auto rounded-full' src={expectedFrnd?.picture} alt="" />

                    <h2 className='text-2xl font-bold'>{expectedFrnd?.name}</h2>

                    <p className='badge badge-success'>{expectedFrnd?.status}</p>

                    <p className='flex justify-center flex-wrap gap-2'>
                        {
                            expectedFrnd?.tags.map((itm, ind) => <span className='badge badge-primary' key={ind}>{itm}</span>)
                        }
                    </p>

                    <p className='text-[12px] italic'>"{expectedFrnd?.bio}"</p>

                    <p className='text-[14px]'>{expectedFrnd.email}</p>
                </div>

                <div className='bg-white rounded-md shadow py-4 flex justify-center items-center gap-2'>
                    <h2><MdNotificationsPaused /></h2>
                    <h2>Snooze 2 weeks</h2>
                </div>

                <div className='bg-white rounded-md shadow py-4 flex justify-center items-center gap-2'>
                    <h2><BiNotepad /></h2>
                    <h2>Archive</h2>
                </div>

                <div className='bg-white rounded-md shadow py-4 flex justify-center items-center gap-2 text-red-500'>
                    <h2><RiDeleteBin5Line /></h2>
                    <h2>Delete</h2>
                </div>
            </div>

            <div className='space-y-5 col-span-2'>
                <div className='flex justify-between gap-5 text-center'>
                    <div className='bg-white p-2 shadow rounded-md w-full'>
                        <h2 className='text-2xl text-[#244d3f] font-bold'>{expectedFrnd.days_since_contact}</h2>
                        <p>Days Since Contact</p>
                    </div>

                    <div className='bg-white p-2 shadow rounded-md w-full'>
                        <h2 className='text-2xl text-[#244d3f] font-bold'>{expectedFrnd.goal}</h2>
                        <p>Goal (Days)</p>
                    </div>

                    <div className='bg-white p-2 shadow rounded-md w-full'>
                        <h2 className='text-2xl text-[#244d3f] font-bold'>{expectedFrnd.
                            next_due_date}</h2>
                        <p>Next Due</p>
                    </div>
                </div>

                <div className='bg-white px-5 shadow rounded-md p-3'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-xl text-[#244d3f] font-semibold'>Relationship Goal</h2>
                        <h2 className='btn'>Edit</h2>
                    </div>
                    <h2>Connect every <span className='font-semibold'>{expectedFrnd.days_since_contact} days</span></h2>
                </div>

                <div className='bg-white shadow rounded-md px-5 py-2'>
                    <h2 className='text-xl text-[#244d3f] font-semibold pb-2'>Quick Check-In</h2>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

                        <button onClick={()=>handleTimeline('Call')} className='btn btn-soft bg-gray-200 rounded-md py-10 px-21 flex flex-col'>
                            <div className='flex justify-center items-center'><img className='w-7' src={callImg} alt="" /></div>
                            <p>Call</p>
                        </button>

                        <button onClick={()=>handleTimeline('Text')} className='btn btn-soft bg-gray-200 rounded-md py-10 px-21 flex flex-col'>
                            <div className='flex justify-center items-center'><img className='w-7' src={textImg} alt="" /></div>
                            <p>Text</p>
                        </button>

                        <button onClick={()=>handleTimeline('Video')} className='btn btn-soft bg-gray-200 rounded-md py-10 px-21 flex flex-col'>
                            <div className='flex justify-center items-center'><img className='w-7' src={videoImg} alt="" /></div>
                            <p>Video</p>
                        </button>

                    </div>
                </div>

                <div className='bg-white shadow rounded-md px-5 py-2 space-y-3'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-xl text-[#244d3f] font-semibold pb-2'>Recent Interactions</h2>
                        <h2 className='bg-gray-200 rounded-md px-3 py-2 flex justify-center items-center gap-2'>
                            <span><FaHistory /></span>
                            <span>Full History</span>
                        </h2>
                    </div>

                    <div className='flex justify-between items-center bg-white shadow py-2 px-2'>
                        <div className='flex justify-start items-center gap-4'>
                            <div><img className='w-7' src={textImg} alt="" /></div>
                            <div>
                                <h3 className='font-semibold'>Text</h3>
                                <p>Asked for career advice</p>
                            </div>
                        </div>
                        <div>jan 26, 2026</div>
                    </div>

                    <div className='flex justify-between items-center bg-white shadow py-2 px-2'>
                        <div className='flex justify-start items-center gap-4'>
                            <div><img className='w-7' src={callImg} alt="" /></div>
                            <div>
                                <h3 className='font-semibold'>Meetup</h3>
                                <p>Industry conference meetup</p>
                            </div>
                        </div>
                        <div>jan 26, 2026</div>
                    </div>

                    <div className='flex justify-between items-center bg-white shadow py-2 px-2'>
                        <div className='flex justify-start items-center gap-4'>
                            <div><img className='w-7' src={videoImg} alt="" /></div>
                            <div>
                                <h3 className='font-semibold'>Video</h3>
                                <p>Asked for career advice</p>
                            </div>
                        </div>
                        <div>jan 26, 2026</div>
                    </div>

                    <div className='flex justify-between items-center bg-white shadow py-2 px-2'>
                        <div className='flex justify-start items-center gap-4'>
                            <div><img className='w-7' src={textImg} alt="" /></div>
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