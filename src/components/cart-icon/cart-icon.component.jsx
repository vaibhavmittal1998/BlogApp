import React from "react";

import {toggleCartDropdown}  from '../../redux/cart/cart.actions';
import {selectCartItemCount, selectCartItems}  from '../../redux/cart/cart.selector';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from 'react-redux';
import { cartItemCount } from "../../redux/cart/cart.utils";
import './cart-icon.styles.scss';


const CartIcon = ({toggleCartDropdown, cartItems, cartItemCount}) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartItemCount}</span>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    cartItems: selectCartItems(state),
    cartItemCount: selectCartItemCount(state)
});
  
const mapDispatchToProps = dispatch => ({
    toggleCartDropdown : () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);