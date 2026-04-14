import React from 'react';
import { useEffect, useState } from 'react';

const useFriends = () => {

    const [friends, setFriends] = useState();
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/json_data/friends.json");
            const frnData = await res.json();
            const data = frnData.friends;
            // console.log(data);

            setTimeout(() => {
                setFriends(data);
                // setLoading(false);
            }, 2000)
        };
        fetchData();
    }, []);

    // return { apps, loading };
    return { friends };
};

export default useFriends;


