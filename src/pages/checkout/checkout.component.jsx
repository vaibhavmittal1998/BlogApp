import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from "../../components/stripe-checkout/stripe-checkout.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selector";

import './checkout.styles.scss';

const CheckOut = ({cartItems, cartTotal}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className="hearder-block">
        <span>
          PRODUCT
        </span>
      </div>
      <div className="hearder-block">
        <span>
          DESCRIPTION
        </span>
      </div>
      <div className="hearder-block">
        <span>
          QUANTITY
        </span>
      </div>
      <div className="hearder-block">
        <span>
          PRICE
        </span>
      </div>
      <div className="hearder-block">
        <span>
          REMOVE
        </span>
      </div>
    </div>
    {
      cartItems.map(cartItem=>
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      )
    }
    <div className="total">
      <span>TOTAL : ${cartTotal}</span>
    </div>
    <StripeCheckoutButton price={cartTotal} />
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckOut) ;
