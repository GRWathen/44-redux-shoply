import { useSelector, useDispatch } from "react-redux";

import './App.css';

import { POPULATE_PRODUCTS } from "./actionTypes.js";
import Product from "./Product.js";

function App() {
  const dispatch = useDispatch();
  dispatch({
    type: POPULATE_PRODUCTS, payload: {
    }
  });

  const products = useSelector(store => store.products);

  return (
    <div className="App">
      <header className="App-header">
        SHOPLY
      </header>
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

export default App;
