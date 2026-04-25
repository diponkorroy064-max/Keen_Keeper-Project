import React, { useContext } from 'react';
import { FriendsContext } from '../../Context/FriendsContext';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
import { IoIosArrowDown } from "react-icons/io";


const Timeline = () => {

    const { timeline, filter, setFilter } = useContext(FriendsContext);
    // console.log(timeline);

    // setFilter([...timeline]);

    const clickHandler = (state) => {
        // console.log(state);
        if (state=='all') {
            setFilter([...timeline]);
        }
        else if (state == 'call') {
            let callArr = [];
            for (const obj of timeline) {
                if (obj.type=='Call') {
                    callArr.push(obj);
                }
            }
            setFilter([...callArr]);
            console.log(filter);
        }
        else if (state == 'text') {
            let textArr = [];
            for (const obj of timeline) {
                if (obj.type == 'Text') {
                    textArr.push(obj);
                }
            }
            setFilter([...textArr]);
            console.log(filter);
        }
        else if (state == 'video') {
            let videoArr = [];
            for (const obj of timeline) {
                if (obj.type == 'Video') {
                    videoArr.push(obj)
                }
            }
            setFilter([...videoArr]);
            console.log(filter);
        }
    }



    return (
        <div className='bg-[#F8FAFC] py-10 px-30 space-y-6'>
            <h2 className='text-3xl font-bold text-[#244d3f]'>Timeline</h2>

            <div>
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1">Filter Timeline <IoIosArrowDown /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>clickHandler('all')} className='btn'>All</li>
                        <li onClick={()=>clickHandler('call')} className='btn'>Call</li>
                        <li onClick={()=>clickHandler('text')} className='btn'>Text</li>
                        <li onClick={()=>clickHandler('video')} className='btn'>Video</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-4">
                <div className='space-y-4'>
                    {
                        timeline.length == 0 ? <div className='bg-white text-center px-5 py-20 border border-gray-300 rounded-2xl m-auto'>
                            <h4 className='text-2xl font-semibold'>No timeline events yet! Go to a friend's profile to log a check-in.</h4>
                        </div> : filter.map((item, idx) => <div key={idx} className='bg-white py-2.5 px-6 border border-gray-300 rounded-md flex justify-start items-center gap-5'>
                            <div><img className='w-6' src={item.type == 'Text' ? textImg : item.type == 'Call' ? callImg : videoImg} alt="" /></div>

                            <div>
                                <h3><span className='font-semibold text-2xl'>{item.type}</span> with {item.name}</h3>
                                <h3>{item.next_due_date}</h3>
                            </div>
                        </div>
                        )
                    }
            </div>

        </div>
        </div >
    );
};

export default Timeline;

