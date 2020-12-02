import { useSelector } from "react-redux";

import './CartCount.css';

function CartCount() {
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
        <div className="CartCount">
            Items in Cart: {count}
        </div>
    );
}

export default CartCount;
