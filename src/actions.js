import { POPULATE_PRODUCTS } from "./actionTypes.js";
import { ADD_TO_CART } from "./actionTypes.js";
import { REMOVE_FROM_CART } from "./actionTypes.js";

export function populateProducts() {
    return {
        type: POPULATE_PRODUCTS, payload: {
        }
    };
}

export function addToCart(id) {
    return {
        type: ADD_TO_CART, payload: {
            "id": id
        }
    };
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART, payload: {
            "id": id
        }
    };
}
