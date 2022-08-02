import React from "react";

const Item = ({ item,cart, setCart, index}) => {
    const removeItemFromCart = (item) => {
        setCart(cart.filter(CartItem => CartItem.id !== item.id));
      };
      const changeQuantity = async (itemEdit, e) => {
        let newCart = await cart.map((item) => {
          if (item.id === itemEdit.id) {
            item.quantity = e.target.value;
            item.subTotal = item.quantity * item.cost;
            return item;
          }
          return item;
        })
        setCart(newCart);
      };
      const changeCost = async (itemEdit, e) => {
    
        let newCart = await cart.map((item) => {
          if (item.id === itemEdit.id) {
            item.cost = e.target.value;
            item.subTotal = item.quantity * item.cost;
            return item;
          }
          return item;
        })
        setCart(newCart);
      };
    return (
        <div className="row item">
            <div className="col-1">{index}</div>
            <div className="col-1" onClick = {()=>removeItemFromCart(item)}><i className="fa fa-trash remove-item-from-cart" aria-hidden="true"></i></div>
            <div className="col-2">{item.id}</div>
            <div className="col-3">{item.name}</div>
            <div className="col-1"> <input type="number" value={item.quantity} className="form-control" onChange={(e)=>changeQuantity(item, e)} /></div>
            <div className="col-2"><input type="number" value={item.cost} className="form-control"  onChange={e=>changeCost(item,e)}/></div>
            <div className="col-2">{item.subTotal}</div>
        </div>
    )
}
export default Item;