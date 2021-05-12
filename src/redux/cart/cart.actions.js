import { cartActionsTypes } from "./cart.types"

export const toggleCartDropdown = () => ({
    type: cartActionsTypes.TOOGLE_CART_DROPDOWN
})

export const addCartItem = item => ({
    type: cartActionsTypes.ADD_CART_ITEM,
    payload: item
})

export const removeCartItem = item => ({
    type: cartActionsTypes.REMOVE_CART_ITEM,
    payload: item
})

export const clearCartItem = item => ({
    type: cartActionsTypes.CLEAR_CART_ITEM,
    payload: item
})