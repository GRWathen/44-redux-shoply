import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import './AppHeader.css';

function AppHeader() {
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
            <span className="AppHeader-HomeLink">
                <NavLink exact to={"/"} >
                    HOME
                </NavLink >
            </span>
            <span className="AppHeader-CartCount">
                Items in Cart: {count}
            </span>
        </div>
    );
}

export default AppHeader;
