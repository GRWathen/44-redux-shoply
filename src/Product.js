import { NavLink } from "react-router-dom";

import "./Product.css";

function Product({ id, product }) {
    return (
        <NavLink exact to={`/products/${id}`} >
            <div className="Product" key={id} data-id={id}>
                <span className="Product-Name">{product.name}</span>:&nbsp;<span>{product.price}</span>
            </div>
        </NavLink >
   );
}

export default Product;
