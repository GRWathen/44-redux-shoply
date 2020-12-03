import { useSelector } from "react-redux";

import './ProductListing.css';

import Product from "./Product.js";

function ProductListing() {
  const products = useSelector(store => store.products);

  return (
    <div className="ProductListing">
      <section id="productContainer">
        {
          Object.keys(products).map(function (product) {
            return (<Product key={product} id={product} product={products[product]} />);
          })
        }
      </section>
    </div>
  );
}

export default ProductListing;
