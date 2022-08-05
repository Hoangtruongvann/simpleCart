import React from "react";
import Item from "./item";

const Cart = ({ cart, setCart }) => {
  return (
    <div className="cart-main">
      {cart.map((item) => {
        return (
          <Item
            item={item}
            cart={cart}
            setCart={setCart}
            index={cart.indexOf(item) + 1}
          />
        );
      })}
      <div className="footer">
        <input
          type="text"
          placeholder="Ghi chú đơn hàng"
          id="note"
          className="form-control"
        />
      </div>
    </div>
  );
};
export default Cart;
