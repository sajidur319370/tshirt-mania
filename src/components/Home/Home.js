import React, { useState } from "react";
import Cart from "../Cart/Cart";
import useTshirts from "../hooks/useTshirts";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
    const [tShirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(item => item._id == selectedItem._id)
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        } else {
            alert('This item is already added!');
        }


    };
    const handleRemoveFromCart = (item) => {
        const rest = cart.filter(tShirt => item._id !== tShirt._id)
        setCart(rest);

    }
    return (
        <div className="home-container">
            <div className="tshirt-container">
                {tShirts.map((tShirt) => (
                    <Tshirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}> <h2>This is cart</h2></Cart>
            </div>
        </div>
    );
};

export default Home;
