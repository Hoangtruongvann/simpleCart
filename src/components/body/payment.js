import React, { useState, useEffect } from "react";
import CustomerForm from "./createCustomer";
import Prescription from "./prescription";
import CustomerHistory from "./customerHistory";

const Payment = ({
  cart,
  setCart,
  indexSelectedCart,
  setIndexSelectedCart,
  listCart,
  setListCart,
  sale,
  setSale,
  saleType,
  enableSetSale,
}) => {
  let today = new Date();
  const [date, setdate] = useState(
    today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear() +
      "      " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds()
  );
  const [totalPay, setTotalPay] = useState(0);
  const itemAmount = cart.length;
  const total = cart.reduce(
    (total, item) => total + item._cost * item._quantity,
    0
  );

  const [listEmp, setlistEmp] = useState([]);
  const [listCus, setlistCus] = useState([]);

  const [crEmpIndex, setCrEmpIndex] = useState(-1);
  const [searchNameEmp, setSearchEmpName] = useState("");
  const [isSearchEmp, setSearchEmp] = useState(0);

  const [crCusIndex, setCrCusIndex] = useState(-1);
  const [searchNameCus, setSearchCusName] = useState("");
  const [isSearchCus, setSearchCus] = useState(0);

  const [addNewCusStatus, setAddNewCusStatus] = useState(0);
  const [PR, setPR] = useState(0);
  const [historyActive, setHistoryActive] = useState(0);

  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  useEffect(() => {
    fetch("http://localhost:5000/emps", {
      mode: "cors",
      credentials: "include",
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then(async (data) => {
        await setlistEmp(data);
      });
    fetch("http://localhost:5000/customers", {
      mode: "cors",
      credentials: "include",
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then(async (data) => {
        await setlistCus(data);
      });
  }, []);
  const filterName = (list, key) => {
    if (key === "") return list;
    else {
      return list.filter((item) =>
        item._name.toUpperCase().includes(key.toUpperCase())
      );
    }
  };
  const checkout = () => {
    if (listCart.length > 1) {
      console.log(listCart);
      setListCart(
        listCart.filter((item) => item !== listCart[indexSelectedCart])
      );
      if (indexSelectedCart === 0) {
        setCart(listCart[1].listItem);
        setIndexSelectedCart(0);
      } else {
        setCart(listCart[indexSelectedCart - 1].listItem);
        setIndexSelectedCart(indexSelectedCart - 1);
      }
    } else {
      setCart([]);
      setSale(0);
      setTotalPay(0);
      setListCart([{ index: listCart.length + 1, listItem: [] }]);
      alert("?????t h??ng th??nh c??ng!!!");
    }
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-7 ifo">
          <div>
            <div className="dropdown customer-mn">
              <div
                className="cr-cus-name cr-emp-name"
                onClick={() => setSearchEmp(1)}
              >
                {crEmpIndex !== -1
                  ? listEmp[crEmpIndex]._name
                  : "T??m nh??n vi??n b??n"}
              </div>
              <p className="change-emp" onClick={() => setSearchEmp(1)}>
                &#8646;
              </p>
            </div>
            {isSearchEmp === 1 && (
              <div className="list-emp" onMouseLeave={() => setSearchEmp(0)}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="T??m ng?????i b??n"
                    onChange={(e) => setSearchEmpName(e.target.value)}
                  />
                </div>
                <div className="emps">
                  {filterName(listEmp, searchNameEmp).map((item) => (
                    <div
                      onClick={() => {
                        setCrEmpIndex(listEmp.indexOf(item));
                        setSearchEmp(0);
                        setSearchEmpName("");
                      }}
                    >
                      {item._name} - {item._role}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="filter-customer-form">
            {crCusIndex === -1 && (
              <div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="T??m kh??ch h??ng"
                  onClick={() => {
                    setSearchCus(1);
                  }}
                  onChange={(e) => {
                    setSearchCusName(e.target.value);
                  }}
                />
                <p
                  className="add-customer"
                  onClick={() => {
                    setAddNewCusStatus(1);
                  }}
                >
                  +
                </p>
              </div>
            )}
            {crCusIndex !== -1 && (
              <div>
                <div
                  className="cr-cus-name"
                  onClick={() => {
                    setHistoryActive(1);
                  }}
                >
                  {listCus[crCusIndex]._name}
                </div>
                <p
                  className="cancel-customer"
                  onClick={() => setCrCusIndex(-1)}
                >
                  x
                </p>
              </div>
            )}
          </div>
          {isSearchCus === 1 && (
            <div>
              <div className="list-cus" onMouseLeave={() => setSearchCus(0)}>
                {filterName(listCus, searchNameCus).map((item) => (
                  <div
                    onClick={() => {
                      setCrCusIndex(listCus.indexOf(item));
                      setSearchCus(0);
                      setSearchCusName("");
                    }}
                  >
                    {item._name} - {item._addr}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="col-5 val">
          <div className="date-cart">{date}</div>
          <div>
            <div className="dropdown cost-mn">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                B???ng gi?? chung
                <span className="caret"></span>
              </button>
            </div>
          </div>
          <div></div>
        </div>

        <div className="container">
          <div className="form-check container">
            <input
              className="form-check-input"
              type="checkbox"
              value="1"
              id="flexCheckDefault"
              onChange={(e) => {
                if (e.target.checked) {
                  setPR(1);
                }
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Thu???c b??n theo ????n
            </label>
          </div>
        </div>
        <div className="col-7 ifo">
          <div>
            T???ng ti???n h??ng &nbsp; &nbsp;{" "}
            <span className="circle-icon">{itemAmount}</span>
          </div>
          <div>
            Gi???m gi?? &nbsp; &nbsp; &nbsp; &nbsp;
            {saleType === 1 && <span className="sale-percent">({sale}%)</span>}
          </div>
          <div className="ifo-note">Kh??ch c???n tr???</div>
          <div className="ifo-note">
            Kh??ch thanh to??n &nbsp; &nbsp; &nbsp; &nbsp;
            <i className="fa fa-credit-card" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-5 val">
          <div>{Number(total).toLocaleString("en-US")}</div>
          <div>
            {" "}
            <input
              onClick={() => enableSetSale(1)}
              className="sale-field"
              type="text"
              value={
                saleType === 0
                  ? Number(sale).toLocaleString("en-US")
                  : Number((sale * total) / 100).toLocaleString("en-US")
              }
              readOnly
            />
          </div>
          <div className="notice-cost">
            {Number(
              saleType === 0 ? total - sale : total - (sale * total) / 100
            ).toLocaleString("en-US")}
          </div>
          <div>
            {" "}
            <input
              className="underline"
              type="number"
              value={totalPay}
              onChange={(e) => setTotalPay(e.target.value)}
              min="0"
              max={total}
            />
          </div>
        </div>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
          checked="t"
        />
        <label className="form-check-label" for="inlineRadio1">
          Ti???n m???t
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label" for="inlineRadio2">
          Chuy???n kho???n
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="option3"
        />
        <label className="form-check-label" for="inlineRadio3">
          Th???
        </label>
      </div>
      <div id="pay" onClick={() => checkout()}>
        <button className="btn btn-primary btn-lg active">Thanh to??n</button>
      </div>

      <CustomerForm
        setAddNewCusStatus={setAddNewCusStatus}
        addNewCusStatus={addNewCusStatus}
      />

      <Prescription setPR={setPR} PR={PR} />

      <CustomerHistory
        setHistoryActive={setHistoryActive}
        historyActive={historyActive}
      />
    </div>
  );
};

export default Payment;
