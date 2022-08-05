import React, { useState, useEffect } from "react";
import Cart from "./cart";
import Payment from "./payment";
import SaleModal from "./saleModal";

const MyBody = ({
  cart,
  setCart,
  setIndexSelectedCart,
  indexSelectedCart,
  listCart,
  setListCart,
}) => {
  const [sale, setSale] = useState(0);
  const [saleType, setSaleType] = useState(1);
  const [isSetSale, enableSetSale] = useState(0);
  const [listCus, setListCus] = useState([]);
  const handleClose = () => {
    alert("Show");
  };
  return (
    <div className="row mybody" id="dpl">
      <div className="list-item col-9">
        <Cart cart={cart} setCart={setCart} />
      </div>
      <div className="total col-3 payment">
        <Payment
          cart={cart}
          setCart={setCart}
          listCart={listCart}
          setListCart={setListCart}
          setIndexSelectedCart={setIndexSelectedCart}
          indexSelectedCart={indexSelectedCart}
          sale={sale}
          setSale={setSale}
          saleType={saleType}
          setSaleType={setSaleType}
          enableSetSale={enableSetSale}
        />
      </div>
      {isSetSale === 1 && (
        <SaleModal
          sale={sale}
          setSale={setSale}
          saleType={saleType}
          setSaleType={setSaleType}
          enableSetSale={enableSetSale}
        />
      )}
    </div>
  );
};
export default MyBody;
