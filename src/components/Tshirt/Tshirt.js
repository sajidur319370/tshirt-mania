import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {

    const { picture, name, price } = props.tShirt;
    const { handleAddToCart } = props;
    return (
        <div className='tshirt-item'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price:{price}</p>
            <button onClick={() => { handleAddToCart(props.tShirt) }}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;