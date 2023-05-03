import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import productImg from "./../assets/images/phone-02.jpg";
import { Link } from "react-router-dom";
import "../styles/allproducts.css";
import { ClientService } from "../apis/InitApiService";

const AllProducts = () => {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    getListAll()
  }, [])

  const getListAll = async () => {
    try {
      const res = await ClientService.getProduct();
      console.log("GGGGGGG", res.data._embedded.products);
      if (res.status === 200) {
        setListProducts(res.data._embedded.products);
      }
    } catch (error) {
      throw error;
    }
  }
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
                {listProducts.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={productImg} alt="" />
                    </td>
                    <td>{item.productName}</td>
                    <td>Accessories</td>
                    <td>{item.qtyStock}</td>
                    <td>${item.price}</td>
                    <td>
                      <button className="btn btn-danger mx-1 ">Delete</button>
                      <button className="btn btn-warning mx-1 ">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
