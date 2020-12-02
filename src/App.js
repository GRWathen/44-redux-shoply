import { useSelector, useDispatch } from "react-redux";

import './App.css';

import { populateProducts } from "./actions.js";
import Product from "./Product.js";
import CartCount from "./CartCount.js";

function App() {
  const dispatch = useDispatch();
  dispatch(populateProducts());

  const products = useSelector(store => store.products);

  return (
    <div className="App">
      <header className="App-header">
        SHOPLY
      </header>
      <CartCount />
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
