import React, {useState, useEffect} from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ul/CommonSection";
import {Container, Row, Col} from "reactstrap";
import "../styles/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/Ul/ProductsList";

const Shop = () => {
    const [productsData, setProductsData] = useState(products);

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if (filterValue === "mobile") {
            const filteredProducts = products.filter(
                (item) => item.category === "mobile"
            );

            setProductsData(filteredProducts);
        }

        if (filterValue === "tablet") {
            const filteredProducts = products.filter(
                (item) => item.category === "tablet"
            );

            setProductsData(filteredProducts);
        }

        if (filterValue === "watch") {
            const filteredProducts = products.filter(
                (item) => item.category === "watch"
            );

            setProductsData(filteredProducts);
        }

        if (filterValue === "accessories") {
            const filteredProducts = products.filter(
                (item) => item.category === "accessories"
            );

            setProductsData(filteredProducts);
        }
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value;

        const searchProducts = products.filter((item) =>
            item.productName
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
        );

        setProductsData(searchProducts);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Helmet title={"Shop"}>
            <CommonSection title="Products"/>

            <section>
                <Container>
                    <Row>
                        <Col lg="3" md="6">
                            <div className="filter__widget">
                                <select onChange={handleFilter}>
                                    <option>Filter By Category</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="tablet">Tablet</option>
                                    <option value="watch">Watch</option>
                                    <option value="accessories">Accessories</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="3" md="6" className="text-end">
                            <div className="filter__widget">
                                <select>
                                    <option>Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="6" md="12">
                            <div className="search__box">
                                <input
                                    type="text"
                                    placeholder="Search......"
                                    onChange={handleSearch}
                                />
                                <span>
                  <i class="ri-search-line"></i>
                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    <Row>
                        {productsData.length === 0 ? (
                            <h1 className="text-center fs-4">No products are found!</h1>
                        ) : (
                            <ProductsList data={productsData}/>
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Shop;
