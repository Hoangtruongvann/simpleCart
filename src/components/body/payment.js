import React, { useState } from "react";

const Payment = ({ cart, setCart, indexSelectedCart, setIndexSelectedCart, listCart, setListCart}) => {
    let today = new Date();
    const [date, setdate] = useState(today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + "      " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
    const [sale, setSale] = useState(0);
    const [totalPay, setTotalPay] = useState(0);
    const itemAmount = cart.length;
    const total = cart.reduce((total, item) => total + item.cost * item.quantity, 0);
    const checkout = () => {
        if(listCart.length >1)
        {
            console.log(listCart);
          setListCart(listCart.filter((item) => item!==listCart[indexSelectedCart]));
          setCart(listCart[0].listItem);
          setIndexSelectedCart(0);
        } else {
        setCart([]);
        setSale(0); 
        setTotalPay(0); 
        alert('Đặt hàng thành công!!!') 
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-7 ifo">
                    <div>
                    <div className="dropdown customer-mn">
                            <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">Trương Văn Hoàng
                                <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </div>
                    </div>
                    <div> <input className="form-control" type="text" placeholder='Tìm khách hàng' /></div>
                    <div></div>
                </div>
                <div className="col-5 val">
                    <div>
                        {date}
                    </div>
                    <div>
                        <div className="dropdown cost-mn">
                            <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">Bảng giá chung
                                <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </div>

                    </div>
                    <div></div>

                </div>

                <div className="container">
                    <div className="form-check container">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Thuốc bán theo đơn
                        </label>
                    </div>
                </div>
                <div className="col-7 ifo">
                    <div>Tổng tiền hàng &nbsp;	&nbsp; <span className="circle-icon">{itemAmount}</span></div>
                    <div>Giảm giá</div>
                    <div className="ifo-note">Khách cần trả</div>
                    <div className="ifo-note">Khách thanh toán 	&nbsp;	&nbsp;	&nbsp;	&nbsp;<i className="fa fa-credit-card" aria-hidden="true"></i></div>
                </div>
                <div className="col-5 val">
                    <div>{total}</div>
                    <div>  <input className="underline" type="number" value={sale} onChange={(e) => { setSale(e.target.value) }} min="0" max={total} /></div>
                    <div className="notice-cost">{total - sale}</div>
                    <div>  <input className="underline" type="number" value={totalPay} onChange={(e) => setTotalPay(e.target.value)} min="0" max={total} /></div>
                </div>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked="t" />
                <label className="form-check-label" for="inlineRadio1">Tiền mặt</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">Chuyển khoản</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                <label className="form-check-label" for="inlineRadio3">Thẻ</label>
            </div>
            <div id="pay" onClick={() => checkout()}>
                <button className="btn btn-primary btn-lg active">Thanh toán</button>
            </div>
        </div>
    )
}

export default Payment;