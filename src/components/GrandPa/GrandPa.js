import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./GrandPa.css";
export const RingContext = createContext('Daiamond');
const GrandPa = () => {
    const [house, setHouse] = useState(1);
    const handleBuyHouse = () => {
        const houseCount = house + 1;
        setHouse(houseCount)
    }
    const ornament = 'Diamond Ring';
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa-main'>
                <h1>Grandpa</h1>
                <h3>house:{house}</h3>
                <button onClick={() => { handleBuyHouse() }}>Buy A House</button>
                <div className="grandpa">
                    <Father house={house} ornament={ornament}></Father>

                    <Uncle house={house}></Uncle>

                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;
