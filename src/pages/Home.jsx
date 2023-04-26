import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";

import ProductsList from "../components/Ul/ProductsList";

import Clock from "../components/Ul/Clock";

import counterImg from "../assets/images/counter-timer-img.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestsalesProducts, setBestsalesProducts] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filterdedTrendingProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filterdedBestsalesProducts = products.filter(
      (item) => item.category === "watch"
    );

    const filterdedAccessories = products.filter(
      (item) => item.category === "accessories"
    );

    setTrendingProducts(filterdedTrendingProducts);
    setBestsalesProducts(filterdedBestsalesProducts);
    setAccessories(filterdedAccessories);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>iPhone 14 Pro </h2>
                <p>
                  Meet Dynamic Island, a magical new way to interact with
                  iPhone. A vital new safety feature designed to save lives. An
                  innovative 48MP camera for mind-blowing detail. All powered by
                  the ultimate smartphone chip.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" width="100%" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={trendingProducts} />
            <ProductsList data={bestsalesProducts} />
            <ProductsList data={accessories} />
          </Row>
        </Container>
      </section>

      <section className="time__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">
                  Samsung Galaxy S23 Ultra BMW M Edition
                </h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Accessories</h2>
            </Col>
            <ProductsList data={accessories} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
