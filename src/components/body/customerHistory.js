import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CustomerHistory = ({ setHistoryActive, historyActive }) => {
  const [historyType, setHistoryType] = useState(1);
  return (
    <Modal
      show={historyActive}
      onHide={() => setHistoryActive(0)}
      dialogClassName="modal-form"
      contentClassName="modal-form"
    >
      <Modal.Body>
        <div>
          <div className="history-header container">
            <span className="history-cus-name">
              {" "}
              Anh Hoàng - Sài gòn &#124;
            </span>{" "}
            <span>Chi nhánh tạo: Chi nhánh trung tâm</span>
            <p
              className="close-cus-history"
              onClick={() => {
                setHistoryActive(0);
              }}
            >
              x
            </p>
          </div>
          <div className="history-final-total container">
            <span className="gray-bold">Nợ: </span>{" "}
            <span className="blue">0</span>
            &nbsp;&nbsp;&#124;&nbsp;&nbsp;
            <span className="gray-bold">Tổng bán trừ trả hàng: </span>{" "}
            <span>8,210,000</span>
          </div>
          <div className="row container history-tab">
            <div
              className={
                historyType === 0 ? "col-2 history-tab-active" : "col-2"
              }
              onClick={() => setHistoryType(0)}
            >
              Thông tin
            </div>
            <div
              className={
                historyType === 1 ? "col-3 history-tab-active" : "col-3"
              }
              onClick={() => setHistoryType(1)}
            >
              Lịch sử bán/trả hàng
            </div>
            <div
              className={
                historyType === 2 ? "col-2 history-tab-active" : "col-2"
              }
              onClick={() => setHistoryType(2)}
            >
              Dư nợ
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row history-tb-th">
              <div className="col-2">Mã hóa đơn</div>
              <div className="col-3">Thời gian</div>
              <div className="col-3">Người bán</div>
              <div className="col-2">Tổng cộng</div>
              <div className="col-2">Trạng thái</div>
            </div>
          </div>
          <div className="container history-tb">
            <div className="row">
              <div className="col-2 id-invoice">HD00002</div>
              <div className="col-3">22/07/2022 09:03</div>
              <div className="col-3">Hương - Kế Toán</div>
              <div className="col-2 total-invoice">18,900,000</div>
              <div className="col-2">Hoàn thành</div>
            </div>
            <div className="row">
              <div className="col-2 id-invoice">HD00002</div>
              <div className="col-3">22/07/2022 09:03</div>
              <div className="col-3">Hương - Kế Toán</div>
              <div className="col-2 total-invoice">18,900,000</div>
              <div className="col-2">Hoàn thành</div>
            </div>
            <div className="row">
              <div className="col-2 id-invoice">HD00002</div>
              <div className="col-3">22/07/2022 09:03</div>
              <div className="col-3">Hương - Kế Toán</div>
              <div className="col-2 total-invoice">18,900,000</div>
              <div className="col-2">Hoàn thành</div>
            </div>
            <div className="row">
              <div className="col-2 id-invoice">HD00002</div>
              <div className="col-3">22/07/2022 09:03</div>
              <div className="col-3">Hương - Kế Toán</div>
              <div className="col-2 total-invoice">18,900,000</div>
              <div className="col-2">Hoàn thành</div>
            </div>
            <div className="row">
              <div className="col-2 id-invoice">HD00002</div>
              <div className="col-3">22/07/2022 09:03</div>
              <div className="col-3">Hương - Kế Toán</div>
              <div className="col-2 total-invoice">18,900,000</div>
              <div className="col-2">Hoàn thành</div>
            </div>
            <div className="row">
              <div className="col-2 id-invoice">HD00002</div>
              <div className="col-3">22/07/2022 09:03</div>
              <div className="col-3">Hương - Kế Toán</div>
              <div className="col-2 total-invoice">18,900,000</div>
              <div className="col-2">Hoàn thành</div>
            </div>
            <div className="row">
              <div className="col-2 id-invoice">HD00002</div>
              <div className="col-3">22/07/2022 09:03</div>
              <div className="col-3">Hương - Kế Toán</div>
              <div className="col-2 total-invoice">18,900,000</div>
              <div className="col-2">Hoàn thành</div>
            </div>
            <div className="row">
              <div className="col-2 id-invoice">HD00002</div>
              <div className="col-3">22/07/2022 09:03</div>
              <div className="col-3">Hương - Kế Toán</div>
              <div className="col-2 total-invoice">18,900,000</div>
              <div className="col-2">Hoàn thành</div>
            </div>
            <div className="row">
              <div className="col-2 id-invoice">HD00002</div>
              <div className="col-3">22/07/2022 09:03</div>
              <div className="col-3">Hương - Kế Toán</div>
              <div className="col-2 total-invoice">18,900,000</div>
              <div className="col-2">Hoàn thành</div>
            </div>
            <div className="row">
              <div className="col-2 id-invoice">HD00002</div>
              <div className="col-3">22/07/2022 09:03</div>
              <div className="col-3">Hương - Kế Toán</div>
              <div className="col-2 total-invoice">18,900,000</div>
              <div className="col-2">Hoàn thành</div>
            </div>
            <div className="row">
              <div className="col-2 id-invoice">HD00002</div>
              <div className="col-3">22/07/2022 09:03</div>
              <div className="col-3">Hương - Kế Toán</div>
              <div className="col-2 total-invoice">18,900,000</div>
              <div className="col-2">Hoàn thành</div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary btn-cancel"
          onClick={() => setHistoryActive(0)}
        >
          Bỏ qua
        </Button>
        <Button variant="primary" onClick={() => setHistoryActive(0)}>
          Xong
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomerHistory;
