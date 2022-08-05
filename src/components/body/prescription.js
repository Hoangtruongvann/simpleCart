import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Prescription = ({ PR, setPR }) => {
  return (
    <Modal
      show={PR}
      onHide={() => setPR(0)}
      dialogClassName="modal-form"
      contentClassName="modal-form"
    >
      <Modal.Header closeButton>
        <Modal.Title>Thông tin đơn thuốc</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row prescription">
          <div className="col-6 row">
            <div className="col-4">Mã đơn thuốc</div>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Mã mặc định"
              />
            </div>
            <div className="col-4">Bác sĩ kê đơn</div>
            <div className="col-8">
              <div className="dropdown cost-mn">
                <button
                  className="btn dropdown-toggle full-width"
                  type="button"
                  data-toggle="dropdown"
                >
                  Chọn bác sĩ
                </button>
                <p className="add-customer">+</p>
              </div>
            </div>
            <div className="col-4">Cơ sở khám bệnh</div>
            <div className="col-8">
              <div className="dropdown cost-mn">
                <button
                  className="btn dropdown-toggle full-width"
                  type="button"
                  data-toggle="dropdown"
                >
                  Chọn cơ sở khám bệnh
                </button>
                <p className="add-customer">+</p>
              </div>
            </div>
            <div className="col-4">Tên bệnh nhân</div>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập tên bệnh nhân"
              />
            </div>
            <div className="col-4">Tuổi</div>
            <div className="col-3">
              <input
                type="number"
                className="form-control"
                placeholder="Nhập tuổi"
              />
            </div>
            <div className="col-5 row">
              <div className="col-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Nam
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option1"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Nữ
                  </label>
                </div>
              </div>
            </div>

            <div className="col-4">Cân nặng</div>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập cân nặng"
              />
            </div>
          </div>
          <div className="col-6 row">
            <div className="col-4">CMND/Căn cước</div>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập Số CMND/ Căn cước"
              />
            </div>
            <div className="col-4">Thẻ BHYT</div>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập số bảo hiểm y tế"
              />
            </div>
            <div className="col-4">Địa chỉ</div>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Địa chỉ"
              />
            </div>
            <div className="col-4">Người giám hộ</div>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập người giám hộ"
              />
            </div>
            <div className="col-4">Điện thoại liên hệ</div>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="col-4">Chẩn đoán</div>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập chẩn đoán"
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary  btn-cancel" onClick={() => setPR(0)}>
          Bỏ qua
        </Button>
        <Button variant="primary" onClick={() => setPR(0)}>
          Xong
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Prescription;
