import React, { useState, useEffect } from "react";

const Suggest = ({
  cart,
  setCart,
  listCart,
  setListCart,
  indexSelectedCart,
  setIndexSelectedCart,
  searchKey,
}) => {
  const [listItem, setListItem] = useState([{}]);

  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  useEffect(() => {
    fetch("http://localhost:5000/products", {
      mode: "cors",
      credentials: "include",
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => setListItem(data));
  }, []);
  const addItemToCart = async (item) => {
    let itemAdd = {};
    if (!cart.find((cartItem) => cartItem._id === item._id)) {
      itemAdd = { ...item, _quantity: 1, _subTotal: item._cost };
      setCart([...cart, itemAdd]);
    } else {
      let newCart = cart.map((itemInCart) => {
        if (itemInCart._id === item._id) {
          itemInCart._quantity = Number(itemInCart._quantity) + 1;
          return itemInCart;
        }
        return itemInCart;
      });
      await setCart(newCart);
    }
  };
  const filter = (searchKey) => {
    if (searchKey === "") return listItem;
    else {
      return listItem.filter(
        (item) =>
          item._name.includes(searchKey) ||
          item._name.toUpperCase().includes(searchKey.toUpperCase())
      );
    }
  };
  return (
    <div className="list">
      <div className="shop-list">
        <ul>
          {filter(searchKey).map((item) => (
            <div
              className="row suggest-field"
              onClick={() => {
                addItemToCart(item);
              }}
            >
              <div className="col-2">
                <img src={item._img_link} />
              </div>
              <div className="col-8">
                <div className="prd-name">{item._name}</div>
                <div>
                  <div className="row if-product">
                    <div className="prd-inclusion"> {item._inclusion}</div>
                    <div className="col-6 .id-hidden"> {item._id}</div>
                    <div className="row col-6">
                      <div className="col-6 stock">Tồn: {item._stock}</div>
                      <div className="col-6 sold">Bán: {item._sold}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 price">
                {Number(item._cost).toLocaleString("en-US")}
              </div>
            </div>
          ))}
        </ul>
        <div className="add-prd-btn">+ Thêm mới hàng hóa</div>
      </div>
    </div>
  );
};

export default Suggest;
