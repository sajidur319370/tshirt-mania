import React from 'react';
import Myself from '../MySelf/Myself';
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister';
import './Father.css'

const Father = ({ house, ornament }) => {
    return (
        <div>
            <h3>Father</h3>
            <h6>house:{house}</h6>
            <div className='siblings'>
                <Myself house={house} ornament={ornament}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;