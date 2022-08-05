import React from "react";

const SaleModal = ({ sale, setSale, saleType, setSaleType, enableSetSale }) => {
  return (
    <div
      className="toggle-sale"
      onMouseLeave={() => {
        enableSetSale(0);
      }}
    >
      <div className="row">
        <div className="col-4 toggle-hr">Giảm giá</div>
        <div className="col-4">
          <input
            type="number"
            className="sale-input"
            onChange={(e) => setSale(e.target.value)}
          ></input>
        </div>
        <div className="col-2">
          <p
            className={
              saleType === 0 ? "sale-unit-1 sale-type-active" : "sale-unit-1"
            }
            onClick={() => setSaleType(0)}
          >
            VND
          </p>
        </div>
        <div className="col-2">
          <p
            className={
              saleType === 1 ? "sale-unit-2 sale-type-active" : "sale-unit-2"
            }
            onClick={() => setSaleType(1)}
          >
            %
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 toggle-hr">Nhóm khách</div>
      </div>
    </div>
  );
};
export default SaleModal;
