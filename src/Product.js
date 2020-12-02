import { useSelector, useDispatch } from "react-redux";

import "./Product.css";

import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes.js";

function Product({ id, product }) {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);

    function addClick(event) {
        event.preventDefault();
        const id = event.target.parentElement.parentElement.getAttribute("data-id");
        dispatch({
            type: ADD_TO_CART, payload: {
                "id": id
            }
        });
    }

    function removeClick(event) {
        event.preventDefault();
        const id = event.target.parentElement.parentElement.getAttribute("data-id");
        dispatch({
            type: REMOVE_FROM_CART, payload: {
                "id": id
            }
        });
    }

    return (
        <div className="Product" key={id} data-id={id}>
            <div>{product.description}</div>
            <img className="Product-Image" src={product.image_url} alt="product" />
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>
                <button className="Product-Button" onClick={addClick}>Add to Cart</button>
                <button className="Product-Button" onClick={removeClick}>Remove from Cart</button>
            </div>
        </div>
    );
}

export default Product;
