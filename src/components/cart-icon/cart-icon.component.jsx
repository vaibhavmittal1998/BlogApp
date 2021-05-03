import React from "react";

import {toggleCartDropdown}  from '../../redux/cartIcon/cart-icon.actions';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from 'react-redux';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartDropdown}) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
});
  
const mapDispatchToProps = dispatch => ({
    toggleCartDropdown : () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);