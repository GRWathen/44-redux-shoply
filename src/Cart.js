import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import './Cart.css';

import { addToCart, removeFromCart } from "./actions.js";
import CartItem from "./CartItem.js";

function Cart() {
    const [refresh, setRefresh] = useState(false);

    const dispatch = useDispatch();

    function addClick(id) {
        dispatch(addToCart(id));
        setRefresh(true);
    }

    function removeClick(id) {
        dispatch(removeFromCart(id));
        setRefresh(true);
    }

    function clearRefresh() {
        setRefresh(false);
    }

    const products = useSelector(store => store.products);
    let cart = useSelector(store => store.cart);
    if (cart === undefined) {
        cart = {};
    }
    const items = Object.keys(cart).filter(function(item) {
        return (cart[item].quantity > 0);
    });

    useEffect(clearRefresh);

    return (
        <div className="Cart">
            <section id="productContainer">
                {
                    items.map(function (item) {
                        return (<CartItem key={item} id={item} product={products[item]} quantity={cart[item].quantity} add={addClick} remove={removeClick} />);
                    })
                }
            </section>
        </div>
    );
}

export default Cart;
