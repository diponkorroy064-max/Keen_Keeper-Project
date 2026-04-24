import React, { useContext } from 'react';
import { FriendsContext } from '../../Context/FriendsContext';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'


const Timeline = () => {

    const { timeline } = useContext(FriendsContext);
    // console.log(call);

    return (
        <div className='bg-[#F8FAFC] py-10 px-30 space-y-6'>
            <h2 className='text-3xl font-bold text-[#244d3f]'>Timeline</h2>

            <div>
                <input className='border p-2 border-gray-300 rounded-md' type="search" value="Filter Timeline" />
            </div>

            <div className='space-y-4'>
                <div className='space-y-4'>
                    {
                        timeline.map((item, idx) => <div key={idx} className='bg-white py-2.5 px-6 border border-gray-300 rounded-md flex justify-start items-center gap-5'>
                            <div><img className='w-6' src={item.type=='Text'? textImg : item.type=='Call'? callImg : videoImg} alt="" /></div>

                            <div>
                                <h3><span className='font-semibold text-2xl'>{item.type}</span> with {item.name}</h3>
                                <h3>{item.next_due_date}</h3>
                            </div>
                        </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Timeline;

