import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const cartItems = props.cart;
    const { handleRemoveFromCart } = props;

    let command;

    if (cartItems.length === 0) {
        command = <h6>Please add some item</h6>;
    } else if (cartItems.length === 1) {
        command = <h6>Please add more</h6>;
    } else {
        command = <h6>Thanks for adding</h6>;
    }

    return (
        <div>
            {props.children}
            <h4>Selected item:{cartItems.length}</h4>
            {
                command
            }
            {cartItems.map((item) => (
                <h5 key={item._id}>
                    {item.name}
                    <button
                        onClick={() => {
                            handleRemoveFromCart(item);
                        }}
                    >
                        X
                    </button>{" "}
                </h5>
            ))}
            {
                cartItems.length >= 4 ? <button>Remove all</button> : <h6>Keep adding</h6>
            }
            {
                cartItems.length === 3 && <p>Three product</p>
            }
        </div>
    );
};

export default Cart;
