import { useDispatch } from "react-redux";

import "./Product.css";

function Product({ id, product }) {
    const dispatch = useDispatch();

    function addClick(event) {
        event.preventDefault();
        console.log("addClick");
        console.log(event.target.parentElement.parentElement);
        /*/
        const id = event.target.parentElement.getAttribute("data-id");
        dispatch({
            type: "COMPLETE", payload: {
                "id": id
            }
        });
        //*/
    }

    function removeClick(event) {
        event.preventDefault();
        console.log("removeClick");
        console.log(event.target.parentElement.parentElement);
        /*/
        const id = event.target.parentElement.getAttribute("data-id");
        dispatch({
            type: "DELETE", payload: {
                "id": id
            }
        });
        //*/
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
