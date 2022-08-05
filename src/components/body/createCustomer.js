import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CustomerForm = ({ addNewCusStatus, setAddNewCusStatus }) => {
  return (
    <Modal
      show={addNewCusStatus}
      onHide={() => setAddNewCusStatus(0)}
      dialogClassName="modal-form"
      contentClassName="modal-form"
    >
      <Modal.Header closeButton>
        <div>
          <span className="bolder-title">Thêm khách hàng</span> | chi nhánh tạo:
          Chi nhánh trung tâm
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="row create-cust-form">
          <div className="col-2">
            <img
              src="https://res.cloudinary.com/dlpm1u3li/image/upload/v1659587851/samples/images_ny4oyv.jpg"
              alt="Chưa có hình ảnh"
            />
            <button className="btn btn-primary add-ctm-img-btn">
              Chọn ảnh
            </button>
          </div>
          <div className="col-5">
            <div className="row">
              <div className="col-4">Mã khách hàng</div>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mã khách hàng"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">Tên khách hàng</div>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">Điện thoại</div>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">Địa chỉ</div>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">Khu vực</div>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Chọn Tỉnh/TP - Quận/Huyện"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">Phường/Xã</div>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Chọn Phường/Xã"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">Ngày sinh</div>
              <div className="col-4">
                <input type="date" className="form-control" />
              </div>
              <div className="col-2">
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
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Nữ
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="row">
              <div className="col-4">Loại khách</div>
              <div className="col-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios2"
                    value="option2"
                    checked
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Công ty
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Cá nhân
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">Mã số thuế</div>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">Email</div>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">Facebook</div>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">Nhóm</div>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">Ghi chú</div>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary btn-cancel"
          onClick={() => setAddNewCusStatus(0)}
        >
          Hủy
        </Button>
        <Button variant="primary" onClick={() => setAddNewCusStatus(0)}>
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomerForm;
