import React, { useState } from 'react';
import { Typography, Button, Divider } from '@mui/material';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'; 
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PaymentForm: React.FC = ({ checkoutToken, backStep, onCaptureCheckout, nextStep }) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      alert(error.message);
      return;
    } else {
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'Primary', street: shippingData.address1, town_city: shippingData.city, postal_zip: shippingData.zip, country: shippingData.country },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: { 
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id },

          }
      }
      onCaptureCheckout(checkoutToken.id, orderData);

      nextStep();
    }
  }
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, element, stripe)}>
              <CardElement />
              <br /><br />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='outlined' onClick={backStep}>Back</Button>
                <Button variant='contained' type='submit' disabled={!stripe} color='primary'>
                  Pay {checkoutToken.subtotal.formatted_with_symbol}
                </Button>
                Continue
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  )
}

export default PaymentForm;