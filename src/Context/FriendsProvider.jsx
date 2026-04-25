import React, { useState } from 'react';
import { FriendsContext } from './FriendsContext';

const FriendsProvider = ({children}) => {
    const [timeline, setTimeline] = useState([]);
    const [filter, setFilter] = useState();
    

    const data = {
        timeline,
        setTimeline,
        filter,
        setFilter
    };

    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;
