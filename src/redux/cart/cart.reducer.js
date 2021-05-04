import {cartActionsTypes} from './cart.types';
import { addItemToCart } from "./cart.utils";

const initinalState = {
    showCartDropdown: false,
    cartItems: [],
};

const cartReducer = (state = initinalState, action) => {
    switch (action.type) {
        case cartActionsTypes.TOOGLE_CART_DROPDOWN:
            return {
                ...state,
                showCartDropdown: !state.showCartDropdown
            }

        case cartActionsTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case cartActionsTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
    
        default:
            return state
    }
}

export default cartReducer;