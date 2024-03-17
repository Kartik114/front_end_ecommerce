import React from 'react'
import './styles/pages/checkout/checkout-header.css';
import './styles/pages/checkout/checkout.css';

import { CheckoutHeader } from './Checkout/CheckoutHeader';
import { CheckoutContent } from './Checkout/CheckoutContent';


export const Checkout = () => {
  console.log('Checkout');
  return (
    <>
        <CheckoutHeader/>
        <CheckoutContent/>
    </>
  );
}

