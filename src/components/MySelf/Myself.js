import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Myself = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h5>Me</h5>
            <h6>house:{house}</h6>
            <button onClick={() => { setHouse(house + 1) }}>Add ring</button>
        </div>
    );
};

export default Myself;