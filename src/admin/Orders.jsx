import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Orders = () => {
  const navigate = useNavigate();

  const sendToDelivery = () => {
    navigate("/dashboard/delivery");
    toast.success("Send to delivery");
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Orders</h4>
          </Col>
          <Col lg="12" className="pt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>

                  <th>Username</th>
                  <th>TotalQty</th>
                  <th>TotalCost</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>24/4/2023</td>
                  <td>trungtan</td>
                  <td>3px</td>
                  <td>$2499</td>
                  <td>242/54 BHN, P2, Q. Binh Thanh</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={sendToDelivery}
                    >
                      Send to delivery
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Orders;
