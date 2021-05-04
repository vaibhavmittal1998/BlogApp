import React from "react";

import {toggleCartDropdown}  from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from 'react-redux';
import { cartItemCount } from "../../redux/cart/cart.utils";
import './cart-icon.styles.scss';


const CartIcon = ({toggleCartDropdown, cartItems}) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartItemCount(cartItems)}</span>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    cartItems: state.cart.cartItems
});
  
const mapDispatchToProps = dispatch => ({
    toggleCartDropdown : () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);