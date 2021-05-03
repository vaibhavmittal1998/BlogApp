import {cartIconActionsTypes} from './cart-icon.types'

const initinalState = {
    showCartDropdown: false,
};

const cartIconReducer = (state = initinalState, action) => {
    switch (action.type) {
        case cartIconActionsTypes.TOOGLE_CART_DROPDOWN:
            return {
                ...state,
                showCartDropdown: !state.showCartDropdown
            }
    
        default:
            return state
    }
}

export default cartIconReducer