import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import { ClientService } from "../apis/InitApiService";

const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [qtyStock, setQtyStock] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const est = localStorage.getItem("token");

  const addProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      "productName": productName,
      "productCode": "productCode",
      "price": price,
      "description": description,
      "imageUrl": "./images/demo",
      "shortDesc": shortDesc,
      "avgRating": null,
      "isActive": null,
    }
    try {
      const res = await ClientService.addProduct(data);
      toast.success("product successfully added!");
      navigate("/dashboard/all-products");
    } catch (error) {
      toast.error("Product not added");
    }
    setIsLoading(false);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Product</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className="form__group">
                <span>Product title</span>
                <input
                  type="text"
                  placeholder="Type name product"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Short Description</span>
                <input
                  type="text"
                  placeholder="Type short des....."
                  value={shortDesc}
                  onChange={(e) => setShortDesc(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Description</span>
                <input
                  type="text"
                  placeholder="Type description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Stock</span>
                <input
                  type="number"
                  placeholder="Type number of stock"
                  value={qtyStock}
                  onChange={(e) => setQtyStock(e.target.value)}
                />
              </FormGroup>
              <div className="d-flex align-items-center justify-content-between gap-5">
                <FormGroup className="form__group w-50">
                  <span>Price</span>
                  <input
                    type="text"
                    placeholder="Type price of product"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group w-50">
                  <span>Category</span>
                  <select
                    className="form__select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Select category</option>
                    <option value="mobile">Mobile</option>
                    <option value="tablet">Tablet</option>
                    <option value="watch">Watch</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup className="form__group">
                  <span>Product Image</span>
                  <input
                    type="file"
                    onChange={(e) => setImageUrl(e.target.files[0])}
                    required
                  />
                </FormGroup>
              </div>
              <button className="buy__btn1" type="submit">
                Add Product
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
