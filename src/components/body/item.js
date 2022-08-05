import React from "react";

const Item = ({ item, cart, setCart, index }) => {
  const removeItemFromCart = (item) => {
    setCart(cart.filter((CartItem) => CartItem._id !== item._id));
  };
  const changeQuantity = async (itemEdit, e) => {
    if (e.target.value !== "" && Number(e.target.value) >= 0) {
      let newCart = await cart.map((item) => {
        if (item._id === itemEdit._id) {
          item._quantity = Number(e.target.value);
          item._subTotal = item._quantity * item._cost;
          return item;
        }
        return item;
      });
      setCart(newCart);
    } else {
      let newCart = await cart.map((item) => {
        if (item._id === itemEdit._id) {
          item._quantity = 0;
          item._subTotal = item._quantity * item._cost;
          return item;
        }
        return item;
      });
      setCart(newCart);
    }
  };
  const changeCost = async (itemEdit, e) => {
    let newCart = await cart.map((item) => {
      if (item._id === itemEdit._id) {
        item._cost = Number(e.target.value);
        item._subTotal = item._quantity * item._cost;
        return item;
      }
      return item;
    });
    setCart(newCart);
  };
  return (
    <div>
      <div className="row item">
        <div className="row col-1">
          <div className="col-6">{index}</div>
          <div className="col-6" onClick={() => removeItemFromCart(item)}>
            <i
              className="fa fa-trash remove-item-from-cart"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="col-2 id-hidden">{item._id}</div>
        <div className="col-4">
          <div className="row">
            <div className="col-10">{item._name}</div>
            <div className="col-2">
              {item._unit && <p className="prd-unit">{item._unit}</p>}
            </div>
          </div>
        </div>
        <div className="col-1">
          <input
            type="number"
            value={item._quantity}
            className="form-control"
            onChange={(e) => changeQuantity(item, e)}
          />
        </div>
        <div className="col-2">
          <input
            type="number"
            value={item._cost}
            className="form-control"
            onChange={(e) => changeCost(item, e)}
          />
        </div>
        <div className="col-2">
          {Number(item._subTotal).toLocaleString("en-US")}
        </div>
        {item._parcel && (
          <div className="parcel-container">
            <span className="parcel">
              {item._parcel} <span className="delete-parcel">x</span>
            </span>{" "}
            <span className="add-parcel">Thêm lô</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Item;
