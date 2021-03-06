import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => (<CartItem key={item.id} item={item} />))
            }
        </div>
        <CustomButton onClick = {() => {
            history.push('/checkout');
            dispatch(toggleCartDropdown())
        }}> GO TO CHECKOUT </CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));