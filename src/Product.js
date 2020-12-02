import { useDispatch } from "react-redux";

import "./Product.css";

import { addToCart, removeFromCart } from "./actions.js";

function Product({ id, product }) {
    const dispatch = useDispatch();

    function addClick(event) {
        event.preventDefault();
        const id = event.target.parentElement.parentElement.getAttribute("data-id");
        dispatch(addToCart(id));
    }

    function removeClick(event) {
        event.preventDefault();
        const id = event.target.parentElement.parentElement.getAttribute("data-id");
        dispatch(removeFromCart(id));
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
