import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import './App.css';

import { populateProducts } from "./actions.js";
import AppHeader from "./AppHeader.js";
import ProductListing from "./ProductListing.js";
import ProductDetail from "./ProductDetail.js";

function App() {
  const dispatch = useDispatch();
  dispatch(populateProducts());

  return (
    <div className="App">
      <header className="App-header">
        SHOPLY
      </header>
      <AppHeader />
      <Switch>
        <Route exact path="/products/:id"><ProductDetail /></Route>
        <Route exact path="/"><ProductListing /></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
