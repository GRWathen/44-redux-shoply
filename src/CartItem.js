import { NavLink } from "react-router-dom";

import "./CartItem.css";

function CartItem({ id, product, quantity, add, remove }) {
    function addHandler() {
        add(id);
    }

    function removeHandler() {
        remove(id);
    }

    return (
        <div className="CartItem" key={id} data-id={id}>
            <NavLink exact to={`/products/${id}`} >
                {quantity}&nbsp;
                <span className="CartItem-Name">
                    {product.name}{(quantity > 1) ? "s" : ""}
                </span>
                :&nbsp;
                <span>
                    {product.price}
                </span>
            </NavLink >
            &nbsp;
            <button className="CartItem-Button" type="button" onClick={addHandler}> + </button>
            <button className="CartItem-Button" onClick={removeHandler}> - </button>
        </div>
    );
}

export default CartItem;
