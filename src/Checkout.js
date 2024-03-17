import React from 'react'
import './styles/pages/checkout/checkout-header.css';
import './styles/pages/checkout/checkout.css';
import Axios from 'axios';
import { CheckoutHeader } from './Checkout/CheckoutHeader';
import { CheckoutContent } from './Checkout/CheckoutContent';
import { useSelector } from 'react-redux';


export const Checkout = () => {
  console.log('Checkout');
  // const token = useSelector(state=>{return state.token});
  // const obj = {
  //   headers: { Authorization: `Bearer ${token}` }
  // };
  // console.log(token);
  // Axios.get("http://localhost:9000/api/toyandbooklibapp/user",obj)
  // .then((response) => {console.log(response)})
  return (
    <>
        <CheckoutHeader/>
        <CheckoutContent/>
    </>
  );
}

