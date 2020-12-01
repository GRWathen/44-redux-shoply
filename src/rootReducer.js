import data from "./data.json";
import { POPULATE_PRODUCTS } from "./actionTypes.js";

const INITIAL_STATE = [];

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case POPULATE_PRODUCTS:
            console.log("POPULATE_PRODUCTS");
            return data.products;
        default:
            return state;
    }
}

export default rootReducer;
