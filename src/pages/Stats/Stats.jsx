import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from '../../Context/FriendsContext';


const Stats = () => {
    const { timeline } = useContext(FriendsContext);
    console.log(timeline);

    let call = 0;
    let text = 0;
    let video = 0;
    
    for (const obj of timeline) {
        if (obj.type=="Call") {
            call++;
            // console.log(obj.type);
        }
        else if (obj.type == "Text") {
            text++;
        }
        else if (obj.type == "Video") {
            video++;
        }
    }
    // console.log(call);
    // console.log(text);
    // console.log(video);

    const data = [
        { name: 'Call', value: call, fill: 'orange' },
        { name: 'Text', value: text, fill: 'blue' },
        { name: 'Video', value: video, fill: 'green' }
    ];


    return (
        <div className='px-30 py-10'>
            <div>
                <h1 className='text-3xl font-bold'>Friendship Analytics</h1>
            </div>

            <div className='mt-4 bg-white shadow pb-10 border border-gray-300'>
                <div>
                    <h3 className='text-[20px] text-green-900 p-5'>By Interaction Type</h3>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                        />

                        <Legend></Legend>
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
            </div>

        </div>
    );
};

export default Stats;

