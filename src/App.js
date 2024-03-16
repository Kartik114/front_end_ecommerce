import './App.css';
import './styles/shared/general.css';

import { Amazon } from './Amazon';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { Checkout } from './Checkout';
import { Orders } from './Orders';

import { useState,useEffect,createContext } from'react';
import { useCart} from './data/Cart';
import { useOrderCart } from './data/Orders';
// import { Register } from './Register';
// import { Login } from './Login';

//import { store } from './store';
import { useUsers } from './data/Users';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './store';
export const CartContext = createContext();
export const UserContext = createContext();

function App() {

  const { users, initializeUsers, addToUsers, saveToUsers, validateUser,logout} = useUsers();
  const dispatch = useDispatch();
  useEffect(()=>{
    initializeUsers();
  },[]);
  const userId = useSelector(state=>{return state.userId});

  const [isLoggedIn, setLoggedIn]=useState(false);
  useEffect(()=>{
  
    setLoggedIn(!!userId);
  },[userId])

 const { cart,cartQuantity, initializeCart,initializeCartQuantity, addToCart, removeFromCart, saveToCart, saveAddCartQuantity, updateDeliveryOption, clearCart} = useCart([],userId);
  const {orderCart, orderQuantity, initializeOrderCart, initializeOrderQuantity, addToOrderCart, saveToOrderCart, saveAddOrderQuantity} =useOrderCart([], cart, clearCart, userId);

  useEffect(()=>{
    initializeCart();
    initializeCartQuantity();
    initializeOrderCart();
    initializeOrderQuantity();
  },[userId]);

  useEffect(()=>{
    if(userId)
      saveAddCartQuantity();
  },[cart]);

  useEffect(()=>{
    if(userId)
      saveAddOrderQuantity();
  },[orderCart]);

  return (
    <UserContext.Provider value={{ users, addToUsers, saveToUsers, validateUser, isLoggedIn}}>
        {isLoggedIn ? (
          <CartContext.Provider value={{ cart, cartQuantity, initializeCart, initializeCartQuantity, addToCart, removeFromCart, saveToCart, saveAddCartQuantity, updateDeliveryOption, orderCart, orderQuantity, initializeOrderCart, initializeOrderQuantity, addToOrderCart, saveToOrderCart, saveAddOrderQuantity }}>
            <div className="App">
              <Router>
                <Routes>
                  <Route path="/" element={<Amazon/>} />
                  <Route path='/checkout' element={<Checkout/>} />
                  <Route path="/orders" element= {<Orders/>} />
                </Routes>
              </Router>
            </div>
          </CartContext.Provider>
        ) : (
          <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<Amazon/>} />
              </Routes>
            </Router>
          </div>
        )}
    </UserContext.Provider>

  );
}

export default App;

 {/* <CartContext.Provider value={{cart,cartQuantity, initializeCart,initializeCartQuantity, addToCart, removeFromCart, saveToCart, saveAddCartQuantity, updateDeliveryOption,  orderCart, orderQuantity, initializeOrderCart, initializeOrderQuantity, addToOrderCart, saveToOrderCart, saveAddOrderQuantity}}> 
    
     <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Amazon/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path="/orders" element= {<Orders/>} />
             <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} /> 
        </Routes>

      </Router>
    </div>

    </CartContext.Provider> 
    </UserContext.Provider> 
        </Provider> */}

  // carts=[
  //         {
  //           "userId": "051c87e6-5fa8-495f-a70b-c4ea8a284602",
  //           "items": [
  //             {
  //               "id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  //               "quantity": 1,
  //               "deliveryOptionId": 1
  //             },
  //             {
  //               "id": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  //               "quantity": 2,
  //               "deliveryOptionId": 1
  //             }
  //           ]
  //         }
  //       ]