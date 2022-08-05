import React, { useState } from "react";

const Footer = () => {
  const [typeSale, setTypeSale] = useState(0);
  return (
    <div className="footer-btn">
      <button
        className={typeSale === 0 ? "button-active" : ""}
        onClick={() => setTypeSale(0)}
      >
        <i className="fa fa-bolt circle-icon-footer" aria-hidden="true"></i> Bán
        nhanh
      </button>
      <button
        className={typeSale === 1 ? "button-active" : ""}
        onClick={() => setTypeSale(1)}
      >
        <i className="fa fa-clock-o circle-icon-footer" aria-hidden="true"></i>{" "}
        Bán thường
      </button>
      <button
        className={typeSale === 2 ? "button-active" : ""}
        onClick={() => setTypeSale(2)}
      >
        <i className="fa fa-truck circle-icon-footer" aria-hidden="true"></i>{" "}
        Giao Hàng
      </button>
    </div>
  );
};

export default Footer;
