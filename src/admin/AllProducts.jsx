import React from "react";
import { Container, Row, Col } from "reactstrap";
import productImg from "./../assets/images/phone-02.jpg";
import { Link } from "react-router-dom";
import "../styles/allproducts.css";

const AllProducts = () => {
  return (
    <section>
      <Container>
        <Row>
          <div className="add-button ml-auto">
            <Link to="/dashboard/add-product">
              <button className="btn btn-primary">Add Product</button>
            </Link>
          </div>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product name</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={productImg} alt="" />
                  </td>
                  <td>Airpod</td>
                  <td>Accessories</td>
                  <td>100</td>
                  <td>$500</td>
                  <td>
                    <button className="btn btn-danger mx-1 ">Delete</button>
                    <button className="btn btn-warning mx-1 ">Edit</button>
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

export default AllProducts;
