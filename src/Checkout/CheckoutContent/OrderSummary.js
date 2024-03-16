import { useCart, deliveryOptions, removeFromCart, saveAddCartQuantity, updateDeliveryOption } from '../../data/Cart.js';
import { products } from '../../data/products.js';
// import { renderPaymentSummary } from './paymentSummary.js';
import dayjs from 'dayjs';
import OrderComponent from './OrderSummary/OrderComponent.js';
import { useContext } from 'react';
import { CartContext } from '../../App.js';

export const OrderSummary =()=>{
    const {cart}=useContext(CartContext);
    console.log("ordersummary");
    console.log(cart);
    const OrderComponents = cart.map((item) => {
        let matchingProduct = products.find((product) => product.id === item.id);
    
        const deliveryOptionId = item.deliveryOptionId;
        const deliveryOption = deliveryOptions.find((option) => option.id === deliveryOptionId);
    
        let dateString = '';
        if (deliveryOption) {
          const today = dayjs();
          const deliveryDate = today.add(deliveryOption.deliveryTime, 'days');
          dateString = deliveryDate.format('dddd,MMMM d') || 'Tuesday, June 21';
        }
    
        return (
          <OrderComponent
            key={item.id}
            dateString={dateString}
            matchingProduct={matchingProduct}
            item={item}
            // onDelete={() => handleDelete(item.id)}
          />
        );
      });

      return (
        <>
            {OrderComponents}
        </>
    );

    // document.querySelectorAll('.js-delete-quantity-link')
    //     .forEach((link)=>{
    //         link.addEventListener('click', (event)=>{
    //             const id=event.target.dataset.productId;
    //             removeFromCart(id);
    //             document.querySelector(`.js-cart-item-container-${id}`).remove();
    //             saveAddCartQuantity();
    //         });
    //     });

   
    // document.querySelectorAll('.js-delivery-option')
    //   .forEach((div)=>{
    //     div.addEventListener('click', ()=>{
    //       const {productId,deliveryOptionId}=div.dataset;
    //       updateDeliveryOption(productId,deliveryOptionId);
    //       renderOrders();
    //       renderPaymentSummary();
    //     });
    //   });
}