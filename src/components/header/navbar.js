import React, { useState } from "react";
import Suggest from "./suggest";
//import listItem from '../../data/listItem'

const Navbar = ({
  cart,
  setCart,
  listCart,
  setListCart,
  indexSelectedCart,
  setIndexSelectedCart,
}) => {
  const [isSearch, setSearch] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  let today = new Date();
  const createCart = async () => {
    let newListCart = [...listCart];
    newListCart[indexSelectedCart].listItem = cart;
    await setListCart(newListCart);
    if (listCart.length < 3) {
      await setListCart([...listCart, { index: Number(today), listItem: [] }]);
      setCart([]);
      setIndexSelectedCart(listCart.length);
    } else {
      alert("Vui lòng không tạo quá nhiều đơn hàng cùng lúc!!!");
    }
  };
  const deleteCart = async (cart) => {
    if (listCart.length > 1) {
      await setListCart(listCart.filter((item) => item !== cart));
      setCart(listCart[0].listItem);
      setIndexSelectedCart(0);
    }
  };
  const changeCart = async (index) => {
    let newListCart = [...listCart];
    newListCart[indexSelectedCart].listItem = cart;
    await setListCart(newListCart);
    setCart(listCart[index].listItem);
    setIndexSelectedCart(index);
  };
  // const refreshCart = async (index) => {
  //   setIndexSelectedCart(index);
  //   await setCart([]);
  //   changeCart(index);
  // };

  // Post data

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  // delete cart

  // const deleteCartData = () => {
  //   fetch("https://localhost:5000/carts/" + id, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.text()) // or res.json()
  //     .then((res) => console.log(res));
  // };
  return (
    <div
      onMouseLeave={() => {
        setSearch(false);
      }}
    >
      <div className="navbar row">
        <div className="search-form col-8">
          <input
            autocomplete="off"
            className="form-control search"
            type="text"
            placeholder="Tìm hàng hóa"
            id="search"
            onClick={() => {
              setSearch(true);
            }}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />
          <span>
            {" "}
            <i className="fa fa-qrcode" aria-hidden="true"></i>{" "}
          </span>
          {listCart.map((cart, index) => {
            return (
              <span
                className={`cart-tab ${
                  index === indexSelectedCart ? "active-tab" : ""
                }`}
              >
                <span
                  onClick={() => {
                    changeCart(listCart.indexOf(cart));
                  }}
                >
                  <span class="exchange">
                    <i class="fa fa-exchange" aria-hidden="true"></i>
                  </span>{" "}
                  Đơn hàng {listCart.indexOf(cart) + 1}
                </span>{" "}
                {listCart.length > 1 && (
                  <span
                    class="cancel"
                    onClick={() => {
                      deleteCart(cart);
                      //deleteCartData(cart._id);
                    }}
                  >
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </span>
                )}
              </span>
            );
          })}
          <span
            class="add-cart"
            onClick={() => {
              createCart();
              postData("http://localhost:5000/carts", {});
            }}
          >
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
          </span>
        </div>

        <div className="navbar-icon col-4">
          <ul>
            <li>
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-reply" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-refresh" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-print" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div>
      {isSearch && (
        <Suggest
          cart={cart}
          setCart={setCart}
          listCart={listCart}
          setListCart={setListCart}
          indexSelectedCart={indexSelectedCart}
          setIndexSelectedCart={setIndexSelectedCart}
          searchKey={searchKey}
        />
      )}
    </div>
  );
};
export default Navbar;
