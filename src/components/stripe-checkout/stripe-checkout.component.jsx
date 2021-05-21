import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51ItSB5SBWnqkVioveZVxQjUyNx6eJv8GBTnh04jyHmTSHRUIs6x6GmaW5iYXin5zzB3KaVEUXwHddsyX0ZURFXgW00aRFOac1w';
    const tokenForStripe = token => {
        console.log(token);
        alert('payment successfully');
    } 
    
    return (
        <StripeCheckout 
            label="Pay Now"
            panelLabel="Pay Now"
            billingAddress
            shippingAddress
            name="Unicifer Pvt ltd"
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token= {tokenForStripe}
            stripeKey={publishKey}
        />
    )
}

export default StripeCheckoutButton;