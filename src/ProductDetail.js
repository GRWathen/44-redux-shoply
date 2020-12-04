import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./ProductDetail.css";

import { addToCart, removeFromCart } from "./actions.js";

function ProductDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector(store => store.products[id]);
    if (product === undefined) {
        return (
            <Redirect to="/" />
        );
    }

    function addClick(event) {
        event.preventDefault();
        dispatch(addToCart(id));
    }

    function removeClick(event) {
        event.preventDefault();
        dispatch(removeFromCart(id));
    }

    return (
        <div className="ProductDetail" key={id} data-id={id}>
            <div>{product.description}</div>
            <img className="ProductDetail-Image" src={product.image_url} alt="product" />
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>
                <button className="ProductDetail-Button" onClick={addClick}>Add to Cart</button>
                <button className="ProductDetail-Button" onClick={removeClick}>Remove from Cart</button>
            </div>
        </div>
    );
}

export default ProductDetail;
