import { cartActionsTypes } from "./cart.types"

export const toggleCartDropdown = () => ({
    type: cartActionsTypes.TOOGLE_CART_DROPDOWN
})

export const addCartItem = item => ({
    type: cartActionsTypes.ADD_CART_ITEM,
    payload: item
})