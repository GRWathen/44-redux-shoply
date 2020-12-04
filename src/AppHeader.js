import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import './AppHeader.css';

function AppHeader() {
    console.log("APPHEADER");
    const count = useSelector(function(store) {
        if (store.cart === undefined) {
            return 0;
        }
        const array = Object.keys(store.cart);
        const count = array.reduce(function (accumulator, next) {
            return (accumulator + store.cart[next].quantity);
        }, 0);
        return count;
    });

    return (
        <div className="AppHeader">
            <span className="AppHeader-Home">
                <NavLink exact to={"/"} >
                    Home
                </NavLink >
            </span>
            <span className="AppHeader-Cart">
                Items in Cart: {count}&nbsp;|&nbsp;
                <NavLink exact to={"/cart"} >
                    Cart
                </NavLink >
            </span>
        </div>
    );
}

export default AppHeader;
