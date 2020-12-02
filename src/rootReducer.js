import data from "./data.json";
import { POPULATE_PRODUCTS } from "./actionTypes.js";
import { ADD_TO_CART } from "./actionTypes.js";
import { REMOVE_FROM_CART } from "./actionTypes.js";

const INITIAL_STATE = {};

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case POPULATE_PRODUCTS: {
            console.log("POPULATE_PRODUCTS");
            return { ...state, "products": data.products };
        }
        case ADD_TO_CART: {
            const cart = state.cart ? state.cart : {};
            const item = cart[action.payload.id] ? cart[action.payload.id] : { "quantity": 0 };
            item.quantity += 1;
            cart[action.payload.id] = item;
            return { ...state, "cart": cart };
        }
        case REMOVE_FROM_CART: {
            const cart = state.cart ? state.cart : {};
            const item = cart[action.payload.id] ? cart[action.payload.id] : { "quantity": 0 };
            if (item.quantity > 0) {
                item.quantity -= 1;
            }
            cart[action.payload.id] = item;
            return { ...state, "cart": cart };
        }
        default: {
            return state;
        }
    }
}

export default rootReducer;
