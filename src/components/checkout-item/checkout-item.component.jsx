import React from 'react';
import { addCartItem, removeCartItem, clearCartItem } from '../../redux/cart/cart.actions';

import { connect } from 'react-redux';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, addItemQuantity, subtractItemQuantity, clearItemQuantity}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => subtractItemQuantity(cartItem)}>&#10094;</div>
                <div className="value">{quantity}</div> 
                <div className="arrow" onClick={() => addItemQuantity(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItemQuantity(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemQuantity: cartItem => dispatch(addCartItem(cartItem)),
    subtractItemQuantity: cartItem => dispatch(removeCartItem(cartItem)),
    clearItemQuantity: cartItem => dispatch(clearCartItem(cartItem)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem);