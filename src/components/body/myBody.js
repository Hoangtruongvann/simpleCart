import React from "react";
import Cart from './cart';
import Payment from "./payment";

const MyBody = ({cart, setCart,setIndexSelectedCart, indexSelectedCart,listCart, setListCart}) => {
  return (
    <div className="row">
      <div className="list-item col-9">
        <Cart cart={cart} setCart = {setCart}/>
      </div>
      <div className="total col-3 payment">
      <Payment cart = {cart} setCart = {setCart} listCart = {listCart} setListCart = {setListCart} setIndexSelectedCart = {setIndexSelectedCart} indexSelectedCart = {indexSelectedCart} />
      </div>
    </div>
  );
}
export default MyBody;