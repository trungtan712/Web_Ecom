import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Users = () => {
  const [loading, setIsLoading] = useState(false);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Users</h4>
          </Col>
          <Col lg="12" className="pt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>PhoneNumer</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h5 className="pt-5 fw-bold">Loading .....</h5>
                ) : (
                  <tr>
                    <td>trungtan</td>
                    <td>trungtan@gmail.com</td>
                    <td>sgu Q5</td>
                    <td>603432523</td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Users;
